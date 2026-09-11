import re

with open('components/site-shell.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to find the form block
form_pattern = r'(<form className="ge-footer__newsletter-form"[^>]*>.*?</button>)\s*<p style={{ fontSize: "0.65rem".*?</p>\s*</form>'

def replacer(match):
    form_start_to_button = match.group(1)
    new_form = form_start_to_button + '\n              </form>\n              <p style={{ fontSize: "0.65rem", color: "var(--color-navy-light)", marginTop: "0.75rem", lineHeight: "1.3", maxWidth: "400px" }}>By submitting, you agree to receive SMS reminders/updates from GO EXECUTION LLC. Message &amp; data rates may apply. Reply STOP to unsubscribe.</p>'
    return new_form

new_content = re.sub(form_pattern, replacer, content, flags=re.DOTALL)

with open('components/site-shell.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Replaced:", content != new_content)
