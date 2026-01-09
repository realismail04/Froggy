"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Home.module.css';

export default function Home() {
  const heroImg = "/hero_modern_hub_premium_1767979123155.png";
  const vanImg = "/safeguarding_van_safespace_1767979144119.png";
  const abstractImg = "/supportive_community_abstract_1767979159722.png";

  return (
    <div className={styles.home}>
      {/* Signature Immersive Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Independent Safeguarding Excellence.</h1>
          <p>
            Froggy’s Voice Box CIC is a survivor-led sanctuary dedicated to
            transforming protective standards across UK institutions through
            advocacy, reform, and direct community support.
          </p>
          <div className={styles.heroActions}>
            <Link href="/resources" className={`${styles.btnSignature} ${styles.btnSolid}`}>
              Get Support
            </Link>
            <Link href="/support" className={`${styles.btnSignature} ${styles.btnOutline}`}>
              Support Our Mission
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div
            className={styles.heroImage}
            style={{ backgroundImage: `url(${heroImg})` }}
          >
            <div className={styles.heroAura} />
          </div>
        </div>
      </section>

      {/* Authority Trust BAR */}
      <section className={styles.trustBar}>
        <div className={styles.trustContent}>
          <span className={styles.trustLabel}>Collaborative Excellence</span>
          <div className={styles.partnerGrid}>
            <div className={styles.partnerItem}>CIC REGISTERED</div>
            <div className={styles.partnerItem}>SURVIVOR LED</div>
            <div className={styles.partnerItem}>TRAUMA INFORMED</div>
            <div className={styles.partnerItem}>FROGGY'S LAW</div>
          </div>
        </div>
      </section>

      {/* Interactive Portals */}
      <section className={styles.portalSection}>
        <div className={styles.sectionHeader}>
          <h2>How can we help?</h2>
          <p>The sanctuary for information starts with selecting your pathway.</p>
        </div>
        <div className={styles.portalGrid}>
          <div className={styles.portalCard}>
            <div>
              <span className={styles.portalIcon}>🤝</span>
              <h3>For Survivors</h3>
              <p>Independent oversight and emotional safe-spaces to ensure your disclosure is met with mandated action.</p>
            </div>
            <Link href="/resources" className={styles.btnLink}>Explore Support <span>→</span></Link>
          </div>
          <div className={styles.portalCard}>
            <div>
              <span className={styles.portalIcon}>🏠</span>
              <h3>For Families</h3>
              <p>Specialist resources for parents and carers to protect children from institutional neglect and harm.</p>
            </div>
            <Link href="/resources" className={styles.btnLink}>Access Guidance <span>→</span></Link>
          </div>
          <div className={styles.portalCard}>
            <div>
              <span className={styles.portalIcon}>🛡️</span>
              <h3>For Professionals</h3>
              <p>Transform your safeguarding standards with the Froggy’s Law reform model and specialist training.</p>
            </div>
            <Link href="/training" className={styles.btnLink}>View Pathway <span>→</span></Link>
          </div>
        </div>
      </section>

      {/* Smooth Narrative Flow */}
      <section className={styles.narrativeSection}>
        <div className={styles.container}>
          <div className={styles.narrativeGrid}>
            <div className={styles.narrativeContent}>
              <h2>Why the Voice Box exists.</h2>
              <p>
                Institutional safeguarding often fails at the point of response.
                We provide the necessary independent oversight to close the gap
                between disclosure and safety.
              </p>
              <p>
                Our mobile safe-spaces and digitized resources provide a sanctuary
                for information, ensuring that every disclosure is the start of
                a survivor-informed journey toward justice and healing.
              </p>
              <Link href="/about" className={`${styles.btnSignature} ${styles.btnSolid}`} style={{ marginTop: '2rem' }}>
                Read Our Mission
              </Link>
            </div>
            <div className={styles.narrativeImage}>
              <img src={abstractImg} alt="Community Unity" />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight Quote */}
      <section className={styles.spotlight}>
        <div className={styles.container}>
          <h2 className={styles.spotlightQuote}>
            "The way a child shows abuse is as critical as the disclosure.
            We ensure the world finally knows how to listen."
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.2rem' }}>Froggy</h4>
            <p style={{ fontSize: '1rem', color: 'var(--neutral-500)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Founder, Froggy’s Voice Box CIC</p>
          </div>
        </div>
      </section>

      {/* High-Authority Call to Action */}
      <section style={{ padding: '10rem 0', background: 'var(--neutral-100)' }}>
        <div className={styles.container}>
          <div className={styles.narrativeGrid} style={{ gap: '6rem' }}>
            <div className={styles.narrativeImage}>
              <img src={vanImg} alt="Safeguarding Van" />
            </div>
            <div className={styles.narrativeContent}>
              <h2 style={{ color: 'var(--neutral-900)' }}>Driven by Reform.</h2>
              <p style={{ color: 'var(--neutral-600)' }}>
                We aren't just a support hub; we are a structural change movement.
                Froggy’s Law is our proposed five-step safeguarding pathway
                designed to mandate trauma-informed professional responses.
              </p>
              <Link href="/reform" className={styles.btnLink}>Explore Froggy's Law <span>→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Active Hub Grid */}
      <section style={{ padding: '10rem 0' }}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 style={{ fontSize: '2.5rem' }}>Active in our community.</h2>
          </div>
          <div className={styles.portalGrid}>
            <Link href="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={styles.narrativeImage} style={{ height: '250px', marginBottom: '1.5rem' }}>
                <img src={vanImg} alt="Van Project" />
              </div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Mobile SAFE-Space</h4>
              <p style={{ fontSize: '1rem', color: 'var(--neutral-500)' }}>Community Outreach - Ongoing</p>
            </Link>
            <Link href="/training" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={styles.narrativeImage} style={{ height: '250px', marginBottom: '1.5rem' }}>
                <img src={heroImg} alt="Training" />
              </div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Social Service Workshops</h4>
              <p style={{ fontSize: '1rem', color: 'var(--neutral-500)' }}>Professional Training - 2026</p>
            </Link>
            <Link href="/resources" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={styles.narrativeImage} style={{ height: '250px', marginBottom: '1.5rem' }}>
                <img src={abstractImg} alt="Resources" />
              </div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800 }}>The Resource Hub</h4>
              <p style={{ fontSize: '1rem', color: 'var(--neutral-500)' }}>Digital Sanctuary - Live</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
