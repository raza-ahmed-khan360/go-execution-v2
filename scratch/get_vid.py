import json
with open('lib/services.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

in_vid = False
vid_lines = []
for line in lines:
    if '"video-animation": {' in line:
        in_vid = True
    if in_vid:
        vid_lines.append(line)
    if in_vid and '"custom-mobile-app-development": {' in line:
        break
print("".join(vid_lines).strip())
