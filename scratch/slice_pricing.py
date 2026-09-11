import json

with open('lib/wp-content.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for category, packages in data['pricing'].items():
    if len(packages) > 3:
        data['pricing'][category] = packages[:3]

with open('lib/wp-content.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)
