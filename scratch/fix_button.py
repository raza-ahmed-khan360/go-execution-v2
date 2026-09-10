import sys

with open('app/globals.css', 'r', encoding='utf-8') as f:
    css = f.read()

append_css = '''
.ge-section--navy .ge-button--outline {
	border-color: rgba(255, 255, 255, 0.25);
	color: #ffffff;
}
.ge-section--navy .ge-button--outline:hover {
	border-color: #ffffff;
	color: var(--ge-navy);
	background: #ffffff;
}
'''

if '.ge-section--navy .ge-button--outline' not in css:
    with open('app/globals.css', 'a', encoding='utf-8') as f:
        f.write(append_css)
    print('Appended')
else:
    print('Already present')
