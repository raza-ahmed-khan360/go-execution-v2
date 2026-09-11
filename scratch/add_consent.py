import re

def insert_consent(filepath, search_str):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    consent_html = '\n      <p className="ge-form__consent" style={{ fontSize: "0.75rem", color: "var(--color-navy-light)", marginTop: "0.5rem", marginBottom: "1rem", lineHeight: "1.4" }}>By submitting, you agree to receive SMS reminders/updates from GO EXECUTION LLC. Message &amp; data rates may apply. Reply STOP to unsubscribe.</p>'
    
    # We replace before the button
    content = content.replace(search_str, consent_html + '\n      ' + search_str)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)


insert_consent('components/contact-form.tsx', '<button className="ge-button')
insert_consent('components/logo-questionnaire-form.tsx', '<button type="submit" className="ge-button')
insert_consent('components/website-questionnaire-form.tsx', '<button type="submit" className="ge-button')

print("Forms updated")
