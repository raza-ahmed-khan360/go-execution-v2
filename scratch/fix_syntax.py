import re
with open('lib/blog-posts.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the double backtick/comma issue
content = re.sub(r'\,\n(\s+)\,\n(\s+)faq: \[', r',\n\1faq: [', content)
content = re.sub(r'\\,\s+\,\s+faq\: \[', r', faq: [', content)
content = re.sub(r'\\,\s+\,\n\s+faq\: \[', r',\n    faq: [', content)
content = re.sub(r'\,\n\s+,\n\s+faq: \[', r',\n    faq: [', content)

# A safer approach: Find any ,\n\s+, and replace it
content = re.sub(r'\,\s+,\s+faq', r', faq', content)
content = re.sub(r'\,\n\s+,\n\s+faq', r',\n    faq', content)

# Just let's look at the errors and fix them manually if regex fails
with open('lib/blog-posts.ts', 'w', encoding='utf-8') as f:
    f.write(content)
