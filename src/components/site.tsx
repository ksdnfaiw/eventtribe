import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent, type ReactNode } from "react";
import logo from "@/assets/the-event-tribe-logo.png.asset.json";
import { services, events } from "@/lib/site-data";
import { submitEnquiry } from "@/lib/enquiry.functions";

export const SITE = "https://eventtribe.in";
export const PHONE = "+91 98881 02777";
export const PHONE_RAW = "+919888102777";
export const EMAIL = "info@eventtribe.in";
export const WA = "https://wa.me/919888102777";
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
        <Link to="/" className="brand" onClick={close} aria-label="The Event Tribe home">
          <img src={logo.url} alt="The Event Tribe" width={329} height={79} />
        </Link>
        <nav className={`nav ${open ? "is-open" : ""}`} aria-label="Main">
          <div className="dd">
            <Link to="/services" onClick={close}>Services</Link>
            <div className="dd-menu">
              {services.map((s) => (
                <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} onClick={close}>{s.title}</Link>
              ))}
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
          <Link to="/clients" onClick={close}>Clients</Link>
          <Link to="/gallery" onClick={close}>Gallery</Link>
          <Link to="/about" onClick={close}>About</Link>
          <Link to="/contact" onClick={close}>Contact</Link>
          <a className="btn btn-wa" href={WA} target="_blank" rel="noreferrer">WhatsApp Now</a>
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
        <div className="ftr-big"><img src={logo.url} alt="The Event Tribe" width={329} height={79} /></div>
        <div className="ftr-grid">
          <div>
            <p className="eyebrow">Visit</p>
            <p>{ADDRESS}</p>
          </div>
          <div>
            <p className="eyebrow">Talk</p>
            <p><a href={`tel:${PHONE_RAW}`}>{PHONE}</a><br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          </div>
          <div>
            <p className="eyebrow">Explore</p>
            <p className="ftr-links">
              <Link to="/services">Services</Link><Link to="/events">Events</Link><Link to="/gallery">Gallery</Link>
              <Link to="/about">About</Link><Link to="/contact">Contact</Link>
            </p>
          </div>
          <div>
            <p className="eyebrow">Follow</p>
            <p className="ftr-links">
              <a href="https://facebook.com/EventsTribe" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://instagram.com/event_tribe" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://twitter.com/TheEventsTribe" target="_blank" rel="noreferrer">X / Twitter</a>
              <a href="https://youtube.com/@TheEventTribe" target="_blank" rel="noreferrer">YouTube</a>
            </p>
          </div>
        </div>
        <div className="ftr-base">
          <span>© 2026 The Event Tribe. All rights reserved.</span>
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
        <h2 className="serif reveal">Let's make the most talked-about event in the city.</h2>
        <div className="row reveal">
          <Link to="/contact" className="btn btn-primary">Request a quote</Link>
          <a href={WA} className="btn btn-ghost" target="_blank" rel="noreferrer">WhatsApp us</a>
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
        <span className="more">Learn more →</span>
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

const SERVICE_OPTS = ["Audio", "Video", "Lighting", "Staging", "Event Production", "Hybrid / Streaming", "Power"];

export function QuoteForm() {
  const submit = useServerFn(submitEnquiry);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [err, setErr] = useState("");
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const g = (k: string) => String(fd.get(k) ?? "");
    setState("sending");
    try {
      const r = await submit({
        data: {
          name: g("name"), email: g("email"), phone: g("phone"), eventType: g("eventType"),
          eventDate: g("eventDate"), venueCity: g("venueCity"), attendees: g("attendees"),
          services: fd.getAll("services").map(String), budget: g("budget"), message: g("message"), website: g("website"),
        },
      });
      if (r.ok) setState("done");
      else { setErr(r.error); setState("error"); }
    } catch {
      setErr("Please check the required fields: name, a valid email and phone number.");
      setState("error");
    }
  }
  if (state === "done")
    return (
      <div className="form-done">
        <h3 className="serif">Thanks. We'll respond within one business day.</h3>
        <p>Need us sooner? <a href={WA} target="_blank" rel="noreferrer">WhatsApp us</a> or call <a href={`tel:${PHONE_RAW}`}>{PHONE}</a>.</p>
      </div>
    );
  return (
    <form className="form" onSubmit={onSubmit}>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden />
      <label>Name*<input name="name" required minLength={2} autoComplete="name" /></label>
      <label>Email*<input name="email" type="email" required autoComplete="email" /></label>
      <label>Phone*<input name="phone" type="tel" required minLength={6} autoComplete="tel" /></label>
      <label>Event type*
        <select name="eventType" required defaultValue="">
          <option value="" disabled>Select</option>
          {events.map((e) => <option key={e.slug}>{e.title}</option>)}
          <option>Other</option>
        </select>
      </label>
      <label>Event date<input name="eventDate" type="date" /></label>
      <label>Venue / city<input name="venueCity" /></label>
      <label>Expected attendees<input name="attendees" inputMode="numeric" /></label>
      <label>Budget range (optional)<input name="budget" /></label>
      <fieldset className="full">
        <legend>Services needed</legend>
        <div className="chips">
          {SERVICE_OPTS.map((s) => (
            <label key={s} className="chip"><input type="checkbox" name="services" value={s} /><span>{s}</span></label>
          ))}
        </div>
      </fieldset>
      <label className="full">Message<textarea name="message" rows={4} /></label>
      {state === "error" && <p className="form-err full" role="alert">{err} Or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>}
      <button className="btn btn-primary full" disabled={state === "sending"}>{state === "sending" ? "Sending..." : "Send enquiry"}</button>
    </form>
  );
}
