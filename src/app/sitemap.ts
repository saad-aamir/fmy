import type { MetadataRoute } from "next";
import { services } from "@/lib/site";
import { articles } from "@/lib/articles";

const SITE = "https://fmyaccountants.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/virtual-finance-office`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${SITE}/resources/${a.slug}`,
    lastModified: a.isoDate ? new Date(a.isoDate) : now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes];
}
