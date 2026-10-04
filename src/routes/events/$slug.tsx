import { createFileRoute, notFound } from "@tanstack/react-router";
import { events } from "@/lib/site-data";
import { Card, CtaBand, JsonLd, PageHero, Section, crumbs, seo, SITE } from "@/components/site";

type Item = { slug: string; title: string; description: string; image: string; alt: string; heading: string; intro: string; paragraphs: readonly string[]; listTitle?: string; items?: readonly string[]; extra?: string; metaTitle: string; metaDescription: string };
const list = events as unknown as Item[];

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const item = list.find((x) => x.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData: d }) => (d ? seo(d.metaTitle, d.metaDescription, `/events/${d.slug}`) : {}),
  notFoundComponent: () => <PageHero eyebrow="404" title="That page isn't here." />,
  errorComponent: () => <PageHero eyebrow="Error" title="This page didn't load." />,
  component: Page,
});

function Page() {
  const d = Route.useLoaderData();
  const rest = list.filter((x) => x.slug !== d.slug).slice(0, 3);
  return (
    <>
      <PageHero eyebrow={d.title} title={d.heading} intro={d.intro || d.description} image={d.image} alt={d.alt} />
      <Section>
        <div className="detail">
          <div>
            {d.paragraphs.map((p, i) => <p key={i} className="reveal">{p}</p>)}
            {d.extra && <p className="extra reveal">{d.extra}</p>}
          </div>
          {d.items && (
            <aside className="listbox reveal">
              <h3 className="serif">{d.listTitle}</h3>
              <ul>{d.items.map((x) => <li key={x}>{x}</li>)}</ul>
            </aside>
          )}
        </div>
      </Section>
      <Section eyebrow="Keep exploring" title="More from The Event Tribe">
        <div className="grid g3">
          {rest.map((x) => <Card key={x.slug} to="/events/$slug" params={{ slug: x.slug }} image={x.image} alt={x.alt} title={x.title} text={x.description} />)}
        </div>
      </Section>
      <CtaBand />
      <JsonLd data={crumbs([["Home", "/"], ["Events", "/events"], [d.title, `/events/${d.slug}`]])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: d.title, description: d.metaDescription, areaServed: "Hyderabad", provider: { "@type": "LocalBusiness", name: "The Event Tribe", url: SITE } }} />
    </>
  );
}
