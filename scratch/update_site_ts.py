import re

with open('lib/seo/site.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('name: "Go Execution"', 'name: "Go Execution LLC"')
content = content.replace('phone: "+1 469 499 8558"', 'phone: "+1 469-499-8558"')
content = content.replace('email: "justin@goexecution.com"', 'email: "info@goexecution.com"')
content = content.replace('streetAddress: "13345 N Central Expy Ste 203"', 'streetAddress: "13345 N Central Expy, Suite 203"')

sameAs_old = '''sameAs: [
    "https://www.facebook.com/GoExecution",
    "https://www.instagram.com/go_execution/",
  ]'''

sameAs_new = '''sameAs: [
    "https://www.facebook.com/GoExecution",
    "https://www.instagram.com/go_execution/",
    "https://www.google.com/maps?cid=YOUR_CID_HERE",
    "https://clutch.co/profile/go-execution",
    "https://www.trustpilot.com/review/goexecution.com",
    "https://www.goodfirms.co/company/go-execution",
    "https://www.linkedin.com/company/go-execution-llc"
  ]'''

content = content.replace(sameAs_old, sameAs_new)

with open('lib/seo/site.ts', 'w', encoding='utf-8') as f:
    f.write(content)
