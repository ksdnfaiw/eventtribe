import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent, type ReactNode } from "react";
import logo from "@/assets/the-event-tribe-logo.png.asset.json";
import { services, events, subBrands } from "@/lib/site-data";
import { submitEnquiry } from "@/lib/enquiry.functions";
import { trackWhatsAppClick, trackLeadFormSubmit } from "@/lib/analytics";
import { WA_DIRECT_URL } from "@/components/StickyWhatsApp";

export const SITE = "https://eventtribe.in";
export const PHONE = "+91 98881 02777";
export const PHONE_RAW = "+919888102777";
export const EMAIL = "info@eventtribe.in";
export const WA = WA_DIRECT_URL;
export const ADDRESS =
  "Plot No. 106, Durga Vihar, 4th Cross Road, Lal Bazar, GunRock, Tirumalgiri, Secunderabad, Telangana";

export function seo(title: string, description: string, path: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE + path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE + path }],
  };
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function crumbs(items: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: SITE + path })),
  };
}

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Link to="/" className="brand" onClick={close} aria-label="EventTribe home">
          <img src={logo.url} alt="EventTribe Master Event Production" width={329} height={79} />
        </Link>
        <nav className={`nav ${open ? "is-open" : ""}`} aria-label="Main">
          <div className="dd">
            <Link to="/services" onClick={close}>Services</Link>
            <div className="dd-menu min-w-[320px]">
              <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#f26b21]">
                The Stage Factory (TSF)
              </div>
              <Link to="/services/$slug" params={{ slug: "staging" }} onClick={close}>
                Staging, Trussing & Pagodas
              </Link>
              <div className="my-1 border-t border-white/10" />
              <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#f26b21]">
                TSF-AV Infrastructure
              </div>
              <Link to="/services/$slug" params={{ slug: "audio" }} onClick={close}>
                Concert Audio (d&b audiotechnik)
              </Link>
              <Link to="/services/$slug" params={{ slug: "video" }} onClick={close}>
                P2.6 LED Walls & 4K Displays
              </Link>
              <Link to="/services/$slug" params={{ slug: "lighting" }} onClick={close}>
                Stage & Broadcast Lighting
              </Link>
              <Link to="/services/$slug" params={{ slug: "hybrid-events" }} onClick={close}>
                Broadcast & Live Streaming
              </Link>
              <div className="my-1 border-t border-white/10" />
              <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#f26b21]">
                Master Production
              </div>
              <Link to="/services/$slug" params={{ slug: "event-production" }} onClick={close}>
                Turnkey 360° Event Production
              </Link>
            </div>
          </div>
          <div className="dd">
            <Link to="/events" onClick={close}>Events</Link>
            <div className="dd-menu">
              {events.map((e) => (
                <Link key={e.slug} to="/events/$slug" params={{ slug: e.slug }} onClick={close}>{e.title}</Link>
              ))}
            </div>
          </div>
          <div className="dd">
            <span className="cursor-pointer text-[#f5f3ef]/80 hover:text-white transition-colors">Resources</span>
            <div className="dd-menu min-w-[280px]">
              <Link to="/corporate-stage-design-masterclass" onClick={close}>
                Stage Design Masterclass (TSF)
              </Link>
              <Link to="/large-scale-av-technical-rider-guide" onClick={close}>
                AV Technical Rider Guide (TSF-AV)
              </Link>
            </div>
          </div>
          <Link to="/clients" onClick={close}>Clients</Link>
          <Link to="/gallery" onClick={close}>Gallery</Link>
          <Link to="/about" onClick={close}>About</Link>
          <Link to="/contact" onClick={close}>Contact</Link>
          <a
            className="btn btn-wa"
            href={WA}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackWhatsAppClick("header_nav")}
          >
            WhatsApp Now
          </a>
        </nav>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-big flex flex-col gap-2">
          <img src={logo.url} alt="EventTribe Master Event Production" width={329} height={79} />
          <p className="max-w-xl text-xs sm:text-sm text-white/70 leading-relaxed mt-2">
            <strong>EventTribe</strong> is the Master Production Partner for large-scale corporate conferences, AGMs, summits, conclaves, product launches, and mega-events across Hyderabad, Telangana, and Andhra Pradesh.
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="rounded-md border border-white/20 bg-white/5 px-2.5 py-1 text-white/90">
              Structural Division: <strong>The Stage Factory (TSF)</strong> (11+ Yrs)
            </span>
            <span className="rounded-md border border-white/20 bg-white/5 px-2.5 py-1 text-white/90">
              Technology Division: <strong>TSF-AV</strong> (d&b sound · P2.6 LED)
            </span>
          </div>
        </div>
        <div className="ftr-grid mt-10">
          <div>
            <p className="eyebrow">Headquarters</p>
            <p>{ADDRESS}</p>
          </div>
          <div>
            <p className="eyebrow">Direct Line</p>
            <p>
              <a href={`tel:${PHONE_RAW}`}>{PHONE}</a>
              <br />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
          </div>
          <div>
            <p className="eyebrow">Pillar Guides</p>
            <p className="ftr-links">
              <Link to="/corporate-stage-design-masterclass">Stage Design Masterclass</Link>
              <Link to="/large-scale-av-technical-rider-guide">AV Technical Rider Guide</Link>
              <Link to="/services/$slug" params={{ slug: "staging" }}>The Stage Factory (TSF)</Link>
              <Link to="/services/$slug" params={{ slug: "audio" }}>TSF-AV Concert Sound</Link>
            </p>
          </div>
          <div>
            <p className="eyebrow">Explore</p>
            <p className="ftr-links">
              <Link to="/services">Services</Link>
              <Link to="/events">Events</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/clients">Clients</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </p>
          </div>
        </div>
        <div className="ftr-base">
          <span>© 2026 EventTribe. Powered by The Stage Factory (TSF) & TSF-AV. All rights reserved.</span>
          <span><Link to="/privacy">Privacy</Link> · <Link to="/terms">Terms</Link></span>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, intro, image, alt }: { eyebrow: string; title: string; intro?: string; image?: string; alt?: string }) {
  return (
    <section className={`phero ${image ? "has-img" : ""}`}>
      {image && <img className="phero-img" src={image} alt={alt ?? ""} />}
      <div className="wrap phero-in">
        <p className="eyebrow rise">{eyebrow}</p>
        <h1 className="serif rise d1">{title}</h1>
        {intro && <p className="lead rise d2">{intro}</p>}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="cta">
      <div className="wrap">
        <h2 className="serif reveal">High-stakes events demand single-point accountability.</h2>
        <div className="row reveal">
          <Link to="/contact" className="btn btn-primary">Request a technical proposal</Link>
          <a
            href={WA}
            className="btn btn-ghost"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackWhatsAppClick("cta_band")}
          >
            Direct WhatsApp Consult
          </a>
        </div>
      </div>
    </section>
  );
}

