"use client";

import {
  ArrowRight,
  Banknote,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  CircleCheck,
  FileCheck2,
  Handshake,
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
    title: "Create one profile",
    body: "Share your company history, experience, and financial information through one secure application.",
    icon: FileCheck2,
  },
  {
    number: "02",
    title: "Establish your capacity",
    body: "Receive a bonding line and understand your position before the next opportunity arrives.",
    icon: Landmark,
  },
  {
    number: "03",
    title: "Secure the right bonds",
    body: "Request bid, payment, and performance bonds for the projects you are ready to pursue.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Mobilize with confidence",
    body: "Access project capital for materials, equipment, bond costs, and other critical startup needs.",
    icon: Building2,
  },
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
          <span>Construction finance and surety solutions</span>
          <div>
            <a href="mailto:team@capstream.app">team@capstream.app</a>
            <span>646 442 1040</span>
          </div>
        </div>
      </div>

      <header className={styles.header}>
        <a className={styles.logo} href="#top" aria-label="CapStream home">
          <CapstreamLogo />
        </a>
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <a href="#solutions">Solutions</a>
          <a href="#approach">Our approach</a>
          <a href="#calculator">Capacity calculator</a>
          <a href="#about">About</a>
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
            <a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
            <a href="#approach" onClick={() => setMenuOpen(false)}>Our approach</a>
            <a href="#calculator" onClick={() => setMenuOpen(false)}>Capacity calculator</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href={PROFILE_URL}>Create a profile <ArrowRight size={16} /></a>
          </nav>
        ) : null}
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroInner} id="main-content">
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Capital and surety, working together</p>
            <h1>The capacity to pursue what comes next.</h1>
            <p className={styles.heroLead}>
              CapStream helps construction contractors secure the bonding and
              project mobilization funding required to compete for larger work,
              preserve liquidity, and begin every project from a position of strength.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButtonLarge} href={PROFILE_URL}>
                Start your application <ArrowRight size={17} />
              </a>
              <a className={styles.secondaryButton} href="#solutions">
                Explore our solutions <ChevronDown size={16} />
              </a>
            </div>
            <div className={styles.heroAssurance}>
              <span><LockKeyhole size={15} /> Secure digital application</span>
              <span><CircleCheck size={15} /> No impact to your credit</span>
            </div>
          </div>

          <aside className={styles.underwritingPanel} aria-label="Illustrative project readiness summary">
            <div className={styles.panelHeader}>
              <div>
                <span>Illustrative opportunity</span>
                <strong>Project Readiness Summary</strong>
              </div>
              <span className={styles.status}><i /> Prepared</span>
            </div>
            <div className={styles.projectMeta}>
              <div><span>Project</span><strong>Municipal Retrofit</strong></div>
              <div><span>Sector</span><strong>Public works</strong></div>
              <div><span>Reference</span><strong>CS-0842</strong></div>
            </div>
            <div className={styles.summaryValue}>
              <span>Contract value</span>
              <strong>$2,400,000</strong>
            </div>
            <div className={styles.summaryRows}>
              <div>
                <span><ShieldCheck size={18} /> Surety program</span>
                <strong>Bonding line established</strong>
              </div>
              <div>
                <span><Banknote size={18} /> Mobilization capacity</span>
                <strong>$480,000</strong>
              </div>
              <div>
                <span><BriefcaseBusiness size={18} /> Application profile</span>
                <strong>Complete</strong>
              </div>
            </div>
            <div className={styles.panelFooter}>
              <span>Funding illustration</span>
              <span>Up to 20% of contract value</span>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.capabilityBar} aria-label="CapStream capabilities">
        <div>
          <span>Bonding lines</span>
          <span>Bid bonds</span>
          <span>Payment &amp; performance bonds</span>
          <span>Project mobilization funding</span>
        </div>
      </section>

      <section className={styles.introduction} id="solutions">
        <div className={styles.sectionLabel}>A coordinated solution</div>
        <div>
          <h2>Two essential capabilities. One clear path to growth.</h2>
          <p>
            Winning substantial contracts requires more than opportunity. It
            requires the financial capacity to qualify, mobilize, and perform.
            CapStream brings those requirements into one considered process.
          </p>
        </div>
      </section>

      <section className={styles.solutionSection}>
        <article className={styles.solutionCard}>
          <div className={styles.solutionTopline}><span>01</span><ShieldCheck /></div>
          <p className={styles.cardEyebrow}>Surety solutions</p>
          <h3>Establish the credibility to compete.</h3>
          <p>
            Build a bonding program designed around your experience, financial
            position, and growth objectives, with support from bid through award.
          </p>
          <ul>
            <li><Check /> Bonding line</li>
            <li><Check /> Bid bonds</li>
            <li><Check /> Payment and performance bonds</li>
          </ul>
          <a href="https://capstream.app/surety-bonding">
            View surety solutions <ArrowRight size={16} />
          </a>
        </article>
        <article className={styles.solutionCard}>
          <div className={styles.solutionTopline}><span>02</span><Banknote /></div>
          <p className={styles.cardEyebrow}>Capital solutions</p>
          <h3>Fund the critical first phase of delivery.</h3>
          <p>
            Access up to 20% of contract value to support the upfront costs that
            arise before project revenue begins to flow.
          </p>
          <ul>
            <li><Check /> Bond costs and materials</li>
            <li><Check /> Equipment and project startup</li>
            <li><Check /> Flexible funding structure</li>
          </ul>
          <a href="https://capstream.app/mobilization-funding">
            View capital solutions <ArrowRight size={16} />
          </a>
        </article>
      </section>

      <section className={styles.approachSection} id="approach">
        <div className={styles.approachIntro}>
          <p className={styles.kickerLight}>Our approach</p>
          <h2>A disciplined process, built for decisive opportunities.</h2>
          <p>
            A single profile provides the foundation for your bonding program
            and project-specific capital needs.
          </p>
        </div>
        <div className={styles.processGrid}>
          {processSteps.map(({ number, title, body, icon: Icon }) => (
            <article key={number}>
              <div><span>{number}</span><Icon /></div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.calculatorSection} id="calculator">
        <div className={styles.calculatorIntro}>
          <p className={styles.kicker}>Project capacity calculator</p>
          <h2>Consider the capital available for your next award.</h2>
          <p>
            Adjust the contract value to see an illustrative estimate of
            potential mobilization funding. Final terms depend on underwriting
            and project details.
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
          <div className={styles.estimateHeader}>
            <span>Illustrative estimate</span>
            <Landmark size={20} />
          </div>
          <div className={styles.estimateMain}>
            <span>Potential mobilization funding</span>
            <strong>{formatCurrency(funding)}</strong>
            <small>Up to 20% of contract value</small>
          </div>
          <div className={styles.estimateDetails}>
            <div><span>Contract value</span><strong>{formatCurrency(contractValue)}</strong></div>
            <div><span>Application</span><strong>One company profile</strong></div>
            <div><span>Credit inquiry</span><strong>No impact</strong></div>
          </div>
          <a className={styles.primaryButtonLarge} href={PROFILE_URL}>
            Discuss your opportunity <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className={styles.differenceSection}>
        <div>
          <p className={styles.kicker}>Why CapStream</p>
          <h2>Designed around the realities of construction growth.</h2>
        </div>
        <div className={styles.differenceGrid}>
          <article><Handshake /><h3>One coordinated relationship</h3><p>Bonding and mobilization needs considered through a single digital experience.</p></article>
          <article><BriefcaseBusiness /><h3>Capacity before opportunity</h3><p>Establish your position early so you can approach larger bids with greater certainty.</p></article>
          <article><Building2 /><h3>Capital aligned to the project</h3><p>Funding intended for the tangible startup costs that support successful delivery.</p></article>
        </div>
      </section>

      <section className={styles.aboutSection} id="about">
        <div className={styles.aboutStatement}>
          <span>CapStream</span>
          <blockquote>
            “Growth should not stall between contract award and project mobilization.”
          </blockquote>
        </div>
        <div className={styles.aboutCopy}>
          <p className={styles.kickerLight}>About CapStream</p>
          <h2>Financial capacity for the work ahead.</h2>
          <p>
            CapStream combines surety bonding and project mobilization funding
            in a single application process, helping small businesses increase
            bonding capacity and access capital.
          </p>
          <a href={PROFILE_URL}>Learn about CapStream <ArrowRight size={16} /></a>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div>
          <p>Prepare for your next opportunity</p>
          <h2>Build the capacity to move forward.</h2>
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
            <div><strong>Solutions</strong><a href="https://capstream.app/surety-bonding">Surety bonding</a><a href="https://capstream.app/mobilization-funding">Mobilization funding</a><a href="#calculator">Capacity calculator</a></div>
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
