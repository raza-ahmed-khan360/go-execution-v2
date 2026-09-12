
import codecs

with open("app/globals.css", "r", encoding="utf-8") as f:
    content = f.read()

target = """
.ge-header.is-fixed {
	position: fixed;
	background: rgba(13, 27, 42, 0.92);
	box-shadow: 0 12px 30px rgba(0, 0, 0, 0.13);
	backdrop-filter: blur(15px);
	animation: geHeaderIn 0.45s var(--ge-ease);
}
"""

replacement = """
.ge-header {
	transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, border-color 0.3s ease;
}
.ge-header.is-hidden {
	transform: translateY(-130%);
}

.ge-header.is-fixed {
	position: fixed;
	background: rgba(13, 27, 42, 0.92);
	box-shadow: 0 12px 30px rgba(0, 0, 0, 0.13);
	backdrop-filter: blur(15px);
	animation: geHeaderIn 0.45s var(--ge-ease);
}
"""

if target in content:
    content = content.replace(target, replacement)
    with open("app/globals.css", "w", encoding="utf-8") as f:
        f.write(content)
    print("Success CSS")
else:
    print("Target not found in CSS")

