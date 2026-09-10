import json
with open('lib/services.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

in_cro = False
cro_lines = []
for line in lines:
    if '"conversion-optimisation": {' in line:
        in_cro = True
    if in_cro:
        cro_lines.append(line)
    if in_cro and '}' in line and len(line.strip()) == 3 and line.strip().startswith('}'): # last subservice in category
        pass
    if in_cro and '"search-engine-optimisation":' in line:
        break
print("".join(cro_lines).strip())
