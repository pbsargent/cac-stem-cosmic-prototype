import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "COSMIC STEM Award Program",
  description:
    "Explore Capitol Area Council’s hands-on COSMIC STEM award pathway, requirements, and volunteer roles.",
};

const awards = [
  {
    number: "01",
    title: "Eclipses",
    cub: "https://drive.google.com/file/d/1iTsAtCJu6t1uGkzVUC0i1Yh0h-7VwpgZ/view",
    older: "https://drive.google.com/file/d/19Jowdr6epss5CduQEHXtb4I7KddZxG19/view",
  },
  {
    number: "02",
    title: "Biochemistry",
    cub: "https://drive.google.com/file/d/163P7-T-AtW0XXXoraGsKj71gJonfzleg/view",
    older: "https://drive.google.com/file/d/1ug1wZ139ipJWtjdGuSRVlRdjnzdRqqPC/view",
  },
  {
    number: "03",
    title: "Computer Hardware",
    cub: "https://drive.google.com/file/d/10R3qtQhhAHxFYsjYov2ojtby5bNg75ef/view",
    older: "https://drive.google.com/file/d/1Pssq4CtTvDNtB_XzpprbiJ7C6YfxD_cS/view",
  },
  {
    number: "04",
    title: "Radio Technologies",
    cub: "https://drive.google.com/file/d/1_5oNdKsFrsS02alKEWwIi6XTkDGLSMOP/view",
    older: "https://drive.google.com/file/d/1wxF5o44aqG9dx2eK5BlDyqg3lx-JPYdm/view",
  },
  {
    number: "05",
    title: "Mycology",
    cub: "https://drive.google.com/file/d/1fWXY2pW0zVNyFeTFhO3GrpihpbkjZvrh/view",
    older: "https://drive.google.com/file/d/13niSqaXN_1q7BNbtdHmjMWgyjNlJie4N/view",
  },
];

function Header() {
  return (
    <>
      <div className="utility-bar">
        <div className="site-width utility-inner">
          <span>Scouting America · Capitol Area Council</span>
          <div><a href="https://www.capitolareascouting.org/join/">Join</a><a href="https://www.capitolareascouting.org/volunteer/">Volunteer</a><a href="mailto:STEM@cacscouting.org">STEM@cacscouting.org</a></div>
        </div>
      </div>
      <header className="site-header">
        <div className="site-width nav-wrap">
          <a className="brand" href="/" aria-label="Capitol Area Council STEM home">
            <span className="brand-mark" aria-hidden="true">S<span>+</span></span>
            <span><b>CAC STEM</b><small>Curiosity belongs here</small></span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="/">STEM Home</a><a href="#about">About COSMIC</a><a href="#awards">Award Library</a><a className="nav-cta" href="mailto:STEM@cacscouting.org">Contact STEM</a>
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
          <a className="brand brand-light" href="/"><span className="brand-mark" aria-hidden="true">S<span>+</span></span><span><b>CAC STEM</b><small>Capitol Area Council</small></span></a>
          <p>COSMIC is a locally developed Capitol Area Council program, built by STEM committee volunteers and Central Texas subject-matter experts.</p>
        </div>
        <div><h3>COSMIC</h3><a href="#system">How it works</a><a href="#awards">Award requirements</a><a href="#volunteer">Counselors & mentors</a></div>
        <div><h3>Get in touch</h3><p>Questions, new award ideas, and volunteer interest are welcome.</p><a href="mailto:STEM@cacscouting.org">STEM@cacscouting.org →</a></div>
      </div>
      <div className="site-width footer-bottom"><span>Capitol Area Council COSMIC STEM</span><span>Prototype program experience</span></div>
    </footer>
  );
}

