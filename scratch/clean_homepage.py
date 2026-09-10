import re

with open('components/homepage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace  with 250+ Projects Delivered
content = content.replace('["15", "M+", "Client Revenue Generated"]', '["250", "+", "Projects Delivered"]')

# Testimonials to remove: Maya Chen, Raj Patel, Lucia Torres?
# The user said: "Maya Chen / Meridian Labs testimonial"
# Wait, "3.8x Average ROAS", "127% More Qualified Leads" are in Maya Chen and Lucia Torres maybe?
# Let's replace the testimonials array completely with the ones that do not contain these.
testimonials_match = re.search(r'const testimonials: readonly Testimonial\[\] = \[\n(.*?)\n\] as const;', content, re.DOTALL)
if testimonials_match:
    lines = testimonials_match.group(1).split('\n')
    new_lines = []
    for line in lines:
        if 'Maya Chen' in line or 'Meridian Labs' in line or '127%' in line:
            continue
        if '312%' in line or '3.8x' in line or 'Lucia Torres' in line:
            continue
        new_lines.append(line)
    new_testimonials = 'const testimonials: readonly Testimonial[] = [\n' + '\n'.join(new_lines) + '\n] as const;'
    content = content.replace(testimonials_match.group(0), new_testimonials)

with open('components/homepage.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
