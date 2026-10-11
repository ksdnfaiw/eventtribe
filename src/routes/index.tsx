import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/new-hero.jpg";
import conference from "@/assets/hero-stage.jpg";
import production from "@/assets/new-production.jpg";
import { services, events, subBrands } from "@/lib/site-data";
import { Card, CtaBand, JsonLd, Section, crumbs, seo } from "@/components/site";
import { LeadMagnetSection } from "@/components/LeadMagnet";

const why = [
  [
    "Single-Point Turnkey Accountability.",
    "No vendor finger-pointing. The Stage Factory (TSF) and TSF-AV operate under one unified technical director.",
  ],
  [
    "Industrial Pre-Visualization & CAD.",
    "3D stage renderings, rigging weight load calculations, and run-of-show cue sheets finalized weeks before load-in.",
  ],
  [
    "Dual-Redundant Signal & Power Architecture.",
    "Seamless hot-backup video switchers, parallel Dante audio lines, and independent three-phase power generators.",
  ],
  [
    "Engineered for Hyderabad's Premier Venues.",
    "Extensive deployment history across HITEX Exhibition Centre, HICC Novotel, GMR Arena, and flagship convention spaces.",
  ],
];

const process = [
  ["Technical Venue Brief", "We review hall ceiling heights, rigging point-load limits, power drops, and audience sightlines."],
  ["3D CAD Previs & Rider Engineering", "Detailed stage elevations, ArrayCalc acoustic maps, LED pixel matrices, and power distribution schedules."],
  ["Rigging, Load-In & System Tuning", "Certified truss assembly, line-array laser alignment, LED color calibration, and timecode synchronization."],
  ["Live Show Execution", "FOH audio mixing, video cue direction, lighting execution, and multi-camera broadcast management."],
  ["Safe Strike & Technical Handover", "Clean venue load-out, instant multi-track session handover, and comprehensive production debrief."],
];

const faqs = [
  [
    "Who is EventTribe and what are its sub-brands?",
    "EventTribe is the master turnkey event production partner for corporate conferences, AGMs, summits, conclaves, product launches, and mega-events across Hyderabad and South India. Our capabilities are powered by two dedicated in-house divisions: The Stage Factory (TSF) for heavy structural staging, German Pagodas, and certified aluminum box trussing; and TSF-AV for concert-grade d&b audiotechnik sound systems, P2.6 ultra-HD LED video walls, and broadcast switching.",
  ],
  [
    "Can we hire The Stage Factory (TSF) or TSF-AV individually?",
    "Yes. You can engage The Stage Factory exclusively for staging and trussing infrastructure, TSF-AV exclusively for audio/visual engineering, or leverage EventTribe for full turnkey 360-degree event production under single-point technical leadership.",
  ],
  [
    "What equipment brands does TSF-AV deploy for enterprise summits?",
    "Our inventory is standard across global technical riders: d&b audiotechnik V-Series and Y-Series line arrays, Digico and Yamaha digital mixing consoles, Shure Axient wireless RF systems, high-refresh P2.6 mm indoor black-face LED displays, Novastar MX40 Pro video processing, and Barco presentation matrix switchers.",
  ],
  [
    "How does The Stage Factory (TSF) guarantee structural rigging safety?",
    "TSF utilizes certified aluminum box trussing (300mm, 400mm, and 520mm), heavy-duty CM Lodestar motorized chain hoists, and calibrated ground-support towers. Every rigging design includes point-load calculations, structural certificates, and wind rating assessments for outdoor German Pagoda installations.",
  ],
  [
    "Do you handle multi-day conventions and power distribution?",
    "Yes. We design and manage balanced three-phase industrial electrical distribution networks, supported by primary and backup synchronized diesel generators with online double-conversion UPS protection for all critical AV processors.",
  ],
];

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "EventTribe | Master Corporate Event Production Hyderabad",
      "Turnkey corporate event production in Hyderabad. Heavy staging & trussing by The Stage Factory (TSF) and concert audio & P2.6 LED video walls by TSF-AV.",
      "/"
    ),
  component: Home,
});

