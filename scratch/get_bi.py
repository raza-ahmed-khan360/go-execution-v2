import json
with open('lib/services.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

in_bi = False
bi_lines = []
for line in lines:
    if '"brand-identity": {' in line:
        in_bi = True
    if in_bi:
        bi_lines.append(line)
    if in_bi and '"creative-design": {' in line:
        break
print("".join(bi_lines))
