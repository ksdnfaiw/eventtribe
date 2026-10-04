import { createFileRoute } from "@tanstack/react-router";
import { services, events } from "@/lib/site-data";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const paths = ["/", "/about", "/services", ...services.map((s) => `/services/${s.slug}`), "/events", ...events.map((e) => `/events/${e.slug}`), "/clients", "/gallery", "/contact", "/privacy", "/terms"];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((p) => `<url><loc>https://eventtribe.in${p}</loc></url>`).join("")}</urlset>`;
        return new Response(xml, { headers: { "content-type": "application/xml" } });
      },
    },
  },
});
