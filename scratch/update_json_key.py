import json

with open('lib/wp-content.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

if 'Video Animation' in data['pricing']:
    data['pricing']['Video/Animation'] = data['pricing'].pop('Video Animation')
    
    # Optionally, we might want to preserve the order of keys so "Video/Animation" doesn't jump to the end.
    # Let's recreate the dictionary preserving the original order:
    # Actually, in Python 3.7+, dicts maintain insertion order.
    # Let's just create a new pricing dict with the replaced key to keep it in the same place.

with open('lib/wp-content.json', 'r', encoding='utf-8') as f:
    original_data = json.load(f)

new_pricing = {}
for k, v in original_data['pricing'].items():
    if k == 'Video Animation':
        new_pricing['Video/Animation'] = v
    else:
        new_pricing[k] = v

original_data['pricing'] = new_pricing

with open('lib/wp-content.json', 'w', encoding='utf-8') as f:
    json.dump(original_data, f, indent=2, ensure_ascii=False)

print("Key updated")
