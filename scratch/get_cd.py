import json
with open('lib/services.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

in_cd = False
cd_lines = []
for line in lines:
    if '"creative-design": {' in line:
        in_cd = True
    if in_cd:
        cd_lines.append(line)
    if in_cd and '"video-animation": {' in line:
        break
print("".join(cd_lines).strip())
