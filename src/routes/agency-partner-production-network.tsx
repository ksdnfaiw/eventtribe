import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import production from "@/assets/new-production.jpg";
import conference from "@/assets/hero-stage.jpg";
import audio from "@/assets/new-audio.jpg";
import { CtaBand, JsonLd, PageHero, Section, crumbs, seo, WA, PHONE, PHONE_RAW, SITE } from "@/components/site";
import { LeadMagnetSection, LeadMagnetModal } from "@/components/LeadMagnet";
import { trackWhatsAppClick } from "@/lib/analytics";

export const Route = createFileRoute("/agency-partner-production-network")({
  head: () =>
    seo(
      "Event Agency Partner Production Network Hyderabad | White-Label Staging & AV | EventTribe",
      "The dedicated technical production backbone for event management agencies, creative producers, and exhibition organizers in Hyderabad. 100% owned inventory, white-label execution, and transparent trade pricing.",
      "/agency-partner-production-network"
    ),
  component: AgencyPartnerPage,
});

function AgencyPartnerPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Agency Partner Network · Hyderabad & South India"
        title="The Technical Production Backbone for Event Management Agencies & Creative Producers"
        intro="You craft the brand experience, pitch the vision, and lead the client relationship. We engineer, rig, power, and execute the technical infrastructure with 100% white-label discretion, direct inventory ownership, and zero excuses."
        image={production}
        alt="Technical event production control room with digital consoles and multi-screen video mapping"
      />

      {/* Quick Spec Highlights Bar */}
      <section className="border-b border-white/10 bg-[#121214] py-6 text-xs sm:text-sm">
        <div className="wrap flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#f26b21]" />
            <span className="text-white/70">Inventory Authority:</span>
            <strong className="text-white">100% Direct Ownership (No Brokers)</strong>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-white/70">Partnership Model:</span>
            <strong className="text-white">100% White-Label & Client Non-Solicitation</strong>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            <span className="text-white/70">Turnaround Speed:</span>
            <strong className="text-white">24-Hour 3D CAD & Technical Feasibility</strong>
          </div>
          <div>
            <button
              onClick={() => setModalOpen(true)}
              className="text-xs font-semibold text-[#f26b21] underline hover:text-[#ff8138] transition-colors"
            >
              Request Agency Rate Card →
            </button>
          </div>
        </div>
      </section>

      {/* Section 01: The Agency Reality */}
      <Section
        eyebrow="Section 01 · The Agency Advantage"
        title="Why Top Event Agencies Choose EventTribe as Their Technical Arm"
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 flex flex-col gap-5 text-sm sm:text-base leading-relaxed text-white/80">
            <p>
              As an event management agency, creative director, or professional conference organizer (PCO), your reputation is on the line every time you step into a pitch. Yet many agencies are forced to rely on third-party equipment brokers who sub-rent aging sound gear from one vendor, dented trussing from another, and uncalibrated LED panels from a third. The result? Last-minute technical compromises, uncoordinated crews, and margin erosion.
            </p>
            <p>
              <strong>EventTribe solves the agency production dilemma.</strong> We are not brokers. We are the direct physical owners and operators of industrial-scale event infrastructure across Hyderabad and South India.
            </p>
            <p>
              Through <strong>The Stage Factory (TSF)</strong>, we manufacture and maintain thousands of meters of certified aluminum box trussing, German Pagodas, and heavy modular stage decking. Through <strong>TSF-AV</strong>, we own concert-grade d&b audiotechnik line array systems, Novastar MX40 Pro processors, and high-refresh P2.6 mm LED panels.
            </p>

            <div className="my-2 rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="font-bold text-white text-base mb-3 flex items-center gap-2">
                <span className="text-[#f26b21]">🤝</span> The EventTribe Agency Partnership Charter
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/75 list-disc list-inside">
                <li>
                  <strong>Strict Client Protection & Non-Solicitation:</strong> Your corporate clients belong to you. We execute strict non-compete agreements. We never market or solicit your end-clients directly.
                </li>
                <li>
                  <strong>Seamless White-Label Execution:</strong> Our on-site engineering crews wear neutral black technical apparel or your agency-branded attire. We operate as your in-house technical department.
                </li>
                <li>
                  <strong>Pre-Pitch Technical Support:</strong> We supply 3D Vectorworks stage elevations, acoustic prediction plots, and equipment weight certifications to strengthen your client proposal decks at zero charge.
                </li>
                <li>
                  <strong>Protected Trade Margins:</strong> Direct inventory ownership allows us to provide transparent, standardized trade pricing that preserves your agency profitability.
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl border border-white/15 bg-[#18181c] p-6 shadow-xl">
              <span className="eyebrow !text-[#f26b21]">Direct Technical Arsenal</span>
              <h3 className="serif text-xl font-bold text-white mb-4">Fully Owned Inventory Highlights</h3>
              <dl className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <dt className="text-white/60">Trussing Profiles</dt>
                  <dd className="font-semibold text-white">300mm, 400mm, 520mm Box Truss (EN AW-6082 T6)</dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <dt className="text-white/60">Acoustic Audio</dt>
                  <dd className="font-semibold text-white">d&b audiotechnik V-Series &amp; Y-Series Line Arrays</dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <dt className="text-white/60">Indoor LED Video</dt>
                  <dd className="font-semibold text-white">P2.6 mm Black-Face SMD 3840Hz Panels</dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <dt className="text-white/60">Video Matrix Control</dt>
                  <dd className="font-semibold text-white">Novastar MX40 Pro &amp; Barco Presentation Switchers</dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <dt className="text-white/60">Wireless RF Protocol</dt>
                  <dd className="font-semibold text-white">Shure Axient Digital (WWBD Coordinated)</dd>
                </div>
                <div className="flex justify-between pt-1">
                  <dt className="text-white/60">Outdoor Shelters</dt>
                  <dd className="font-semibold text-white">German Pagodas (5x5m, 10x10m Wind-Rated)</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="serif text-lg font-bold text-white mb-2">Out-of-State Agency Support</h4>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                Managing an enterprise conference in Hyderabad from Mumbai, Bengaluru, Delhi, or abroad? EventTribe acts as your local boots-on-the-ground technical team, handling venue logistics at HITEX or HICC seamlessly on your behalf.
              </p>
              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackWhatsAppClick("agency_network_whatsapp")}
                className="btn btn-ghost w-full text-xs"
              >
                Connect with Agency Partnership Lead
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 02: Agency Partnership Workflow */}
      <Section
        eyebrow="Section 02 · Collaborative Delivery"
        title="How We Integrate with Your Agency Workflow"
        light
      >
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <span className="num text-[#f26b21] font-bold text-sm">STEP 01</span>
            <h3 className="serif text-lg font-bold text-black mt-2 mb-3">RFP &amp; 3D Previs Support</h3>
            <p className="text-xs sm:text-sm text-black/75 leading-relaxed">
              Send us your initial venue brief. Within 24 hours, we return verified stage CAD elevations, equipment weight calculations, and technical rider compatibility notes to embed directly into your client pitch deck.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <span className="num text-[#f26b21] font-bold text-sm">STEP 02</span>
            <h3 className="serif text-lg font-bold text-black mt-2 mb-3">Venue Liaison &amp; Approvals</h3>
            <p className="text-xs sm:text-sm text-black/75 leading-relaxed">
              We coordinate directly with venue engineering at HITEX, HICC, GMR Arena, or hotel ballrooms to secure ceiling point-load permissions, electrical power feeder taps, and dock loading access schedules.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <span className="num text-[#f26b21] font-bold text-sm">STEP 03</span>
            <h3 className="serif text-lg font-bold text-black mt-2 mb-3">White-Label Load-In &amp; Rigging</h3>
            <p className="text-xs sm:text-sm text-black/75 leading-relaxed">
              Our certified rigging and AV crews arrive on site wearing your agency apparel or neutral black uniforms. We execute load-in according to schedule, maintaining clean cable management and a professional backstage appearance.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <span className="num text-[#f26b21] font-bold text-sm">STEP 04</span>
            <h3 className="serif text-lg font-bold text-black mt-2 mb-3">Flawless Live Execution</h3>
            <p className="text-xs sm:text-sm text-black/75 leading-relaxed">
              During rehearsals and live cues, our senior Technical Director works side-by-side with your Agency Show Director over unified wireless intercom, ensuring lighting, video, and audio align with microsecond precision.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 03: Agency FAQs */}
      <Section
        eyebrow="Section 03 · Agency Partnership FAQs"
        title="Answers for Agency Producers & Creative Directors"
      >
        <div className="space-y-4 max-w-4xl">
          {[
            [
              "Do you ever approach or solicit our corporate clients after the event?",
              "Never. We uphold an uncompromising agency non-solicitation code. All post-event communication, invoicing, and subsequent event enquiries remain exclusively between you and your client. We operate strictly as your behind-the-scenes engineering partner.",
            ],
            [
              "Can our creative directors inspect your Hyderabad warehouse inventory prior to signing?",
              "Yes. We welcome agency partners to our Secunderabad warehouse and fabrication yard to inspect our certified aluminum box trussing, d&b audiotechnik line array inventory, Novastar processing racks, and LED panels in person.",
            ],
            [
              "Can EventTribe provide white-label crew attire with our agency logo?",
              "Yes. If provided with agency-branded technical crew polo shirts or badges, our on-site team will wear them throughout load-in, rehearsal, and show operations. Alternatively, our crews wear clean, neutral black unbranded technical apparel.",
            ],
            [
              "How do trade pricing and payment terms work for verified agency partners?",
              "Verified agency partners receive preferential B2B trade pricing with standardized tiered rate cards. We provide transparent, itemized technical quotations that allow you to structure client pricing and retain healthy margins.",
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
            source="agency_partner_network_page"
            title="Download the Agency Technical Production & Venue Matrix"
            subtitle="The complete agency guide to Hyderabad venue ceiling heights, rigging point-load limits, and equipment rider specifications."
          />
        </div>
      </section>

      <CtaBand />

      <LeadMagnetModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        source="agency_partner_modal"
      />

      <JsonLd
        data={crumbs([
          ["Home", "/"],
          ["Agency Partner Network", "/agency-partner-production-network"],
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Event Agency Partner Production Network Hyderabad",
          serviceType: "White-Label Event Production & AV Infrastructure",
          description:
            "Dedicated technical event production and staging backbone for event management agencies, creative producers, and exhibition organizers in Hyderabad.",
          areaServed: ["Hyderabad", "Secunderabad", "Telangana", "Andhra Pradesh", "South India"],
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
              name: "Do you ever approach or solicit our corporate clients after the event?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Never. We uphold an uncompromising agency non-solicitation code. All communication, invoicing, and subsequent event enquiries remain exclusively between you and your client.",
              },
            },
            {
              "@type": "Question",
              name: "Can our creative directors inspect your Hyderabad warehouse inventory prior to signing?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We welcome agency partners to our Secunderabad warehouse to inspect our certified aluminum box trussing, d&b audiotechnik line array inventory, and LED panels in person.",
              },
            },
          ],
        }}
      />
    </>
  );
}
