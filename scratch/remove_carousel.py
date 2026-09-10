import re

with open('components/homepage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# find <ServicesCarousel services={servicesCarouselData} /> and remove the whole <section id="services" ... >
carousel_match = re.search(r'<section id="services" className="ge-section ge-services">.*?</section>', content, re.DOTALL)
if carousel_match:
    content = content.replace(carousel_match.group(0), '')
    with open('components/homepage.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
        print("Success")
