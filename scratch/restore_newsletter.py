import re

with open('components/site-shell.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to replace handleNewsletterSubmit and the render block.
old_handler = '''  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setNewsletterStatus("invalid");
      form.reportValidity();
      return;
    }
    setNewsletterStatus("ready");
    form.reset();
  };'''

new_handler = '''  const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setNewsletterStatus("invalid");
      form.reportValidity();
      return;
    }
    
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    
    setNewsletterStatus("ready"); // Can use 'ready' to show a loading state if we want, but let's just make it simple
    
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setNewsletterStatus("success" as any);
        form.reset();
      } else {
        setNewsletterStatus("error" as any);
      }
    } catch {
      setNewsletterStatus("error" as any);
    }
  };'''

if 'handleNewsletterSubmit' not in content:
    print("handleNewsletterSubmit not found")
else:
    content = content.replace(old_handler, new_handler)

# The HTML block to insert before {/* --- INTERACTIVE FOOTER NAV BAR WITH DROPDOWNS --- */}
newsletter_html = '''          <div className="ge-footer__newsletter">
            <p className="ge-footer__newsletter-title">Join Our Newsletter</p>
            <p className="ge-footer__newsletter-copy">Sign up for our newsletter to enjoy free marketing tips, inspirations, and more.</p>
            <form className="ge-footer__newsletter-form" onSubmit={handleNewsletterSubmit} noValidate>
              <label className="screen-reader-text" htmlFor="footer-email">Email address</label>
              <input id="footer-email" name="email" type="email" autoComplete="email" placeholder="Email Address" required aria-describedby={newsletterStatus === "idle" ? undefined : "footer-newsletter-status"} />
              <button type="submit">Sign Up</button>
            </form>
            <p id="footer-newsletter-status" className={ge-footer__newsletter-status} aria-live="polite">
              {newsletterStatus === "invalid" && "Please enter a valid email address."}
              {newsletterStatus === "ready" && "Sending..."}
              {newsletterStatus === "success" && "Thank you for subscribing!"}
              {newsletterStatus === "error" && "Something went wrong. Please try again."}
            </p>
          </div>
        </div>

        {/* --- INTERACTIVE FOOTER NAV BAR WITH DROPDOWNS --- */}'''

content = content.replace('        </div>\n\n        {/* --- INTERACTIVE FOOTER NAV BAR WITH DROPDOWNS --- */}', newsletter_html)

with open('components/site-shell.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
    print("Success")
