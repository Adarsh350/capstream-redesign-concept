"use client";

import Image from "next/image";
import {
  ArrowRight,
  Banknote,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  CircleCheck,
  FileCheck2,
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

const processSteps = [
  {
    number: "01",
    phase: "Prepare",
    title: "Build one contractor profile",
    body: "Share ownership, experience, completed work, and financials once to establish your underwriting story.",
    icon: FileCheck2,
  },
  {
    number: "02",
    phase: "Qualify",
    title: "Establish bonding capacity",
    body: "Understand your position before the opportunity arrives and pursue work with a defined bonding line.",
    icon: Landmark,
  },
  {
    number: "03",
    phase: "Compete",
    title: "Secure the bid bond",
    body: "Submit project details and an estimated job-cost breakdown for the opportunity you intend to win.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    phase: "Award",
    title: "Finalize project protection",
    body: "Once awarded, move into payment and performance bonds with the same coordinated relationship.",
    icon: BriefcaseBusiness,
  },
  {
    number: "05",
    phase: "Mobilize",
    title: "Put startup capital to work",
    body: "Fund bond costs, materials, equipment rentals, and other eligible costs required to begin delivery.",
    icon: Building2,
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
          src="/images/capstream-hero-construction.webp"
          alt="A major civic construction project taking shape at blue hour"
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

          <aside className={styles.architecturePanel} aria-label="How CapStream connects bonding and project capital">
            <div className={styles.architectureHeader}>
              <div>
                <span>CapStream opportunity architecture</span>
                <strong>One profile. One coordinated path.</strong>
              </div>
              <span className={styles.liveStatus}><i /> Ready</span>
            </div>
            <div className={styles.profileNode}>
              <span>01 / Contractor profile</span>
              <strong>Your financial story</strong>
              <small>Experience · ownership · financials · job history</small>
            </div>
            <div className={styles.capacityRails}>
              <div className={styles.railCard}>
                <div><ShieldCheck /><span>Surety capacity</span></div>
                <strong>Bonding line</strong>
                <small>Bid bonds</small>
              </div>
              <div className={styles.railCard}>
                <div><Banknote /><span>Capital capacity</span></div>
                <strong>Funding commitment</strong>
                <small>Project specific</small>
              </div>
            </div>
            <div className={styles.awardGate}>
              <span>Contract awarded</span>
              <i aria-hidden="true" />
            </div>
            <div className={styles.activationNode}>
              <div>
                <span>Project protection</span>
                <strong>Payment + performance bonds</strong>
              </div>
              <div>
                <span>Project activation</span>
                <strong>Up to 20% mobilization funding</strong>
              </div>
            </div>
            <div className={styles.architectureFooter}>
              <span>Bid</span><i /><span>Bond</span><i /><span>Award</span><i /><span>Mobilize</span>
            </div>
          </aside>
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

      <section className={styles.proofBand} aria-label="CapStream at a glance">
        <div><span>01</span><p>company profile across funding and surety</p></div>
        <div><span>20%</span><p>of contract value in potential mobilization funding</p></div>
        <div><span>24h</span><p>bid bonds often available after a line is established</p></div>
        <div><span>3d</span><p>up to three days for payment and performance underwriting</p></div>
        <small>Timelines and capacity are subject to underwriting, eligibility, and complete documentation.</small>
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
          <p className={styles.kicker}>How it works</p>
          <h2>From company profile to first day on site.</h2>
          <p>
            The CapStream process follows the way opportunities actually move:
            preparation before the bid, protection at award, and capital at mobilization.
          </p>
        </div>
        <div className={styles.phaseLegend}><span>Bid phase</span><span>Award phase</span></div>
        <div className={styles.processGrid}>
          {processSteps.map(({ number, phase, title, body, icon: Icon }) => (
            <article key={number}>
              <div className={styles.processTop}><span>{number}</span><Icon /></div>
              <small>{phase}</small>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
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
