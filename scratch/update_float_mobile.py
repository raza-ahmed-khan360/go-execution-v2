import re

with open('app/globals.css', 'r', encoding='utf-8') as f:
    css = f.read()

mobile_old = '''\t.ge-consultation-float {
\t\tright: 20px;
\t\tbottom: 20px;
\t\tmin-height: 54px;
\t\tgap: 9px;
\t\tpadding: 6px 10px 6px 7px;
\t\tborder-radius: 16px;
\t}'''

mobile_new = '''\t.ge-consultation-float {
\t\tright: 20px;
\t\tbottom: 20px;
\t\tmin-height: 54px;
\t\tgap: 0;
\t\tpadding: 8px;
\t\tborder-radius: 16px;
\t}'''

css = css.replace(mobile_old, mobile_new)

with open('app/globals.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Mobile CSS updated")
