import Link from 'next/link';
import styles from './Home.module.css';

export default function Home() {
  const heroImg = "/hero_modern_hub_premium_1767979123155.png";
  const vanImg = "/safeguarding_van_safespace_1767979144119.png";
  const abstractImg = "/supportive_community_abstract_1767979159722.png";

  return (
    <div className={styles.home}>
      {/* Editorial Immersive Hero */}
      <section className={styles.hero}>
        <div
          className={styles.heroImage}
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>A Safe Hub for Survivors and Professionals</h1>
          <p>
            Froggy’s Voice Box is a premium, survivor-led digital sanctuary providing
            essential resources, legal reform guidance, and a supportive community.
          </p>
          <div className={styles.heroActions}>
            <Link href="/resources" className={styles.btnPrimary}>
              Access Hub Resources
            </Link>
            <Link href="/reform" className={styles.btnSecondary} style={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}>
              Explore the Reform
            </Link>
          </div>
        </div>
      </section>

      {/* Narrative Flow - Overlapping Introduction */}
      <section className={styles.narrativeSection}>
        <div className={styles.container}>
          <div className={styles.overlapCard}>
            <div className={styles.textContent}>
              <h2>Survivor-Led Authority in Safeguarding</h2>
              <p>
                We believe the way a child shows abuse is as critical as the disclosure itself.
                Our platform bridges the gap between fear and understanding, providing a
                structured environment for families and agencies.
              </p>
              <div className={styles.traumaAccent}>
                "The disclosure is simple. The adult response is where the safety begins."
              </div>
              <p>
                As a Community Interest Company, we are dedicated to reinvesting
                our expertise into national standards and community presence.
              </p>
              <Link href="/about" className={styles.btnSecondary}>
                Learn More About Us
              </Link>
            </div>
            <div
              className={styles.imageBox}
              style={{ backgroundImage: `url(${abstractImg})` }}
            />
          </div>
        </div>
      </section>

      {/* High-Authority Impact Bar */}
      <section className={styles.impactBar}>
        <div className={styles.container}>
          <div className={styles.impactGrid}>
            <div className={styles.impactItem}>
              <h3>100%</h3>
              <p>Survivor Informed</p>
            </div>
            <div className={styles.impactItem}>
              <h3>5 Steps</h3>
              <p>Standardized Reform</p>
            </div>
            <div className={styles.impactItem}>
              <h3>∞</h3>
              <p>Compassionate Safety</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reform Model Strip */}
      <section className={styles.reformStrip}>
        <div className={styles.container}>
          <div className={styles.overlapCard} style={{ background: 'transparent', boxShadow: 'none', padding: 0 }}>
            <div
              className={styles.imageBox}
              style={{ backgroundImage: `url(${vanImg})`, minHeight: '450px' }}
            />
            <div className={styles.textContent}>
              <h2 style={{ color: 'white' }}>The Reform: Froggy’s Law</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                Beyond the hub, we are driving structural change in UK safeguarding
                through Froggy’s Law—a mandated, trauma-informed pathway for professional responses.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                Our model replaces inconsistent practices with a clear, emotional
                safety standard that protects children and empowers practitioners.
              </p>
              <Link href="/reform" className={styles.btnPrimary} style={{ background: 'var(--accent-gold)', color: 'var(--neutral-900)', border: 'none' }}>
                View The Reform Pathway
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final Action - Glassmorphism CTA */}
      <section className={styles.supportSection}>
        <div className={styles.container}>
          <div className={styles.glassCard}>
            <h2>Join the Movement</h2>
            <p>
              Your engagement helps us scale our community projects and deliver
              professional training that saves lives. Let’s create a safer
              future together.
            </p>
            <div className={styles.heroActions}>
              <Link href="/support" className={styles.btnPrimary}>
                Support the CIC
              </Link>
              <Link href="/contact" className={styles.btnSecondary}>
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
