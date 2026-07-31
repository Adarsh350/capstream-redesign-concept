"use client";

import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Banknote,
  Check,
  FileCheck2,
  HardHat,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

import styles from "./capstream.module.css";

const PROFILE_URL = "https://capstream.app";

function CapstreamMark() {
  return (
    <span className={styles.brandMark} aria-hidden="true">
      <span>C</span>
      <span>S</span>
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

export function CapstreamHome() {
  const [contractValue, setContractValue] = useState(2400000);
  const [menuOpen, setMenuOpen] = useState(false);
  const funding = contractValue * 0.2;

  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>

      <div className={styles.utilityBar}>
        <span>Project capital to start. Surety bonds to win.</span>
        <span className={styles.utilityRight}>
          Built for construction contractors <HardHat size={14} />
        </span>
      </div>

      <header className={styles.header}>
        <a className={styles.logo} href="#top" aria-label="CapStream home">
          <CapstreamMark />
          <span>CapStream</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <a href="#solutions">Solutions</a>
          <a href="#process">How it works</a>
          <a href="#why-capstream">Why CapStream</a>
          <a href="#about">About</a>
        </nav>

        <div className={styles.headerActions}>
          <a className={styles.signIn} href={PROFILE_URL}>
            Sign in
          </a>
          <a className={styles.headerCta} href="#calculator">
            Check your capacity <ArrowRight size={16} />
          </a>
        </div>

        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {menuOpen ? (
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            <a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#why-capstream" onClick={() => setMenuOpen(false)}>Why CapStream</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a className={styles.mobileApply} href="#calculator" onClick={() => setMenuOpen(false)}>
              Check your capacity <ArrowRight size={16} />
            </a>
          </nav>
        ) : null}
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy} id="main-content">
          <p className={styles.eyebrow}>
            <span /> Financing + surety, built together
          </p>
          <h1>
            Bid bigger.
            <br />
            <em>Build better.</em>
          </h1>
          <p className={styles.heroLead}>
            CapStream gives contractors the bonding capacity and upfront capital
            to win more work and start every project ready.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryCta} href={PROFILE_URL}>
              Create your profile <ArrowRight size={18} />
            </a>
            <a className={styles.textCta} href="#process">
              See how it works <ArrowDown size={17} />
            </a>
          </div>
          <div className={styles.heroProof} aria-label="CapStream benefits">
            <span><Check size={15} /> One streamlined profile</span>
            <span><Check size={15} /> No impact to your credit</span>
          </div>
        </div>

        <div className={styles.heroVisual} aria-label="Example CapStream project opportunity">
          <div className={styles.visualTopline}>
            <span>Project opportunity</span>
            <span className={styles.livePill}><i /> Ready to bid</span>
          </div>
          <div className={styles.projectTitle}>
            <div>
              <small>Public works · NY</small>
              <strong>Municipal Retrofit</strong>
            </div>
            <span className={styles.projectCode}>CS–0842</span>
          </div>
          <div className={styles.contractValue}>
            <span>Contract value</span>
            <strong>$2.4M</strong>
          </div>
          <div className={styles.capacityGraphic}>
            <div className={styles.capacityHeader}>
              <span>CapStream capacity</span>
              <strong>$480K</strong>
            </div>
            <div className={styles.barTrack}>
              <span className={styles.bondBar}>Bonding line</span>
              <span className={styles.fundingBar}>20% funding</span>
            </div>
            <div className={styles.barScale}><span>$0</span><span>$2.4M</span></div>
          </div>
          <div className={styles.projectSteps}>
            <div className={styles.stepComplete}><BadgeCheck size={20} /><span>Profile<strong>Complete</strong></span></div>
            <ArrowRight size={17} />
            <div><ShieldCheck size={20} /><span>Bond line<strong>Ready</strong></span></div>
            <ArrowRight size={17} />
            <div><Banknote size={20} /><span>Mobilize<strong>Funded</strong></span></div>
          </div>
          <div className={styles.cornerStamp}>Built to move<br />work forward</div>
        </div>
      </section>

      <div className={styles.signalStrip} aria-label="CapStream product highlights">
        <span>Bid bonds</span><i />
        <span>Performance bonds</span><i />
        <span>Payment bonds</span><i />
        <span>Mobilization funding</span><i />
        <span>Up to 20% of contract value</span>
      </div>

      <section className={styles.problemSection}>
        <div className={styles.sectionIndex}>01 / THE GAP</div>
        <div className={styles.problemHeading}>
          <p>The job is yours.</p>
          <h2>The cash gap shouldn’t be.</h2>
        </div>
        <div className={styles.problemCopy}>
          <p>
            Contractors often need a bond to win the work and working capital to
            begin it. Traditional providers treat those as separate problems.
          </p>
          <p className={styles.problemEmphasis}>
            CapStream connects both sides in one clear application.
          </p>
        </div>
      </section>

      <section className={styles.solutionsSection} id="solutions">
        <div className={styles.sectionIntroLight}>
          <p className={styles.eyebrowLight}><span /> Two products. One stronger position.</p>
          <h2>Everything you need to<br />turn a bid into a build.</h2>
        </div>

        <div className={styles.solutionGrid}>
          <article className={styles.solutionCard}>
            <div className={styles.solutionNumber}>01</div>
            <ShieldCheck size={34} strokeWidth={1.5} />
            <h3>Surety bonding</h3>
            <p>
              Establish your bonding line, move quickly on bid bonds, and secure
              payment and performance bonds when you win.
            </p>
            <ul>
              <li><Check size={16} /> Bonding line</li>
              <li><Check size={16} /> Bid bonds</li>
              <li><Check size={16} /> Payment + performance bonds</li>
            </ul>
            <a href="https://capstream.app/surety-bonding">Explore surety bonding <ArrowRight size={17} /></a>
          </article>

          <article className={`${styles.solutionCard} ${styles.fundingCard}`}>
            <div className={styles.solutionNumber}>02</div>
            <Banknote size={34} strokeWidth={1.5} />
            <h3>Mobilization funding</h3>
            <p>
              Access up to 20% of your contract value for upfront costs, so crews,
              materials, equipment, and bond costs never hold up the start.
            </p>
            <ul>
              <li><Check size={16} /> Funding commitment</li>
              <li><Check size={16} /> Project mobilization capital</li>
              <li><Check size={16} /> Flexible funding structure</li>
            </ul>
            <a href="https://capstream.app/mobilization-funding">Explore mobilization funding <ArrowRight size={17} /></a>
          </article>
        </div>
      </section>

      <section className={styles.processSection} id="process">
        <div className={styles.processHeading}>
          <div className={styles.sectionIndex}>02 / THE PROCESS</div>
          <h2>One profile.<br /><em>More ways to grow.</em></h2>
        </div>
        <div className={styles.processList}>
          {[
            ["01", "Create your profile", "Tell us about your company, experience, and financials."],
            ["02", "Receive your bonding line", "Know your capacity before the next opportunity arrives."],
            ["03", "Get the bonds you need", "Request bid, payment, and performance bonds in one place."],
            ["04", "Fund the project start", "Put capital toward materials, equipment, and other upfront costs."],
          ].map(([number, title, body], index) => (
            <article className={styles.processRow} key={number}>
              <span>{number}</span>
              <div className={styles.processIcon}>
                {index === 0 ? <FileCheck2 /> : index === 1 ? <BadgeCheck /> : index === 2 ? <ShieldCheck /> : <HardHat />}
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.calculatorSection} id="calculator">
        <div className={styles.calculatorCopy}>
          <p className={styles.eyebrow}><span /> Contract capacity calculator</p>
          <h2>See what your next project could unlock.</h2>
          <p>
            Move the contract value to estimate potential mobilization funding.
            Your actual offer is based on underwriting and project details.
          </p>
          <div className={styles.calculatorStats}>
            <div><span>Contract value</span><strong>{formatCurrency(contractValue)}</strong></div>
            <div><span>Potential mobilization funding</span><strong>{formatCurrency(funding)}</strong><small>up to 20%</small></div>
          </div>
          <label className={styles.rangeLabel} htmlFor="contract-value">
            Adjust contract value
          </label>
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
          <div className={styles.rangeScale}><span>$250K</span><span>$10M</span></div>
          <a className={styles.primaryCta} href={PROFILE_URL}>
            Build your real profile <ArrowRight size={18} />
          </a>
        </div>

        <div className={styles.calculatorVisual} aria-hidden="true">
          <div className={styles.blueprintLabel}>CAPACITY / LIVE MODEL</div>
          <div className={styles.ring}>
            <div>
              <small>Potential funding</small>
              <strong>{formatCurrency(funding)}</strong>
              <span>UP TO 20%</span>
            </div>
          </div>
          <div className={styles.blueprintLineOne} />
          <div className={styles.blueprintLineTwo} />
          <div className={styles.blueprintNote}>Capital positioned<br />before day one</div>
        </div>
      </section>

      <section className={styles.whySection} id="why-capstream">
        <div className={styles.whyLead}>
          <div className={styles.sectionIndex}>03 / WHY CAPSTREAM</div>
          <h2>Built around how<br />contractors <em>actually work.</em></h2>
        </div>
        <div className={styles.whyGrid}>
          <article><span>01</span><Sparkles /><h3>One digital experience</h3><p>Less paperwork and one profile across bonding and project funding.</p></article>
          <article><span>02</span><ShieldCheck /><h3>Higher bonding capacity</h3><p>A program designed to strengthen your position for larger opportunities.</p></article>
          <article><span>03</span><Banknote /><h3>Capital for the real costs</h3><p>Cover bond costs, materials, equipment rentals, and other project-start needs.</p></article>
        </div>
      </section>

      <section className={styles.aboutSection} id="about">
        <div className={styles.aboutGraphic} aria-hidden="true">
          <span className={styles.aboutC}>C</span><span className={styles.aboutS}>S</span>
          <i>Bond</i><b>Fund</b>
        </div>
        <div className={styles.aboutCopy}>
          <p className={styles.eyebrowLight}><span /> About CapStream</p>
          <h2>More than capital.<br />Momentum.</h2>
          <p>
            CapStream combines surety bonding and project mobilization funding in
            a single application process, helping small businesses increase
            bonding capacity and access the capital to perform.
          </p>
          <a href={PROFILE_URL}>Start your profile <ArrowRight size={18} /></a>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div>
          <p>YOUR NEXT PROJECT IS WAITING.</p>
          <h2>Get ready to bid bigger.</h2>
        </div>
        <a href={PROFILE_URL}>Create your profile <ArrowRight size={20} /></a>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <a className={styles.logo} href="#top"><CapstreamMark /><span>CapStream</span></a>
          <p>Project mobilization funding<br />+ surety bonding.</p>
        </div>
        <div className={styles.footerLinks}>
          <div><strong>Solutions</strong><a href="https://capstream.app/surety-bonding">Surety bonding</a><a href="https://capstream.app/mobilization-funding">Mobilization funding</a><a href="#calculator">Contract calculator</a></div>
          <div><strong>Company</strong><a href="#about">About us</a><a href="https://blog.capstream.app">Blog</a><a href={PROFILE_URL}>Apply</a></div>
          <div><strong>Contact</strong><a href="mailto:team@capstream.app">team@capstream.app</a><a href="tel:+16464421040">+1 646 442 1040</a><span>New York, NY</span></div>
        </div>
        <div className={styles.footerBottom}><span>© 2026 CapStream</span><span>A website redesign concept by Iyara</span></div>
      </footer>
    </main>
  );
}
