import { redirect } from "next/navigation";
import content from "@/lib/wp-content.json";

export function generateStaticParams() {
  return Object.keys(content.services).map((slug) => ({ slug }));
}

export default async function LegacyServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(`/${slug}/`);
}
