import json
with open('lib/services.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

in_pa = False
pa_lines = []
for line in lines:
    if '"paid-advertising": {' in line:
        in_pa = True
    if in_pa:
        pa_lines.append(line)
    if in_pa and '"conversion-optimisation": {' in line:
        break
print("".join(pa_lines).strip())
