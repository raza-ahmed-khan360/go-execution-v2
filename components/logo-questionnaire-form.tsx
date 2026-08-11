"use client";

import { useState } from "react";

const logoStylesList = [
  "Modern",
  "Minimal",
  "Professional",
  "Luxury",
  "Bold",
  "Creative",
  "Classic",
];

const usagePlacementsList = [
  "Website",
  "Social Media",
  "Business Cards",
  "Signage",
  "Packaging",
  "Merchandise",
];

export function LogoQuestionnaireForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Contact Info
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Brief Fields
  const [logoName, setLogoName] = useState("");
  const [tagline, setTagline] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  const [targetAudience, setTargetAudience] = useState("");

  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [otherStyle, setOtherStyle] = useState("");

  const [preferredColors, setPreferredColors] = useState("");
  const [avoidColors, setAvoidColors] = useState("");
  const [symbolsIcons, setSymbolsIcons] = useState("");
  const [likedLogos, setLikedLogos] = useState("");

  const [selectedUsages, setSelectedUsages] = useState<string[]>([]);
  const [otherUsage, setOtherUsage] = useState("");

  const [brandCommunication, setBrandCommunication] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const toggleArrayItem = (list: string[], setList: (val: string[]) => void, item: string) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const validateStep = (currentStep: number) => {
    setErrorMessage("");
    if (currentStep === 1) {
      if (!fullName.trim()) {
        setErrorMessage("Please enter your full name.");
        return false;
      }
      if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setErrorMessage("Please enter a valid email address.");
        return false;
      }
      if (!logoName.trim()) {
        setErrorMessage("Please enter the exact name to appear on the logo.");
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setErrorMessage("");
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(1)) return;

    setIsSubmitting(true);
    setErrorMessage("");

    const stylesSummary = [...selectedStyles, otherStyle ? `Other: ${otherStyle}` : ""].filter(Boolean).join(", ");
    const usageSummary = [...selectedUsages, otherUsage ? `Other: ${otherUsage}` : ""].filter(Boolean).join(", ");

    const formattedMessage = `
--- LOGO DESIGN BRIEF / QUESTIONNAIRE ---
Submitter Name: ${fullName}
Email: ${email}
Phone: ${phone || "N/A"}

1. Name to appear on logo: ${logoName}
2. Tagline (if any): ${tagline || "None"}
3. What does your business do?: ${businessDescription || "N/A"}
4. Who is your target audience?: ${targetAudience || "N/A"}

5. Preferred Style: ${stylesSummary || "N/A"}
6. Preferred Colors: ${preferredColors || "N/A"}
7. Colors to Avoid: ${avoidColors || "N/A"}

8. Symbols/Icons Included: ${symbolsIcons || "N/A"}
9. Logos Liked (Examples/Links): ${likedLogos || "N/A"}
10. Where will logo be used?: ${usageSummary || "N/A"}

11. What logo should communicate: ${brandCommunication || "N/A"}
12. Additional Notes or Ideas: ${additionalNotes || "N/A"}
    `.trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email,
          phone: phone || "Not provided",
          service: "Logo Design Brief",
          message: formattedMessage,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || "Something went wrong. Please try submitting again.");
      }
    } catch {
      setErrorMessage("Network error. Please try submitting again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="ge-questionnaire-success">
        <div className="ge-success-icon">✓</div>
        <h2>Logo Brief Submitted Successfully!</h2>
        <p>
          Thank you, <strong>{fullName}</strong>. We have received your logo design brief for <strong>{logoName}</strong>. Our brand identity team will review your preferences and contact you within 24 hours.
        </p>
        <button
          type="button"
          className="ge-button ge-button--gold"
          onClick={() => {
            setSubmitted(false);
            setStep(1);
          }}
        >
          <span>Submit Another Brief</span>
        </button>
      </div>
    );
  }

  return (
    <div className="ge-questionnaire-form-wrap">
      {/* Progress Steps Header */}
      <div className="ge-questionnaire-progress">
        {[
          { num: 1, label: "Brand Name & Business" },
          { num: 2, label: "Aesthetic & Colors" },
          { num: 3, label: "Inspiration & Usage" },
          { num: 4, label: "Brand Values & Submit" },
        ].map((s) => (
          <button
            key={s.num}
            type="button"
            className={`ge-progress-step ${step === s.num ? "active" : ""} ${step > s.num ? "completed" : ""}`}
            onClick={() => {
              if (s.num < step || validateStep(step)) setStep(s.num);
            }}
          >
            <span className="ge-step-num">{step > s.num ? "✓" : `0${s.num}`}</span>
            <span className="ge-step-label">{s.label}</span>
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="ge-questionnaire-form">
        {errorMessage && (
          <div className="ge-form-error-alert" role="alert">
            <span>⚠️ {errorMessage}</span>
          </div>
        )}

        {/* STEP 1: Brand Name & Business */}
        {step === 1 && (
          <div className="ge-questionnaire-step">
            <div className="ge-step-header">
              <span className="ge-eyebrow ge-eyebrow--gold">Step 01 of 04</span>
              <h2>Brand Name & Business Overview</h2>
              <p>Tell us the exact text to appear on your logo and your business background.</p>
            </div>

            <div className="ge-form-grid ge-grid--2col">
              <div className="ge-form-group">
                <label htmlFor="fullName">Your Full Name *</label>
                <input
                  id="fullName"
                  type="text"
                  required
                  placeholder="e.g. Justin Smith"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="ge-form-group">
                <label htmlFor="email">Your Email Address *</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="ge-form-grid ge-grid--2col" style={{ marginTop: 16 }}>
              <div className="ge-form-group">
                <label htmlFor="logoName">1. Name to appear on the logo *</label>
                <input
                  id="logoName"
                  type="text"
                  required
                  placeholder="e.g. Go Execution, Apex Realty, Lumina"
                  value={logoName}
                  onChange={(e) => setLogoName(e.target.value)}
                />
              </div>

              <div className="ge-form-group">
                <label htmlFor="tagline">2. Tagline (if any)</label>
                <input
                  id="tagline"
                  type="text"
                  placeholder="e.g. Where Strategy Meets Execution"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                />
              </div>
            </div>

            <div className="ge-form-group" style={{ marginTop: 20 }}>
              <label htmlFor="phone">Phone Number (optional)</label>
              <input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="ge-form-group" style={{ marginTop: 20 }}>
              <label htmlFor="businessDescription">3. What does your business do?</label>
              <textarea
                id="businessDescription"
                rows={3}
                placeholder="Describe your products, services, industry, or unique market positioning..."
                value={businessDescription}
                onChange={(e) => setBusinessDescription(e.target.value)}
              />
            </div>

            <div className="ge-form-group" style={{ marginTop: 20 }}>
              <label htmlFor="targetAudience">4. Who is your target audience?</label>
              <textarea
                id="targetAudience"
                rows={3}
                placeholder="Describe your ideal clients (e.g. High-net-worth homeowners, B2B SaaS founders, Gen-Z fashion shoppers)..."
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
              />
            </div>

            <div className="ge-step-actions">
              <button type="button" className="ge-button ge-button--gold" onClick={nextStep}>
                <span>Next: Aesthetic & Colors →</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Aesthetic Style & Color Palette */}
        {step === 2 && (
          <div className="ge-questionnaire-step">
            <div className="ge-step-header">
              <span className="ge-eyebrow ge-eyebrow--gold">Step 02 of 04</span>
              <h2>Visual Style & Color Preferences</h2>
              <p>Choose the aesthetic direction and colors for your brand identity.</p>
            </div>

            {/* Q5: Style Preference */}
            <div className="ge-question-block">
              <label className="ge-question-label">5. What style do you prefer?</label>
              <div className="ge-option-cards-grid">
                {logoStylesList.map((styleItem) => {
                  const isSelected = selectedStyles.includes(styleItem);
                  return (
                    <button
                      key={styleItem}
                      type="button"
                      className={`ge-option-card ${isSelected ? "selected" : ""}`}
                      onClick={() => toggleArrayItem(selectedStyles, setSelectedStyles, styleItem)}
                    >
                      <span className="ge-checkbox-box">{isSelected ? "✓" : ""}</span>
                      <span>{styleItem}</span>
                    </button>
                  );
                })}
              </div>
              <div className="ge-form-group" style={{ marginTop: 12 }}>
                <input
                  type="text"
                  placeholder="Other style preference (optional)..."
                  value={otherStyle}
                  onChange={(e) => setOtherStyle(e.target.value)}
                />
              </div>
            </div>

            {/* Q6: Preferred Colors */}
            <div className="ge-form-group" style={{ marginTop: 28 }}>
              <label htmlFor="preferredColors">6. Preferred colors:</label>
              <input
                id="preferredColors"
                type="text"
                placeholder="e.g. Matte Gold & Dark Navy (#c9a86a, #0d1b2a), Emerald Green, Monochrome Black/White..."
                value={preferredColors}
                onChange={(e) => setPreferredColors(e.target.value)}
              />
            </div>

            {/* Q7: Colors to Avoid */}
            <div className="ge-form-group" style={{ marginTop: 20 }}>
              <label htmlFor="avoidColors">7. Any colors you want us to avoid?</label>
              <input
                id="avoidColors"
                type="text"
                placeholder="e.g. Neon Yellow, Bright Pink, Purple..."
                value={avoidColors}
                onChange={(e) => setAvoidColors(e.target.value)}
              />
            </div>

            <div className="ge-step-actions">
              <button type="button" className="ge-button ge-button--outline" onClick={prevStep}>
                <span>← Back</span>
              </button>
              <button type="button" className="ge-button ge-button--gold" onClick={nextStep}>
                <span>Next: Inspiration & Usage →</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Symbols, Inspiration & Usage */}
        {step === 3 && (
          <div className="ge-questionnaire-step">
            <div className="ge-step-header">
              <span className="ge-eyebrow ge-eyebrow--gold">Step 03 of 04</span>
              <h2>Symbols, Examples & Logo Placements</h2>
              <p>Specify imagery ideas, logo benchmarks, and where the logo will be used.</p>
            </div>

            {/* Q8: Symbols / Icons */}
            <div className="ge-form-group">
              <label htmlFor="symbolsIcons">8. Do you have any symbols/icons you'd like included?</label>
              <textarea
                id="symbolsIcons"
                rows={3}
                placeholder="e.g. Monogram crest, geometric abstract mark, shield, falcon, rising arrow, minimalist initial lettermark..."
                value={symbolsIcons}
                onChange={(e) => setSymbolsIcons(e.target.value)}
              />
            </div>

            {/* Q9: Logos Liked */}
            <div className="ge-form-group" style={{ marginTop: 20 }}>
              <label htmlFor="likedLogos">9. Are there any logos you like? (Please share 2–3 examples or links)</label>
              <textarea
                id="likedLogos"
                rows={3}
                placeholder="Share links or names of logos you admire and explain what appeals to you (e.g. Apple, Nike, Rolex, Tesla)..."
                value={likedLogos}
                onChange={(e) => setLikedLogos(e.target.value)}
              />
            </div>

            {/* Q10: Where Will Logo Be Used */}
            <div className="ge-question-block" style={{ marginTop: 28 }}>
              <label className="ge-question-label">10. Where will the logo be used?</label>
              <div className="ge-option-cards-grid">
                {usagePlacementsList.map((usageItem) => {
                  const isSelected = selectedUsages.includes(usageItem);
                  return (
                    <button
                      key={usageItem}
                      type="button"
                      className={`ge-option-card ${isSelected ? "selected" : ""}`}
                      onClick={() => toggleArrayItem(selectedUsages, setSelectedUsages, usageItem)}
                    >
                      <span className="ge-checkbox-box">{isSelected ? "✓" : ""}</span>
                      <span>{usageItem}</span>
                    </button>
                  );
                })}
              </div>
              <div className="ge-form-group" style={{ marginTop: 12 }}>
                <input
                  type="text"
                  placeholder="Other usage placements (e.g. Uniforms, Vehicles, App Icon)..."
                  value={otherUsage}
                  onChange={(e) => setOtherUsage(e.target.value)}
                />
              </div>
            </div>

            <div className="ge-step-actions">
              <button type="button" className="ge-button ge-button--outline" onClick={prevStep}>
                <span>← Back</span>
              </button>
              <button type="button" className="ge-button ge-button--gold" onClick={nextStep}>
                <span>Next: Brand Communication →</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Brand Values, Notes & Submit */}
        {step === 4 && (
          <div className="ge-questionnaire-step">
            <div className="ge-step-header">
              <span className="ge-eyebrow ge-eyebrow--gold">Step 04 of 04</span>
              <h2>Brand Values & Additional Notes</h2>
              <p>Finalize what feeling your logo should evoke.</p>
            </div>

            {/* Q11: What Should Logo Communicate */}
            <div className="ge-form-group">
              <label htmlFor="brandCommunication">
                11. Anything specific you'd like the logo to communicate?
              </label>
              <textarea
                id="brandCommunication"
                rows={3}
                placeholder="e.g. Trust, innovation, prestige, speed, authority, sustainability, warmth..."
                value={brandCommunication}
                onChange={(e) => setBrandCommunication(e.target.value)}
              />
            </div>

            {/* Q12: Additional Notes or Ideas */}
            <div className="ge-form-group" style={{ marginTop: 20 }}>
              <label htmlFor="additionalNotes">12. Additional notes or ideas:</label>
              <textarea
                id="additionalNotes"
                rows={4}
                placeholder="Share any special instructions, competitor benchmarks, or creative ideas..."
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
              />
            </div>

            <div className="ge-step-actions">
              <button type="button" className="ge-button ge-button--outline" onClick={prevStep}>
                <span>← Back</span>
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="ge-button ge-button--gold ge-submit-brief-btn"
              >
                <span>{isSubmitting ? "Submitting Brief..." : "Submit Logo Brief ↗"}</span>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
