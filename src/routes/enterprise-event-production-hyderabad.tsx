import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import conference from "@/assets/hero-stage.jpg";
import production from "@/assets/new-production.jpg";
import speaker from "@/assets/work-keynote.jpg";
import { CtaBand, JsonLd, PageHero, Section, crumbs, seo, WA, PHONE, PHONE_RAW, SITE } from "@/components/site";
import { LeadMagnetSection, LeadMagnetModal } from "@/components/LeadMagnet";
import { trackWhatsAppClick } from "@/lib/analytics";

export const Route = createFileRoute("/enterprise-event-production-hyderabad")({
  head: () =>
    seo(
      "Enterprise Corporate Event Production Hyderabad | Turnkey AGMs & Summits | EventTribe",
      "Single-point accountable turnkey technical production for high-stakes corporate conferences, AGMs, leadership summits, and conclaves across Hyderabad, HITEX, and HICC.",
      "/enterprise-event-production-hyderabad"
    ),
  component: EnterpriseProductionPage,
});

function EnterpriseProductionPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Enterprise Client Acquisition · Hyderabad & South India"
        title="Turnkey Event Production for High-Stakes Corporate Summits, AGMs & Conclaves"
        intro="When global leadership, thousands of delegates, and worldwide investors assemble in Hyderabad, technical execution must be flawless. EventTribe unites certified structural staging (The Stage Factory) and concert-grade audiovisual infrastructure (TSF-AV) under single-point technical accountability."
        image={conference}
        alt="High-stakes corporate plenary summit stage with wide-format P2.6 LED screen in Hyderabad"
      />

      {/* Quick Spec Highlights Bar */}
      <section className="border-b border-white/10 bg-[#121214] py-6 text-xs sm:text-sm">
        <div className="wrap flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#f26b21]" />
            <span className="text-white/70">Accountability:</span>
            <strong className="text-white">Single Technical Director On-Site</strong>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-white/70">Redundancy:</span>
            <strong className="text-white">Dual-Redundant Signal, Dante & 0ms UPS</strong>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            <span className="text-white/70">Venues Mastered:</span>
            <strong className="text-white">HITEX, HICC Novotel, GMR Arena, ITC Kohenur</strong>
          </div>
          <div>
            <button
              onClick={() => setModalOpen(true)}
              className="text-xs font-semibold text-[#f26b21] underline hover:text-[#ff8138] transition-colors"
            >
              Get Enterprise Technical Checklist →
            </button>
          </div>
        </div>
      </section>

      {/* Section 01: The Enterprise Production Reality */}
      <Section
        eyebrow="Section 01 · Single-Point Accountability"
        title="Eliminating the Multi-Vendor Fragility Trap"
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 flex flex-col gap-5 text-sm sm:text-base leading-relaxed text-white/80">
            <p>
              In corporate event production, the greatest operational risk is not equipment capability—it is vendor fragmentation. When an enterprise hires one vendor for staging, another for sound, a third for LED screens, and a fourth for diesel generators, operational boundaries become fractures. When an audio line hums or an LED tile flickers during a CEO keynote, each vendor blames the other’s grounding or cables.
            </p>
            <p>
              <strong>EventTribe eliminates that risk entirely.</strong> We operate as the single master production partner contractually and technically accountable for the entire room. Our dedicated structural division, <strong>The Stage Factory (TSF)</strong>, manufactures and erects the certified staging and overhead trussing. Our audiovisual division, <strong>TSF-AV</strong>, deploys concert-grade d&b audiotechnik line arrays, Novastar-driven P2.6 LED canvases, and broadcast television switching.
            </p>
            <p>
              You communicate with one senior Technical Director who orchestrates rehearsal schedules, oversees venue load-in logistics, enforces international safety codes, and calls the cues live during the plenary.
            </p>

            <div className="my-2 rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="font-bold text-white text-base mb-3 flex items-center gap-2">
                <span className="text-[#f26b21]">🛡️</span> The EventTribe Enterprise Assurance Standard
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/75 list-disc list-inside">
                <li>
                  <strong>Comprehensive Mutual NDA Execution:</strong> Enterprise financial decks, product launch prototypes, and executive speech transcripts remain strictly confidential.
                </li>
                <li>
                  <strong>3D Vectorworks & CAD Site Plans:</strong> Millimeter-accurate stage elevations, delegate sightline angles, and rigging point loads submitted weeks before load-in.
                </li>
                <li>
                  <strong>Zero-Tolerance Redundancy:</strong> Primary and secondary hot-backup video switchers, parallel digital Dante audio lines, and 0ms online double-conversion UPS battery banks.
                </li>
                <li>
                  <strong>Direct Inventory Ownership:</strong> No sub-rentals, no third-party equipment substitutions, and no surprise rental house surcharges.
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl border border-white/15 bg-[#18181c] p-6 shadow-xl">
              <span className="eyebrow !text-[#f26b21]">Key Executive Metrics</span>
              <h3 className="serif text-xl font-bold text-white mb-4">Enterprise Event Architecture</h3>
              <dl className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <dt className="text-white/60">Delegates Accommodated</dt>
                  <dd className="font-semibold text-white">500 to 10,000+ Pax</dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <dt className="text-white/60">Speech Intelligibility Standard</dt>
                  <dd className="font-semibold text-white">STI &gt; 0.65 (Uniform Across All Tiers)</dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <dt className="text-white/60">Visual Canvas Resolution</dt>
                  <dd className="font-semibold text-white">Native 4K / 8K Uncompressed 3840Hz</dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <dt className="text-white/60">Power Backup Transfer Time</dt>
                  <dd className="font-semibold text-white">0.0 milliseconds (True Double-Conversion)</dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <dt className="text-white/60">Structural Safety Factor</dt>
                  <dd className="font-semibold text-white">10:1 Rigging / IS 875 Wind Compliance</dd>
                </div>
                <div className="flex justify-between pt-1">
                  <dt className="text-white/60">Lead-In Planning Window</dt>
                  <dd className="font-semibold text-white">3D CAD Previs 14–30 Days Ahead</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="serif text-lg font-bold text-white mb-2">Venue Technical Authority</h4>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                We maintain active deployment experience and established rigging liaison across all major convention properties in Hyderabad, including HITEX Exhibition Centre (Halls 1–4), HICC Novotel Plenary Hall, GMR Arena, and Taj Falaknuma.
              </p>
              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackWhatsAppClick("enterprise_venue_authority")}
                className="btn btn-ghost w-full text-xs"
              >
                Direct Technical WhatsApp Consult
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 02: Plenary Engineering & Executive Comfort */}
      <Section
        eyebrow="Section 02 · Executive Stage Environment"
        title="Engineered for C-Suite Confidence & Investor Impact"
        light
      >
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <span className="eyebrow !text-[#f26b21]">Vocal Acoustics</span>
            <h3 className="serif text-xl font-bold text-black mb-3">d&b audiotechnik Vocal Precision</h3>
            <p className="text-sm text-black/75 leading-relaxed">
              When a Fortune 500 CEO or Union Minister addresses the plenary, every syllable must be crystal clear without harsh treble or boomy reverberation. TSF-AV utilizes d&b ArrayCalc software to design acoustic line-array hangs tailored specifically to the room dimensions, ensuring pristine speech intelligibility from the front row VIP sofas to the furthest rear tier.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <span className="eyebrow !text-[#f26b21]">Visual Clarity</span>
            <h3 className="serif text-xl font-bold text-black mb-3">P2.6 Black-Face Ultra-HD Displays</h3>
            <p className="text-sm text-black/75 leading-relaxed">
              Investor presentations and financial charts require pinpoint visual clarity. Our P2.6 mm indoor LED canvases feature ultra-high refresh rates (3840Hz), zero camera moiré, and true 16-bit color depth. Live broadcast television cameras and delegate smartphones capture crisp, glitch-free visuals without horizontal scan lines or color banding.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <span className="eyebrow !text-[#f26b21]">Presenter Comfort</span>
            <h3 className="serif text-xl font-bold text-black mb-3">Prompter & Confidence Systems</h3>
            <p className="text-sm text-black/75 leading-relaxed">
              Executive speakers demand seamless on-stage support. We provide low-profile 32-inch DSM confidence monitors recessed into stage fascia, wireless presidential glass teleprompters, DSAN PerfectCue RF slide advancers with redundant laptop switching, and discrete countdown timers synchronized with the master control room.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 03: The Enterprise Event Formats */}
      <Section
        eyebrow="Section 03 · Enterprise Event Scope"
        title="Turnkey Production Across Major Corporate Formats"
      >
        <div className="grid g2">
          <div className="card">
            <div className="card-img">
              <img src={conference} alt="Corporate Annual General Meeting AGM production in Hyderabad" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="serif">Annual General Meetings (AGMs) & Shareholder Conclaves</h3>
              <p>
                Strict legal and regulatory compliance demands uninterrupted audio recording, secure voting display pipelines, and broadcast-grade live webcasting for institutional shareholders. We engineer redundant signal loops and verified audio transcription feeds.
              </p>
              <span className="more">HITEX & HICC Plenary Infrastructure →</span>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src={production} alt="High impact enterprise product launch reveal stage in Hyderabad" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="serif">Flagship Product Reveals & Industry Summits</h3>
              <p>
                Theatrical reveal mechanisms designed by The Stage Factory: motorized kabuki drop systems, curved LED video tunnels, SMPTE timecode-synchronized lighting sweeps, and cryogenic atmospheric effects designed for global press coverage.
              </p>
              <span className="more">Theatrical Staging & Reveal Engineering →</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 04: Enterprise FAQs */}
      <Section
        eyebrow="Section 04 · Enterprise FAQs"
        title="Answers for Corporate Event Planners & Procurement Heads"
      >
        <div className="space-y-4 max-w-4xl">
          {[
            [
              "How far in advance should an enterprise engage EventTribe for a major Hyderabad summit?",
              "For large-scale plenaries (1,000+ delegates at HITEX or HICC), we recommend initiating technical planning 30 to 60 days prior to load-in. This provides adequate lead time for 3D Vectorworks site modeling, rigging point-load approvals with venue engineering, municipal electrical compliance, and custom stage set fabrication. For urgent requirements, our fully owned inventory enables rapid 72-hour turnkey mobilization.",
            ],
            [
              "How does EventTribe handle confidential corporate presentations and NDAs?",
              "We execute mutual non-disclosure agreements (NDAs) prior to receiving event briefs, presentation slide decks, or architectural renderings. All video playback laptops and switchers operate on private, air-gapped local networks with no cloud syncing. Presentation files are stored on encrypted solid-state drives and permanently purged upon event strike.",
            ],
            [
              "What happens if there is an unexpected power outage or venue electrical surge?",
              "Every EventTribe enterprise plenary operates on an isolated electrical infrastructure. We deploy synchronized primary and secondary diesel generators. All mission-critical audiovisual processors, digital audio mixing consoles, and master LED video controllers are protected by online true double-conversion Uninterruptible Power Supplies (UPS), ensuring 0.0-millisecond transfer time and pristine clean sine-wave electricity.",
            ],
            [
              "Can EventTribe manage breakout sessions, exhibition pavilions, and VIP lounges simultaneously?",
              "Yes. In addition to the main plenary auditorium, our production teams handle simultaneous multi-track breakout halls (with individual line-array sound and LED/projection packages), outdoor exhibition German Pagoda villages, VIP speaker holding rooms with low-latency feed monitors, and press conference broadcast suites.",
            ],
          ].map(([q, a], idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-[#141416] p-6">
              <h4 className="font-bold text-white text-base sm:text-lg mb-2">{q}</h4>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Lead Magnet Download */}
      <section className="sec">
        <div className="wrap">
          <LeadMagnetSection
            source="enterprise_acquisition_page"
            title="Download the Enterprise Event Technical Planning Checklist"
            subtitle="The 42-point technical verification guide covering HITEX/HICC floor loads, 3-phase power balancing, and zero-glitch AV rider architecture."
          />
        </div>
      </section>

      <CtaBand />

      <LeadMagnetModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        source="enterprise_acquisition_modal"
      />

      <JsonLd
        data={crumbs([
          ["Home", "/"],
          ["Enterprise Production", "/enterprise-event-production-hyderabad"],
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Enterprise Corporate Event Production Hyderabad",
          serviceType: "Turnkey Corporate Event Production",
          description:
            "Single-point accountable turnkey technical production for enterprise conferences, AGMs, leadership summits, and conclaves in Hyderabad.",
          areaServed: ["Hyderabad", "Secunderabad", "Telangana", "Andhra Pradesh"],
          provider: {
            "@type": "LocalBusiness",
            name: "EventTribe",
            url: SITE,
            telephone: PHONE_RAW,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Plot No. 106, Durga Vihar, 4th Cross Road, Lal Bazar, GunRock, Tirumalgiri",
              addressLocality: "Secunderabad",
              addressRegion: "Telangana",
              postalCode: "500009",
              addressCountry: "IN",
            },
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How far in advance should an enterprise engage EventTribe for a major Hyderabad summit?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "For large-scale plenaries (1,000+ delegates at HITEX or HICC), we recommend initiating technical planning 30 to 60 days prior to load-in. For urgent requirements, our fully owned inventory enables rapid 72-hour turnkey mobilization.",
              },
            },
            {
              "@type": "Question",
              name: "How does EventTribe handle confidential corporate presentations and NDAs?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We execute mutual non-disclosure agreements (NDAs) prior to receiving event briefs. All video playback laptops and switchers operate on private, air-gapped local networks with no cloud syncing.",
              },
            },
            {
              "@type": "Question",
              name: "What happens if there is an unexpected power outage or venue electrical surge?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Every EventTribe enterprise plenary operates on an isolated electrical infrastructure with synchronized diesel generators and online true double-conversion UPS battery banks ensuring 0ms transfer time.",
              },
            },
          ],
        }}
      />
    </>
  );
}
