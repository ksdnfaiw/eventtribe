import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import audio from "@/assets/new-audio.jpg";
import production from "@/assets/new-production.jpg";
import broadcast from "@/assets/work-broadcast.jpg";
import { CtaBand, JsonLd, PageHero, Section, crumbs, seo, WA, PHONE, PHONE_RAW, SITE } from "@/components/site";
import { LeadMagnetSection, LeadMagnetModal } from "@/components/LeadMagnet";
import { trackWhatsAppClick } from "@/lib/analytics";

export const Route = createFileRoute("/large-scale-av-technical-rider-guide")({
  head: () =>
    seo(
      "Large-Scale AV Technical Rider Guide | TSF-AV by EventTribe Hyderabad",
      "Technical specifications for concert-grade d&b audiotechnik line arrays, P2.6 ultra-HD LED video walls, Novastar MX40 Pro processing, and power distribution.",
      "/large-scale-av-technical-rider-guide"
    ),
  component: AvTechnicalRiderGuide,
});

function AvTechnicalRiderGuide() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="TSF-AV · Enterprise Technical Rider Manual"
        title="Large-Scale AV Technical Rider Guide: Engineering Fail-Safe Corporate Summits"
        intro="The definitive equipment specification and acoustic calculation manual for technical directors and corporate producers deploying d&b line arrays, P2.6 ultra-HD LED walls, Barco 4K matrix switching, and isolated power across Hyderabad."
        image={audio}
        alt="Audio engineer mixing live sound on a digital console with d&b audiotechnik line arrays"
      />

      {/* Quick Spec Highlights Bar */}
      <section className="border-b border-white/10 bg-[#121214] py-6 text-xs sm:text-sm">
        <div className="wrap flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#f26b21]" />
            <span className="text-white/70">Acoustic System:</span>
            <strong className="text-white">d&b audiotechnik V-Series & Y-Series</strong>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-white/70">Display Processing:</span>
            <strong className="text-white">P2.6mm (3840Hz) · Novastar MX40 Pro</strong>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            <span className="text-white/70">Switching Pipeline:</span>
            <strong className="text-white">Barco E2 / S3 4K60 Genlocked Matrix</strong>
          </div>
          <div>
            <button
              onClick={() => setModalOpen(true)}
              className="text-xs font-semibold text-[#f26b21] underline hover:text-[#ff8138] transition-colors"
            >
              Download Complete Rider PDF/Text →
            </button>
          </div>
        </div>
      </section>

      {/* Section 01: Concert-Grade Audio Engineering */}
      <Section
        eyebrow="Section 01 · Electro-Acoustic Engineering"
        title="Concert-Grade Sound for Corporate Summits: The Physics of Intelligibility"
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 flex flex-col gap-5 text-sm sm:text-base leading-relaxed text-white/80">
            <p>
              Corporate audio operates under a fundamental paradox: plenary speeches demand absolute speech intelligibility (Speech Transmission Index <strong>STI &gt; 0.65</strong>) with minimal room reverberation, while award reveals and executive walk-in stings require <strong>105 dB dynamic concert punch</strong> without distortion or harshness.
            </p>
            <p>
              Standard hotel PA systems and conventional point-source loudspeakers obey the <strong>inverse square law ($1/r^2$)</strong>, losing <strong>6 dB of Sound Pressure Level (SPL)</strong> every time the distance doubles. To reach the 30th row, point sources must be driven to deafening levels in front, causing feedback on CEO lectern microphones and high room excitation off reflective ballroom walls.
            </p>

            <div className="my-2 rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="font-bold text-white text-base mb-3 flex items-center gap-2">
                <span className="text-[#f26b21]">🔊</span> The Line Array Advantage: Cylindrical Wavefront Physics
              </h4>
              <p className="text-xs sm:text-sm text-white/75 mb-3">
                A line array of acoustically coupled drivers forms a coherent cylindrical wavefront in the near field. This reduces sound attenuation to only <strong>3 dB per distance doubling ($1/r$)</strong>. The result: delegates in Row 1 and delegates in Row 40 experience virtually identical vocal clarity without front-row ear fatigue.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 text-xs text-white/80">
                <div className="p-3 rounded-xl bg-black/30 border border-white/10">
                  <strong className="text-[#f26b21] block mb-1">d&b audiotechnik V-Series</strong>
                  3-way passive line array (dual 10&quot; LF, 8&quot; MF, dual 1.4&quot; HF) with 142 dB max SPL. Engineered for large plenaries up to 5,000 delegates.
                </div>
                <div className="p-3 rounded-xl bg-black/30 border border-white/10">
                  <strong className="text-emerald-400 block mb-1">d&b audiotechnik Y-Series</strong>
                  Compact 2-way line array (dual 8&quot; LF, 1.4&quot; HF) with 136 dB max SPL. Ideal for mid-sized luxury hotel ballrooms (HICC, Marriott, ITC Kohenur).
                </div>
              </div>
            </div>

            <p>
              <strong>Cardioid Subwoofer Directivity:</strong> Low-frequency stage rumble is the primary cause of muddy corporate audio. TSF-AV deploys <strong>d&b V-SUBs featuring patented passive cardioid technology</strong> (an 18&quot; forward-facing driver and a 12&quot; rear-facing driver operating in an integrated bass-reflex chamber). This cancels out <strong>15 to 20 dB of rearward bass energy</strong>, creating a whisper-quiet stage environment where sensitive headworn DPA lapel microphones can be pushed for high gain before feedback.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl border border-white/15 bg-[#18181c] p-6 shadow-xl">
              <span className="eyebrow !text-[#f26b21]">Electro-Acoustic Rig Specs</span>
              <h3 className="serif text-xl font-bold text-white mb-4">TSF-AV Audio Specification Standard</h3>
              <div className="space-y-3 text-xs sm:text-sm text-white/80">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">Primary Arrays</span>
                  <span className="font-semibold text-white">d&b V-Series / Y-Series Line Array</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">Subwoofer Directivity</span>
                  <span className="font-semibold text-white">d&b V-SUB Cardioid (18&quot; + 12&quot;)</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">System Amplification</span>
                  <span className="font-semibold text-white">d&b D80 DSP (4x4000W @ 4Ω)</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">Mixing Consoles</span>
                  <span className="font-semibold text-white">DiGiCo SD-Series / Yamaha CL5</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">Network Protocol</span>
                  <span className="font-semibold text-white">Dante Primary/Secondary + Analog Split</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">Wireless Management</span>
                  <span className="font-semibold text-white">Shure Axient Digital (AD4Q)</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-white/60">Prediction Software</span>
                  <span className="font-semibold text-emerald-400">d&b ArrayCalc 3D Simulation</span>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-white/5 p-4 border border-white/10 text-xs text-white/70">
                <strong className="text-white block mb-1">Spectrum Coordination Note:</strong>
                Hyderabad’s IT corridor (Hitec City/Gachibowli) has dense cellular and TV transmitter traffic. TSF-AV conducts an on-site RF spectrum scan using Shure Wireless Workbench to lock in clean intermodulation-free frequencies.
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src={broadcast}
                alt="TSF-AV sound engineer managing digital mix console during live corporate session"
                className="w-full object-cover h-48"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <p className="text-xs text-white/90 font-medium">Digital multi-track recording & isolated press feeds</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 02: P2.6 Ultra-HD LED Wall Calculation */}
      <Section
        eyebrow="Section 02 · Visual Display Physics"
        title="P2.6 LED Wall Pixel Pitch Math, Aspect Ratios & 4K Processing"
      >
        <div className="mb-6 max-w-3xl text-sm sm:text-base text-white/80 leading-relaxed">
          <p>
            Specifying LED display screens for corporate keynotes requires rigorous optical mathematics. Specifying an overly coarse pixel pitch causes visible pixel grid dots (screen-door effect) and severe camera sensor moiré patterns, while an improperly mapped canvas causes blurry, stretched corporate typography.
          </p>
        </div>

        {/* Pixel Pitch Selection Matrix */}
        <div className="overflow-x-auto rounded-2xl border border-white/15 bg-[#141416]">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-white/10 bg-white/5 text-white">
              <tr>
                <th className="p-4 font-bold">Pixel Pitch</th>
                <th className="p-4 font-bold">Cabinet Resolution (500x500mm)</th>
                <th className="p-4 font-bold">Min Viewing Distance</th>
                <th className="p-4 font-bold">Refresh Rate & Driver</th>
                <th className="p-4 font-bold">Best Use Case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-white/80">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-semibold text-white">
                  P1.9 mm
                  <span className="block text-[11px] text-sky-400 font-normal">Ultra-Fine Pitch</span>
                </td>
                <td className="p-4 font-mono">256 × 256 pixels</td>
                <td className="p-4">1.9 meters (6.2 ft)</td>
                <td className="p-4 font-mono">3840Hz · Macroblock 5359</td>
                <td className="p-4">Boardroom command centers, luxury VIP car reveals, studio close-up broadcast.</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors bg-white/[0.03]">
                <td className="p-4 font-semibold text-white">
                  P2.6 mm (TSF-AV Gold Standard)
                  <span className="block text-[11px] text-[#f26b21] font-normal">Enterprise Plenary Default</span>
                </td>
                <td className="p-4 font-mono">192 × 192 pixels</td>
                <td className="p-4 font-semibold text-emerald-400">2.6 meters (8.5 ft)</td>
                <td className="p-4 font-mono">3840Hz · Black SMD 1515</td>
                <td className="p-4">High-stakes corporate plenaries, AGMs, summits, 4K multi-window presentations.</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-semibold text-white">
                  P3.9 mm
                  <span className="block text-[11px] text-white/60 font-normal">Mid-Range Commercial</span>
                </td>
                <td className="p-4 font-mono">128 × 128 pixels</td>
                <td className="p-4">3.9 meters (12.8 ft)</td>
                <td className="p-4 font-mono">1920Hz / 3840Hz</td>
                <td className="p-4">Exhibition hall perimeter banners, outdoor daytime pavilions, concert backdrop delay walls.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Worked Canvas Math Box */}
        <div className="mt-8 rounded-2xl border border-white/15 bg-gradient-to-br from-[#18181c] to-[#121214] p-6 sm:p-8">
          <span className="eyebrow !text-[#f26b21]">Field Engineering Formula</span>
          <h3 className="serif text-xl sm:text-2xl font-bold text-white mb-3">
            Worked Example: 14-Meter Wide Plenary Canvas Math
          </h3>
          <div className="grid gap-6 md:grid-cols-2 text-xs sm:text-sm text-white/80 leading-relaxed">
            <div>
              <p className="mb-3">
                Let&apos;s engineer an ultra-wide panoramic backdrop screen measuring <strong>14.0 meters wide by 4.5 meters high</strong> (3.11:1 aspect ratio) for an enterprise summit in HICC:
              </p>
              <ul className="space-y-2 list-disc list-inside text-white/75">
                <li>
                  <strong>Physical Cabinet Count:</strong> 28 cabinets wide × 9 cabinets high = <strong>252 total cabinets</strong> (500mm × 500mm format).
                </li>
                <li>
                  <strong>Native Pixel Matrix:</strong> (28 × 192 px) × (9 × 192 px) = <strong>5,376 × 1,728 native pixels</strong>.
                </li>
                <li>
                  <strong>Total Raster Pixel Load:</strong> <strong>9,289,728 total pixels</strong>.
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-3">
                <strong>Processing & Distribution Architecture:</strong>
              </p>
              <div className="rounded-xl bg-black/40 p-4 border border-white/10 space-y-2 text-xs">
                <div>
                  <span className="text-[#f26b21] font-semibold">Video Processor:</span> Novastar MX40 Pro COEX series utilizing four 10G optical output ports.
                </div>
                <div>
                  <span className="text-emerald-400 font-semibold">Presentation Switcher:</span> Barco E2 Gen 2 handling 4K60p uncompressed inputs with sub-frame 1-line latency.
                </div>
                <div>
                  <span className="text-sky-400 font-semibold">Redundancy Protocol:</span> Dual gigabit fiber loops with auto-failover receiving cards (A8s Armor).
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 03: Overcoming In-House Hotel AV Bottlenecks */}
      <Section
        eyebrow="Section 03 · Venue Realities"
        title="Why In-House Hotel AV Fails Enterprise Summits (And How We Fix It)"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
            <div className="text-2xl mb-3">⚠️</div>
            <h4 className="font-bold text-white text-base mb-2">The Hollow Echo Chamber</h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              <strong>The Problem:</strong> In-house ceiling speakers bounce audio off banquet carpets and chandeliers, causing a 400ms reverberant decay where speech turns into unintelligible mud.
            </p>
            <p className="text-xs sm:text-sm text-emerald-400 font-medium mt-3">
              <strong>TSF-AV Fix:</strong> Directional d&b line arrays flown with mechanical down-tilt, directing acoustic energy strictly into delegate seating and keeping it off reflective ceilings.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
            <div className="text-2xl mb-3">⚠️</div>
            <h4 className="font-bold text-white text-base mb-2">Washed-Out 16:9 Projectors</h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              <strong>The Problem:</strong> Aging 6,000-lumen lamp projectors mounted to hotel ceilings get completely washed out the moment ambient stage lighting or chandelier washes are turned on.
            </p>
            <p className="text-xs sm:text-sm text-emerald-400 font-medium mt-3">
              <strong>TSF-AV Fix:</strong> High-contrast P2.6 Black SMD LED walls delivering 1,000+ nits brightness and 5000:1 contrast, maintaining razor-sharp clarity under full stage illumination.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
            <div className="text-2xl mb-3">⚠️</div>
            <h4 className="font-bold text-white text-base mb-2">Shared Circuit Breaker Trips</h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              <strong>The Problem:</strong> Hotel ballrooms frequently share electrical sub-panels with banquet kitchens. When warming ovens fire up during tea break, the AV circuit trips instantly.
            </p>
            <p className="text-xs sm:text-sm text-emerald-400 font-medium mt-3">
              <strong>TSF-AV Fix:</strong> Dedicated isolated mobile silent diesel generator (125kVA – 250kVA) powering all technical production entirely independent of venue electrical load.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 04: Power Distribution & Earth Grounding */}
      <Section
        eyebrow="Section 04 · Power & Redundancy"
        title="Three-Phase Balancing, Harmonic Distortion & Clean Earth Grounding"
      >
        <div className="grid gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4 text-sm sm:text-base text-white/80 leading-relaxed">
            <p>
              More corporate AV failures trace back to dirty electrical power than all hardware malfunctions combined. LED video screens use switch-mode power supplies that draw current in short, high-magnitude pulses, creating heavy <strong>triplen harmonics (3rd, 9th, 15th harmonic orders)</strong>.
            </p>
            <p>
              In unbalanced systems, these harmonics do not cancel out—they accumulate in the neutral conductor, causing severe neutral wire overheating and voltage fluctuation that can crash digital consoles mid-event.
            </p>

            <div className="my-2 rounded-xl border border-white/10 bg-white/5 p-4 space-y-3">
              <h4 className="font-bold text-white text-sm text-[#f26b21]">
                The TSF-AV Clean Power Protocol:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/75 list-disc list-inside">
                <li>
                  <strong>Three-Phase Balancing:</strong> We balance LED tile banks, audio amplifiers, and moving lighting fixtures across L1 (Red), L2 (Yellow), and L3 (Blue) phases within a strict <strong>±8% balance margin</strong>.
                </li>
                <li>
                  <strong>Clean Earthing Potential:</strong> We require an independent copper earthing pit with <strong>Earth-to-Neutral potential &lt; 2.0 Volts AC</strong>. This completely eliminates ground-loop video hum bars and audio 50Hz hum.
                </li>
                <li>
                  <strong>Online Double-Conversion UPS:</strong> All FOH mixing desks, video processors, broadcast encoders, and presentation laptops operate behind online true double-conversion UPS units providing <strong>0ms transfer time</strong>.
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-[#18181c] p-6 shadow-xl">
              <span className="eyebrow !text-[#f26b21]">Failsafe Redundancy Matrix</span>
              <h3 className="serif text-xl font-bold text-white mb-4">Zero-Downtime Signal Routing</h3>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-white font-semibold">Presentation Switching</div>
                  <div className="text-white/70 text-xs mt-1">Dual mirrored Mac/PC playback machines synced via MasterCue wireless clickers. Hot seamless switcher switch in 0 frames.</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-white font-semibold">Podium Microphone Lines</div>
                  <div className="text-white/70 text-xs mt-1">Dual DPA / Shure gooseneck capsules wired into discrete stage boxes through separate optical fiber and analog copper multicores.</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-white font-semibold">Live Stream Uplink</div>
                  <div className="text-white/70 text-xs mt-1">Primary venue leased line + bonded 5G cellular uplink running dual hardware encoders to enterprise CDN servers.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 05: Downloadable Enterprise Rider Section */}
      <Section
        eyebrow="Section 05 · Complete Technical Template"
        title="Download the Complete Enterprise AV Technical Rider Checklist"
      >
        <LeadMagnetSection
          title="Download the TSF-AV Enterprise Technical AV Rider & Equipment Checklist"
          subtitle="The line-item equipment specifications, power drops, network topologies, and engineer qualification requirements ready to paste into your corporate RFP."
          source="av_technical_rider_page"
        />
      </Section>

      {/* Section 06: Technical FAQ */}
      <Section eyebrow="Frequently Asked Questions" title="Technical AV Engineering FAQs">
        <div className="max-w-4xl space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="font-bold text-white text-base mb-2">
              Why does TSF-AV specify d&amp;b audiotechnik instead of generic PA rental speakers?
            </h4>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              d&b audiotechnik is the global rider standard for corporate summits and concert tours because of proprietary electro-acoustic alignment. Utilizing d&b ArrayCalc software, we simulate exact venue room geometries, calculating temperature and humidity air-absorption to ensure pristine Speech Transmission Index (STI &gt; 0.65) across every seat. Their patented cardioid subwoofers prevent stage bass feedback.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="font-bold text-white text-base mb-2">
              What refresh rate is required on LED walls to prevent flicker on video cameras?
            </h4>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              For professional broadcast cameras and mobile phones recording at 50fps, 60fps, or 120fps, an LED wall must have a minimum refresh rate of <strong>3,840 Hz</strong> with high-precision PWM driver ICs (Macroblock or Chipone). TSF-AV’s P2.6 LED panels operate at native 3840Hz, guaranteeing zero scan lines, moiré, or black banding across camera lenses.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="font-bold text-white text-base mb-2">
              Can EventTribe provide simultaneous interpretation audio and multi-channel breakout systems?
            </h4>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              Yes. TSF-AV supplies ISO-compliant soundproof interpretation booths, digital infrared delegate receivers, multi-channel Dante audio distribution, and discrete multi-track recording for up to 8 languages simultaneously.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="font-bold text-white text-base mb-2">
              What are the power connection requirements for a full TSF-AV corporate plenary rig?
            </h4>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              A standard plenary rig (12m x 4m P2.6 LED, d&b V-Series audio, profile stage wash lighting) typically requires a <strong>63A or 125A 3-phase 415V CEEform connection</strong> (approx. 45kVA to 75kVA balanced load). We provide complete power distribution racks, phase balancers, and can deploy our own silent synchronized mobile generators when hotel power is insufficient.
            </p>
          </div>
        </div>
      </Section>

      {/* Direct WhatsApp Engineering CTA */}
      <section className="bg-gradient-to-r from-[#19191d] to-[#121214] py-14 border-t border-white/10">
        <div className="wrap flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow !text-[#f26b21]">Consult With An AV Systems Engineer</span>
            <h3 className="serif text-2xl sm:text-3xl font-bold text-white mt-1">
              Need technical rider vetting for an upcoming Hyderabad summit?
            </h3>
            <p className="text-xs sm:text-sm text-white/75 mt-2">
              Send us your venue details and plenary requirements. Our system engineers will review acoustic coverage, screen canvas mapping, and power drops.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackWhatsAppClick("av_guide_bottom_cta")}
              className="btn btn-wa text-center"
            >
              WhatsApp AV Engineer
            </a>
            <a href={`tel:${PHONE_RAW}`} className="btn btn-outline text-center">
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Modal Download */}
      <LeadMagnetModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        source="av_guide_modal"
      />

      <CtaBand />

      {/* Breadcrumb & Article Schema */}
      <JsonLd
        data={crumbs([
          ["Home", "/"],
          ["Resources", "/large-scale-av-technical-rider-guide"],
          ["AV Technical Rider Guide", "/large-scale-av-technical-rider-guide"],
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: "Large-Scale AV Technical Rider Guide: Engineering Fail-Safe Corporate Summits",
          description:
            "A definitive technical specification guide covering d&b audiotechnik line array physics, P2.6 ultra-HD LED pixel math, Barco 4K matrix switching, and 3-phase power distribution.",
          author: {
            "@type": "Organization",
            name: "TSF-AV by EventTribe",
            url: SITE,
          },
          publisher: {
            "@type": "Organization",
            name: "EventTribe",
            url: SITE,
          },
          mainEntityOfPage: `${SITE}/large-scale-av-technical-rider-guide`,
          about: [
            { "@type": "Thing", name: "Concert Grade Audio" },
            { "@type": "Thing", name: "d&b audiotechnik" },
            { "@type": "Thing", name: "LED Video Wall Engineering" },
            { "@type": "Thing", name: "Novastar MX40 Pro" },
            { "@type": "Thing", name: "Barco E2" },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Why does TSF-AV specify d&b audiotechnik instead of generic PA rental speakers?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "d&b audiotechnik provides predictable cylindrical wavefront propagation (3 dB drop per distance doubling), patented cardioid subwoofer rear-rejection (15-20 dB attenuation), and ArrayCalc 3D simulation for pristine speech intelligibility.",
              },
            },
            {
              "@type": "Question",
              name: "What refresh rate is required on LED walls to prevent flicker on video cameras?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A minimum of 3,840 Hz with high-precision PWM driver ICs is required to ensure zero camera scan lines, moiré, or black banding on broadcast lenses.",
              },
            },
            {
              "@type": "Question",
              name: "Can EventTribe provide simultaneous interpretation audio and breakout systems?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. TSF-AV supplies ISO-compliant soundproof interpretation booths, digital infrared delegate receivers, and multi-channel Dante audio distribution.",
              },
            },
            {
              "@type": "Question",
              name: "What are the power connection requirements for a full TSF-AV corporate plenary rig?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Typically a 63A or 125A 3-phase 415V CEEform connection with clean earthing (Earth-to-Neutral < 2V AC) and true online double-conversion UPS backup.",
              },
            },
          ],
        }}
      />
    </>
  );
}
