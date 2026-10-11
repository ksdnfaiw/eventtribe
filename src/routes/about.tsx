import { createFileRoute } from "@tanstack/react-router";
import team from "@/assets/new-audio.jpg";
import { CtaBand, JsonLd, PageHero, Section, crumbs, seo } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () =>
    seo(
      "About EventTribe | Master Corporate Production Partner Hyderabad",
      "Meet EventTribe, Hyderabad's single accountable master production partner uniting The Stage Factory (TSF) and TSF-AV for enterprise summits and mega-events.",
      "/about"
    ),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About EventTribe"
        title="One Master Production Partner. Total Operational Accountability."
        image={team}
        alt="Senior event production engineer operating digital mix console at Hyderabad enterprise summit"
      />
      <Section>
        <div className="detail">
          <div>
            <p className="intro reveal">
              <strong>EventTribe</strong> is the master technical production partner for high-stakes corporate conferences, AGMs, enterprise summits, conclaves, product unveils, and mega-events across Hyderabad, Telangana, and Andhra Pradesh.
            </p>
            <p className="reveal">
              For over a decade, enterprise organizers and creative agencies have faced the same recurring frustration: fragmented multi-vendor coordination. When the staging crew, sound rental house, LED vendor, and generator supplier operate as separate entities, communication breaks down, rehearsal schedules slip, and on-site finger-pointing becomes inevitable.
            </p>
            <p className="reveal">
              EventTribe eliminates that risk. We operate as the single accountable master partner, bringing our dedicated structural division (<strong>The Stage Factory / TSF</strong>) and our audiovisual technology division (<strong>TSF-AV</strong>) under one cohesive command structure. From preliminary 3D Vectorworks sightline calculations to minute-by-minute technical cue sheets, you work with one senior engineering team that owns the outcome.
            </p>
          </div>
          <aside className="listbox reveal">
            <h3 className="serif">Operational Pillars</h3>
            <ul>
              {[
                "Single accountable chain of command",
                "Certified EN AW-6082 T6 trussing & IS 875 wind safety",
                "d&b audiotechnik electro-acoustic modeling (ArrayCalc)",
                "P2.6 ultra-HD 3840Hz native video mapping",
                "Dedicated 3-phase clean power & 0ms UPS redundancy",
                "Direct senior technical director on-site presence",
              ].map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      {/* Brand Architecture Showcase */}
      <Section eyebrow="Brand Architecture" title="Our Specialized Operational Divisions">
        <div className="grid g2">
          <div className="rounded-2xl border border-white/15 bg-[#17171a] p-8 shadow-xl">
            <span className="eyebrow !text-[#f26b21]">Structural Infrastructure Division</span>
            <h3 className="serif text-2xl font-bold text-white mb-2">The Stage Factory (TSF)</h3>
            <p className="text-xs text-white/60 mb-4 font-mono">11+ Years Heavy Rigging & Structural Staging</p>
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              TSF builds the physical backbone of high-capacity events. Our inventory includes certified 300mm, 400mm, and 520mm aluminum box trussing, German Layher Allround steel scaffold substructures, high-load modular staging (rated 750 kg/m² to 1,200 kg/m² UDL), and all-weather German Pagodas engineered with certified wind-load ballast calculations.
            </p>
            <ul className="text-xs text-white/75 space-y-1.5 list-disc list-inside">
              <li>Certified 300mm / 400mm / 520mm box truss profiles</li>
              <li>IS 875 (Part 3) compliant outdoor wind ballasting</li>
              <li>3D Vectorworks / AutoCAD sightline pre-visualization</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/15 bg-[#17171a] p-8 shadow-xl">
            <span className="eyebrow !text-emerald-400">Technology & Broadcast Division</span>
            <h3 className="serif text-2xl font-bold text-white mb-2">TSF-AV</h3>
            <p className="text-xs text-white/60 mb-4 font-mono">Concert-Grade Sound, P2.6 Ultra-HD LED & Broadcast</p>
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              TSF-AV delivers zero-latency visual and auditory precision. We fly concert-grade d&b audiotechnik V-Series and Y-Series line arrays paired with cardioid subwoofers, manage ultra-HD P2.6 mm indoor LED video canvases driven by Novastar MX40 Pro COEX processing, and engineer television-grade optical fiber live broadcasts.
            </p>
            <ul className="text-xs text-white/75 space-y-1.5 list-disc list-inside">
              <li>d&b ArrayCalc electro-acoustic venue modeling</li>
              <li>P2.6 Black SMD 3840Hz high-refresh LED walls</li>
              <li>Barco E2 / S3 seamless 4K60 presentation matrices</li>
            </ul>
          </div>
        </div>
      </Section>

      <CtaBand />
      <JsonLd data={crumbs([["Home", "/"], ["About", "/about"]])} />
    </>
  );
}