function Home() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="hero">
        <img
          className="parallax"
          src={hero}
          alt="Enterprise summit plenary arena in Hyderabad with concert audio and P2.6 LED video display backdrop"
        />
        <div className="wrap hero-in">
          <p className="eyebrow rise">Master Corporate Event Production · Hyderabad, Telangana & AP</p>
          <h1 className="serif rise d1">
            Flawless mega-events are <em>engineered.</em>
          </h1>
          <p className="lead rise d2">
            The single accountable partner for large-scale enterprise summits, AGMs, conclaves, and product launches. Powered by <strong>The Stage Factory (TSF)</strong> for heavy structural staging & trussing and <strong>TSF-AV</strong> for concert-grade sound & ultra-HD LED video displays.
          </p>
          <div className="row rise d3">
            <Link className="btn btn-primary" to="/contact">
              Request Technical Proposal
            </Link>
            <a href="#sub-brands" className="btn btn-ghost">
              Explore Our Sub-Brands
            </a>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="marq" aria-label="Production capabilities">
        <div className="marq-track">
          {[0, 1].flatMap((n) =>
            [
              "Turnkey Master Event Production",
              "The Stage Factory: 11+ Yrs Structural Staging & German Pagodas",
              "TSF-AV: d&b audiotechnik Line Arrays & P2.6 LED Walls",
              "Enterprise Conferences, AGMs & Product Launches",
              "Serving HITEX, HICC, GMR Arena & South India",
            ].map((x) => <span key={n + x}>{x}</span>)
          )}
        </div>
      </div>

      {/* ── Introduction ── */}
      <Section light>
        <div className="intro-wrap">
          <p className="eyebrow reveal">Architectural Reliability</p>
          <p className="intro reveal">
            We are the master production partner for corporate enterprises, event planners, and experiential agencies who cannot afford technical failure. We bring two specialized internal divisions under one roof to give you absolute command over your event.
          </p>
        </div>
      </Section>

      {/* ── Sub-Brands Showcase Section ── */}
      <section id="sub-brands" className="sec bg-[#141416] border-y border-white/10">
        <div className="wrap">
          <p className="eyebrow reveal">Brand Architecture & Dedicated Divisions</p>
          <h2 className="serif h2 reveal text-white">The power of two specialized divisions.</h2>

          <div className="grid gap-8 lg:grid-cols-2 mt-12">
            {/* Sub-Brand 1: TSF */}
            <div className="rounded-3xl border border-white/15 bg-[#18181c] p-8 sm:p-10 flex flex-col justify-between hover:border-[#f26b21]/50 transition-colors">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#f26b21]">
                  Sub-Brand 01 · Structural Division
                </span>
                <h3 className="serif text-3xl sm:text-4xl font-medium text-white mt-2">
                  The Stage Factory (TSF)
                </h3>
                <p className="text-sm font-semibold text-white/70 mt-1">
                  11+ Years Industrial Infrastructure & Certified Staging
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  TSF engineers the heavy physical foundation of large-scale events. From certified aluminum box trussing to all-weather German Pagodas and high-load modular staging, our structural work is certified, sightline-calculated, and safety-verified.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-white/70">
                  {subBrands.tsf.capabilities.map((c) => (
                    <li key={c} className="flex items-center gap-2">
                      <span className="text-[#f26b21]">✓</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
                <Link to="/corporate-stage-design-masterclass" className="text-xs font-bold text-[#f26b21] hover:underline">
                  Read Stage Design Masterclass →
                </Link>
                <Link to="/services/$slug" params={{ slug: "staging" }} className="btn btn-ghost text-xs">
                  TSF Inventory & Specs
                </Link>
              </div>
            </div>

            {/* Sub-Brand 2: TSF-AV */}
            <div className="rounded-3xl border border-white/15 bg-[#18181c] p-8 sm:p-10 flex flex-col justify-between hover:border-[#f26b21]/50 transition-colors">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#f26b21]">
                  Sub-Brand 02 · Technology Division
                </span>
                <h3 className="serif text-3xl sm:text-4xl font-medium text-white mt-2">
                  TSF-AV
                </h3>
                <p className="text-sm font-semibold text-white/70 mt-1">
                  Concert-Grade Audio, P2.6 Ultra-HD LED Displays & Broadcast
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  TSF-AV delivers concert-grade sensory impact and crystalline speech intelligibility. Equipped with genuine d&b audiotechnik line arrays, P2.6 mm high-density LED displays, and optical fiber television broadcast pipelines.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-white/70">
                  {subBrands.tsfAv.capabilities.map((c) => (
                    <li key={c} className="flex items-center gap-2">
                      <span className="text-[#f26b21]">✓</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
                <Link to="/large-scale-av-technical-rider-guide" className="text-xs font-bold text-[#f26b21] hover:underline">
                  Read AV Technical Rider Guide →
                </Link>
                <Link to="/services/$slug" params={{ slug: "audio" }} className="btn btn-ghost text-xs">
                  TSF-AV Equipment Rigs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Events Categories ── */}
      <Section eyebrow="Event Categories" title="Precision delivery for high-stakes formats.">
        <div className="grid g4">
          {events.map((e) => (
            <Link key={e.slug} to="/events/$slug" params={{ slug: e.slug }} className="tile reveal">
              <img src={e.image} alt={e.alt} loading="lazy" />
              <div>
                <h3 className="serif">{e.title}</h3>
                <p>{e.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── Services Overview ── */}
      <Section eyebrow="Production Capabilities" title="Everything engineered to work as one.">
        <div className="grid g3">
          {services.map((s, i) => (
            <Card
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              image={s.image}
              alt={s.alt}
              title={s.title}
              text={s.description}
              index={i}
            />
          ))}
        </div>
      </Section>

      {/* ── Why EventTribe ── */}
      <Section light eyebrow="Why EventTribe" title="Calm backstage. Monumental impact out front.">
        <div className="grid g4">
          {why.map(([t, p], i) => (
            <article className="why reveal" key={t}>
              <span className="num">0{i + 1}</span>
              <h3 className="serif">{t}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Featured Enterprise Experience ── */}
      <Section>
        <div className="feat">
          <div className="feat-img reveal">
            <img
              src={conference}
              alt="Plenary hall at HITEX Hyderabad with widescreen P2.6 LED backdrop and d&b audiotechnik line array audio"
              loading="lazy"
            />
          </div>
          <div className="reveal">
            <p className="eyebrow">Enterprise Case Study</p>
            <h2 className="serif h2">High-Stakes Summits & Plenaries.</h2>
            <p className="lead">
              When an enterprise gathers 2,000 shareholders or key executives at HICC Novotel or HITEX, there is zero tolerance for delay or distortion. EventTribe deploys custom-curved P2.6 LED backdrops, acoustic ArrayCalc-modeled sound, and broadcast switching with dual-redundant backup switchers.
            </p>
            <Link className="btn btn-ghost" to="/events/$slug" params={{ slug: "conferences" }}>
              Explore Conference Production
            </Link>
          </div>
        </div>
      </Section>

      {/* ── Lead Magnet Section ── */}
      <section className="sec">
        <div className="wrap">
          <LeadMagnetSection source="homepage_main_embed" />
        </div>
      </section>

      {/* ── Process Steps ── */}
      <Section eyebrow="Operational Workflow" title="From venue brief to the final cue.">
        <div className="steps">
          {process.map(([t, p], i) => (
            <article className="step reveal" key={t}>
              <b>{i + 1}</b>
              <h3>{t}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ── FAQs ── */}
      <Section light eyebrow="Questions & Answers" title="Technical answers for event directors.">
        <div className="faq">
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* ── Closing CTA ── */}
      <CtaBand />

      <JsonLd data={crumbs([["Home", "/"]])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(([q, a]) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }}
      />
    </>
  );
}
