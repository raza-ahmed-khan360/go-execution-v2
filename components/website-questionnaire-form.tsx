"use client";

import { useState } from "react";

const mainGoalsList = [
  "Generate Leads",
  "Sell Products",
  "Build Brand Awareness",
  "Provide Information",
];

const pagesList = [
  "Home",
  "About",
  "Services/Products",
  "Contact",
  "Blog",
];

const stylesList = [
  "Modern",
  "Minimal",
  "Professional",
  "Luxury/Premium",
  "Bold/Creative",
];

const assetsList = [
  "Logo",
  "Images",
  "Text/Content",
  "Videos",
  "None yet",
];

export function WebsiteQuestionnaireForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Form State
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");

  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [otherGoal, setOtherGoal] = useState("");

  const [selectedPages, setSelectedPages] = useState<string[]>([]);
  const [otherPage, setOtherPage] = useState("");

  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [otherStyle, setOtherStyle] = useState("");

  const [preferredColors, setPreferredColors] = useState("");
  const [inspirationLinks, setInspirationLinks] = useState("");

  const [selectedAssets, setSelectedAssets] = useState<string[]>([]);
  const [specificFeatures, setSpecificFeatures] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [targetLaunchDate, setTargetLaunchDate] = useState("");

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
      if (!companyName.trim()) {
        setErrorMessage("Please enter your business/company name.");
        return false;
      }
      if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setErrorMessage("Please enter a valid email address.");
        return false;
      }
      if (!phone.trim()) {
        setErrorMessage("Please enter your phone number.");
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

    const goalsSummary = [...selectedGoals, otherGoal ? `Other: ${otherGoal}` : ""].filter(Boolean).join(", ");
    const pagesSummary = [...selectedPages, otherPage ? `Other: ${otherPage}` : ""].filter(Boolean).join(", ");
    const stylesSummary = [...selectedStyles, otherStyle ? `Other: ${otherStyle}` : ""].filter(Boolean).join(", ");
    const assetsSummary = selectedAssets.join(", ");

    const formattedMessage = `
--- WEBSITE PROJECT BRIEF / QUESTIONNAIRE ---
1. Full Name: ${fullName}
2. Business/Company Name: ${companyName}
3. Email & Phone: ${email} | ${phone}
4. What does your business do?: ${businessDescription || "N/A"}

5. Main Goal of Website: ${goalsSummary || "N/A"}
6. Pages Needed: ${pagesSummary || "N/A"}
7. Preferred Style: ${stylesSummary || "N/A"}
8. Preferred Colors/Branding: ${preferredColors || "N/A"}

9. Websites Liked (Links): ${inspirationLinks || "N/A"}
10. Content/Assets Available: ${assetsSummary || "N/A"}

11. Specific Features Needed: ${specificFeatures || "N/A"}
12. Additional Notes: ${additionalNotes || "N/A"}
13. Target Launch Date: ${targetLaunchDate || "N/A"}
    `.trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email,
          phone,
          service: "Website Project Brief",
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
        <h2>Project Brief Submitted Successfully!</h2>
        <p>
          Thank you, <strong>{fullName}</strong>. We have received your website questionnaire for <strong>{companyName}</strong>. Our lead web engineering team will review your requirements and get back to you within 24 hours.
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
          { num: 1, label: "Contact & Company" },
          { num: 2, label: "Goals & Style" },
          { num: 3, label: "Assets & Links" },
          { num: 4, label: "Features & Launch" },
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

        {/* STEP 1: Contact & Business Info */}
        {step === 1 && (
          <div className="ge-questionnaire-step">
            <div className="ge-step-header">
              <span className="ge-eyebrow ge-eyebrow--gold">Step 01 of 04</span>
              <h2>Contact & Business Information</h2>
              <p>Tell us about yourself and your business background.</p>
            </div>

            <div className="ge-form-grid ge-grid--2col">
              <div className="ge-form-group">
                <label htmlFor="fullName">1. Full Name *</label>
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
                <label htmlFor="companyName">2. Business / Company Name *</label>
                <input
                  id="companyName"
                  type="text"
                  required
                  placeholder="e.g. Go Execution LLC"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div className="ge-form-group">
                <label htmlFor="email">3a. Email Address *</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="ge-form-group">
                <label htmlFor="phone">3b. Phone Number *</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="ge-form-group" style={{ marginTop: 20 }}>
              <label htmlFor="businessDescription">4. What does your business do?</label>
              <textarea
                id="businessDescription"
                rows={4}
                placeholder="Briefly describe your products, services, target market, or unique value proposition..."
                value={businessDescription}
                onChange={(e) => setBusinessDescription(e.target.value)}
              />
            </div>

            <div className="ge-step-actions">
              <button type="button" className="ge-button ge-button--gold" onClick={nextStep}>
                <span>Next: Goals & Style →</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Goals, Pages & Style */}
        {step === 2 && (
          <div className="ge-questionnaire-step">
            <div className="ge-step-header">
              <span className="ge-eyebrow ge-eyebrow--gold">Step 02 of 04</span>
              <h2>Website Goals, Structure & Aesthetics</h2>
              <p>Select what you need for your new website platform.</p>
            </div>

            {/* Q5: Main Goal */}
            <div className="ge-question-block">
              <label className="ge-question-label">5. What is the main goal of the website?</label>
              <div className="ge-option-cards-grid">
                {mainGoalsList.map((goal) => {
                  const isSelected = selectedGoals.includes(goal);
                  return (
                    <button
                      key={goal}
                      type="button"
                      className={`ge-option-card ${isSelected ? "selected" : ""}`}
                      onClick={() => toggleArrayItem(selectedGoals, setSelectedGoals, goal)}
                    >
                      <span className="ge-checkbox-box">{isSelected ? "✓" : ""}</span>
                      <span>{goal}</span>
                    </button>
                  );
                })}
              </div>
              <div className="ge-form-group" style={{ marginTop: 12 }}>
                <input
                  type="text"
                  placeholder="Other goal (optional)..."
                  value={otherGoal}
                  onChange={(e) => setOtherGoal(e.target.value)}
                />
              </div>
            </div>

            {/* Q6: Pages Needed */}
            <div className="ge-question-block" style={{ marginTop: 28 }}>
              <label className="ge-question-label">6. What pages do you need?</label>
              <div className="ge-option-cards-grid">
                {pagesList.map((pageItem) => {
                  const isSelected = selectedPages.includes(pageItem);
                  return (
                    <button
                      key={pageItem}
                      type="button"
                      className={`ge-option-card ${isSelected ? "selected" : ""}`}
                      onClick={() => toggleArrayItem(selectedPages, setSelectedPages, pageItem)}
                    >
                      <span className="ge-checkbox-box">{isSelected ? "✓" : ""}</span>
                      <span>{pageItem}</span>
                    </button>
                  );
                })}
              </div>
              <div className="ge-form-group" style={{ marginTop: 12 }}>
                <input
                  type="text"
                  placeholder="Other required pages (e.g. Portfolio, Pricing, Case Studies)..."
                  value={otherPage}
                  onChange={(e) => setOtherPage(e.target.value)}
                />
              </div>
            </div>

            {/* Q7: Style Preference */}
            <div className="ge-question-block" style={{ marginTop: 28 }}>
              <label className="ge-question-label">7. What style do you prefer?</label>
              <div className="ge-option-cards-grid">
                {stylesList.map((styleItem) => {
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
                  placeholder="Other design style preference..."
                  value={otherStyle}
                  onChange={(e) => setOtherStyle(e.target.value)}
                />
              </div>
            </div>

            {/* Q8: Preferred Colors / Branding */}
            <div className="ge-form-group" style={{ marginTop: 28 }}>
              <label htmlFor="preferredColors">8. Do you have preferred colors/branding?</label>
              <input
                id="preferredColors"
                type="text"
                placeholder="e.g. Dark Navy & Gold (#0d1b2a, #c9a86a), Blue & White, or existing brand guidelines..."
                value={preferredColors}
                onChange={(e) => setPreferredColors(e.target.value)}
              />
            </div>

            <div className="ge-step-actions">
              <button type="button" className="ge-button ge-button--outline" onClick={prevStep}>
                <span>← Back</span>
              </button>
              <button type="button" className="ge-button ge-button--gold" onClick={nextStep}>
                <span>Next: Assets & Links →</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Inspiration & Content Assets */}
        {step === 3 && (
          <div className="ge-questionnaire-step">
            <div className="ge-step-header">
              <span className="ge-eyebrow ge-eyebrow--gold">Step 03 of 04</span>
              <h2>Design Inspiration & Available Assets</h2>
              <p>Share website examples you admire and existing brand assets.</p>
            </div>

            {/* Q9: Websites You Like */}
            <div className="ge-form-group">
              <label htmlFor="inspirationLinks">9. Do you have websites you like? (Please share 2–3 links)</label>
              <textarea
                id="inspirationLinks"
                rows={3}
                placeholder="Paste links to 2-3 websites you love and briefly note what you like about them..."
                value={inspirationLinks}
                onChange={(e) => setInspirationLinks(e.target.value)}
              />
            </div>

            {/* Q10: Content / Assets Available */}
            <div className="ge-question-block" style={{ marginTop: 28 }}>
              <label className="ge-question-label">10. What content/assets do you have?</label>
              <div className="ge-option-cards-grid">
                {assetsList.map((asset) => {
                  const isSelected = selectedAssets.includes(asset);
                  return (
                    <button
                      key={asset}
                      type="button"
                      className={`ge-option-card ${isSelected ? "selected" : ""}`}
                      onClick={() => toggleArrayItem(selectedAssets, setSelectedAssets, asset)}
                    >
                      <span className="ge-checkbox-box">{isSelected ? "✓" : ""}</span>
                      <span>{asset}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="ge-step-actions">
              <button type="button" className="ge-button ge-button--outline" onClick={prevStep}>
                <span>← Back</span>
              </button>
              <button type="button" className="ge-button ge-button--gold" onClick={nextStep}>
                <span>Next: Features & Launch →</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Features, Additional Notes & Launch */}
        {step === 4 && (
          <div className="ge-questionnaire-step">
            <div className="ge-step-header">
              <span className="ge-eyebrow ge-eyebrow--gold">Step 04 of 04</span>
              <h2>Specific Features & Target Launch Date</h2>
              <p>Finalize technical specifications and timing.</p>
            </div>

            {/* Q11: Specific Features */}
            <div className="ge-form-group">
              <label htmlFor="specificFeatures">
                11. Are there any specific features you need? (e.g. booking, payment, forms, e-commerce, membership, etc.)
              </label>
              <textarea
                id="specificFeatures"
                rows={3}
                placeholder="Describe any custom integrations, MLS/IDX, payment gateways, booking calendars, CRM sync, etc..."
                value={specificFeatures}
                onChange={(e) => setSpecificFeatures(e.target.value)}
              />
            </div>

            {/* Q12: Anything Else */}
            <div className="ge-form-group" style={{ marginTop: 20 }}>
              <label htmlFor="additionalNotes">12. Anything else you'd like us to know?</label>
              <textarea
                id="additionalNotes"
                rows={3}
                placeholder="Any special requests, competitor notes, or additional context for our team..."
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
              />
            </div>

            {/* Q13: Target Launch Date */}
            <div className="ge-form-group" style={{ marginTop: 20 }}>
              <label htmlFor="targetLaunchDate">13. Target launch date:</label>
              <input
                id="targetLaunchDate"
                type="text"
                placeholder="e.g. Within 4 weeks, End of Q3, ASAP, or Specific Date (e.g. Oct 15)..."
                value={targetLaunchDate}
                onChange={(e) => setTargetLaunchDate(e.target.value)}
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
                <span>{isSubmitting ? "Submitting Brief..." : "Submit Project Brief ↗"}</span>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
