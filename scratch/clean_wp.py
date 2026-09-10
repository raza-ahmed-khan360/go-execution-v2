with open('lib/wp-content.json', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('Award Winning', 'Expert')
content = content.replace('Sub-Second Speed Guarantee', 'Optimized Performance')

with open('lib/wp-content.json', 'w', encoding='utf-8') as f:
    f.write(content)
