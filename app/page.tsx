import type { Metadata } from "next";
import {
  concepts,
  equipment,
  imageSlots,
  preliminaryData,
  project,
  questions,
  sources,
  tracks,
  updates,
} from "./project-data";

export const metadata: Metadata = {
  title: "WPT Efficiency | Power transfer across barriers",
  description:
    "A two-track student physics study comparing inductive electromagnetic and ultrasonic acoustic power transfer across barriers.",
};

function MethodDiagram({ type }: { type: "em" | "acoustic" }) {
  const isEm = type === "em";

  return (
    <div
      className={`method-diagram ${type}`}
      aria-label={`${isEm ? "Electromagnetic" : "Acoustic"} conceptual schematic`}
    >
      <span className="diagram-label source">source</span>
      <span className="diagram-label barrier">barrier</span>
      <span className="diagram-label receiver">receiver</span>
      <div className="source-shape" />
      <div className="energy-lines" aria-hidden="true"><i /><i /><i /></div>
      <div className="barrier-shape" />
      <div className="receiver-shape" />
    </div>
  );
}

function ResultsChart() {
  const hasData = preliminaryData.length > 0;
  const max = Math.max(100, ...preliminaryData.map((point) => point.value));

  return (
    <div className="results-chart" aria-label="Preliminary transfer efficiency chart">
      <div className="chart-axis chart-y"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div>
      <div className={`chart-field ${hasData ? "has-data" : ""}`}>
        {hasData ? preliminaryData.map((point) => (
          <div className="bar-group" key={point.label}>
            <div className="bar" style={{ height: `${(point.value / max) * 100}%` }}><span>{point.value}%</span></div>
            <small>{point.label}</small>
          </div>
        )) : (
          <div className="empty-chart">
            <span className="empty-dot" />
            <p>No measurements are published yet.</p>
            <small>Add measured efficiencies in <code>app/project-data.ts</code> to populate this plot.</small>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="overview">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="brand" href="#overview" aria-label="WPT Efficiency home"><span>WE</span>WPT Efficiency</a>
          <div className="nav-links"><a href="#methods">Methods</a><a href="#results">Results</a><a href="#progress">Progress</a><a href="#contact">Contact</a></div>
        </nav>

        <div className="hero-grid container">
          <div className="hero-copy">
            <p className="eyebrow">Student research portfolio / physics</p>
            <h1>{project.subtitle}</h1>
            <p className="hero-summary">This project compares two ways to deliver energy without a wire crossing the gap: a magnetic field between coils and an ultrasonic vibration through a material. We are testing how alignment and barriers change usable receiver-side power - a question that connects wireless EV charging to sealed sensors behind metal hulls or enclosure walls.</p>
            <div className="hero-actions"><a className="button button-primary" href="#results">See current results</a><a className="button button-quiet" href="#methods">Read the methods <span aria-hidden="true">↓</span></a></div>
            <div className="status-row" aria-label="Project status"><span className="status-dot" /><strong>{project.status}</strong><span>Last updated {project.updated}</span></div>
          </div>
          <div className="hero-art" aria-label="Conceptual comparison of electromagnetic and acoustic transfer">
            <div className="hero-art-title">Two tracks.<br />One question.</div>
            <div className="coil-art" aria-hidden="true"><i /><i /><i /><i /></div>
            <div className="hero-energy-lines" aria-hidden="true"><i /><i /><i /></div><div className="hero-barrier" aria-hidden="true" />
            <div className="wave-art" aria-hidden="true"><i /><i /><i /><i /><i /></div>
            <div className="art-key"><span className="copper-dot" /> electromagnetic <span className="cyan-dot" /> acoustic</div>
          </div>
        </div>

        <div className="facts container">
          <div><span>Project team</span><strong>{project.team}</strong></div><div><span>School</span><strong>{project.school}</strong></div><div><span>Grade level</span><strong>{project.grade}</strong></div><div><span>Research format</span><strong>Dual experimental track</strong></div>
        </div>
      </section>

      <section className="section container" id="research">
        <div className="section-heading split-heading"><div><p className="eyebrow">01 / Research question & background</p><h2>What crosses the barrier - and what gets lost?</h2></div><p>Rather than treating "wireless" as one technology, this project compares mechanisms that interact with barriers in very different ways.</p></div>
        <div className="questions-grid">
          <article className="question-card primary-question"><span>Primary question</span><p>{questions.primary}</p></article>
          <article className="question-card"><span>Secondary questions</span><ol>{questions.secondary.map((question, index) => <li key={question}><b>0{index + 1}</b>{question}</li>)}</ol></article>
        </div>
        <div className="concept-grid">{concepts.map((concept) => <article className="concept-card" key={concept.number}><span>{concept.number}</span><h3>{concept.title}</h3><p>{concept.body}</p></article>)}</div>
      </section>

      <section className="section section-ink" id="methods"><div className="container">
        <div className="section-heading split-heading light"><div><p className="eyebrow">02 / Methodology</p><h2>Two controlled tracks, reported on the same terms.</h2></div><p>Both setups are designed to end at the same practical question: how much useful DC power reaches a known load under a documented condition?</p></div>
        <div className="method-grid">{tracks.map((track) => <article className={`method-card ${track.accent}`} key={track.id}>
          <div className="method-card-head"><span>{track.tag}</span><small>Conceptual schematic</small></div><MethodDiagram type={track.id as "em" | "acoustic"} />
          <h3>{track.title}</h3><p className="method-question">{track.question}</p>
          <ol className="method-steps">{track.design.map((step, index) => <li key={step}><b>{index + 1}</b><span>{step}</span></li>)}</ol>
          <div className="measure-box"><span>Recorded each run</span><p>{track.measures}</p></div>
        </article>)}</div>
        <div className="equipment-wrap"><div><p className="eyebrow">Common equipment list</p><h3>What is needed to make the comparison repeatable.</h3></div><ul>{equipment.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </div></section>

      <section className="section container" id="build">
        <div className="section-heading split-heading"><div><p className="eyebrow">03 / Build documentation</p><h2>Evidence of the apparatus belongs beside the method.</h2></div><p>These placeholders are intentionally labeled until the team adds real photos. Do not substitute generated images for documented experimental hardware.</p></div>
        <div className="photo-grid">{imageSlots.map((slot, index) => <article className="photo-slot" key={slot.label}><div className={`photo-placeholder placeholder-${index + 1}`} aria-hidden="true"><span>+</span></div><div><p>{slot.label}</p><small>{slot.description}</small></div></article>)}</div>
      </section>

      <section className="section results-section" id="results"><div className="container">
        <div className="results-head"><div><p className="eyebrow">04 / Data & results</p><h2>Publish the plot as soon as a controlled series exists.</h2></div><div className="data-status"><span className="status-dot amber" /><p><strong>Awaiting first published series</strong><br />The site is ready for partial data, repeat runs, and uncertainty notes.</p></div></div>
        <div className="results-shell"><div className="chart-copy"><span>Transfer efficiency</span><h3>Measured output power / measured input power</h3><p>Each point should identify its track, barrier condition, geometry, drive setting, load, number of runs, and uncertainty. A result that did not work is still useful when its conditions are clear.</p><div className="result-legend"><i className="legend-em" /> EM track <i className="legend-acoustic" /> Acoustic track</div></div><ResultsChart /></div>
        <div className="results-note"><b>Update note.</b> Replace the empty <code>preliminaryData</code> list in <code>app/project-data.ts</code> with real measurements. The plot will update without restructuring the page.</div>
      </div></section>

      <section className="section container" id="progress">
        <div className="section-heading split-heading"><div><p className="eyebrow">05 / Timeline & progress log</p><h2>A record of what worked, what did not, and what changes next.</h2></div><p>Short, dated updates make the project more credible and become raw material for a methods section later.</p></div>
        <div className="timeline">{updates.map((update) => <article className={`timeline-entry ${update.state}`} key={update.title}><span className="timeline-dot" /><div className="timeline-date">{update.date}</div><div><h3>{update.title}</h3><p>{update.body}</p></div></article>)}</div>
      </section>

      <section className="section section-paper" id="literature"><div className="container literature-grid">
        <div><p className="eyebrow">06 / Literature review</p><h2>A small, public reading list - chosen for the work it supports.</h2><p className="literature-intro">These are the sources a mentor can scan quickly to see the project&apos;s starting point. The full working bibliography can remain private until the team is ready to share it.</p></div>
        <div className="source-list">{sources.map((source, index) => <a className="source-item" href={source.href} target="_blank" rel="noreferrer" key={source.href}><span>0{index + 1}</span><div><h3>{source.label} <b aria-hidden="true">↗</b></h3><p>{source.note}</p></div></a>)}</div>
      </div></section>

      <section className="section container" id="contact">
        <div className="mentor-panel"><div><p className="eyebrow">07 / Mentor & acknowledgments</p><h2>Looking for feedback on experimental design, measurement, and interpretation.</h2><p>Mentor contributions, lab access, and equipment support will be credited here with a specific description of what each collaborator helped make possible.</p></div><div className="mentor-notes"><div><span>Mentor</span><strong>To be added</strong><small>Credit specific guidance, not just a name.</small></div><div><span>Lab / equipment access</span><strong>To be added</strong><small>List institutional or community support.</small></div></div></div>
        <div className="contact-grid"><div><p className="eyebrow">08 / Team & contact</p><h2>Start a useful conversation.</h2><p>Each team bio should briefly name relevant physics coursework, robotics or engineering work, and the responsibility they hold in this project.</p></div><div className="team-card"><span>Project contact</span><a href={`mailto:${project.contactEmail}`}>{project.contactLabel}</a><p>Replace this address with a working, monitored project email before sharing the public link.</p></div><div className="team-card"><span>Team biographies</span><strong>Add concise bios</strong><p>Include coursework, technical interests, and roles such as instrumentation, analysis, or documentation.</p></div></div>
      </section>

      <footer className="footer"><div className="container"><span>{project.title}</span><span>Designed as a living research record - update {project.updated} after each milestone.</span><a href="#overview">Back to top ↑</a></div></footer>
    </main>
  );
}
