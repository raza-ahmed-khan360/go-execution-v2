
import codecs

with open("components/homepage.tsx", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace(
    "title: \"Full-Service Digital\",",
    "title: \"Go Execution Digital\","
)

with open("components/homepage.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Hero updated.")

