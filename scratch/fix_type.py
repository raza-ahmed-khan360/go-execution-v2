import re

with open('components/site-shell.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('useState<"idle" | "invalid" | "ready">("idle");', 'useState<"idle" | "invalid" | "ready" | "success" | "error">("idle");')

with open('components/site-shell.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
