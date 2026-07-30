import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

const routes = [
  "",
  "/about",
  "/services",
  "/data-analysis",
  "/blueprint",
  "/pricing",
  "/portfolio",
  "/testimonials",
  "/faq",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
