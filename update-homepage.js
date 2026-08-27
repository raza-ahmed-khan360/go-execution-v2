const fs = require('fs');

let content = fs.readFileSync('components/homepage.tsx', 'utf8');

// Add imports
const importsToAdd = `
import { createClient } from "@supabase/supabase-js";
`;
content = content.replace('import { TestimonialShowcase', importsToAdd + 'import { TestimonialShowcase');

// Make Homepage async
content = content.replace('export function Homepage() {', 'export async function Homepage() {\n  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";\n  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";\n  const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;\n  \n  let dbTestimonials: Testimonial[] = [];\n  if (supabase) {\n    const { data } = await supabase.from("testimonials").select("*").eq("approved", true).order("created_at", { ascending: false });\n    if (data) {\n      dbTestimonials = data.map(t => ({\n        quote: t.quote,\n        name: t.name,\n        role: t.role,\n        metric: t.metric,\n        metricLabel: t.metric_label\n      }));\n    }\n  }\n  \n  const allTestimonials = [...dbTestimonials, ...testimonials];\n');

// Pass allTestimonials
content = content.replace('<TestimonialShowcase items={testimonials} />', '<TestimonialShowcase items={allTestimonials} />');

fs.writeFileSync('components/homepage.tsx', content);
console.log("Updated components/homepage.tsx");
