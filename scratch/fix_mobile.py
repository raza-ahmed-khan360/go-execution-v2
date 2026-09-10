import re

with open('app/globals.css', 'r', encoding='utf-8') as f:
    content = f.read()

mobile_padding = '''
@media (max-width: 768px) {
  body {
    padding-bottom: 90px;
  }
}
'''

if 'padding-bottom: 90px;' not in content:
    content += mobile_padding
    with open('app/globals.css', 'w', encoding='utf-8') as f:
        f.write(content)
        print("Success")
