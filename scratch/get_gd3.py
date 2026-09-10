import json
with open('lib/services.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

in_gd = False
gd_lines = []
for line in lines:
    if '"graphic-design": {' in line:
        in_gd = True
    if in_gd:
        gd_lines.append(line)
    if in_gd and '"logo-design": {' in line:
        break
print("".join(gd_lines).strip())
