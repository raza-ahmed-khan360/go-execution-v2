import { Homepage } from "@/components/homepage";
import { JsonLd, buildOrganization, buildPlace, buildWebSite, buildWebPage } from "@/lib/seo/jsonld";

export default function Home() {
  const homeGraph = {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganization(),
      buildPlace(),
      buildWebSite(),
      buildWebPage({ path: "/", title: "Go Execution | Top Digital Marketing Agency & Web Development in USA" }),
    ],
  };

  return (
    <>
      <JsonLd data={homeGraph} />
      <Homepage />
    </>
  );
}
