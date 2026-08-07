import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STEM Programs | Capitol Area Council",
  description:
    "Hands-on STEM programs, council events, and COSMIC awards for Scouts across Central Texas.",
};

const events = [
  {
    title: "STEMboree",
    audience: "Cub Scouts + families",
    description:
      "A one-day celebration with learning sessions, hands-on exhibits, and demonstrations for curious minds of every age.",
    image: "/media/stem-05.jpg",
    href: "https://www.capitolareascouting.org/activities/stem/stemboree/",
    accent: "coral",
  },
  {
    title: "TechLab",
    audience: "Grades 3–9 · open to the public",
    description:
      "Our premier summer STEAM camp, blending technology, art, creative design, and build-it-yourself projects.",
    image: "/media/stem-02.jpg",
    href: "https://www.capitolareascouting.org/activities/stem/techlab/",
    accent: "sky",
  },
  {
    title: "Conservation Award Weekend",
    audience: "Scouts BSA + older youth",
    description:
      "Explore ecology, environmental science, Leave No Trace, and conservation projects in an outdoor laboratory.",
    image: "/media/eclipse-01.jpg",
    href: "https://www.capitolareascouting.org/activities/conservationawards/",
    accent: "green",
  },
  {
    title: "STEM Adventure Weekend",
    audience: "Scouts BSA + older youth",
    description:
      "A weekend of STEM awards and skill-building—from astronomy and robotics to engineering and welding.",
    image: "/media/eclipse-02.jpg",
    href: "https://www.capitolareascouting.org/activities/stem/stem-adventure-weekend/",
    accent: "gold",
  },
];

