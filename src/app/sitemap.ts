import type { MetadataRoute } from "next";
import { requireSiteUrl } from "@/lib/siteUrl";

export const dynamic = "force-static";

const publicRoutes = [
  "/",
  "/about",
  "/work",
  "/work/sec-financial-data-platform",
  "/lab",
  "/lab/job-search-os",
  "/writing",
  "/resume",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = requireSiteUrl();

  return publicRoutes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
  }));
}
