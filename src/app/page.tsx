import Image from 'next/image';
import Link from 'next/link';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>Froggy’s Law: Survivor-Led Reform for Every Child’s Safety</h1>
            <p style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--calm-blue)', marginBottom: '1rem' }}>
              Transforming how children show abuse — and how professionals respond.
            </p>
            <p>
              Froggy’s Law CIC is a survivor-led movement dedicated to reforming child disclosure
              practices across the UK. We exist to ensure every child is heard, protected, and
              supported the moment they speak out. Through lived-experience insight, practical
              guidance, and evidence-based reform, we’re building a safer future for children,
              families, and frontline professionals.
            </p>
            <div className={styles.heroActions}>
              <Link href="/reform" className="btn-gold btnLarge">
                Learn About the Reform
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <Image
            src="/hero-bg.png"
            alt="Safety and pathways illustration"
            width={1200}
            height={800}
            className={styles.heroImage}
            priority
          />
        </div>
      </section>

      {/* Grid Sections: The Problem & The Solution */}
      <section className={`${styles.missionSection} section-padding`}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <h3>1. The Problem</h3>
              <p>Children are still showing abuse in unsafe, unsupported ways — often to people who aren’t trained to respond. This leads to missed opportunities, retraumatization, and systemic failure.</p>
            </div>
            <div className={styles.missionCard}>
              <h3>2. The Solution: Froggy’s Law</h3>
              <p>A clear, survivor-designed reform model that gives children a safe, structured pathway to show abuse, and ensures professionals respond consistently and effectively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>What We Offer</h2>
          </div>
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <h3>Survivor-safe resources</h3>
              <p>Information designed to support, not overwhelm, providing clarity without pressure.</p>
            </div>
            <div className={styles.missionCard}>
              <h3>Guidance for parents and carers</h3>
              <p>Explaining how to respond calmly and how to advocate for your child.</p>
            </div>
            <div className={styles.missionCard}>
              <h3>Professional tools</h3>
              <p>Simple, standardised guidance for schools, police, and social care aligned with our reform model.</p>
            </div>
            <div className={styles.missionCard}>
              <h3>Training and workshops</h3>
              <p>Trauma-informed, survivor-led training designed to strengthen safeguarding from the inside out.</p>
            </div>
            <div className={styles.missionCard}>
              <h3>Community projects</h3>
              <p>Real-world action driven by lived experience, including our mobile safeguarding van initiative.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action (Safe & Professional) */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Support the Movement</h2>
            <p>
              Help us build a future where every child’s voice leads to safety, not silence.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <Link href="/reform" className={styles.btnWhite}>
                Learn About the Reform
              </Link>
              <Link href="/support" className={styles.btnWhite}>
                Support Our Work
              </Link>
              <Link href="/resources" className={styles.btnWhite}>
                Download Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
