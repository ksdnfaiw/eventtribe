import { createFileRoute } from "@tanstack/react-router";
import { events } from "@/lib/site-data";
import { Card, CtaBand, JsonLd, PageHero, Section, crumbs, seo } from "@/components/site";

export const Route = createFileRoute("/events/")({
  head: () => seo("Events We Produce | The Event Tribe Hyderabad", "Conferences, trade exhibitions, entertainment, weddings and social events, produced end to end.", "/events"),
  component: () => (
    <>
      <PageHero eyebrow="Events" title="Every kind of room. Every kind of crowd." intro="From a 20-person boardroom to a 10,000-strong hall, we bring the same technical standard." />
      <Section>
        <div className="grid g2">
          {events.map((e, i) => <Card key={e.slug} to="/events/$slug" params={{ slug: e.slug }} image={e.image} alt={e.alt} title={e.title} text={e.description} index={i} />)}
        </div>
      </Section>
      <CtaBand />
      <JsonLd data={crumbs([["Home", "/"], ["Events", "/events"]])} />
    </>
  ),
});
