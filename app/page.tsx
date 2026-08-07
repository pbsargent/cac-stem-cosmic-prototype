import type { Metadata } from "next";
import { Breadcrumbs, CalendarTab, CouncilFooter, CouncilHeader, InteriorHero, QuickLinks } from "./council-chrome";
import { sitePath } from "./site-paths";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "STEM Programs | Capitol Area Council",
  description: "Hands-on STEM programs, council events, and COSMIC awards for Scouts across Central Texas.",
};

const events = [
  {
    title: "STEMboree",
    audience: "Cub Scouts and their families",
    text: "A one-day event with learning sessions where Cubs may complete STEM activities or awards. A midway of hands-on exhibits and demonstrations welcomes all ages.",
    href: "https://www.capitolareascouting.org/activities/stem/stemboree/",
  },
  {
    title: "TechLab",
    audience: "Youth in 3rd through 9th grades",
    text: "Our premier summer STEAM camp features engaging, creative, hands-on projects that blend technology, art, and design. TechLab is open to the public.",
    href: "https://www.capitolareascouting.org/activities/stem/techlab/",
  },
  {
    title: "Conservation Award Weekend",
    audience: "Scouts BSA and older youth programs",
    text: "Explore ecology, environmental science, Leave No Trace, and conservation project work while progressing toward Scouting’s highest conservation awards.",
    href: "https://www.capitolareascouting.org/activities/conservationawards/",
  },
  {
    title: "STEM Adventure Weekend",
    audience: "Scouts BSA and older youth programs",
    text: "A weekend camp designed to help youth begin or complete STEM-related awards. Past programs have ranged from Astronomy to Welding and included COSMIC awards.",
    href: "https://www.capitolareascouting.org/activities/stem/stem-adventure-weekend/",
  },
];

export default function Home() {
  return (
    <main>
      <CouncilHeader />
      <InteriorHero title="STEM Programs" image={sitePath("/media/stem-03.jpg")} position="center 42%" />
      <CalendarTab />
      <Breadcrumbs parent="STEM Programs" />

      <div className="council-container council-page-grid">
        <article className="council-content">
          <section id="overview">
            <h2>STEM programs</h2>
            <p>Many of the activities and awards offered in Cub Scouting, Scouts BSA, Venturing, Sea Scouting, and Exploring focus on STEM—Science, Technology, Engineering, and Mathematics.</p>
            <p>Scouts can explore STEM through:</p>
            <ul>
              <li><b>Unit activities</b>, including Cub adventures and Scouts BSA merit badges—from astronomy and conservation to first aid and space exploration.</li>
              <li><b>Council STEM activities</b>, offering structured introductions to STEM topics for a few hours or within a weekend camping environment.</li>
              <li><b>The council-created COSMIC STEM Award Program</b>, a hands-on pathway that grows with new discoveries and local interests, guided by a COSMIC Counselor or Mentor.</li>
            </ul>
          </section>

          <div className="council-photo-row" aria-label="Scouts participating in council STEM activities">
            <img src={sitePath("/media/stem-01.jpg")} alt="Scouts learning about computer hardware with an adult instructor" />
            <img src={sitePath("/media/stem-02.jpg")} alt="A young Scout tries a space helmet display beside a model spacecraft" />
          </div>

          <section id="cosmic" className="content-section">
            <h2>COSMIC Awards</h2>
            <div className="cosmic-intro">
              <img src={sitePath("/media/cosmic-patch.png")} alt="COSMIC Capitol Area Council patch" />
              <div>
                <p>The COSMIC program—<b>Challenges Of STEM: Mountaintop experiences In CAC</b>—is the council’s own STEM pathway for all youth, from Lions through the older youth programs.</p>
                <ul>
                  <li><b>COSMIC First Steps Base Patch:</b> a hexagonal starter patch every Scout can earn through an introductory STEM lesson.</li>
                  <li><b>COSMIC Patch Awards:</b> round “pebble” patches earned for topic-focused STEM experiences.</li>
                  <li><b>COSMIC Pin Award:</b> an advanced, mentor-guided STEM journey comparable in depth to Supernova.</li>
                </ul>
                <a className="council-button" href={sitePath("/cosmic/")}>Learn more about COSMIC</a>
              </div>
            </div>
          </section>

          <section id="events" className="content-section">
            <h2>STEM-focused council events</h2>
            <p>Our council offers several annual events with strong STEM components. Many provide opportunities to earn STEM adventures, merit badges, and COSMIC awards.</p>
            <div className="event-list">
              {events.map((event) => (
                <section className="event-list-item" key={event.title}>
                  <h3><a href={event.href} target="_blank" rel="noreferrer">{event.title}</a> <span>({event.audience})</span></h3>
                  <p>{event.text} <a href={event.href} target="_blank" rel="noreferrer">Visit the {event.title} page.</a></p>
                </section>
              ))}
            </div>
          </section>

          <section className="question-box">
            <h2>Have a question about our STEM programs?</h2>
            <p>The Capitol Area Council STEM Committee can help with programs, events, award requirements, or volunteer opportunities.</p>
            <a className="council-button" href="mailto:STEM@cacscouting.org">Email STEM@cacscouting.org</a>
          </section>
        </article>

        <QuickLinks>
          <a href="#overview">STEM programs</a>
          <a href={sitePath("/cosmic/")}>COSMIC award program</a>
          <a href="#events">STEM-focused events</a>
          <a href="https://www.capitolareascouting.org/activities/stem/stemboree/" target="_blank" rel="noreferrer">STEMboree</a>
          <a href="https://www.capitolareascouting.org/activities/stem/techlab/" target="_blank" rel="noreferrer">TechLab</a>
          <a href="https://www.capitolareascouting.org/activities/conservationawards/" target="_blank" rel="noreferrer">Conservation Awards</a>
          <a href="https://www.capitolareascouting.org/activities/stem/stem-adventure-weekend/" target="_blank" rel="noreferrer">STEM Adventure Weekend</a>
        </QuickLinks>
      </div>
      <CouncilFooter />
    </main>
  );
}
