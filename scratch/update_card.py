import re

with open('app/globals.css', 'r', encoding='utf-8') as f:
    css = f.read()

# For .ge-hero__centered-container .ge-hero__content
css = css.replace(
    'background: #ffffff !important;\n\tbackdrop-filter: blur(20px) !important;',
    'background: rgba(255, 255, 255, 0.92) !important;\n\tbackdrop-filter: blur(20px) !important;'
)

# For .ge-hero--inner .ge-hero__content
css = css.replace(
    'background: #ffffff !important;\n\tborder: 1px solid rgba(201, 168, 106, 0.4) !important;',
    'background: rgba(255, 255, 255, 0.92) !important;\n\tborder: 1px solid rgba(201, 168, 106, 0.4) !important;'
)


with open('app/globals.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Card transparency updated")
