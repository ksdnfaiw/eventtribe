import { createFileRoute, notFound, redirect } from "@tanstack/react-router";

// 301s for old WordPress URLs
const map: Record<string, string> = {
  audio: "/services/audio", video: "/services/video", lighting: "/services/lighting", staging: "/services/staging",
  "event-production": "/services/event-production", "hybrid-events": "/services/hybrid-events",
  conferences: "/events/conferences", "trade-exhibitions": "/events/trade-exhibitions", entertainment: "/events/entertainment",
  "wedding-and-social-events": "/events/weddings-and-social", social: "/events/weddings-and-social",
};

export const Route = createFileRoute("/$legacy")({
  beforeLoad: ({ params }) => {
    const to = map[params.legacy.replace(/\/$/, "")];
    if (to) throw redirect({ href: to, statusCode: 301 });
    throw notFound();
  },
});
