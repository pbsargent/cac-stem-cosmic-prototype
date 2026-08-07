import type { Metadata } from "next";
import { Breadcrumbs, CalendarTab, CouncilFooter, CouncilHeader, InteriorHero, QuickLinks } from "../council-chrome";

export const metadata: Metadata = {
  title: "COSMIC STEM Award Program",
  description: "Explore Capitol Area Council’s hands-on COSMIC STEM award pathway, requirements, and volunteer roles.",
};

const awards = [
  ["01", "Eclipses", "https://drive.google.com/file/d/1iTsAtCJu6t1uGkzVUC0i1Yh0h-7VwpgZ/view", "https://drive.google.com/file/d/19Jowdr6epss5CduQEHXtb4I7KddZxG19/view"],
  ["02", "Biochemistry", "https://drive.google.com/file/d/163P7-T-AtW0XXXoraGsKj71gJonfzleg/view", "https://drive.google.com/file/d/1ug1wZ139ipJWtjdGuSRVlRdjnzdRqqPC/view"],
  ["03", "Computer Hardware", "https://drive.google.com/file/d/10R3qtQhhAHxFYsjYov2ojtby5bNg75ef/view", "https://drive.google.com/file/d/1Pssq4CtTvDNtB_XzpprbiJ7C6YfxD_cS/view"],
  ["04", "Radio Technologies", "https://drive.google.com/file/d/1_5oNdKsFrsS02alKEWwIi6XTkDGLSMOP/view", "https://drive.google.com/file/d/1wxF5o44aqG9dx2eK5BlDyqg3lx-JPYdm/view"],
  ["05", "Mycology", "https://drive.google.com/file/d/1fWXY2pW0zVNyFeTFhO3GrpihpbkjZvrh/view", "https://drive.google.com/file/d/13niSqaXN_1q7BNbtdHmjMWgyjNlJie4N/view"],
];

