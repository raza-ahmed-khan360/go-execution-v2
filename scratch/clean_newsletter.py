import re

with open('components/site-shell.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# find <div className="ge-footer__newsletter"> and the matching closing </div>
start_idx = content.find('<div className="ge-footer__newsletter">')
if start_idx != -1:
    end_idx = content.find('</div>', content.find('</form>', start_idx))
    end_idx = content.find('</div>', end_idx + 1)
    # let's just do a manual replace
    newsletter_content = content[start_idx:end_idx + 6]
    content = content.replace(newsletter_content, '')
    with open('components/site-shell.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
        print("Success")
