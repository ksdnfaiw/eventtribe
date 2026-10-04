import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/new-hero.jpg";
import conference from "@/assets/hero-stage.jpg";
import { services, events } from "@/lib/site-data";
import { Card, CtaBand, JsonLd, Section, crumbs, seo } from "@/components/site";

const why = [
  ["One team, one plan.", "Lighting, audio, video and staging are designed together, not stitched together on event day."],
  ["Pre-production you can see.", "3D renderings, CAD files, walk-throughs and run-of-show before we load in."],
  ["Redundancy built in.", "Our engineers plan back-ups for every scenario well before event day."],
  ["Any venue.", "We transform unconventional spaces and supply our own power distribution and generation."],
];
const process = [
  ["Brief", "We listen, ask the useful questions and understand the room."],
  ["Design", "3D/CAD, gear plan, power and the run of show."],
  ["Build & rig", "Our technical crew installs, tests and rehearses."],
  ["Run live", "On-site engineers manage every cue and change."],
  ["Wrap & review", "We strike cleanly and close the loop with your team."],
];
const faqs = [
  ["Do you work with event planners and agencies?", "Yes. Many of our clients are event management companies, experiential agencies and in-house teams who rely on us for the technical side."],
  ["Can you handle just one service, such as sound only?", "Yes. Take a single service, a few, or the full Event Tribe experience."],
  ["Do you provide power?", "Yes. We supply power distribution and generation where venue infrastructure is limited."],
  ["Can you stream our event?", "Yes. We provide camera systems, streaming distribution, graphics and hybrid event production."],
  ["Will we see the setup before the event?", "On request we provide walk-throughs, 2D and 3D schematics, CAD files and a run of show."],
];

export const Route = createFileRoute("/")({
  head: () => seo("The Event Tribe | Event Production Hyderabad", "Sound, video, lighting and staging, planned and run as one system for events across Hyderabad and Secunderabad.", "/"),
  component: Home,
});

function Home() {
  return <>
    <section className="hero">
      <img className="parallax" src={hero} alt="Large event stage in Hyderabad with amber lighting and a full audience" />
      <div className="wrap hero-in">
        <p className="eyebrow rise">Event production · Hyderabad</p>
        <h1 className="serif rise d1">Flawless events are <em>engineered.</em></h1>
        <p className="lead rise d2">Sound, video, lighting and staging, planned and run as one system by a technical team with deep live-event experience.</p>
        <div className="row rise d3"><Link className="btn btn-primary" to="/contact">Get a quote</Link><Link className="btn btn-ghost" to="/gallery">See our work</Link></div>
      </div>
    </section>
    <div className="marq" aria-label="Production capabilities"><div className="marq-track">{[0,1].flatMap((n) => ["Live technical experience", "Events from 20 to 10,000 attendees", "In-house power distribution & generation", "In-person, virtual and hybrid"].map((x) => <span key={n+x}>{x}</span>))}</div></div>
    <Section light>
      <div className="intro-wrap">
        <p className="eyebrow reveal">Built for live</p>
        <p className="intro reveal">We are a full-service event production company serving Hyderabad and the surrounding region. Our engineers combine current technology with years of live experience, so your event looks polished, runs on time and never leaves you worrying about what is happening backstage.</p>
      </div>
    </Section>
    <Section eyebrow="What we produce" title="One standard. Any room.">
      <div className="grid g4">{events.map((e) => <Link key={e.slug} to="/events/$slug" params={{ slug:e.slug }} className="tile reveal"><img src={e.image} alt={e.alt} loading="lazy" /><div><h3 className="serif">{e.title}</h3><p>{e.description}</p></div></Link>)}</div>
    </Section>
    <Section eyebrow="What we bring" title="Everything works as one.">
      <div className="grid g3">{services.map((s,i) => <Card key={s.slug} to="/services/$slug" params={{slug:s.slug}} image={s.image} alt={s.alt} title={s.title} text={s.description} index={i} />)}</div>
    </Section>
    <Section light eyebrow="Why The Event Tribe" title="Calm backstage. Impact out front.">
      <div className="grid g4">{why.map(([t,p],i) => <article className="why reveal" key={t}><span className="num">0{i+1}</span><h3 className="serif">{t}</h3><p>{p}</p></article>)}</div>
    </Section>
    <Section>
      <div className="feat">
        <div className="feat-img reveal"><img src={conference} alt="Medical and scientific conference stage" loading="lazy" /></div>
        <div className="reveal"><p className="eyebrow">Featured experience</p><h2 className="serif h2">Medical & scientific conferences.</h2><p className="lead">We have supported large medical congresses, including DERMACON 2023 in Hyderabad, held from 22 to 25 February 2023 under the theme “Skinception to Skinnovation”.</p><Link className="btn btn-ghost" to="/events/$slug" params={{slug:"conferences"}}>Conference production</Link></div>
      </div>
    </Section>
    <Section eyebrow="How it works" title="From brief to final cue.">
      <div className="steps">{process.map(([t,p],i)=><article className="step reveal" key={t}><b>{i+1}</b><h3>{t}</h3><p>{p}</p></article>)}</div>
    </Section>
    <Section light eyebrow="Questions" title="The useful answers.">
      <div className="faq">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
    </Section>
    <CtaBand />
    <JsonLd data={crumbs([["Home","/"]])} />
    <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))}} />
  </>;
}
