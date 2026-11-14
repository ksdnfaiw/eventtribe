import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import exhibition from "@/assets/work-expo.jpg";
import conference from "@/assets/hero-stage.jpg";
import production from "@/assets/new-production.jpg";
import { CtaBand, JsonLd, PageHero, Section, crumbs, seo, WA, PHONE, PHONE_RAW, SITE } from "@/components/site";
import { LeadMagnetSection, LeadMagnetModal } from "@/components/LeadMagnet";
import { trackWhatsAppClick } from "@/lib/analytics";

export const Route = createFileRoute("/hyderabad-venue-av-production-guide")({
  head: () =>
    seo(
      "Hyderabad Premier Event Venues Technical Production & AV Guide | HITEX, HICC, GMR Arena | EventTribe",
      "Field engineering guide for event directors: ceiling heights, rigging point-load limits, 3-phase power drop capacities, loading dock access, and acoustic profiles across HITEX, HICC, GMR Arena, and Hyderabad convention centers.",
      "/hyderabad-venue-av-production-guide"
    ),
  component: HyderabadVenueGuidePage,
});

function HyderabadVenueGuidePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="The Stage Factory & TSF-AV · Field Engineering Guide"
        title="Hyderabad Premier Event Venues: Rigging, Power & AV Production Guide"
        intro="The definitive engineering handbook for technical directors, corporate producers, and event agencies planning large-scale summits across HITEX Exhibition Centre, HICC Novotel, GMR Arena, and Hyderabad's flagship convention centers."
        image={exhibition}
        alt="Large-scale exhibition and convention hall in Hyderabad with certified aluminum box truss rigging and power distribution"
      />

      {/* Quick Spec Highlights Bar */}
      <section className="border-b border-white/10 bg-[#121214] py-6 text-xs sm:text-sm">
        <div className="wrap flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#f26b21]" />
            <span className="text-white/70">Venues Documented:</span>
            <strong className="text-white">HITEX (Halls 1–4), HICC, GMR Arena, ITC Kohenur</strong>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-white/70">Engineering Scope:</span>
            <strong className="text-white">Ceiling Heights, Point Loads &amp; Power Feeds</strong>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            <span className="text-white/70">Acoustic Standards:</span>
            <strong className="text-white">RT60 Decay Times &amp; d&b ArrayCalc Modeling</strong>
          </div>
          <div>
            <button
              onClick={() => setModalOpen(true)}
              className="text-xs font-semibold text-[#f26b21] underline hover:text-[#ff8138] transition-colors"
            >
              Get Venue Technical Matrix →
            </button>
          </div>
        </div>
      </section>

      {/* Section 01: HITEX Exhibition Centre */}
      <Section
        eyebrow="Venue Profile 01 · HITEX Exhibition Centre"
        title="HITEX Exhibition Centre (Halls 1–4 &amp; Open Grounds): Technical Production Specs"
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 flex flex-col gap-5 text-sm sm:text-base leading-relaxed text-white/80">
            <p>
              Located in the heart of Madhapur/Cyberabad, <strong>HITEX Exhibition Centre</strong> is Hyderabad’s primary destination for industrial trade expos, mega-summits, and large corporate conclaves. Producing an event at HITEX requires deep familiarity with its structural load-bearing parameters and expansive hall dimensions.
            </p>
            <p>
              <strong>Hall Clear Heights &amp; Rigging Points:</strong> HITEX Halls 1, 2, 3, and 4 offer clear ceiling heights ranging between <strong>9.5 meters and 11.5 meters</strong> to the bottom chord of the structural roof trusses. Overhead box truss rigging requires certified steel wire rope chokers and CM Lodestar motorized hoists. The Stage Factory (TSF) deploys certified 400mm and 520mm heavy box truss grids, ensuring concentrated point loads remain well within the 500 kg to 1,000 kg per roof node structural threshold.
            </p>
            <p>
              <strong>Floor Loading &amp; Heavy Exhibits:</strong> HITEX features industrial-grade concrete slab flooring rated for up to <strong>5 tonnes per square meter</strong>. This accommodates heavy automotive turntables, multi-level exhibition pavilions, and dense hydraulic catwalks without risk of sub-slab damage.
            </p>
            <p>
              <strong>Electrical Infrastructure &amp; Busbars:</strong> Each exhibition hall is equipped with perimeter and underfloor electrical trenches. TSF master electricians tap into primary 3-phase 415V busbars with 125A, 250A, and 400A MCCB distribution boxes, providing dedicated clean lines for TSF-AV LED wall processors and audio amplification racks.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl border border-white/15 bg-[#18181c] p-6 shadow-xl">
              <span className="eyebrow !text-[#f26b21]">HITEX Engineering Cheat Sheet</span>
              <h3 className="serif text-xl font-bold text-white mb-4">Venue Parameters (Halls 1–4)</h3>
              <dl className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <dt className="text-white/60">Clear Ceiling Height</dt>
                  <dd className="font-semibold text-white">9.5m – 11.5m (Pillarless Spans)</dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <dt className="text-white/60">Floor Load Capacity</dt>
                  <dd className="font-semibold text-white">Up to 5,000 kg/m² (Industrial Slab)</dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <dt className="text-white/60">Overhead Rigging Standard</dt>
                  <dd className="font-semibold text-white">TSF 400mm/520mm Heavy Box Truss</dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <dt className="text-white/60">Power Availability</dt>
                  <dd className="font-semibold text-white">3-Phase 415V AC (Up to 250 kVA per bay)</dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <dt className="text-white/60">Acoustic Signature</dt>
                  <dd className="font-semibold text-white">RT60 ~ 2.4s (Requires Line-Array Directivity)</dd>
                </div>
                <div className="flex justify-between pt-1">
                  <dt className="text-white/60">Loading Bay Clearance</dt>
                  <dd className="font-semibold text-white">Direct Drive-In Access for 40-Foot Trailers</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="serif text-lg font-bold text-white mb-2">Outdoor Grounds &amp; Pagodas</h4>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                HITEX open grounds host large open-air pavilions. The Stage Factory deploys heavy-duty all-weather German Pagodas (5x5m, 10x10m) engineered with concrete ballasting adhering to IS 875 wind velocity standards.
              </p>
              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackWhatsAppClick("hitex_technical_guide")}
                className="btn btn-ghost w-full text-xs"
              >
                Discuss HITEX Rigging Requirements
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 02: HICC Novotel */}
      <Section
        eyebrow="Venue Profile 02 · HICC Novotel"
        title="Hyderabad International Convention Centre (HICC Plenary &amp; Ballrooms)"
        light
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 flex flex-col gap-5 text-sm sm:text-base leading-relaxed text-black/80">
            <p>
              Adjacent to HITEC City, <strong>HICC Novotel</strong> is South Asia’s premier purpose-built convention facility, designed specifically for high-capacity plenaries, international scientific congresses, and global shareholder meetings accommodating up to 6,000 delegates.
            </p>
            <p>
              <strong>Pillarless Plenary Ceiling &amp; Catwalks:</strong> The HICC main hall is entirely pillarless with a clear ceiling height of <strong>12.5 meters</strong>, equipped with an extensive internal motorized catwalk network. This allows TSF-AV to fly d&b audiotechnik line-array loudspeaker clusters and broadcast profile lighting with pinpoint acoustic and photometric accuracy.
            </p>
            <p>
              <strong>Acoustic Mitigation in Expansive Plenary Halls:</strong> With an unmitigated room reverberation time ($RT_{60}$) of approximately 1.8 to 2.1 seconds, large convention spaces can produce vocal muddiness if sound bounces off rear walls. TSF-AV uses d&b ArrayCalc software to design narrow vertical dispersion patterns, focusing acoustic energy directly onto delegate seating zones while steering sound away from reflective reflective balcony glass and side surfaces.
            </p>
            <p>
              <strong>VIP Security &amp; Executive Holding:</strong> HICC features dedicated green rooms, secure underground VIP arrival bays, and soundproof interpreter booths. EventTribe integrates low-latency video monitoring feeds directly into executive holding suites, allowing C-suite presenters to monitor the live plenary in real time.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-xl">
              <span className="eyebrow !text-[#f26b21]">HICC Engineering Parameters</span>
              <h3 className="serif text-xl font-bold text-black mb-4">Plenary Hall Infrastructure</h3>
              <dl className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <dt className="text-black/60">Plenary Capacity</dt>
                  <dd className="font-semibold text-black">Up to 6,000 Delegates (Pillarless)</dd>
                </div>
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <dt className="text-black/60">Ceiling Height</dt>
                  <dd className="font-semibold text-black">12.5m with Motorized Catwalks</dd>
                </div>
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <dt className="text-black/60">Recommended Audio</dt>
                  <dd className="font-semibold text-black">d&b V-Series with Delayed Y-Series Fills</dd>
                </div>
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <dt className="text-black/60">LED Canvas Recommended</dt>
                  <dd className="font-semibold text-black">60ft – 80ft Curved P2.6 Ultra-HD Screen</dd>
                </div>
                <div className="flex justify-between pt-1">
                  <dt className="text-black/60">RF Spectrum Density</dt>
                  <dd className="font-semibold text-black">High (Requires Shure Axient Digital)</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 03: GMR Arena & Luxury Hospitality Plenaries */}
      <Section
        eyebrow="Venue Profile 03 &amp; 04 · Arena &amp; Hospitality Venues"
        title="GMR Arena (Airport Grounds) &amp; Flagship Luxury Ballrooms"
      >
        <div className="grid g2">
          <div className="card">
            <div className="card-img">
              <img src={production} alt="GMR Arena Shamshabad outdoor festival and mega-event technical production" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="serif">GMR Arena (Shamshabad / RGI Airport)</h3>
              <p>
                Hyderabad’s premier open-air venue for arena-scale corporate celebrations, music festivals, and conclaves hosting 10,000 to 25,000 attendees. The Stage Factory constructs certified heavy-duty roof grids, delay sound towers, and multi-tier FOH control structures adhering strictly to IS 875 wind-load engineering. TSF-AV deploys stadium-scale d&b line arrays with long-throw cardioid subwoofers.
              </p>
              <span className="more">Arena-Scale Heavy Staging Specs →</span>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src={conference} alt="Luxury corporate ballroom technical production at ITC Kohenur and Taj properties" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="serif">Luxury Ballrooms (ITC Kohenur, Taj Falaknuma, Marriott)</h3>
              <p>
                Hospitality ballrooms demand architectural discretion, zero cable visibility, and pristine floor protection. The Stage Factory utilizes custom neoprene sub-padding beneath all stage uprights to protect imported marble and hardwood floors. TSF-AV integrates low-profile LED backdrops, micro-beam stage lighting, and silent battery uplighting.
              </p>
              <span className="more">Luxury Ballroom Rigging Standards →</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Lead Magnet Download */}
      <section className="sec">
        <div className="wrap">
          <LeadMagnetSection
            source="venue_guide_page"
            title="Download the Complete Hyderabad Venue Technical Matrix"
            subtitle="The 28-page technical field manual covering HITEX, HICC, GMR Arena, and Taj convention spaces with rigging load charts, electrical busbar layouts, and dock dimensions."
          />
        </div>
      </section>

      <CtaBand />

      <LeadMagnetModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        source="venue_guide_modal"
      />

      <JsonLd
        data={crumbs([
          ["Home", "/"],
          ["Venue Technical Guide", "/hyderabad-venue-av-production-guide"],
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: "Hyderabad Premier Event Venues Technical Production, Rigging & AV Guide",
          description:
            "A comprehensive field engineering guide covering ceiling heights, rigging point-load limits, 3-phase power drop capacities, and acoustic profiles across HITEX, HICC Novotel, and GMR Arena.",
          author: {
            "@type": "Organization",
            name: "EventTribe",
            url: SITE,
          },
          publisher: {
            "@type": "Organization",
            name: "EventTribe",
            logo: {
              "@type": "ImageObject",
              url: "https://eventtribe.in/assets/the-event-tribe-logo.png",
            },
          },
          mainEntityOfPage: "https://eventtribe.in/hyderabad-venue-av-production-guide",
        }}
      />
    </>
  );
}
