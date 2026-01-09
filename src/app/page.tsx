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
      {/* NGO Professional Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Supporting children and survivors of institutional abuse.</h1>
          <p>
            Froggy’s Voice Box CIC provides independent, survivor-led support,
            resources, and advocacy to transform safeguarding across the UK.
          </p>
          <div className={styles.heroActions}>
            <Link href="/resources" className={`${styles.btnMain} ${styles.btnSolid}`}>
              How we can help
            </Link>
            <Link href="/support" className={`${styles.btnMain} ${styles.btnOutline}`}>
              Ways to support us
            </Link>
          </div>
        </div>
        <div
          className={styles.heroBg}
          style={{ backgroundImage: `url(${heroImg})` }}
        />
      </section>

      {/* Audience Buckets - "How can we help?" */}
      <section className={styles.bucketsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>How can we help you?</h2>
            <p>Select your path to access tailored support and resources.</p>
          </div>
          <div className={styles.bucketGrid}>
            <div className={styles.bucketCard}>
              <div>
                <span className={styles.bucketIcon}>🤝</span>
                <h3>For Survivors</h3>
                <p>Access independent support, guidance on disclosures, and our survivor-led community safe-spaces.</p>
              </div>
              <Link href="/resources" className={styles.btnGhost}>Get support</Link>
            </div>
            <div className={styles.bucketCard}>
              <div>
                <span className={styles.bucketIcon}>🏠</span>
                <h3>For Families</h3>
                <p>Practical resources for parents and carers to help navigate safeguarding concerns with confidence.</p>
              </div>
              <Link href="/resources" className={styles.btnGhost}>Access resources</Link>
            </div>
            <div className={styles.bucketCard}>
              <div>
                <span className={styles.bucketIcon}>🎓</span>
                <h3>For Professionals</h3>
                <p>Advanced safeguarding training and the Froggy’s Law reform model for educational and social settings.</p>
              </div>
              <Link href="/training" className={styles.btnGhost}>View training</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Narrative - Why we help */}
      <section className={styles.container}>
        <div className={styles.impactSection}>
          <div
            className={styles.imageSide}
            style={{ backgroundImage: `url(${abstractImg})` }}
          />
          <div className={styles.contentSide}>
            <h2>Why Froggy’s Voice Box exists</h2>
            <p>
              Traditional safeguarding often fails because it lacks the nuance
              of survivor experience. We bridge that gap by providing
              trauma-informed, independent oversight that ensures every
              disclosure is met with the correct, mandated response.
            </p>
            <p>
              Our mobile safe-spaces and digital resources are designed to be
              emotionally safe, providing a sanctuary for information where
              disclosure is the beginning of a safe journey, not a moment of crisis.
            </p>
            <Link href="/about" className={`${styles.btnMain} ${styles.btnSolid}`} style={{ background: 'var(--calm-blue)', color: 'white' }}>
              Read our mission
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Quote - Trust & Authority */}
      <section className={styles.quoteSection}>
        <div className={styles.quoteContainer}>
          <p className={styles.quoteText}>
            "The way a child shows abuse is as important as the disclosure itself.
            We are here to ensure that when they speak, the world finally knows how to listen."
          </p>
          <div className={styles.quoteAuthor}>
            <div className={styles.authorInfo}>
              <h4>Froggy</h4>
              <p>Founder, Froggy’s Voice Box CIC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reform Hub - Side Stripe (AFI Inspired) */}
      <div style={{ background: 'var(--neutral-100)', padding: '4rem 0' }}>
        <div className={styles.container}>
          <div className={styles.impactSection} style={{ padding: 0 }}>
            <div className={styles.contentSide}>
              <h2>A new standard: Froggy’s Law</h2>
              <p>
                We aren't just a support hub; we are a reform movement.
                Froggy’s Law is our proposed five-step safeguarding pathway
                designed to mandate trauma-informed professional responses
                across the UK.
              </p>
              <Link href="/reform" className={styles.btnGhost}>Explore the reform model</Link>
            </div>
            <div
              className={styles.imageSide}
              style={{ backgroundImage: `url(${vanImg})` }}
            />
          </div>
        </div>
      </div>

      {/* Latest & Impact - Grid */}
      <section className={styles.newsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Latest from the hub</h2>
          </div>
          <div className={styles.newsGrid}>
            <Link href="/projects" className={styles.newsCard}>
              <div className={styles.newsImage} style={{ backgroundImage: `url(${vanImg})` }} />
              <span>Project Update</span>
              <h4>The Mobile SAFE-Space Van Launching in 2026</h4>
            </Link>
            <Link href="/training" className={styles.newsCard}>
              <div className={styles.newsImage} style={{ backgroundImage: `url(${heroImg})` }} />
              <span>Training</span>
              <h4>Professional Safeguarding Workshops: Autumn Intake</h4>
            </Link>
            <Link href="/resources" className={styles.newsCard}>
              <div className={styles.newsImage} style={{ backgroundImage: `url(${abstractImg})` }} />
              <span>Resources</span>
              <h4>New Guidance for Foster Carers and Schools</h4>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
