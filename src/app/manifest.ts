import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Elmwood Christian Academy",
    short_name: "Elmwood",
    description:
      "A Christ-centered, college-preparatory school in Brighton, Colorado—preschool through 12th grade since 1973.",
    start_url: "/",
    display: "standalone",
    background_color: "#fcfbf8",
    theme_color: "#4f121d",
    icons: [
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
