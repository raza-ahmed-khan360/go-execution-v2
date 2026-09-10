import re

with open('components/testimonial-showcase.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

verified_block = '''              <span className="ge-testimonial-showcase__verified">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 12 2 2 4-5" /><circle cx="12" cy="12" r="9" /></svg>
                Verified client
              </span>'''

content = content.replace(verified_block, '')

with open('components/testimonial-showcase.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
