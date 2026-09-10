import json
with open('lib/services.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

in_cm = False
cm_lines = []
for line in lines:
    if '"content-marketing": {' in line:
        in_cm = True
    if in_cm:
        cm_lines.append(line)
    if in_cm and '"social-media-marketing": {' in line:
        break
print("".join(cm_lines).strip())
