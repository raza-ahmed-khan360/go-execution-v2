import re

with open('components/homepage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Industry section
industry_old = '''              <Link className="ge-button ge-button--outline" href="/industries/">
                <span>Explore All Industries</span>
              </Link>'''
industry_new = '''              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "1.5rem" }}>
                <Link className="ge-button ge-button--outline" href="/industries/">
                  <span>Explore All Industries</span>
                </Link>
                <Link className="ge-button ge-button--gold" href="/contact/">
                  <span>Request an Industry Case Study</span>
                </Link>
              </div>'''
content = content.replace(industry_old, industry_new)

# 2. Why Go Execution section
why_old = '''          <Link className="ge-why__cta-btn" href="/about/"><span>Discover Our Approach</span></Link>'''
why_new = '''          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "2rem" }}>
            <Link className="ge-why__cta-btn" href="/about/"><span>Discover Our Approach</span></Link>
            <Link className="ge-button ge-button--gold" href="/contact/"><span>Speak with an Expert</span></Link>
          </div>'''
content = content.replace(why_old, why_new)

# 3. Process section
process_old = '''            <div style={{ marginTop: "1.5rem" }}>
              <Link className="ge-button ge-button--outline" href="/contact/">
                <span>Start Your Project</span>
              </Link>
            </div>'''
process_new = '''            <div style={{ marginTop: "1.5rem", display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link className="ge-button ge-button--outline" href="/portfolio/">
                <span>View Past Campaigns</span>
              </Link>
              <Link className="ge-button ge-button--gold" href="/contact/">
                <span>Map Out Your Strategy</span>
              </Link>
            </div>'''
content = content.replace(process_old, process_new)

with open('components/homepage.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("CTAs updated")
