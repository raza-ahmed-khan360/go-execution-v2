
import codecs

files_to_update = [
    "app/(legal)/cookie-policy/page.tsx",
    "app/(legal)/privacy-policy/page.tsx"
]

for file_path in files_to_update:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    content = content.replace("https://myadcenter.google.com", "https://adssettings.google.com/")
    content = content.replace("https://aboutads.info", "https://youradchoices.com/")
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
        
print("Links updated")

