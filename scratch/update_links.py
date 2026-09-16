
import codecs

with open("lib/blog-posts.ts", "r", encoding="utf-8") as f:
    content = f.read()

# 1. content-marketing
content = content.replace(
    "<a href=\"/services/digital-marketing/b2b-content-marketing\">",
    "<a href=\"/services/digital-marketing/content-marketing/\">"
)
content = content.replace(
    "<a href=\"/services/digital-marketing/b2b-content-marketing/\">",
    "<a href=\"/services/digital-marketing/content-marketing/\">"
)

# 2. technical-seo
content = content.replace(
    "<a href=\"/services/seo/technical-seo\">",
    "<a href=\"/services/seo/technical-seo/\">"
)

# 3. landing-page-development
content = content.replace(
    "<a href=\"/services/web-development/landing-page-development\">",
    "<a href=\"/services/web-development/landing-page-development/\">"
)

# 4. nextjs-development
content = content.replace(
    "<a href=\"/services/web-development/nextjs-development\">",
    "<a href=\"/services/web-development/nextjs-development/\">"
)

# 5. website-speed-and-performance
content = content.replace(
    "<a href=\"/services/web-development/website-speed-and-performance\">",
    "<a href=\"/services/web-development/website-performance/\">"
)
content = content.replace(
    "<a href=\"/services/web-development/website-speed-and-performance/\">",
    "<a href=\"/services/web-development/website-performance/\">"
)

with open("lib/blog-posts.ts", "w", encoding="utf-8") as f:
    f.write(content)

print("Updated links in blog-posts.ts")

