import type { MetadataRoute } from "next";

const SITE = "https://fmyaccountants.co.uk";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Block Next internals + the dev API surface from indexing.
        disallow: ["/api/", "/_next/", "/newsletter/"],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