export function Card({ to, params, image, alt, title, text, index }: { to: string; params?: Record<string, string>; image: string; alt: string; title: string; text: string; index?: number }) {
  return (
    <Link to={to as never} params={params as never} className="card reveal">
      <div className="card-img"><img src={image} alt={alt} loading="lazy" /></div>
      <div className="card-body">
        {index !== undefined && <span className="num">{String(index + 1).padStart(2, "0")}</span>}
        <h3 className="serif">{title}</h3>
        <p>{text}</p>
        <span className="more">Explore specifications →</span>
      </div>
    </Link>
  );
}

export function Section({ eyebrow, title, children, light }: { eyebrow?: string; title?: string; children: ReactNode; light?: boolean }) {
  return (
    <section className={`sec ${light ? "light" : ""}`}>
      <div className="wrap">
        {eyebrow && <p className="eyebrow reveal">{eyebrow}</p>}
        {title && <h2 className="serif h2 reveal">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

const SERVICE_OPTS = [
  "Staging & Trussing (The Stage Factory)",
  "German Pagodas & Structures",
  "Concert Audio (d&b audiotechnik / TSF-AV)",
  "P2.6 LED Video Walls (TSF-AV)",
  "Stage & Broadcast Lighting",
  "Live Broadcast & Optical Fiber Switching",
  "Turnkey 360° Event Production",
  "Power Generation & Industrial Distribution",
];

export function QuoteForm() {
  const submit = useServerFn(submitEnquiry);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [err, setErr] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const g = (k: string) => String(fd.get(k) ?? "");
    setState("sending");

    trackLeadFormSubmit("quote_form", {
      name: g("name"),
      eventType: g("eventType"),
      venue: g("venueCity"),
    });

    try {
      const body = `Name: ${g("name")}
Email: ${g("email")}
Phone: ${g("phone")}
Event Type: ${g("eventType")}
Event Date: ${g("eventDate")}
Venue / City: ${g("venueCity")}
Expected Attendees: ${g("attendees")}
Budget Range: ${g("budget")}
Services Needed: ${fd.getAll("services").map(String).join(", ")}

Message:
${g("message")}`;

      const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(`New Event Enquiry from ${g("name")}`)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;

      submit({
        data: {
          name: g("name"),
          email: g("email"),
          phone: g("phone"),
          eventType: g("eventType"),
          eventDate: g("eventDate"),
          venueCity: g("venueCity"),
          attendees: g("attendees"),
          services: fd.getAll("services").map(String),
          budget: g("budget"),
          message: g("message"),
          website: g("website"),
        },
      }).catch(() => {});

      setState("done");
    } catch {
      setErr("There was an error creating the email link. Please try again.");
      setState("error");
    }
  }

  if (state === "done")
    return (
      <div className="form-done">
        <h3 className="serif">Thank you. Our Technical Director will respond within 4 business hours.</h3>
        <p>
          Need immediate venue availability or CAD layout validation?{" "}
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackWhatsAppClick("quote_form_done")}
          >
            WhatsApp us directly
          </a>{" "}
          or call <a href={`tel:${PHONE_RAW}`}>{PHONE}</a>.
        </p>
      </div>
    );

  return (
    <form className="form" onSubmit={onSubmit}>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden />
      <label>Name*<input name="name" required minLength={2} autoComplete="name" placeholder="Full name" /></label>
      <label>Corporate Email*<input name="email" type="email" required autoComplete="email" placeholder="name@company.com" /></label>
      <label>Phone / WhatsApp*<input name="phone" type="tel" required minLength={6} autoComplete="tel" placeholder="+91 ..." /></label>
      <label>Event Type*
        <select name="eventType" required defaultValue="">
          <option value="" disabled>Select event category</option>
          {events.map((e) => <option key={e.slug}>{e.title}</option>)}
          <option>Other Mega-Event / Conclave</option>
        </select>
      </label>
      <label>Event Date<input name="eventDate" type="date" /></label>
      <label>Venue / City<input name="venueCity" placeholder="e.g. HICC, HITEX, GMR Arena, Taj Falaknuma" /></label>
      <label>Expected Delegates / Pax<input name="attendees" inputMode="numeric" placeholder="e.g. 500 – 5,000" /></label>
      <label>Budget Scope (optional)<input name="budget" placeholder="Approximate production allocation" /></label>
      <fieldset className="full">
        <legend>Production Divisions & Services Required</legend>
        <div className="chips">
          {SERVICE_OPTS.map((s) => (
            <label key={s} className="chip"><input type="checkbox" name="services" value={s} /><span>{s}</span></label>
          ))}
        </div>
      </fieldset>
      <label className="full">Technical Scope / Venue Brief<textarea name="message" rows={4} placeholder="Please detail stage dimensions, LED wall canvas size, rigging constraints, or special cues..." /></label>
      {state === "error" && <p className="form-err full" role="alert">{err} Or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>}
      <button className="btn btn-primary full" disabled={state === "sending"}>
        {state === "sending" ? "Submitting Technical Brief..." : "Submit Production Enquiry"}
      </button>
    </form>
  );
}