export default function CosmicPage() {
  return (
    <main className="cosmic-page">
      <Header />
      <section className="hero cosmic-hero">
        <div className="site-width cosmic-hero-grid">
          <div>
            <div className="eyebrow light"><span /> CAPITOL AREA COUNCIL ORIGINAL</div>
            <h1>Reach your<br /><em>STEM peak.</em></h1>
            <p className="hero-lede">Whether you’re a Cub taking your first step or an older youth planning a STEM career, COSMIC turns curiosity into hands-on, real-world adventure.</p>
            <div className="hero-actions"><a className="button button-primary" href="#awards">Browse awards <span>↓</span></a><a className="button button-white" href="#system">See how it works <span>→</span></a></div>
            <div className="program-chips"><span>Lions through Arrow of Light</span><span>Scouts BSA</span><span>Older youth programs</span></div>
          </div>
          <div className="cosmic-hero-art">
            <div className="patch-rings" aria-hidden="true" />
            <img src="/media/cosmic-patch.png" alt="COSMIC base patch featuring a night-sky telescope scene" />
            <span className="orbit-label label-one">Explore<br />12 topics</span>
            <span className="orbit-label label-two">Built in<br />Central Texas</span>
          </div>
        </div>
      </section>

      <nav className="cosmic-subnav" aria-label="COSMIC page sections"><div className="site-width"><a href="#about">What is COSMIC?</a><a href="#system">How it works</a><a href="#participants">Who can participate?</a><a href="#awards">Award library</a><a href="#format">Award format</a><a href="#volunteer">Volunteer roles</a></div></nav>

      <section className="section cosmic-overview" id="about">
        <div className="site-width overview-grid">
          <div className="overview-copy">
            <div className="eyebrow dark"><span /> CHALLENGES OF STEM</div>
            <h2>A local pathway built to keep moving.</h2>
            <p className="lead">COSMIC stands for <b>Challenges Of STEM: Mountaintop experiences In CAC.</b></p>
            <p>The name was chosen by Scouts, then shaped into an acronym that reflects the program’s goal: new STEM challenges that become peak experiences for participants.</p>
            <p>Created by the council’s volunteer STEM committee, COSMIC can respond quickly to discoveries, local expertise, special events, and the questions young people are asking now.</p>
          </div>
          <div className="principle-grid">
            <article className="principle"><span>01</span><h3>Current</h3><p>New topics can grow from emerging discoveries and youth interests.</p></article>
            <article className="principle"><span>02</span><h3>Hands-on</h3><p>Every award centers doing, investigating, building, or demonstrating.</p></article>
            <article className="principle"><span>03</span><h3>For everyone</h3><p>Age-appropriate pathways serve kindergarten Lions through age 20.</p></article>
            <article className="principle"><span>04</span><h3>Locally powered</h3><p>Central Texas volunteers and subject experts help the program evolve.</p></article>
          </div>
        </div>
      </section>

      <section className="section system-section" id="system">
        <div className="site-width system-grid">
          <div className="system-image"><img src="/media/cosmic-first-steps.png" alt="COSMIC First Steps base patch and sample pebble patches" /></div>
          <div className="system-copy">
            <div className="eyebrow dark"><span /> THE PEBBLE PATCH SYSTEM</div>
            <h2>Start at the base.<br />Build your own path.</h2>
            <p>Every Scout first earns the hexagonal First Steps base patch. Topic-focused round “pebble” patches then attach around the center, with room for twelve different explorations.</p>
            <div className="system-list">
              <div><b>01</b><span><strong>Earn First Steps</strong>Learn what STEM is, practice scientific and engineering thinking, and make the COSMIC STEM promise.</span></div>
              <div><b>02</b><span><strong>Choose any topic</strong>Pebble patches may be earned in any order at unit meetings, den meetings, or council events.</span></div>
              <div><b>03</b><span><strong>Explore with a counselor</strong>Complete hands-on requirements under a qualified COSMIC Counselor or Mentor.</span></div>
              <div><b>04</b><span><strong>Go for the pin</strong>The advanced mentor-guided COSMIC Pin is a long-term journey, coming soon.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section participants-section" id="participants">
        <div className="site-width">
          <div className="eyebrow light"><span /> ONE PROGRAM · AGE-APPROPRIATE PATHS</div>
          <h2>Who can participate?</h2>
          <div className="participant-grid">
            <article className="participant-card"><span>K–5</span><h3>Cub Scouts</h3><p>Lions through Arrow of Light focus on “learn about” activities, simple vocabulary, movement, models, and strong adult guidance.</p></article>
            <article className="participant-card"><span>11–17</span><h3>Scouts BSA</h3><p>Scouts take on more independent investigations, deeper vocabulary, reflection, and teaching others through the EDGE method.</p></article>
            <article className="participant-card"><span>14–20</span><h3>Older youth</h3><p>Venturers, Sea Scouts, and Explorers can pursue advanced requirements tailored to their program and level of experience.</p></article>
          </div>
        </div>
      </section>

      <section className="section awards-section" id="awards">
        <div className="site-width">
          <div className="awards-intro">
            <div><div className="eyebrow dark"><span /> REQUIREMENT LIBRARY</div><h2>Choose your next challenge.</h2></div>
            <p>Open the official PDF for your program level. COSMIC patch awards are introductory explorations that may take a few hours or several days to complete.</p>
          </div>
          <article className="first-steps-card">
            <img src="/media/cosmic-logo.png" alt="COSMIC First Steps emblem" />
            <div><small>Everyone begins here</small><h3>COSMIC First Steps</h3><p>Learn what STEM means, practice the scientific method and engineering design process, and discover how COSMIC works.</p></div>
            <a className="button button-white" href="https://drive.google.com/file/d/1c_hDgf2h9yBMvNPALcHpl6-t5BgEo-NR/view" target="_blank" rel="noreferrer">Open requirements <span>↗</span></a>
          </article>
          <div className="award-grid">
            {awards.map((award) => (
              <article className="award-card" key={award.title}>
                <span>{award.number}</span><small>COSMIC PATCH AWARD {award.number}</small><h3>{award.title}</h3>
                <div className="award-links"><a href={award.cub} target="_blank" rel="noreferrer">Cub requirements ↗</a><a href={award.older} target="_blank" rel="noreferrer">Scouts BSA + older youth ↗</a></div>
                <p className="award-status">Official 2026 requirement PDFs</p>
              </article>
            ))}
          </div>
          <div className="coming-grid">
            <article className="coming-card"><h3>Microprocessors</h3><span>Coming soon</span></article>
            <article className="coming-card"><h3>Houston Toad</h3><span>Coming soon</span></article>
            <article className="coming-card"><h3>And many more…</h3><span>Propose a new topic</span></article>
          </div>
        </div>
      </section>

      <section className="section format-section" id="format">
        <div className="site-width">
          <div className="eyebrow dark"><span /> A FAMILIAR RHYTHM</div><h2>Every award follows<br />the same format.</h2>
          <div className="format-grid">
            <article className="format-card"><h3>Prerequisites</h3><p>Connect the topic to an adventure, merit badge, or short introductory activity.</p></article>
            <article className="format-card"><h3>Safety</h3><p>Practice topic-specific and age-appropriate Scouting safety expectations.</p></article>
            <article className="format-card"><h3>Vocabulary</h3><p>Define, draw, or use key terms in context to show understanding.</p></article>
            <article className="format-card"><h3>Do</h3><p>Carry out experiments, models, demonstrations, visits, coding, or research.</p></article>
            <article className="format-card"><h3>Discuss</h3><p>Reflect with a counselor on what worked, what was fun, and what could improve.</p></article>
            <article className="format-card"><h3>EDGE</h3><p>Scouts BSA and older youth explain, demonstrate, guide, and enable others.</p></article>
          </div>
        </div>
      </section>

      <section className="section volunteer-section" id="volunteer">
        <div className="site-width volunteer-grid">
          <div><div className="eyebrow dark"><span /> ADULT SUPPORT</div><h2>Help Scouts reach the next summit.</h2><p>Questions about counselor or mentor roles? The STEM Committee can help you choose the right path.</p><a className="button button-primary" href="mailto:STEM@cacscouting.org">Contact the STEM Committee <span>→</span></a></div>
          <div className="volunteer-cards">
            <article className="volunteer-card"><h3>COSMIC Counselors</h3><p>Deliver First Steps and topic patch awards in group settings.</p><ul><li>Registered adult age 21+ with current Safeguarding Youth Training</li><li>Follow award requirements as written</li><li>Merit badge counselor and council COSMIC training are recommended</li><li>Report completed patches before purchase at the council Scout Shop</li></ul></article>
            <article className="volunteer-card"><h3>COSMIC Mentors</h3><p>Guide advanced COSMIC Pin candidates through long-term investigations.</p><ul><li>Subject-matter expertise through education, career, or serious hobby</li><li>Registered adult age 21+ with current Safeguarding Youth Training</li><li>Merit badge counselor and in-person COSMIC training required</li><li>STEM Committee application and approval required</li></ul></article>
          </div>
        </div>
      </section>

      <section className="section contact-band"><div className="site-width contact-inner"><div><span>HAVE A NEW AWARD IDEA?</span><h2>COSMIC grows when<br />our community does.</h2></div><a className="button button-primary" href="mailto:STEM@cacscouting.org">Share your idea <span>→</span></a></div></section>
      <Footer />
    </main>
  );
}
