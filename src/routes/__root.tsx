import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header, Footer, JsonLd, SITE, PHONE_RAW, EMAIL } from "@/components/site";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "EventTribe | Master Corporate Event Production Hyderabad" },
      {
        name: "description",
        content:
          "Master corporate event production partner in Hyderabad, backed by The Stage Factory (Staging & Trussing) and TSF-AV (Concert Sound & LED Video Walls).",
      },
      { name: "author", content: "EventTribe" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Placeholder: Meta Pixel (Loaded asynchronously without blocking Core Web Vitals) */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.dataLayer = window.dataLayer || [];
                // Meta Pixel Base Code (Placeholder)
                !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
                (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
                // Replace 'META_PIXEL_ID_PLACEHOLDER' with actual client pixel ID
                // fbq('init', 'META_PIXEL_ID_PLACEHOLDER');
                // fbq('track', 'PageView');

                // LinkedIn Insight Tag Base Code (Placeholder)
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                // window._linkedin_data_partner_ids.push('LINKEDIN_PARTNER_ID_PLACEHOLDER');
                (function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[]}var s=document.getElementsByTagName('script')[0];
                var b=document.createElement('script');b.type='text/javascript';b.async=true;
                b.src='https://snap.licdn.com/li.lms-analytics/insight.min.js';
                s.parentNode.insertBefore(b,s);})(window.lintrk);
              }
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main><Outlet /></main>
      <Footer />
      <StickyWhatsApp />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "ProfessionalService"],
          name: "EventTribe",
          alternateName: "The Event Tribe",
          url: SITE,
          telephone: PHONE_RAW,
          email: EMAIL,
          description:
            "Master corporate event production partner in Hyderabad, backed by The Stage Factory (Staging & Trussing) and TSF-AV (Concert Sound & LED Video Walls).",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Plot No. 106, Durga Vihar, 4th Cross Road, Lal Bazar, GunRock, Tirumalgiri",
            addressLocality: "Secunderabad",
            addressRegion: "Telangana",
            postalCode: "500009",
            addressCountry: "IN",
          },
          areaServed: [
            { "@type": "City", name: "Hyderabad" },
            { "@type": "City", name: "Secunderabad" },
            { "@type": "State", name: "Telangana" },
            { "@type": "State", name: "Andhra Pradesh" },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Event Production Capabilities",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Heavy Structural Staging & Box Trussing",
                  provider: { "@type": "Organization", name: "The Stage Factory (TSF)" },
                  description: "Certified aluminum box trussing, German Pagodas, and load-bearing staging platforms.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Concert-Grade Audio & P2.6 LED Video Walls",
                  provider: { "@type": "Organization", name: "TSF-AV" },
                  description: "d&b audiotechnik line arrays, P2.6 ultra-HD LED video displays, and broadcast switching.",
                },
              },
            ],
          },
          sameAs: [
            "https://facebook.com/EventsTribe",
            "https://instagram.com/event_tribe",
            "https://twitter.com/TheEventsTribe",
            "https://youtube.com/@TheEventTribe",
          ],
        }}
      />
    </QueryClientProvider>
  );
}
