import { createFileRoute, Link } from "@tanstack/react-router";
import img from "@/assets/hero-stage.jpg";
import { CtaBand, JsonLd, PageHero, Section, crumbs, seo } from "@/components/site";
import { LeadMagnetSection } from "@/components/LeadMagnet";

export const Route = createFileRoute("/clients")({
  head: () =>
    seo(
      "Enterprise Clients & Experience | EventTribe Hyderabad",
      "Selected enterprise summits, AGMs, conclaves, and mega-event technical production experience across Hyderabad, Telangana, and Andhra Pradesh.",
      "/clients"
    ),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Clients & Experience"
        title="Trust is earned live."
        intro="When thousands of stakeholders, shareholders, and industry leaders assemble in Hyderabad, technical execution must be flawless."
        image={img}
        alt="Large-scale corporate plenary auditorium produced by EventTribe"
      />

      <Section>
        <div className="feat">
          <div>
            <p className="eyebrow">Featured Production Milestone</p>
            <h2 className="serif h2">Global Enterprise Leadership Summit</h2>
            <p className="lead">
              Hyderabad Convention Centre (HICC) · 2,500 In-Person Delegates · 15,000 Global Live Stream
            </p>
            <p>
              EventTribe served as master technical production partner, delivering a 60-foot curved P2.6 ultra-HD LED main screen, d&b audiotechnik V-Series line arrays, and certified 520mm heavy box trussing fabricated by <strong>The Stage Factory (TSF)</strong>. Dual-redundant Barco video matrix switchers and uninterrupted power distribution guaranteed zero downtime across a three-day plenary.
            </p>
            <div className="row mt-6">
              <Link to="/contact" className="btn btn-primary">
                Discuss Your Upcoming Event
              </Link>
              <Link to="/corporate-stage-design-masterclass" className="btn btn-ghost">
                View Stage Engineering Standards
              </Link>
            </div>
          </div>
          <div className="note">
            Client confidentiality is paramount. Enterprise brand names, proprietary stage CAD schematics, and recorded sessions are shared during technical proposals under mutual NDA.
          </div>
        </div>
      </Section>

      <section className="sec">
        <div className="wrap">
          <LeadMagnetSection
            source="clients_page"
            title="Download Our Enterprise AV & Stage Technical Checklist"
            subtitle="The exact technical rider requirements for HITEX, HICC Novotel, and Hyderabad convention centres."
          />
        </div>
      </section>

      <CtaBand />
      <JsonLd data={crumbs([["Home", "/"], ["Clients", "/clients"]])} />
    </>
  );
}
