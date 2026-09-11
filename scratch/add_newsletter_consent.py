import re

with open('components/site-shell.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

consent_html = '\n              <p style={{ fontSize: "0.65rem", color: "var(--color-navy-light)", marginTop: "0.5rem", lineHeight: "1.2" }}>By submitting, you agree to receive SMS reminders/updates from GO EXECUTION LLC. Message &amp; data rates may apply. Reply STOP to unsubscribe.</p>'

content = content.replace('<button type="submit">Sign Up</button>', '<button type="submit">Sign Up</button>' + consent_html)

with open('components/site-shell.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
