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
            <h1>Transforming Safeguarding for Every Child</h1>
            <p>
              Froggy’s Law is a survivor-led safeguarding reform project dedicated to
              changing how children disclose abuse and how professionals respond.
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
            width={800}
            height={600}
            className={styles.heroImage}
            priority
          />
        </div>
      </section>

      {/* Mission Highlights */}
      <section className={styles.missionSection}>
        <div className="container">
          <h2>Our Primary Objectives</h2>
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <h3>Reform</h3>
              <p>Clearly explaining why Froggy’s Law reform is urgently needed to protect children.</p>
            </div>
            <div className={styles.missionCard}>
              <h3>Resources</h3>
              <p>Providing emotionally safe, non-triggering guidance for survivors and families.</p>
            </div>
            <div className={styles.missionCard}>
              <h3>Impact</h3>
              <p>Demonstrating credibility and readiness to transform national safeguarding standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action (Safe & Professional) */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Join the Movement for Change</h2>
          <p>
            Whether you are a survivor, a parent, or a professional, there are many ways
            to support the reform and help create safer paths for disclosure.
          </p>
          <Link href="/support" className="btn-gold btnLarge" style={{ background: 'white', color: 'var(--calm-blue)' }}>
            Find Out How to Support Us
          </Link>
        </div>
      </section>
    </div>
  );
}
