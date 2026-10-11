import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import conference from "@/assets/hero-stage.jpg";
import exhibition from "@/assets/work-expo.jpg";
import production from "@/assets/new-production.jpg";
import { CtaBand, JsonLd, PageHero, Section, crumbs, seo, WA, PHONE, PHONE_RAW, SITE } from "@/components/site";
import { LeadMagnetSection, LeadMagnetModal } from "@/components/LeadMagnet";
import { trackWhatsAppClick } from "@/lib/analytics";

export const Route = createFileRoute("/corporate-stage-design-masterclass")({
  head: () =>
    seo(
      "Corporate Stage Design & Heavy Trussing Masterclass | TSF by EventTribe Hyderabad",
      "Field engineering guide for corporate stage construction, German Pagodas, certified aluminum box trussing, and wind load calculations in Hyderabad.",
      "/corporate-stage-design-masterclass"
    ),
  component: StageDesignMasterclass,
});

function StageDesignMasterclass() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="The Stage Factory (TSF) · Field Engineering Manual"
        title="Corporate Stage Design, Heavy Trussing & Structural Rigging for Hyderabad Mega-Events"
        intro="The comprehensive technical blueprint used by production directors and structural engineers to calculate deck heights, point loads, wind ballasting, and 30°/45° sightlines across HITEX, HICC Novotel, and premier venues."
        image={conference}
        alt="Large scale corporate stage with certified aluminum box trussing and high load platforms in Hyderabad"
      />

      {/* Quick Spec Highlights Bar */}
      <section className="border-b border-white/10 bg-[#121214] py-6 text-xs sm:text-sm">
        <div className="wrap flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#f26b21]" />
            <span className="text-white/70">Structural Authority:</span>
            <strong className="text-white">11+ Years Infrastructure (TSF)</strong>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-white/70">Structural Standard:</span>
            <strong className="text-white">IS 875 (Part 3) Wind Code & EN AW-6082 T6 Alloy</strong>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            <span className="text-white/70">3D Pre-Visualization:</span>
            <strong className="text-white">AutoCAD / Vectorworks Millimeter Sightlines</strong>
          </div>
          <div>
            <button
              onClick={() => setModalOpen(true)}
              className="text-xs font-semibold text-[#f26b21] underline hover:text-[#ff8138] transition-colors"
            >
              Get Technical Rider Checklist →
            </button>
          </div>
        </div>
      </section>

      {/* Chapter 1: The Physics of Corporate Staging */}
      <Section
        eyebrow="Section 01 · Structural Foundations"
        title="Stage Decking Physics: Substructure, Heights & Load Ratings"
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 flex flex-col gap-5 text-sm sm:text-base leading-relaxed text-white/80">
            <p>
              In corporate event production, a stage is not merely a piece of decorative furniture—it is a heavy-duty load-bearing structural platform. Whether hosting an executive board of 12 global leaders, a dramatic vehicle reveal, or hundreds of corporate award winners walking in cadence, structural deflection or surface reverberation compromises safety and executive authority.
            </p>
            <p>
              At <strong>The Stage Factory (TSF)</strong>, our stage platforms are engineered using high-grade German Layher Allround steel scaffold substructures or certified modular extruded aluminum framing topped with 19mm phenolic birch plywood. Every square meter features an anti-skid hexagonal film surface rated for a minimum <strong>Uniform Distributed Load (UDL) of 750 kg/m²</strong> (tested to 1,200 kg/m² for automotive reveals).
            </p>

            <div className="my-2 rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="font-bold text-white text-base mb-3 flex items-center gap-2">
                <span className="text-[#f26b21]">📐</span> Rule of Thumb: Plenary Stage Height by Audience Capacity
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/75 list-disc list-inside">
                <li>
                  <strong>100 – 300 Delegates (Flat Ballroom):</strong> Stage height = <strong>2.0 ft to 2.5 ft (600mm – 750mm)</strong>. Allows front row natural eye contact without excessive upward neck tilt while ensuring back row sightline clearance over seated heads.
                </li>
                <li>
                  <strong>400 – 1,200 Delegates (HICC / Marriott):</strong> Stage height = <strong>3.5 ft to 4.0 ft (1050mm – 1200mm)</strong>. Essential to keep presenter lower torso and lectern visible past row 15 without delegates leaning.
                </li>
                <li>
                  <strong>1,500 – 5,000+ Delegates (HITEX Exhibition Halls):</strong> Stage height = <strong>4.5 ft to 5.5 ft (1350mm – 1650mm)</strong>. Combined with tiered riser seating or elevated side IMAG delay screens.
                </li>
              </ul>
            </div>

            <p>
              <strong>Access & Safety Protocols:</strong> TSF enforces a strict <strong>1:12 ramp incline ratio</strong> for all accessible stage ramps in compliance with corporate inclusion codes. Stage stairs feature twin-level handrails, non-slip aluminum nosing, concealed step-edge LED guides, and fire-retardant black masking skirting that completely conceals structural legs, ballast weights, and under-stage cable trunks.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl border border-white/15 bg-[#18181c] p-6 shadow-xl">
              <span className="eyebrow !text-[#f26b21]">Engineering Specs</span>
              <h3 className="serif text-xl font-bold text-white mb-4">TSF Modular Stage Specifications</h3>
              <div className="space-y-3 text-xs sm:text-sm text-white/80">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">Deck Construction</span>
                  <span className="font-semibold text-white">19mm Phenolic Birch Multi-ply</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">Substructure</span>
                  <span className="font-semibold text-white">Layher Allround Steel / 6082-T6 Al</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">Load Rating (UDL)</span>
                  <span className="font-semibold text-white">750 kg/m² – 1,200 kg/m²</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">Deflection Limit</span>
                  <span className="font-semibold text-white">&lt; L/300 under max load</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">Surface Texture</span>
                  <span className="font-semibold text-white">Anti-skid Hexagonal Wire Mesh</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">Adjustable Leg Range</span>
                  <span className="font-semibold text-white">400mm to 1800mm (Micro-threaded)</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-white/60">Leveling Tolerance</span>
                  <span className="font-semibold text-emerald-400">±2mm across 30-meter span</span>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-white/5 p-4 border border-white/10 text-xs text-white/70">
                <strong className="text-white block mb-1">Field Recce Tip:</strong>
                Never mount heavy P2.6 LED ground stacks directly on hollow staging decks without dedicated under-stage load-spreading scaffold pillars directly beneath the LED base plates.
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src={production}
                alt="TSF heavy-duty modular stage platform being leveled during load-in"
                className="w-full object-cover h-48"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <p className="text-xs text-white/90 font-medium">Precision laser leveling on uneven venue floors</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Chapter 2: Certified Aluminum Box Trussing Selection Matrix */}
      <Section
        eyebrow="Section 02 · Overhead Rigging Dynamics"
        title="Certified Aluminum Box Trussing: 300mm vs 400mm vs 520mm Matrix"
      >
        <div className="mb-6 max-w-3xl text-sm sm:text-base text-white/80 leading-relaxed">
          <p>
            Rigging overhead equipment above hundreds of delegates and C-suite dignitaries requires certified structural engineering. The Stage Factory uses exclusively <strong>EN AW-6082 T6 high-tensile structural aluminum alloy</strong> trussing with conical coupler connections, ensuring rapid deployment and zero structural slop.
          </p>
        </div>

        {/* Technical Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/15 bg-[#141416]">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-white/10 bg-white/5 text-white">
              <tr>
                <th className="p-4 font-bold">Profile Profile</th>
                <th className="p-4 font-bold">Main Chord & Bracing</th>
                <th className="p-4 font-bold">Max Free Span</th>
                <th className="p-4 font-bold">Center Point Load (SWL)</th>
                <th className="p-4 font-bold">Primary Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-white/80">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-semibold text-white">
                  300mm x 300mm
                  <span className="block text-[11px] text-[#f26b21] font-normal">Medium Duty Box</span>
                </td>
                <td className="p-4">50mm x 3mm chord / 20mm x 2mm brace</td>
                <td className="p-4">12 meters (39.3 ft)</td>
                <td className="p-4 font-mono font-medium text-white">350 kg @ 10m span</td>
                <td className="p-4">Front lighting washes, branded backdrops, perimeter banners, small goalposts.</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors bg-white/[0.02]">
                <td className="p-4 font-semibold text-white">
                  400mm x 400mm
                  <span className="block text-[11px] text-emerald-400 font-normal">Heavy Duty Box</span>
                </td>
                <td className="p-4">50mm x 4mm chord / 25mm x 3mm brace</td>
                <td className="p-4">18 meters (59.0 ft)</td>
                <td className="p-4 font-mono font-medium text-white">650 kg @ 14m span</td>
                <td className="p-4">Main stage overhead lighting grids, moving profiles, flown LED banners, mid-hall delay hangs.</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-semibold text-white">
                  520mm x 520mm
                  <span className="block text-[11px] text-sky-400 font-normal">Ultra-Heavy Mother Grid</span>
                </td>
                <td className="p-4">50mm x 4mm chord / 30mm x 3mm brace</td>
                <td className="p-4">24 meters (78.7 ft)</td>
                <td className="p-4 font-mono font-medium text-white">1,400 kg @ 16m span</td>
                <td className="p-4">Heavy roof systems, massive flown LED video screens, concert mother-grids, long-span exhibition halls.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Rigging Safety Breakdown */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f26b21]/20 text-[#f26b21] font-bold text-lg mb-4">
              ⚖️
            </div>
            <h4 className="font-bold text-white text-base mb-2">Rigging Safety Factors</h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              We mandate a <strong>10:1 safety design factor</strong> for all overhead equipment suspended directly above attendees. Every shackle is Grade 80 forged alloy steel, stamped with batch traceability and Working Load Limit (WLL).
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-400 font-bold text-lg mb-4">
              🏗️
            </div>
            <h4 className="font-bold text-white text-base mb-2">Ground-Support Towers</h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              When venue ceiling points are unavailable (common in hotel ballrooms), TSF erects self-standing ground-supported goalposts with heavy steel base plates, outrigger stabilizer arms, and sleeve blocks lifted by certified CM Lodestar D8+ chain hoists.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/20 text-sky-400 font-bold text-lg mb-4">
              🔒
            </div>
            <h4 className="font-bold text-white text-base mb-2">Secondary Safety Bonds</h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Every flown fixture—whether a 30kg moving profile, an LED tile header bar, or an audio speaker—features a secondary steel wire rope safety bond (SWR) rated to withstand dynamic shock loads in the event of primary clamp failure.
            </p>
          </div>
        </div>
      </Section>

      {/* Chapter 3: Outdoor High-Wind Engineering & German Pagodas */}
      <Section
        eyebrow="Section 03 · Outdoor Structural Integrity"
        title="High-Wind Engineering: German Pagodas & Outdoor Temporary Structures"
      >
        <div className="grid gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-4 text-sm sm:text-base text-white/80 leading-relaxed">
            <p>
              Outdoor corporate conclaves, golf club product unveils, and festival pavilions at venues like <strong>GMR Arena, Boulder Hills, or Ramoji Film City</strong> face volatile atmospheric conditions. In Telangana, seasonal thunderstorms generate sudden microbursts with gust speeds exceeding 55 km/h.
            </p>
            <p>
              According to <strong>IS 875 (Part 3): 2015</strong>, Hyderabad has a design basic wind speed of <strong>$V_b = 44\text{ m/s}$ (approx. 158 km/h)</strong> for permanent civil structures. For temporary event infrastructure, TSF engineers wind mitigation protocols that guarantee safety without compromise.
            </p>
            
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs sm:text-sm text-amber-200">
              <strong className="text-white block font-semibold mb-1">⚠️ The Danger of Insufficient Ballast:</strong>
              A standard 10m x 10m German Pagoda roof acts as an aerodynamic wing. A 45 km/h crosswind produces upwards of <strong>1,800 kg of aerodynamic uplift force</strong>. Anchoring legs with simple 20kg sandbags is dangerously irresponsible.
            </div>

            <p>
              <strong>The TSF Ballasting Standard:</strong> On hard surfaces (paved plazas, tarmac) where ground stakes cannot penetrate, TSF installs certified concrete ballast blocks or enclosed high-density water IBC containers providing <strong>500 kg to 800 kg per corner upright leg</strong>, secured with rated ratchets to the high-tensile 4-channel extruded aluminum frame.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-white/15 bg-[#161619] p-6 shadow-xl">
              <h3 className="serif text-xl font-bold text-white mb-4">TSF High-Wind Action Protocol</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-xs">
                    01
                  </span>
                  <div>
                    <h5 className="font-bold text-white text-sm">Below 35 km/h (Normal Operation)</h5>
                    <p className="text-xs text-white/70 mt-1">Continuous digital ultrasonic anemometer monitoring at top truss elevation. All guy wires tensioned.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-300 font-bold text-xs">
                    02
                  </span>
                  <div>
                    <h5 className="font-bold text-white text-sm">38 – 45 km/h (Stage Alert Threshold)</h5>
                    <p className="text-xs text-white/70 mt-1">Side mesh walls and backdrops on outdoor roof structures are unzipped or rolled up to reduce aerodynamic sail effect. Trim height lowered if using ground-support.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-500/20 text-red-300 font-bold text-xs">
                    03
                  </span>
                  <div>
                    <h5 className="font-bold text-white text-sm">Above 54 km/h (Critical Safety Evacuation)</h5>
                    <p className="text-xs text-white/70 mt-1">Power to overhead fixtures isolated. Flown video walls grounded to deck level. Orderly evacuation of temporary tent structures initiated.</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 border-t border-white/10 pt-4 flex items-center justify-between text-xs text-white/60">
                <span>Material: 850 g/m² DIN 4102 B1 PVC</span>
                <span className="text-white font-medium">Certified Flame Retardant</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Chapter 4: Sightline Ergonomics & Visual Geometry */}
      <Section
        eyebrow="Section 04 · Visual Ergonomics"
        title="Stage Sightline Calculations: The 30° Vertical & 45° Lateral Rules"
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 flex flex-col gap-4 text-sm sm:text-base text-white/80 leading-relaxed">
            <p>
              Nothing ruins an executive plenary faster than delegates in the VIP front row suffering cervical neck strain from looking straight up at an excessively tall stage, or delegates at the far sides being unable to see the keynote slides due to poor lateral angles.
            </p>
            <p>
              At EventTribe and TSF, we calculate sightline geometry during the initial 3D Vectorworks and AutoCAD venue modeling phase:
            </p>

            <div className="space-y-4 my-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h4 className="font-bold text-white text-sm mb-1 text-[#f26b21]">
                  1. The 30° Maximum Vertical Viewing Angle
                </h4>
                <p className="text-xs sm:text-sm text-white/75">
                  Human ergonomic studies dictate that the upward neck tilt from the front row seated eye line (approx. 1.15m from floor) to the presenter’s eye line or top of the primary presentation screen should <strong>never exceed 30 degrees</strong>.
                </p>
                <div className="mt-2 text-xs font-mono bg-black/40 p-2 rounded text-emerald-400">
                  Front Row Setback Distance (Min) = Stage Height × 1.5 + 1.0 meter buffer
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h4 className="font-bold text-white text-sm mb-1 text-[#f26b21]">
                  2. The 45° Lateral Cone of Vision
                </h4>
                <p className="text-xs sm:text-sm text-white/75">
                  Delegates seated more than <strong>45 degrees off-center</strong> from the LED screen centerline perceive severe geometric perspective distortion, color shift, and diminished legibility of corporate financial charts.
                </p>
                <div className="mt-2 text-xs text-white/70">
                  TSF Solution: When ballroom width forces seating outside the 45° cone, we deploy twin angled IMAG side screens or curved panoramic LED configurations to restore optimal viewing geometry.
                </div>
              </div>
            </div>

            <p>
              <strong>Camera Sightlines & Clean Broadcast Angles:</strong> We coordinate speaker podium placement, LED boundary frames, and teleprompter glass angles so that all 3 front broadcast cameras (Center wide, Center tight, Left/Right roaming jibs) maintain uninterrupted sightlines without cutting off key visual graphics.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="rounded-2xl border border-white/15 bg-[#18181c] p-6 shadow-xl">
              <span className="eyebrow !text-[#f26b21]">3D Pre-Visualization Workflow</span>
              <h3 className="serif text-xl font-bold text-white mb-3">From DWG Survey to Millimeter Accuracy</h3>
              <p className="text-xs text-white/70 mb-4 leading-relaxed">
                Before a single truss bolt is tightened on site, EventTribe generates a photorealistic 3D CAD visualization of your exact venue:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#f26b21] font-bold">✓</span>
                  <span><strong>Architectural Laser Survey:</strong> Door heights, chandelier drops, column offsets, and power panel locations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f26b21] font-bold">✓</span>
                  <span><strong>Vectorworks 3D Rigging Plot:</strong> Point load weight calculations for every hoist and truss span.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f26b21] font-bold">✓</span>
                  <span><strong>Virtual Seat Walkthrough:</strong> Checking sightlines from Seat A1 (VIP front row), Seat Z40 (rear corner), and the tech console.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f26b21] font-bold">✓</span>
                  <span><strong>Floor Marking Protocol:</strong> High-precision cross-line laser floor marking during midnight load-in.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1b1a1f] to-[#121214] p-5">
              <h4 className="font-bold text-white text-sm mb-2">Need a 3D CAD Stage Layout?</h4>
              <p className="text-xs text-white/70 mb-4">
                Share your venue name and delegate count. Our engineering desk will generate a scaled preliminary sightline study.
              </p>
              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackWhatsAppClick("stage_masterclass_cad_cta")}
                className="btn btn-wa w-full text-center text-xs py-2.5 font-bold"
              >
                Request 3D Stage Drawing on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Chapter 5: Field Notes on Hyderabad's Premier Venues */}
      <Section
        eyebrow="Section 05 · Venue Intelligence"
        title="Field Engineering Notes: Hyderabad's High-Stakes Venues"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/15 bg-[#161618] p-6 flex flex-col justify-between">
            <div>
              <span className="eyebrow !text-[#f26b21]">HITEX Exhibition Centre</span>
              <h3 className="serif text-lg font-bold text-white mb-2">Halls 1, 2, 3 & 4</h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                Massive pillarless floor space with <strong>10.5m clear ceiling height</strong>. Heavy floor load capacity (5 tonnes/m²) permits automotive displays and ultra-heavy Layher scaffolding.
              </p>
              <div className="space-y-1.5 text-xs text-white/80 border-t border-white/10 pt-3">
                <div><strong>Rigging:</strong> Flown box trussing certified up to 1,500 kg per roof purlin point.</div>
                <div><strong>Power:</strong> 125A 3-phase CEEform panels with direct busbar tie-ins.</div>
                <div><strong>Access:</strong> High-clearance shutter doors for direct truck drive-in.</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-[#161618] p-6 flex flex-col justify-between">
            <div>
              <span className="eyebrow !text-[#f26b21]">HICC Novotel</span>
              <h3 className="serif text-lg font-bold text-white mb-2">Grand Ballroom</h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                Hyderabad’s premier corporate conference room. <strong>6.2m ceiling height</strong> with ornate chandeliers requires careful clearance management between stage deck and truss trim.
              </p>
              <div className="space-y-1.5 text-xs text-white/80 border-t border-white/10 pt-3">
                <div><strong>Rigging:</strong> Hotel limits dead hangs; TSF deploys self-standing goalpost systems.</div>
                <div><strong>Acoustics:</strong> Operable partition walls require directional line array steering.</div>
                <div><strong>Loading:</strong> Service elevator weight limits; 24h pre-booking essential.</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-[#161618] p-6 flex flex-col justify-between">
            <div>
              <span className="eyebrow !text-[#f26b21]">Hyderabad Marriott / Taj Krishna</span>
              <h3 className="serif text-lg font-bold text-white mb-2">Luxury Executive Ballrooms</h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                Prestigious heritage and business environments requiring extreme acoustic refinement, zero carpet scuffing, and low-profile structural staging.
              </p>
              <div className="space-y-1.5 text-xs text-white/80 border-t border-white/10 pt-3">
                <div><strong>Floor Protection:</strong> Full masonite sheeting under all stage uprights.</div>
                <div><strong>Ceiling:</strong> Low clearance (4.2m – 5.0m) requires 2.0ft stage heights.</div>
                <div><strong>Power:</strong> Low hotel breaker thresholds; isolated genset mandatory.</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Chapter 6: Embedded CRO Lead Magnet Section */}
      <Section
        eyebrow="Section 06 · Downloadable Technical Asset"
        title="Get the Complete Corporate Stage & Trussing Field Checklist"
      >
        <LeadMagnetSection
          title="Download the TSF Corporate Staging & Rigging Engineering Checklist"
          subtitle="Instant technical audit template covering point load calculations, wind ballasting formulas, sightline verification, and Hyderabad venue load-in protocols."
          source="stage_design_masterclass_page"
        />
      </Section>

      {/* Chapter 7: Deep Technical FAQ */}
      <Section eyebrow="Frequently Asked Questions" title="Engineering & Production FAQs">
        <div className="max-w-4xl space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="font-bold text-white text-base mb-2">
              How far in advance should we engage The Stage Factory for 3D CAD stage planning?
            </h4>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              For major summits and multi-hall exhibitions (HITEX / HICC), we recommend initiating 3D CAD modeling 4 to 6 weeks prior to load-in. This provides sufficient lead time for venue engineering approvals, structural wind load certifications, and custom branded stage fabrication. However, our modular inventory allows rapid turnaround within 72 hours for urgent corporate plenaries.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="font-bold text-white text-base mb-2">
              Can TSF build stages over uneven ground, lawn slopes, or swimming pool covers?
            </h4>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              Yes. Utilizing our Layher Allround scaffolding substructure with micro-threaded screw jacks and high-tensile steel cross-bracing, we can level stages over slopes of up to 2.5 meters variation with zero wobble or deflection. We also engineer certified transparent acrylic pool covers rated for 500 kg/m² gala dining.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="font-bold text-white text-base mb-2">
              What certification documents does EventTribe / TSF provide to venue safety officers?
            </h4>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              We provide a complete structural submission packet including: (1) Aluminum truss mill test certificates (EN AW-6082 T6 alloy), (2) Shackle and hoist third-party load test certificates, (3) PVC fabric flame retardancy certificates (DIN 4102 B1), (4) Detailed 3D rigging point weight distribution calculation sheets, and (5) Structural engineer signed wind stability analysis for outdoor German Pagodas.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="font-bold text-white text-base mb-2">
              How does EventTribe handle multi-vendor friction between staging and AV?
            </h4>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              Because EventTribe owns both <strong>The Stage Factory (TSF)</strong> and <strong>TSF-AV</strong> under a single master company, there is zero friction. The structural rigging team and the audio-visual engineers work from the identical 3D Vectorworks model. LED screen ground mounts, speaker line array fly points, and cable runs are pre-aligned days before load-in, eliminating on-site finger pointing.
            </p>
          </div>
        </div>
      </Section>

      {/* Direct WhatsApp Engineering CTA */}
      <section className="bg-gradient-to-r from-[#19191d] to-[#121214] py-14 border-t border-white/10">
        <div className="wrap flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow !text-[#f26b21]">Consult With A Technical Director</span>
            <h3 className="serif text-2xl sm:text-3xl font-bold text-white mt-1">
              Planning a high-stakes corporate stage in Hyderabad?
            </h3>
            <p className="text-xs sm:text-sm text-white/75 mt-2">
              Speak directly with our senior structural rigging director. Review venue floor plans, load limits, and receive a transparent line-item estimate.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackWhatsAppClick("stage_masterclass_bottom_cta")}
              className="btn btn-wa text-center"
            >
              WhatsApp Technical Director
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
        source="stage_masterclass_modal"
      />

      <CtaBand />

      {/* Breadcrumb & Article Schema */}
      <JsonLd
        data={crumbs([
          ["Home", "/"],
          ["Resources", "/corporate-stage-design-masterclass"],
          ["Stage Design Masterclass", "/corporate-stage-design-masterclass"],
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: "Corporate Stage Design, Heavy Trussing & Structural Rigging for Hyderabad Mega-Events",
          description:
            "A comprehensive field engineering manual covering corporate stage decking physics, aluminum box truss load ratings, outdoor high-wind ballasting, and 30°/45° sightline calculations.",
          author: {
            "@type": "Organization",
            name: "The Stage Factory (TSF) by EventTribe",
            url: SITE,
          },
          publisher: {
            "@type": "Organization",
            name: "EventTribe",
            url: SITE,
          },
          mainEntityOfPage: `${SITE}/corporate-stage-design-masterclass`,
          about: [
            { "@type": "Thing", name: "Structural Staging" },
            { "@type": "Thing", name: "Aluminum Box Trussing" },
            { "@type": "Thing", name: "German Pagodas" },
            { "@type": "Thing", name: "Wind Load Engineering" },
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
              name: "How far in advance should we engage The Stage Factory for 3D CAD stage planning?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "For major summits and multi-hall exhibitions (HITEX / HICC), we recommend initiating 3D CAD modeling 4 to 6 weeks prior to load-in. Urgent turnarounds can be supported within 72 hours.",
              },
            },
            {
              "@type": "Question",
              name: "Can TSF build stages over uneven ground or lawn slopes?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Utilizing our Layher Allround scaffolding substructure with micro-threaded screw jacks, we can level stages over slopes of up to 2.5 meters variation with zero deflection.",
              },
            },
            {
              "@type": "Question",
              name: "What certification documents does EventTribe / TSF provide to venue safety officers?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We provide EN AW-6082 T6 aluminum truss mill certificates, Grade 80 shackle test certificates, DIN 4102 B1 PVC flame retardancy certificates, and structural engineer signed wind stability analysis.",
              },
            },
            {
              "@type": "Question",
              name: "How does EventTribe handle multi-vendor friction between staging and AV?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "EventTribe owns both The Stage Factory (TSF) and TSF-AV under one master company, ensuring structural rigging and audio-visual engineering are synchronized from the identical 3D CAD model.",
              },
            },
          ],
        }}
      />
    </>
  );
}
