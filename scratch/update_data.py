
import codecs

with open("lib/industries.ts", "r", encoding="utf-8") as f:
    ind_content = f.read()

# Hospitality
ind_content = ind_content.replace(
    "seoTitle: \"Hotel Web Design Agency & Hospitality Website Development | Go Execution\",",
    "seoTitle: \"Hotel Web Design & Hospitality Website Development\","
)
ind_content = ind_content.replace(
    "description: \"Looking for a top hotel web design agency? Go Execution specializes in custom hospitality website development, web design, and branding to drive direct bookings.\",",
    "description: \"Looking for a hotel web design agency? We specialize in custom hospitality website development, web design, and branding to drive direct bookings.\","
)

# Professional Services
ind_content = ind_content.replace(
    "seoTitle: \"SEO for Accountants & Professional Website Design Services | Go Execution\",",
    "seoTitle: \"SEO for Accountants & Professional Website Design Services\","
)

with open("lib/industries.ts", "w", encoding="utf-8") as f:
    f.write(ind_content)
print("Industries updated.")

with open("lib/services.ts", "r", encoding="utf-8") as f:
    srv_content = f.read()

# Graphic Design
srv_content = srv_content.replace(
    "description: \"Go Execution is a premier website graphic design agency offering creative design services, illustration design, and complete branding and graphic design services.\",",
    "description: \"Go Execution is a premier website graphic design agency offering creative design services, illustration design, and complete branding design services.\","
)

# Custom Mobile App Development
srv_content = srv_content.replace(
    "description: \"Go Execution is a leading enterprise mobile app development company providing custom mobile app development services, iOS, Android, and cross-platform solutions.\",",
    "description: \"Go Execution is an enterprise mobile app development company providing custom mobile app development services, iOS, Android, and cross-platform solutions.\","
)

with open("lib/services.ts", "w", encoding="utf-8") as f:
    f.write(srv_content)
print("Services updated.")

