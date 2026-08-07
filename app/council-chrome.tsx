import type { ReactNode } from "react";
import { sitePath } from "./site-paths";

const councilLogo =
  "https://www.capitolareascouting.org/wp-content/uploads/2024/12/CAC-Header-logo-final_White-Horizontal.svg";

export function CouncilHeader() {
  return (
    <>
      <div className="council-utility">
        <div className="council-container utility-links">
          <a href="https://www.capitolareascouting.org/volunteer/">Volunteer</a>
          <a href="https://givebutter.com/cac-support" target="_blank" rel="noreferrer">Donate</a>
          <a href="https://www.capitolareascouting.org/pledge/">Pledge</a>
          <a href="https://www.capitolareascouting.org/shop/">Shop</a>
          <a href="https://www.capitolareascouting.org/contact/">Hours, etc.</a>
          <a href="https://www.capitolareascouting.org/espanol/">Español</a>
          <span className="search-mark" aria-label="Search">⌕</span>
        </div>
      </div>
      <header className="council-header">
        <div className="council-container council-nav-row">
          <a className="council-logo" href="https://www.capitolareascouting.org/" aria-label="Capitol Area Council home">
            <img src={councilLogo} alt="Scouting America Capitol Area Council" />
          </a>
          <nav className="council-nav" aria-label="Council navigation">
            <a href="https://www.capitolareascouting.org/join/">Join</a>
            <a href="https://www.capitolareascouting.org/activities/">Activities</a>
            <a href="https://www.capitolareascouting.org/training/">Training</a>
            <a href="https://www.capitolareascouting.org/giving/">Giving</a>
            <a href="https://www.capitolareascouting.org/resources/">Resources</a>
            <a href="https://www.capitolareascouting.org/about/">About CAC</a>
          </nav>
          <details className="mobile-menu">
            <summary>Menu</summary>
            <div>
              <a href="https://www.capitolareascouting.org/join/">Join</a>
              <a href="https://www.capitolareascouting.org/activities/">Activities</a>
              <a href="https://www.capitolareascouting.org/training/">Training</a>
              <a href="https://www.capitolareascouting.org/giving/">Giving</a>
              <a href="https://www.capitolareascouting.org/resources/">Resources</a>
              <a href="https://www.capitolareascouting.org/about/">About CAC</a>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}

export function InteriorHero({ title, image, position = "center" }: { title: string; image: string; position?: string }) {
  return (
    <section className="interior-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.34), rgba(0,0,0,.34)), url(${image})`, backgroundPosition: position }}>
      <h1>{title}</h1>
    </section>
  );
}

export function Breadcrumbs({ current, parent = "STEM Programs" }: { current?: string; parent?: string }) {
  return (
    <div className="council-container breadcrumbs">
      <a href="https://www.capitolareascouting.org/">Home</a><span>›</span>
      <a href="https://www.capitolareascouting.org/activities/">Activities</a><span>›</span>
      {current ? <><a href={sitePath("/")}>{parent}</a><span>›</span><strong>{current}</strong></> : <strong>{parent}</strong>}
    </div>
  );
}

export function QuickLinks({ children }: { children: ReactNode }) {
  return <aside className="quick-links"><h2>Quick Links</h2>{children}</aside>;
}

export function CalendarTab() {
  return <a className="calendar-tab" href="https://scoutingevent.com/?OrgKey=BSA564" target="_blank" rel="noreferrer">Calendar</a>;
}

export function CouncilFooter() {
  return (
    <>
      <section className="next-adventure">
        <div className="next-adventure-overlay" />
        <div className="council-container next-adventure-content">
          <h2>The next step of the adventure starts here</h2>
          <p>Since 1910, Scouting America has worked with parents to teach character, confidence, and integrity to the next generation.</p>
          <div className="adventure-links">
            <a href="https://www.capitolareascouting.org/join/"><span>01</span><b>Join Scouting</b><em>Find your program →</em></a>
            <a href="https://www.capitolareascouting.org/activities/"><span>02</span><b>Explore Activities</b><em>Start an adventure →</em></a>
            <a href="https://scoutingevent.com/?OrgKey=BSA564" target="_blank" rel="noreferrer"><span>03</span><b>Find an Event</b><em>View the calendar →</em></a>
          </div>
        </div>
      </section>
      <footer className="council-footer">
        <div className="council-container footer-main">
          <div className="footer-brand">
            <img src={councilLogo} alt="Scouting America Capitol Area Council" />
            <p>12500 North IH 35<br />Austin, Texas 78753<br />512-926-6363</p>
            <a href="https://www.capitolareascouting.org/contact/">Hours and contacts</a>
          </div>
          <div><h3>Join Scouting</h3><a href="https://www.capitolareascouting.org/join/">Find a program</a><a href="https://beascout.scouting.org/" target="_blank" rel="noreferrer">Find a unit</a><a href="https://www.capitolareascouting.org/volunteer/">Volunteer</a></div>
          <div><h3>Resources</h3><a href="https://www.capitolareascouting.org/activities/">Activities</a><a href="https://www.capitolareascouting.org/training/">Training</a><a href="https://www.capitolareascouting.org/resources/">Council resources</a></div>
          <div><h3>STEM Programs</h3><a href={sitePath("/")}>STEM overview</a><a href={sitePath("/cosmic/")}>COSMIC awards</a><a href="mailto:STEM@cacscouting.org">STEM@cacscouting.org</a></div>
        </div>
        <div className="council-container footer-legal"><span>© Capitol Area Council, Scouting America</span><span>Prototype STEM program pages</span></div>
      </footer>
    </>
  );
}
