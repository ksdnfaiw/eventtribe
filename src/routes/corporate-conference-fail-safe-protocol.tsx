import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import broadcast from "@/assets/work-broadcast.jpg";
import audio from "@/assets/new-audio.jpg";
import conference from "@/assets/hero-stage.jpg";
import { CtaBand, JsonLd, PageHero, Section, crumbs, seo, WA, PHONE, PHONE_RAW, SITE } from "@/components/site";
import { LeadMagnetSection, LeadMagnetModal } from "@/components/LeadMagnet";
import { trackWhatsAppClick } from "@/lib/analytics";

export const Route = createFileRoute("/corporate-conference-fail-safe-protocol")({
  head: () =>
    seo(
      "Corporate Conference & AGM Fail-Safe Technical AV Protocol | Zero-Glitch Plenaries | EventTribe",
      "Field engineering protocol for mission-critical corporate conferences and AGMs: hot-backup video switchers, dual Dante audio redundancy, online double-conversion UPS, and Shure Axient RF coordination.",
      "/corporate-conference-fail-safe-protocol"
    ),
  component: FailSafeProtocolPage,
});

function FailSafeProtocolPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="TSF-AV Engineering Standard · Plenary Operations"
        title="The Zero-Glitch Corporate AGM &amp; Plenary Fail-Safe Technical Protocol"
        intro="When corporate reputation, regulatory compliance, and billions in market cap rest on a 90-minute keynote or shareholder vote, single points of failure are unacceptable. Here is the redundancy architecture EventTribe engineers into every enterprise plenary."
        image={broadcast}
        alt="Live multi-camera broadcast television switching console with fail-safe optical fiber video links"
      />

      {/* Quick Spec Highlights Bar */}
      <section className="border-b border-white/10 bg-[#121214] py-6 text-xs sm:text-sm">
        <div className="wrap flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#f26b21]" />
            <span className="text-white/70">Video Redundancy:</span>
            <strong className="text-white">Seamless Genlocked Hot-Backup Switchers</strong>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-white/70">Audio Architecture:</span>
            <strong className="text-white">Dante Primary/Secondary + Analog Hard Bypass</strong>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            <span className="text-white/70">Power Security:</span>
            <strong className="text-white">0ms Online True Double-Conversion UPS</strong>
          </div>
          <div>
            <button
              onClick={() => setModalOpen(true)}
              className="text-xs font-semibold text-[#f26b21] underline hover:text-[#ff8138] transition-colors"
            >
              Get Fail-Safe Protocol Guide →
            </button>
          </div>
        </div>
      </section>

      {/* Chapter 01: Video Redundancy */}
      <Section
        eyebrow="Protocol Chapter 01 · Visual Integrity"
        title="Video Switcher &amp; Playback Signal Redundancy"
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 flex flex-col gap-5 text-sm sm:text-base leading-relaxed text-white/80">
            <p>
              In an enterprise plenary or AGM, a frozen presentation slide, blacked-out LED screen, or visible Windows desktop cursor is an intolerable embarrassment. EventTribe enforces strict video signal redundancy across the entire signal chain.
            </p>
            <p>
              <strong>Dual-Laptop Synchronized Playback:</strong> Every presentation runs simultaneously on two mirrored primary and secondary playback workstations. Slide cues are advanced using a <strong>DSAN PerfectCue dual-USB transmitter</strong>, which triggers both laptops with millisecond synchronization. If the primary laptop experiences an OS crash or application stall, the video director hits a single cut button on the Barco presentation matrix switcher to seamlessly transition to the backup machine with zero visual frame drop.
            </p>
            <p>
              <strong>Frame-Synchronized Genlock &amp; Optical Fiber Lines:</strong> To eliminate display latency and tear lines across 60-foot LED canvases, all Novastar MX40 Pro processors and Barco switchers receive a common blackburst/tri-level genlock reference clock. Video signals from backstage control racks to stage LED processors travel via military-grade tactical optical fiber multicore lines, completely immune to electromagnetic interference from heavy stage lighting or generator cables.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl border border-white/15 bg-[#18181c] p-6 shadow-xl">
              <span className="eyebrow !text-[#f26b21]">Visual Redundancy Specs</span>
              <h3 className="serif text-xl font-bold text-white mb-4">Failover Parameters</h3>
              <dl className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <dt className="text-white/60">Video Matrix Switcher</dt>
                  <dd className="font-semibold text-white">Barco E2 / S3 Gen 2 Dual Processing</dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <dt className="text-white/60">Switching Latency</dt>
                  <dd className="font-semibold text-white">&lt; 1 Frame (&lt; 16.6ms at 60Hz)</dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <dt className="text-white/60">Signal Transmission</dt>
                  <dd className="font-semibold text-white">12G-SDI / 4K Optical Fiber Tactical Core</dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <dt className="text-white/60">Slide Cue Hardware</dt>
                  <dd className="font-semibold text-white">DSAN PerfectCue Dual-USB Hot-Trigger</dd>
                </div>
                <div className="flex justify-between pt-1">
                  <dt className="text-white/60">Signal Genlock Status</dt>
                  <dd className="font-semibold text-white">Locked (Tri-Level Sync / Blackburst)</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Section>

      {/* Chapter 02: Audio Network Redundancy */}
      <Section
        eyebrow="Protocol Chapter 02 · Acoustic Security"
        title="Dante Primary/Secondary Network &amp; RF Spectrum Coordination"
        light
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 flex flex-col gap-5 text-sm sm:text-base leading-relaxed text-black/80">
            <p>
              Corporate audio failure can ruin months of executive preparation. TSF-AV deploys a triple-layer audio redundancy architecture designed to guarantee that the spoken word is never lost.
            </p>
            <p>
              <strong>Dual Gigabit Dante Redundancy:</strong> All digital audio streams between stage boxes, Digico digital consoles, and d&b D80 DSP amplifiers operate on two physically isolated Gigabit Ethernet networks: <strong>Dante Primary</strong> and <strong>Dante Secondary</strong>. If any Ethernet cable is severed or a switch port fails, the system switches to the secondary network seamlessly without a click, pop, or interruption.
            </p>
            <p>
              <strong>Hardwired Analog Safety Bypass:</strong> Beneath the digital network lies a pure analog emergency snake cable directly connected from microphone splitters to the analog backup inputs of our d&b system processors. If total network collapse were ever to occur, an uncompressed analog signal is instantly engaged.
            </p>
            <p>
              <strong>RF Spectrum Coordination in Dense Tech Corridors:</strong> In areas like HITEC City, Madhapur, and Gachibowli, the radio frequency (RF) spectrum is heavily congested with corporate Wi-Fi, mobile towers, and walkie-talkies. TSF-AV utilizes <strong>Shure Axient Digital wireless microphone systems</strong> with continuous spectrum scanning via Wireless Workbench (WWB). In Frequency Diversity mode, each executive microphone transmits on two independent carrier frequencies simultaneously; if interference hits one channel, the receiver auto-switches to the clean frequency in microsecond real time.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-xl">
              <span className="eyebrow !text-[#f26b21]">Audio Safety Architecture</span>
              <h3 className="serif text-xl font-bold text-black mb-4">Failover Protocol</h3>
              <dl className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <dt className="text-black/60">Digital Protocol</dt>
                  <dd className="font-semibold text-black">Dual Redundant Dante (48kHz/96kHz 24-bit)</dd>
                </div>
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <dt className="text-black/60">Analog Fallback</dt>
                  <dd className="font-semibold text-black">Dedicated 32-Channel Multicore Snake</dd>
                </div>
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <dt className="text-black/60">Wireless RF Engine</dt>
                  <dd className="font-semibold text-black">Shure Axient Digital (Quadversity Antenna)</dd>
                </div>
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <dt className="text-black/60">Frequency Diversity</dt>
                  <dd className="font-semibold text-black">True Dual-Carrier RF Auto-Switching</dd>
                </div>
                <div className="flex justify-between pt-1">
                  <dt className="text-black/60">Loudspeaker DSP Engine</dt>
                  <dd className="font-semibold text-black">d&b D80 / D40 Amplification Protection</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Section>

      {/* Chapter 03: Electrical Security & 0ms UPS */}
      <Section
        eyebrow="Protocol Chapter 03 · Power Engineering"
        title="Three-Phase Industrial Power &amp; Online True Double-Conversion UPS"
      >
        <div className="grid g2">
          <div className="rounded-2xl border border-white/10 bg-[#141416] p-8">
            <span className="eyebrow !text-[#f26b21]">Electrical Infrastructure</span>
            <h3 className="serif text-2xl font-bold text-white mb-3">Isolated Technical Power Distribution</h3>
            <p className="text-sm text-white/75 leading-relaxed mb-4">
              Sensitive digital audio mixing consoles, LED processors, and broadcast servers cannot share electrical phases with heavy stage lighting dimmers, air-conditioning units, or food catering warming ovens. EventTribe enforces a strict separation between <strong>Clean Technical Power</strong> and <strong>Utility Power</strong>.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70 list-disc list-inside">
              <li>Three-phase load balancing calculated to maintain phase variance under 5%.</li>
              <li>Dedicated copper earthing rods deployed on site ensuring Earth-to-Neutral potential remains below 2.0V AC.</li>
              <li>Dual synchronized diesel generators with automated changeover switches (AMF/ATS).</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#141416] p-8">
            <span className="eyebrow !text-[#f26b21]">0.0 Millisecond Protection</span>
            <h3 className="serif text-2xl font-bold text-white mb-3">Online True Double-Conversion UPS</h3>
            <p className="text-sm text-white/75 leading-relaxed mb-4">
              Standard consumer UPS systems feature a 5 to 10 millisecond transfer delay that will cause enterprise video processors and digital audio consoles to reboot during a power flicker. EventTribe deploys industrial <strong>Online True Double-Conversion UPS systems</strong>.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70 list-disc list-inside">
              <li>Continuous AC to DC to clean AC conversion with true zero (0.0ms) transfer time.</li>
              <li>Full galvanically isolated transformers protecting electronics from municipal spikes.</li>
              <li>Dedicated 45-minute battery autonomy providing abundant buffer for generator failover.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Lead Magnet Download */}
      <section className="sec">
        <div className="wrap">
          <LeadMagnetSection
            source="fail_safe_protocol_page"
            title="Download the Complete AGM &amp; Plenary Fail-Safe SOP"
            subtitle="The exact 38-point operational standard operating procedure used by EventTribe Technical Directors across Hyderabad."
          />
        </div>
      </section>

      <CtaBand />

      <LeadMagnetModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        source="fail_safe_protocol_modal"
      />

      <JsonLd
        data={crumbs([
          ["Home", "/"],
          ["Plenary Fail-Safe Protocol", "/corporate-conference-fail-safe-protocol"],
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: "Corporate Conference & AGM Fail-Safe Technical AV Protocol",
          description:
            "A comprehensive field engineering protocol for corporate conferences and AGMs detailing hot-backup video switchers, dual Dante audio redundancy, online double-conversion UPS, and Shure Axient RF coordination.",
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
          mainEntityOfPage: "https://eventtribe.in/corporate-conference-fail-safe-protocol",
        }}
      />
    </>
  );
}

