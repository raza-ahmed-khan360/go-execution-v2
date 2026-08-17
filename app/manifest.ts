import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Go Execution",
    short_name: "Go Execution",
    description:
      "Go Execution helps US businesses grow with web design, SEO, digital marketing, branding, mobile apps, and video animation focused on measurable results.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1c2c",
    theme_color: "#0b1c2c",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
