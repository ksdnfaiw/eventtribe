import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/lib/site-data";
import { Card, CtaBand, JsonLd, PageHero, Section, crumbs, seo } from "@/components/site";

export const Route = createFileRoute("/services/")({
  head: () => seo("Event Production Services Hyderabad | The Event Tribe", "Audio, video, lighting, staging, 360° event production and hybrid streaming, planned and run as one system.", "/services"),
  component: () => (
    <>
      <PageHero eyebrow="Services" title="Everything your event needs to be seen, heard and felt." />
      <Section>
        <div className="grid g3">
          {services.map((s, i) => <Card key={s.slug} to="/services/$slug" params={{ slug: s.slug }} image={s.image} alt={s.alt} title={s.title} text={s.description} index={i} />)}
        </div>
      </Section>
      <CtaBand />
      <JsonLd data={crumbs([["Home", "/"], ["Services", "/services"]])} />
    </>
  ),
});
