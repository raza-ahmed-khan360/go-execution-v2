import re

with open('components/site-shell.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add a closing div before {/* --- INTERACTIVE FOOTER NAV...
content = content.replace('        {/* --- INTERACTIVE FOOTER NAV BAR WITH DROPDOWNS --- */}', '        </div>\n\n        {/* --- INTERACTIVE FOOTER NAV BAR WITH DROPDOWNS --- */}')

with open('components/site-shell.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
