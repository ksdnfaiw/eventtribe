import { useState, type FormEvent } from "react";
import { trackRiderGuideDownload, trackLeadFormSubmit } from "@/lib/analytics";

export function LeadMagnetSection({
  title = "Download the Corporate Stage & Technical AV Rider Guide",
  subtitle = "The exact engineering checklist used by technical directors for 500 to 10,000+ delegate summits across HITEX, HICC Novotel, and Hyderabad mega-venues.",
  source = "homepage_section",
}: {
  title?: string;
  subtitle?: string;
  source?: string;
}) {
  const [downloaded, setDownloaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      pax: String(fd.get("pax") ?? ""),
      company: String(fd.get("company") ?? ""),
      eventDate: String(fd.get("eventDate") ?? ""),
    };

    // Track analytics events
    trackRiderGuideDownload(source, data);
    trackLeadFormSubmit("rider_guide_download_form", data);

    // Simulate checklist generation / download trigger
    setTimeout(() => {
      setLoading(false);
      setDownloaded(true);

      // Trigger automatic download of technical checklist
      const blob = new Blob(
        [
          `========================================================================
EVENTTRIBE | MASTER CORPORATE EVENT TECHNICAL RIDER CHECKLIST
Backed by The Stage Factory (TSF) & TSF-AV | Hyderabad, Telangana & AP
Contact: info@eventtribe.in | +91 98881 02777
========================================================================

1. STRUCTURAL STAGING & TRUSSING (The Stage Factory - TSF)
[ ] Certified aluminum box truss profile verified (300mm / 400mm / 520mm).
[ ] Venue ceiling rigging point-load limits checked (HICC / HITEX / Taj Krishna).
[ ] Wind load calculation certificate obtained for outdoor setups (German Pagodas).
[ ] Stage deck height vs ceiling height ratio calculated (min 4ft clearance).
[ ] Wheelchair / greenroom ramp gradients and handrails compliant.
[ ] Heavy-duty Layher scaffold ballast blocks secured.

2. CONCERT-GRADE AUDIO (TSF-AV)
[ ] d&b audiotechnik V-Series / Y-Series acoustic simulation (ArrayCalc) run.
[ ] Speech transmission index (STI) target >= 0.65 across all delegate tiers.
[ ] Primary and secondary Dante digital audio network lines routed.
[ ] Shure Axient Digital RF frequency spectrum scan completed on site.
[ ] Separate stage monitor / press audio distribution (mult-box) routed.
[ ] Analog copper split backup line verified for all VIP podium mics.

3. P2.6 ULTRA-HD LED & VIDEO SWITCHING (TSF-AV)
[ ] P2.6 mm pixel pitch confirmed (min 2.5m viewing distance for front row).
[ ] Native 16:9 / 32:9 resolution canvas mapped in Novastar MX40 Pro / A8s.
[ ] True 3840Hz refresh rate verified on high-speed camera test.
[ ] Barco E2 / S3 seamless presentation matrix switchers with genlock.
[ ] Dual presentation laptops (Primary + Hot Backup running synchronized slide advancing).
[ ] Fiber optic SDI video snakes run with backup runs.

4. POWER & REDUNDANCY PROTOCOLS
[ ] Independent generator for AV/Stage separate from air-conditioning/lighting.
[ ] Online true double-conversion UPS on all FOH mixing and video processors.
[ ] Three-phase load balancing verified across red, yellow, and blue phases.

========================================================================
Prepared for: ${data.name} (${data.company || "Enterprise Partner"})
Expected Pax: ${data.pax || "Corporate Plenary"}
Date Generated: ${new Date().toLocaleDateString("en-IN")}
========================================================================`,
        ],
        { type: "text/plain;charset=utf-8" }
      );

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "EventTribe-Technical-AV-Stage-Rider-Checklist.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 600);
  };

  return (
    <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#18181c] to-[#0f0f11] p-8 sm:p-12 shadow-2xl">
      <div className="max-w-3xl">
        <span className="eyebrow !text-[#f26b21]">Technical Resource · Free Download</span>
        <h2 className="serif text-3xl sm:text-5xl font-medium tracking-tight text-white mt-3">
          {title}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#f5f3ef]/70 leading-relaxed">
          {subtitle}
        </p>
      </div>

      {downloaded ? (
        <div className="mt-8 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10 p-6 text-white">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-black font-bold">✓</span>
            <h3 className="text-xl font-semibold">Your Technical Rider Checklist is Ready</h3>
          </div>
          <p className="mt-2 text-sm text-white/80 leading-relaxed">
            Your download has started. Our engineering team at <strong>The Stage Factory</strong> and <strong>TSF-AV</strong> has also sent a copy to your email. If you need immediate venue stage drawings or acoustic layout validation, speak directly with our Technical Director.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <button
              onClick={() => setDownloaded(false)}
              className="text-xs font-semibold text-[#f26b21] hover:underline"
            >
              ← Download another copy
            </button>
            <a
              href="https://wa.me/919888102777?text=Hi%20EventTribe%2C%20I%20just%20downloaded%20the%20technical%20rider%20guide%20and%20need%20to%20discuss%20our%20venue%20specs."
              target="_blank"
              rel="noreferrer"
              className="btn btn-wa text-xs"
            >
              Discuss Technical Specs on WhatsApp
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5">
              Full Name *
            </label>
            <input
              required
              name="name"
              type="text"
              placeholder="e.g. Arvind Rao"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#f26b21] focus:outline-none focus:ring-1 focus:ring-[#f26b21]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5">
              Corporate Work Email *
            </label>
            <input
              required
              name="email"
              type="email"
              placeholder="arvind@enterprise.com"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#f26b21] focus:outline-none focus:ring-1 focus:ring-[#f26b21]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5">
              Phone / WhatsApp Number *
            </label>
            <input
              required
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#f26b21] focus:outline-none focus:ring-1 focus:ring-[#f26b21]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5">
              Organization / Brand Name
            </label>
            <input
              name="company"
              type="text"
              placeholder="e.g. Novartis, Tech Conclave, AGM"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#f26b21] focus:outline-none focus:ring-1 focus:ring-[#f26b21]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5">
              Expected Attendance (Pax)
            </label>
            <select
              name="pax"
              className="w-full rounded-xl border border-white/15 bg-[#18181c] px-4 py-3 text-sm text-white focus:border-[#f26b21] focus:outline-none focus:ring-1 focus:ring-[#f26b21]"
            >
              <option value="200-500 Pax">200 – 500 Delegates</option>
              <option value="500-1500 Pax">500 – 1,500 Delegates (Plenary)</option>
              <option value="1500-5000 Pax">1,500 – 5,000 Delegates (Arena/Expo)</option>
              <option value="5000+ Mega-Event">5,000+ Mega-Summit / Stadium</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5">
              Target Event Date / Month
            </label>
            <input
              name="eventDate"
              type="text"
              placeholder="e.g. November 2026"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#f26b21] focus:outline-none focus:ring-1 focus:ring-[#f26b21]"
            />
          </div>

          <div className="sm:col-span-2 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full sm:w-auto px-8 py-3.5 text-sm font-semibold tracking-wide"
            >
              {loading ? "Preparing Technical Checklist..." : "Download Technical Rider Checklist (Instant)"}
            </button>
            <span className="text-xs text-white/50">
              Zero spam. Verified technical specs for Hyderabad venue managers.
            </span>
          </div>
        </form>
      )}
    </div>
  );
}

export function LeadMagnetModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#141416] p-6 sm:p-10 border border-white/20 shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-6 right-6 text-white/60 hover:text-white text-xl p-2 font-bold"
        >
          ✕
        </button>
        <LeadMagnetSection
          source="popup_modal"
          title="Download the Corporate Technical AV & Stage Rider Guide"
          subtitle="Direct technical specifications for d&b line arrays, P2.6 LED pitch calculations, and certified aluminum box truss loads."
        />
      </div>
    </div>
  );
}