export default function CosmicPage() {
  return (
    <main>
      <CouncilHeader />
      <InteriorHero title="COSMIC STEM Awards" image="/media/stem-02.jpg" position="center 42%" />
      <CalendarTab />
      <Breadcrumbs current="COSMIC STEM Awards" />

      <div className="council-container council-page-grid">
        <article className="council-content">
          <section id="about">
            <h2>COSMIC STEM Award Program</h2>
            <p className="page-intro"><b>Challenges Of STEM: Mountaintop experiences In CAC</b></p>
            <div className="cosmic-program-lead">
              <img src="/media/cosmic-patch.png" alt="COSMIC Capitol Area Council patch" />
              <div>
                <p>Whether you are a Cub just starting in STEM, a Scout working toward advanced awards, or an older youth planning a STEM career, COSMIC is the Capitol Area Council pathway to hands-on, real-world STEM adventures.</p>
                <p>The program was developed by the council’s volunteer STEM committee to keep up with new discoveries, provide age-appropriate awards for every Scouting program, and offer local options that can grow with Central Texas interests and expertise.</p>
              </div>
            </div>
            <p>The name COSMIC was chosen from Scout suggestions and a Scout poll. The acronym came later, reflecting the program’s goal: to provide new STEM challenges and make them peak experiences for Capitol Area Council participants.</p>
          </section>

          <section id="why" className="content-section">
            <h2>Why a new STEM program?</h2>
            <p>Interest in STEM across the Capitol Area Council is extremely high. When national support for the Nova and Supernova programs ended, the CAC STEM Committee saw an opportunity to build a flexible, expandable local program that:</p>
            <ul>
              <li>Supports all levels, including Lions and Tigers.</li>
              <li>Adds new topics when local experts and special events make them possible.</li>
              <li>Uses a simple, repeatable structure that feels familiar to leaders.</li>
              <li>Can respond quickly to new discoveries and youth interests.</li>
            </ul>
          </section>

          <section id="system" className="content-section">
            <h2>How the COSMIC system works</h2>
            <div className="system-callout">
              <img src="/media/cosmic-first-steps.png" alt="COSMIC First Steps base patch and pebble awards" />
              <div>
                <h3>The pebble patch concept</h3>
                <ol>
                  <li>Every Scout first earns the hexagonal <b>COSMIC First Steps Base Patch</b>.</li>
                  <li>Each completed topic award adds a round “pebble” patch around the base.</li>
                  <li>The backing holds twelve different patches, and topics may be earned in any order.</li>
                  <li>Qualified COSMIC Counselors or Mentors supervise awards at unit and council events.</li>
                </ol>
              </div>
            </div>
            <p>The base and individual patch awards are introductory explorations that may take hours or several days. The advanced COSMIC Pin, coming soon, is a long-term mentor-guided commitment that may take months.</p>
          </section>

          <section id="participants" className="content-section">
            <h2>Who can participate?</h2>
            <p>COSMIC is open to all Capitol Area Council youth programs:</p>
            <ul>
              <li><b>Cub Scouts</b>—Lions through Arrow of Light—focus on “learn about” activities with strong adult guidance, simple vocabulary, movement, and models.</li>
              <li><b>Scouts BSA</b> complete more independent investigations, use deeper vocabulary, and teach others through the EDGE method.</li>
              <li><b>Venturing, Sea Scouting, and Exploring</b> participants ages 14–20 follow requirements adapted for older youth.</li>
            </ul>
          </section>

          <section id="first-steps" className="content-section">
            <h2>Getting started: COSMIC First Steps</h2>
            <p>Every Scout’s COSMIC journey begins with First Steps, regardless of age or program. Youth learn what STEM means, practice the scientific method and engineering design process, discover how the COSMIC system works, and recite the COSMIC STEM promise.</p>
            <div className="download-callout">
              <img src="/media/cosmic-logo.png" alt="COSMIC First Steps emblem" />
              <div><h3>COSMIC First Steps Base Patch</h3><p>Official requirements for every program level.</p></div>
              <a className="council-button" href="https://drive.google.com/file/d/1c_hDgf2h9yBMvNPALcHpl6-t5BgEo-NR/view" target="_blank" rel="noreferrer">Open PDF requirements</a>
            </div>
          </section>

          <section id="awards" className="content-section">
            <h2>COSMIC patch award requirements</h2>
            <p>Each topic has requirements matched to the participant’s program level. Select the official PDF for Cub Scouts or for Scouts BSA and older youth programs.</p>
            <div className="requirements-table" role="table" aria-label="COSMIC award requirement PDFs">
              <div className="requirements-header" role="row"><span>Patch award</span><span>Cub Scouts</span><span>Scouts BSA &amp; older youth</span></div>
              {awards.map(([number, title, cub, older]) => (
                <div className="requirements-row" role="row" key={title}>
                  <span><small>COSMIC {number}</small><b>{title}</b></span>
                  <a href={cub} target="_blank" rel="noreferrer">Open Cub PDF</a>
                  <a href={older} target="_blank" rel="noreferrer">Open older-youth PDF</a>
                </div>
              ))}
            </div>
            <div className="coming-soon"><p><b>Coming soon:</b> Microprocessors · Houston Toad · COSMIC Pin awards · and more</p></div>
          </section>

          <section id="format" className="content-section">
            <h2>Every COSMIC award follows the same format</h2>
            <div className="format-list">
              <div><b>Prerequisites</b><p>Connect to an existing adventure, merit badge, or short introductory activity.</p></div>
              <div><b>Safety</b><p>Cover topic-specific and age-appropriate Scouting safety expectations.</p></div>
              <div><b>Vocabulary</b><p>Define, draw, or use key terms in context.</p></div>
              <div><b>Do</b><p>Complete experiments, models, demonstrations, visits, coding, or research.</p></div>
              <div><b>Discuss</b><p>Reflect with a counselor on what was learned and what could improve.</p></div>
              <div><b>EDGE</b><p>Scouts BSA and older youth explain, demonstrate, guide, and enable others.</p></div>
            </div>
          </section>

          <section id="volunteers" className="content-section">
            <h2>Adult volunteers supporting COSMIC</h2>
            <h3>COSMIC Counselors</h3>
            <p>Counselors deliver First Steps and topic patch awards. They must be registered adults age 21 or older with current Safeguarding Youth Training and are expected to follow the published requirements. Merit badge counselor and council COSMIC training are recommended.</p>
            <h3>COSMIC Mentors</h3>
            <p>Mentors guide advanced COSMIC Pin candidates. Mentors must have STEM subject-matter expertise, be registered adults age 21 or older, complete required training, and receive STEM Committee approval.</p>
            <a className="council-button" href="mailto:STEM@cacscouting.org">Contact the STEM Committee</a>
          </section>
        </article>

        <QuickLinks>
          <a href="#about">What is COSMIC?</a>
          <a href="#system">How the system works</a>
          <a href="#participants">Who can participate?</a>
          <a href="#first-steps">First Steps requirements</a>
          <a href="#awards">Patch award library</a>
          <a href="#format">Award format</a>
          <a href="#volunteers">Counselors and mentors</a>
          <a href="/">Back to STEM programs</a>
        </QuickLinks>
      </div>
      <CouncilFooter />
    </main>
  );
}
