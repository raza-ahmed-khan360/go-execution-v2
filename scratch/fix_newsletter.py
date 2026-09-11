import re

with open('components/site-shell.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

old_form = '''              <form className="ge-footer__newsletter-form" onSubmit={handleNewsletterSubmit} noValidate>
                <label className="screen-reader-text" htmlFor="footer-email">Email address</label>
                <input id="footer-email" name="email" type="email" autoComplete="email" placeholder="Email Address" required aria-describedby={newsletterStatus === "idle" ? undefined : "footer-newsletter-status"} />
                <button type="submit">Sign Up</button>
                <p style={{ fontSize: "0.65rem", color: "var(--color-navy-light)", marginTop: "0.5rem", lineHeight: "1.2" }}>By submitting, you agree to receive SMS reminders/updates from GO EXECUTION LLC. Message &amp; data rates may apply. Reply STOP to unsubscribe.</p>
              </form>'''

new_form = '''              <form className="ge-footer__newsletter-form" onSubmit={handleNewsletterSubmit} noValidate>
                <label className="screen-reader-text" htmlFor="footer-email">Email address</label>
                <input id="footer-email" name="email" type="email" autoComplete="email" placeholder="Email Address" required aria-describedby={newsletterStatus === "idle" ? undefined : "footer-newsletter-status"} />
                <button type="submit">Sign Up</button>
              </form>
              <p style={{ fontSize: "0.65rem", color: "var(--color-navy-light)", marginTop: "0.75rem", lineHeight: "1.3", maxWidth: "400px" }}>By submitting, you agree to receive SMS reminders/updates from GO EXECUTION LLC. Message &amp; data rates may apply. Reply STOP to unsubscribe.</p>'''

content = content.replace(old_form, new_form)

with open('components/site-shell.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Newsletter form fixed")