function Header() {
  return (
    <>
      <div className="utility-bar">
        <div className="site-width utility-inner">
          <span>Scouting America · Capitol Area Council</span>
          <div>
            <a href="https://www.capitolareascouting.org/join/">Join</a>
            <a href="https://www.capitolareascouting.org/volunteer/">Volunteer</a>
            <a href="mailto:STEM@cacscouting.org">STEM@cacscouting.org</a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="site-width nav-wrap">
          <a className="brand" href="/" aria-label="Capitol Area Council STEM home">
            <span className="brand-mark" aria-hidden="true">S<span>+</span></span>
            <span><b>CAC STEM</b><small>Curiosity belongs here</small></span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#explore">Explore STEM</a>
            <a href="#events">Events</a>
            <a href="/cosmic">COSMIC Awards</a>
            <a className="nav-cta" href="mailto:STEM@cacscouting.org">Ask a question</a>
          </nav>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-width footer-grid">
        <div>
          <a className="brand brand-light" href="/">
            <span className="brand-mark" aria-hidden="true">S<span>+</span></span>
            <span><b>CAC STEM</b><small>Capitol Area Council</small></span>
          </a>
          <p>Science is a question. Technology is a tool. Engineering is a process. Math is the language.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <a href="#events">Council STEM events</a>
          <a href="/cosmic">COSMIC awards</a>
          <a href="mailto:STEM@cacscouting.org">Volunteer with STEM</a>
        </div>
        <div>
          <h3>Capitol Area Council</h3>
          <p>12500 North IH 35<br />Austin, Texas 78753<br />512-926-6363</p>
          <a href="https://www.capitolareascouting.org/">Council website →</a>
        </div>
      </div>
      <div className="site-width footer-bottom">
        <span>Prototype STEM experience for Capitol Area Council</span>
        <span>Prepared from council-provided program materials</span>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero home-hero">
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="site-width hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> STEM PROGRAMS</div>
            <h1>Turn “what if?”<br />into <em>what’s next.</em></h1>
            <p className="hero-lede">From first experiments to future careers, Scouts learn by building, testing, exploring—and trying again.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#explore">Explore STEM <span>↓</span></a>
              <a className="button button-ghost" href="/cosmic">Discover COSMIC <span>→</span></a>
            </div>
            <div className="program-chips" aria-label="Programs served">
              <span>Cub Scouts</span><span>Scouts BSA</span><span>Venturing</span><span>Sea Scouts</span><span>Exploring</span>
            </div>
          </div>
          <div className="hero-media" aria-label="Scouts learning together through STEM activities">
            <figure className="hero-photo hero-photo-main">
              <img src="/media/stem-01.jpg" alt="Young Scouts gather around a computer hardware demonstration" />
            </figure>
            <figure className="hero-photo hero-photo-float">
              <img src="/media/stem-04.jpg" alt="Scouts demonstrate a hands-on engineering model" />
            </figure>
            <div className="hero-badge"><b>Hands on.</b><span>Minds open.</span></div>
          </div>
        </div>
        <div className="formula-band" aria-hidden="true">
          <span>OBSERVE</span><i>+</i><span>IMAGINE</span><i>+</i><span>BUILD</span><i>+</i><span>SHARE</span><b>= DISCOVERY</b>
        </div>
      </section>

      <section className="section intro-section" id="explore">
        <div className="site-width intro-grid">
          <div>
            <div className="eyebrow dark"><span /> A PLACE FOR EVERY QUESTION</div>
            <h2>STEM is already part of the adventure.</h2>
          </div>
          <div className="intro-copy">
            <p>Many activities and awards in Cub Scouting, Scouts BSA, Venturing, Sea Scouting, and Exploring are powered by science, technology, engineering, and mathematics.</p>
            <p>Explore through unit activities, council events, and our locally created COSMIC award program—guided by adults who love helping young people discover how the world works.</p>
          </div>
        </div>
        <div className="site-width stem-grid">
          <article className="stem-card science"><span>S</span><h3>Science</h3><p>Ask questions. Investigate patterns. Follow the evidence.</p></article>
          <article className="stem-card technology"><span>T</span><h3>Technology</h3><p>Understand the tools that shape our world—and make new ones.</p></article>
          <article className="stem-card engineering"><span>E</span><h3>Engineering</h3><p>Imagine, prototype, test, and improve a solution.</p></article>
          <article className="stem-card mathematics"><span>M</span><h3>Mathematics</h3><p>Measure, model, and uncover the language behind discovery.</p></article>
        </div>
      </section>

      <section className="section cosmic-feature">
        <div className="site-width cosmic-feature-grid">
          <div className="patch-stage">
            <div className="patch-rings" aria-hidden="true" />
            <img src="/media/cosmic-patch.png" alt="COSMIC award base patch featuring Scouts using a telescope under the night sky" />
          </div>
          <div className="cosmic-copy">
            <div className="eyebrow light"><span /> MADE IN CENTRAL TEXAS</div>
            <h2>Meet the COSMIC<br />STEM award program.</h2>
            <p><b>Challenges Of STEM: Mountaintop experiences In CAC</b> is the council’s own flexible, hands-on pathway for every youth—from Lions through age 20.</p>
            <div className="cosmic-steps">
              <div><b>01</b><span><strong>First Steps</strong>Earn the hexagonal base patch.</span></div>
              <div><b>02</b><span><strong>Explore Topics</strong>Add round “pebble” patches in any order.</span></div>
              <div><b>03</b><span><strong>Go Further</strong>Work toward an advanced mentor-guided pin.</span></div>
            </div>
            <a className="button button-white" href="/cosmic">Explore COSMIC awards <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="section events-section" id="events">
        <div className="site-width section-heading split-heading">
          <div>
            <div className="eyebrow dark"><span /> COUNCIL EXPERIENCES</div>
            <h2>Find your next<br />STEM adventure.</h2>
          </div>
          <p>Council events give Scouts a structured way to try new skills, meet experts, and earn adventures, merit badges, and COSMIC awards.</p>
        </div>
        <div className="site-width event-grid">
          {events.map((event, index) => (
            <a className={`event-card ${event.accent}`} href={event.href} key={event.title} target="_blank" rel="noreferrer">
              <div className="event-image"><img src={event.image} alt="" /><span>0{index + 1}</span></div>
              <div className="event-content">
                <small>{event.audience}</small>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <b>Visit event page <span>↗</span></b>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section story-strip">
        <div className="story-photo"><img src="/media/stem-03.jpg" alt="A Scout, parent, and volunteer carry out a hands-on science investigation" /></div>
        <div className="story-copy">
          <span className="giant-quote">“</span>
          <blockquote>Every big discovery starts with someone willing to wonder out loud.</blockquote>
          <p>Give Scouts room to ask, build, test, and teach. That’s how confidence becomes capability.</p>
          <a href="mailto:STEM@cacscouting.org">Help create the next STEM experience →</a>
        </div>
      </section>

      <section className="section contact-band">
        <div className="site-width contact-inner">
          <div><span>READY TO EXPLORE?</span><h2>Bring your curiosity.<br />We’ll bring the adventure.</h2></div>
          <a className="button button-primary" href="mailto:STEM@cacscouting.org">Email the STEM Committee <span>→</span></a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
