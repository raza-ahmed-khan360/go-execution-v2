import re

def insert_sms_policy(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    sms_section = '''
              <h2>SMS Communications &amp; Consent</h2>
              <p>By submitting your phone number through any of our contact forms, questionnaires, or newsletter signups, you agree to receive SMS reminders/updates from GO EXECUTION LLC. Message &amp; data rates may apply. Reply STOP to unsubscribe.</p>
'''
    
    # Insert before Data Security or similar
    if "<h2>6. Data Security</h2>" in content:
        content = content.replace("<h2>6. Data Security</h2>", sms_section + "\n              <h2>6. Data Security</h2>")
    elif "<h2>7. Changes to This Privacy Policy</h2>" in content:
        content = content.replace("<h2>7. Changes to This Privacy Policy</h2>", sms_section + "\n              <h2>7. Changes to This Privacy Policy</h2>")
    else:
        # Just append before the end of the prose div
        content = content.replace("</div>\n          </div>\n        </section>", sms_section + "\n            </div>\n          </div>\n        </section>")
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

insert_sms_policy('app/(legal)/privacy-policy/page.tsx')
try:
    insert_sms_policy('app/(legal)/terms-of-service/page.tsx')
except Exception as e:
    print(f"Failed to update terms of service: {e}")

print("Legal pages updated")
