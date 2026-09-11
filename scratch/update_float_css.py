import re

with open('app/globals.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Update .ge-consultation-float properties
# We need to change gap: 12px -> gap: 0;
# padding: 9px 13px 9px 10px; -> padding: 9px;
# And add transition for max-width, gap, padding, etc.

css = css.replace(
    '''\tgap: 12px;
\tmin-height: 62px;
\tmax-width: calc(100vw - 104px);
\tpadding: 9px 13px 9px 10px;''',
    '''\tgap: 0;
\tmin-height: 62px;
\tmax-width: calc(100vw - 104px);
\tpadding: 9px;'''
)

css = css.replace(
    '''\ttransition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;''',
    '''\ttransition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);'''
)

css = css.replace(
    '''.ge-consultation-float:hover,
.ge-consultation-float:focus-visible {
\ttransform: translateY(-3px);
\tborder-color: #f0cf78;
\tbox-shadow: 0 20px 42px rgba(13, 27, 42, 0.35), 0 0 0 6px rgba(229, 193, 88, 0.14);
\toutline: none;
}''',
    '''.ge-consultation-float:hover,
.ge-consultation-float:focus-visible {
\ttransform: translateY(-3px);
\tborder-color: #f0cf78;
\tbox-shadow: 0 20px 42px rgba(13, 27, 42, 0.35), 0 0 0 6px rgba(229, 193, 88, 0.14);
\toutline: none;
\tgap: 12px;
\tpadding: 9px 13px 9px 9px;
}'''
)

# Add .ge-consultation-float__text
text_css = '''
.ge-consultation-float__text {
\tmax-width: 0;
\topacity: 0;
\toverflow: hidden;
\twhite-space: nowrap;
\ttransition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.ge-consultation-float:hover .ge-consultation-float__text,
.ge-consultation-float:focus-visible .ge-consultation-float__text {
\tmax-width: 300px;
\topacity: 1;
}
'''

css = css.replace(
    '''.ge-consultation-float__icon,
.ge-consultation-float > span:not(.ge-consultation-float__icon) {
\tposition: relative;
\tz-index: 1;
}''',
    '''.ge-consultation-float__icon,
.ge-consultation-float__text {
\tposition: relative;
\tz-index: 1;
}
''' + text_css
)

with open('app/globals.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("CSS updated")
