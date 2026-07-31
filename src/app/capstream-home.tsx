"use client";

import Image from "next/image";
import {
  ArrowRight,
  Banknote,
  Check,
  ChevronDown,
  CircleCheck,
  Landmark,
  LockKeyhole,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";
import { useState } from "react";

import styles from "./capstream.module.css";

const PROFILE_URL = "https://capstream.app";

function CapstreamLogo() {
  return (
    <span className={styles.logoLockup}>
      <span className={styles.logoMark} aria-hidden="true">
        <span />
        <span />
      </span>
      <span>CapStream</span>
    </span>
  );
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

const workflowRows = [
  {
    stage: "Company profile",
    timing: "Before the opportunity",
    provide: "Ownership, experience, financial statements, tax returns, and completed-job history.",
    evaluate: "Operating history, financial strength, largest completed work, and overall program fit.",
    receive: "A defined bonding program and a project-financing commitment designed to support capacity.",
  },
  {
    stage: "Bid request",
    timing: "When you are ready to compete",
    provide: "Bid specifications, project details, and an estimated job-cost breakdown.",
    evaluate: "Contract scope, job economics, existing backlog, and fit within your established line.",
    receive: "The bid bond required to submit a qualified proposal—often within 24 hours after line establishment.",
  },
  {
    stage: "Contract award",
    timing: "After the winning bid",
    provide: "The awarded contract, final scope, schedule, and updated financial or job information if requested.",
    evaluate: "Final performance risk, payment obligations, and the capital required to start the project.",
    receive: "Payment and performance bonds, with underwriting turnaround of up to three days once complete.",
  },
  {
    stage: "Mobilization",
    timing: "Before the first project payment",
    provide: "An eligible startup budget covering bond costs, materials, equipment rentals, and project needs.",
    evaluate: "Contract value, approved use of funds, repayment structure, and project cash-flow timing.",
    receive: "Potential project mobilization funding of up to 20% of contract value, subject to underwriting.",
  },
];

const underwritingItems = [
  "Business financial statements",
  "Business and personal tax returns",
  "Overview of completed projects",
  "Current bid or contract details",
];

export function CapstreamHome() {
  const [contractValue, setContractValue] = useState(2400000);
  const [menuOpen, setMenuOpen] = useState(false);
  const funding = contractValue * 0.2;

  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>

      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <span>Integrated surety + project capital</span>
          <div>
            <a href="mailto:team@capstream.app">team@capstream.app</a>
            <a href="tel:+16464421040">646 442 1040</a>
          </div>
        </div>
      </div>

      <header className={styles.header}>
        <a className={styles.logo} href="#top" aria-label="CapStream home">
          <CapstreamLogo />
        </a>
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <a href="#advantage">Why CapStream</a>
          <a href="#solutions">Solutions</a>
          <a href="#process">How it works</a>
          <a href="#calculator">Calculator</a>
        </nav>
        <div className={styles.headerActions}>
          <a className={styles.signIn} href={PROFILE_URL}>Sign in</a>
          <a className={styles.primaryButton} href={PROFILE_URL}>
            Create a profile <ArrowRight size={16} />
          </a>
        </div>
        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen ? (
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            <a href="#advantage" onClick={() => setMenuOpen(false)}>Why CapStream</a>
            <a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#calculator" onClick={() => setMenuOpen(false)}>Calculator</a>
            <a href={PROFILE_URL}>Create a profile <ArrowRight size={16} /></a>
          </nav>
        ) : null}
      </header>

      <section className={styles.hero} id="top">
        <Image
          className={styles.heroImage}
          src="/images/capstream-hero-underwriting.webp"
          alt="A construction company owner and surety adviser reviewing project financials and blueprints at an active jobsite"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroVeil} aria-hidden="true" />
        <div className={styles.heroInner} id="main-content">
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>The complete path from opportunity to execution</p>
            <h1>Bond the bid.<br /><em>Fund the build.</em></h1>
            <p className={styles.heroLead}>
              CapStream brings surety bonding and project mobilization funding
              into one coordinated process—so contractors can qualify, compete,
              and start awarded work with greater financial capacity.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButtonLarge} href={PROFILE_URL}>
                Build your contractor profile <ArrowRight size={17} />
              </a>
              <a className={styles.secondaryButton} href="#process">
                See the full journey <ChevronDown size={16} />
              </a>
            </div>
            <div className={styles.heroAssurance}>
              <span><LockKeyhole size={15} /> Secure digital application</span>
              <span><CircleCheck size={15} /> Applying does not affect your credit</span>
            </div>
          </div>

        </div>
      </section>

      <section className={styles.capabilityBar} aria-label="CapStream capabilities">
        <div>
          <span>One contractor profile</span>
          <span>SBA surety bond guarantee pathway</span>
          <span>Bid · payment · performance bonds</span>
          <span>Up to 20% project startup capital</span>
        </div>
      </section>

      <section className={styles.capacityMomentSection} aria-labelledby="capacity-moment-heading">
        <div className={styles.capacityMomentIntro}>
          <p className={styles.sectionLabel}>Where CapStream fits</p>
          <h2 id="capacity-moment-heading">Three moments determine whether an opportunity becomes revenue.</h2>
          <p>CapStream coordinates the requirement at each moment, so bonding and project liquidity are considered as one path rather than two disconnected applications.</p>
        </div>
        <div className={styles.capacityTimeline}>
          <article>
            <div className={styles.timelineMarker}><span>01</span><small>Before the bid</small></div>
            <h3>Prove you can take on the work.</h3>
            <dl>
              <div><dt>Contractor requirement</dt><dd>A defined bonding line and bid bond.</dd></div>
              <div><dt>CapStream response</dt><dd>Underwrite the company profile before the deadline arrives.</dd></div>
            </dl>
          </article>
          <article>
            <div className={styles.timelineMarker}><span>02</span><small>At contract award</small></div>
            <h3>Protect the project and everyone on it.</h3>
            <dl>
              <div><dt>Contractor requirement</dt><dd>Payment and performance bonds.</dd></div>
              <div><dt>CapStream response</dt><dd>Carry the existing profile into final project underwriting.</dd></div>
            </dl>
          </article>
          <article>
            <div className={styles.timelineMarker}><span>03</span><small>Before first payment</small></div>
            <h3>Carry the cost of getting started.</h3>
            <dl>
              <div><dt>Contractor requirement</dt><dd>Cash for bonds, materials, and equipment.</dd></div>
              <div><dt>CapStream response</dt><dd>Provide potential mobilization funding up to 20% of contract value.</dd></div>
            </dl>
          </article>
        </div>
        <p className={styles.capacityDisclaimer}>All bonding, timing, and funding outcomes remain subject to eligibility, complete documentation, and underwriting.</p>
      </section>

      <section className={styles.advantageSection} id="advantage">
        <div className={styles.advantageIntro}>
          <p className={styles.sectionLabel}>The CapStream advantage</p>
          <h2>One underwriting story.<br /><em>Two forms of capacity.</em></h2>
          <p>
            A contractor can have the experience to deliver a project and still
            lose the opportunity between bonding requirements and upfront cash
            needs. CapStream was designed around that exact inflection point.
          </p>
        </div>
        <div className={styles.integrationDiagram} aria-label="CapStream coordinates surety and capital before and after contract award">
          <div className={styles.diagramPhase}><span>Before award</span><small>Prove capacity to compete</small></div>
          <div className={styles.diagramCard}>
            <span>Surety</span>
            <ShieldCheck />
            <strong>Bonding capacity</strong>
            <p>Establish a line, secure bid bonds, and enter the procurement process prepared.</p>
          </div>
          <div className={styles.diagramCenter}>
            <span>One profile</span>
            <i />
            <strong>Contract award</strong>
            <i />
            <span>One relationship</span>
          </div>
          <div className={styles.diagramCard}>
            <span>Capital</span>
            <Banknote />
            <strong>Mobilization capacity</strong>
            <p>Activate project-specific funding for the costs that arrive before the first payment.</p>
          </div>
          <div className={styles.diagramPhase}><span>After award</span><small>Put capacity into motion</small></div>
        </div>
      </section>

      <section className={styles.solutionsSection} id="solutions">
        <div className={styles.solutionsHeading}>
          <p className={styles.kickerLight}>The integrated platform</p>
          <h2>Built for the entire opportunity—not one transaction.</h2>
        </div>
        <div className={styles.solutionCards}>
          <article className={styles.solutionCard}>
            <div className={styles.solutionIndex}><span>01 / Surety</span><ShieldCheck /></div>
            <h3>Establish the credibility to compete.</h3>
            <p>Build a bonding program around your experience, financial position, and largest completed work.</p>
            <ul>
              <li><Check /> Bonding line</li>
              <li><Check /> Bid bonds</li>
              <li><Check /> Payment and performance bonds</li>
            </ul>
            <a href="https://capstream.app/surety-bonding">Explore surety bonding <ArrowRight size={16} /></a>
          </article>
          <article className={styles.solutionCard}>
            <div className={styles.solutionIndex}><span>02 / Capital</span><Banknote /></div>
            <h3>Fund the critical first phase of delivery.</h3>
            <p>Access project-specific capital tied to the awarded contract and the real costs of getting started.</p>
            <ul>
              <li><Check /> Bond costs and materials</li>
              <li><Check /> Equipment rentals</li>
              <li><Check /> Flexible funding structure</li>
            </ul>
            <a href="https://capstream.app/mobilization-funding">Explore mobilization funding <ArrowRight size={16} /></a>
          </article>
        </div>
      </section>

      <section className={styles.processSection} id="process">
        <div className={styles.processIntro}>
          <p className={styles.kicker}>What actually happens</p>
          <h2>A transparent underwriting path, with a concrete output at every stage.</h2>
          <p>
            This is the information CapStream asks for, what it evaluates, and
            what a contractor can expect to receive when the file is complete.
          </p>
        </div>
        <div className={styles.workflowTable} role="table" aria-label="CapStream underwriting workflow">
          <div className={styles.workflowHeader} role="row">
            <span role="columnheader">Stage</span>
            <span role="columnheader">You provide</span>
            <span role="columnheader">CapStream evaluates</span>
            <span role="columnheader">You receive</span>
          </div>
          {workflowRows.map(({ stage, timing, provide, evaluate, receive }, index) => (
            <div className={styles.workflowRow} role="row" key={stage}>
              <div role="cell"><span>0{index + 1}</span><strong>{stage}</strong><small>{timing}</small></div>
              <p role="cell">{provide}</p>
              <p role="cell">{evaluate}</p>
              <p role="cell">{receive}</p>
            </div>
          ))}
        </div>
        <p className={styles.workflowNote}>Timing begins after CapStream receives a complete file. Additional information may be required based on the contractor or project.</p>
      </section>

      <section className={styles.mandateSection} id="about">
        <div className={styles.mandateCopy}>
          <p className={styles.kickerLight}>Institutional capability. Entrepreneurial mandate.</p>
          <h2>Built to widen<br />who gets to build.</h2>
          <p>
            CapStream helps small, diverse, and emerging contractors overcome
            two of the most persistent barriers in public contracting: surety
            capacity and startup capital.
          </p>
          <a href="https://blog.capstream.app">Read CapStream insights <ArrowRight size={16} /></a>
        </div>
        <div className={styles.mandatePanel}>
          <div className={styles.mandatePanelTop}><span>Program architecture</span><Landmark /></div>
          <div className={styles.programRow}>
            <span>Surety pathway</span>
            <strong>SBA Surety Bond Guarantee</strong>
            <p>Used with project financing commitments to support greater bonding capacity.</p>
          </div>
          <div className={styles.programRow}>
            <span>Capital pathway</span>
            <strong>Founders&apos; Impact</strong>
            <p>CapStream&apos;s parent is a Specialized Small Business Investment Company.</p>
          </div>
          <div className={styles.programNote}>
            CapStream&apos;s model connects the surety and capital pathways in one contractor experience. Program participation and final terms remain subject to eligibility and underwriting.
          </div>
        </div>
      </section>

      <section className={styles.calculatorSection} id="calculator">
        <div className={styles.calculatorIntro}>
          <p className={styles.kicker}>Project capital calculator</p>
          <h2>See what 20% can mean for mobilization.</h2>
          <p>
            Adjust the contract value to see an illustrative estimate of potential
            project startup funding. Final terms depend on underwriting and project details.
          </p>
          <label htmlFor="contract-value">Contract value</label>
          <div className={styles.rangeValue}>{formatCurrency(contractValue)}</div>
          <input
            id="contract-value"
            className={styles.range}
            type="range"
            min="250000"
            max="10000000"
            step="50000"
            value={contractValue}
            onChange={(event) => setContractValue(Number(event.target.value))}
          />
          <div className={styles.rangeScale}><span>$250,000</span><span>$10,000,000</span></div>
        </div>
        <div className={styles.estimateCard}>
          <div className={styles.estimateHeader}><span>Illustrative mobilization capacity</span><Banknote size={20} /></div>
          <div className={styles.estimateMain}>
            <span>Potential project startup funding</span>
            <strong>{formatCurrency(funding)}</strong>
            <small>Up to 20% of contract value</small>
          </div>
          <div className={styles.estimateDetails}>
            <div><span>Contract value</span><strong>{formatCurrency(contractValue)}</strong></div>
            <div><span>Application structure</span><strong>One company profile</strong></div>
            <div><span>Credit inquiry</span><strong>No impact to apply</strong></div>
          </div>
          <a className={styles.primaryButtonLarge} href={PROFILE_URL}>Discuss your opportunity <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className={styles.underwritingSection}>
        <div className={styles.underwritingIntro}>
          <p className={styles.sectionLabel}>Start prepared</p>
          <h2>Serious capacity starts with a complete picture.</h2>
          <p>
            CapStream&apos;s profile is designed for real underwriting—not a generic
            lead form. Bring the core documents that demonstrate how your business performs.
          </p>
        </div>
        <div className={styles.documentList}>
          {underwritingItems.map((item, index) => (
            <div key={item}><span>0{index + 1}</span><strong>{item}</strong><CircleCheck /></div>
          ))}
        </div>
      </section>

      <section className={styles.finalCta}>
        <div>
          <p>Prepare before the next opportunity</p>
          <h2>Your next contract should not outgrow your capacity.</h2>
        </div>
        <a href={PROFILE_URL}>Create your profile <ArrowRight size={17} /></a>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>
            <a className={styles.logo} href="#top"><CapstreamLogo /></a>
            <p>Surety bonding and project mobilization funding for construction contractors.</p>
          </div>
          <div className={styles.footerLinks}>
            <div><strong>Solutions</strong><a href="https://capstream.app/surety-bonding">Surety bonding</a><a href="https://capstream.app/mobilization-funding">Mobilization funding</a><a href="#calculator">Capital calculator</a></div>
            <div><strong>Company</strong><a href="#about">About</a><a href="https://blog.capstream.app">Insights</a><a href={PROFILE_URL}>Apply</a></div>
            <div><strong>Contact</strong><a href="mailto:team@capstream.app">team@capstream.app</a><a href="tel:+16464421040">646 442 1040</a><span>140 W 31st Street, New York</span></div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2026 CapStream</span>
          <span>Independent redesign concept by Iyara</span>
        </div>
      </footer>
    </main>
  );
}
