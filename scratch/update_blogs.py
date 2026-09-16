
import codecs

with open("lib/blog-posts.ts", "r", encoding="utf-8") as f:
    content = f.read()

# 1. iPhone Duo
content = content.replace(
    "seoTitle: \"iPhone Duo & 2026 Tech Trends: Impact on Digital Strategy | Go Execution\",",
    "seoTitle: \"iPhone Duo & 2026 Tech Trends: Digital Strategy Impact\","
)
content = content.replace(
    "excerpt: \"With massive search spikes for the iPhone Duo and PS5 upgrades, consumer hardware is evolving rapidly. Learn why your business needs to adapt its digital presence today.\",",
    "excerpt: \"With search spikes for the iPhone Duo & PS5 upgrades, consumer hardware is evolving rapidly. Learn why your business must adapt its digital presence today.\","
)

# 2. seo-and-digital-marketing-statistics-2026
content = content.replace(
    "excerpt: \"The ultimate list of verified SEO, B2B SaaS, and digital marketing statistics for 2026. Use these data points for your next article, report, or marketing strategy.\",",
    "excerpt: \"The ultimate list of verified SEO, B2B SaaS, and digital marketing statistics for 2026. Use these data points for your next article or marketing strategy.\","
)

# 3. nextjs-replacing-headless-shopify-enterprise-ecommerce
content = content.replace(
    "excerpt: \"Explore why enterprise e-commerce brands are migrating from traditional headless Shopify setups to custom Next.js architectures for superior performance, SEO, and flexibility.\",",
    "excerpt: \"Explore why enterprise e-commerce brands are migrating from headless Shopify to custom Next.js architectures for superior performance, SEO, and flexibility.\","
)

# 4. top-nextjs-development-agencies-ecommerce
content = content.replace(
    "excerpt: \"Comparing the best Next.js development agencies that specialize in high-performance enterprise e-commerce, headless architectures, and high-performance load times.\",",
    "excerpt: \"Compare the best Next.js development agencies that specialize in high-performance enterprise e-commerce, headless architectures, and optimal load times.\","
)

# 5. local-seo-for-franchises-multi-location
content = content.replace(
    "seoTitle: \"Local SEO Strategy for Franchises and Multi-Location Brands | Go Execution\",",
    "seoTitle: \"Local SEO Strategy for Franchises | Go Execution\","
)

with open("lib/blog-posts.ts", "w", encoding="utf-8") as f:
    f.write(content)
print("Blog updates done.")

