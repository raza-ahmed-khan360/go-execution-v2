import re

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        code = f.read()

    code = code.replace('/assets/images/generated/team-workspace.jpg', '/assets/images/real/professional-services.jpeg')
    code = code.replace('/assets/images/generated/web-dev.jpg', '/assets/images/real/technology-saas.jpeg')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(code)

replace_in_file('app/about/page.tsx')
replace_in_file('app/portfolio/[slug]/page.tsx')
print("App files updated")
