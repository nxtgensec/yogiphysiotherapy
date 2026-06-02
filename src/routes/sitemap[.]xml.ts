import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { CLINIC } from "@/lib/clinic";
import { SERVICES } from "@/lib/service-data";

const BASE_URL = CLINIC.siteUrl;

type SitemapEntry = {
  path: string;
  changefreq: "weekly" | "monthly";
  priority: string;
  image?: {
    loc: string;
    title: string;
  };
};

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const lastmod = new Date().toISOString().slice(0, 10);
        const entries: SitemapEntry[] = [
          {
            path: "/",
            changefreq: "weekly",
            priority: "1.0",
          },
          ...SERVICES.map((service) => ({
            path: `/services/${service.slug}`,
            changefreq: "monthly" as const,
            priority: service.key === "physio" || service.key === "pain" ? "0.9" : "0.8",
            image: {
              loc: `${BASE_URL}${service.image}`,
              title: `${service.name} at ${CLINIC.shortName}`,
            },
          })),
        ];

        const urls = entries
          .map(
            (entry) => `  <url>
    <loc>${escapeXml(`${BASE_URL}${entry.path}`)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>${
      entry.image
        ? `
    <image:image>
      <image:loc>${escapeXml(entry.image.loc)}</image:loc>
      <image:title>${escapeXml(entry.image.title)}</image:title>
    </image:image>`
        : ""
    }
  </url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
