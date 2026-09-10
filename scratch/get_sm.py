import json
with open('lib/services.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

in_sm = False
sm_lines = []
for line in lines:
    if '"social-media-marketing": {' in line:
        in_sm = True
    if in_sm:
        sm_lines.append(line)
    if in_sm and '"paid-advertising": {' in line:
        break
print("".join(sm_lines).strip())
