import json
with open('lib/services.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

in_ld = False
ld_lines = []
for line in lines:
    if '"logo-design": {' in line:
        in_ld = True
    if in_ld:
        ld_lines.append(line)
    if in_ld and '"brand-identity": {' in line:
        break
print("".join(ld_lines).strip())
