import Link from 'next/link';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>A Safe Space for Every Child’s Voice</h1>
            <p>
              Froggy’s Voice Box is a calm, community-led hub dedicated to
              transforming safeguarding through emotional safety, clarity, and trust.
              We are here to ensure that when a child speaks, the world is ready to listen safely.
            </p>
            <div className={styles.heroActions}>
              <Link href="/resources" className={styles.btnGentle}>
                Explore Resources
              </Link>
              <Link href="/about" className="btn-outline" style={{ padding: '16px 40px', borderRadius: 'var(--border-radius)', fontWeight: '600' }}>
                Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro to Froggy’s Voice Box */}
      <section className={`${styles.introSection} ${styles.voiceBoxSection}`}>
        <div className="container">
          <div className={styles.sectionContent}>
            <h2>About Froggy’s Voice Box</h2>
            <p>
              Froggy’s Voice Box CIC is a community-focused, safeguarding-led organisation.
              We act as a central, calm hub for information, resources, and community connection.
              Our approach is warm, human, and child-safe — designed to be professional but
              never corporate or cold.
            </p>
            <p>
              Whether you are a survivor seeking clarity, a parent looking for guidance,
              or a professional wanting to strengthen your practice, we provide the
              tools and support needed to navigate safeguarding with compassion.
            </p>
          </div>
        </div>
      </section>

      {/* Intro to Froggy’s Law */}
      <section className={`${styles.introSection} ${styles.lawSection}`}>
        <div className="container">
          <div className={styles.sectionContent}>
            <h2>Understanding Froggy’s Law</h2>
            <p>
              Froggy’s Law is our survivor-led reform model. It is dedicated to
              transforming how children show abuse and how professionals respond.
              By providing a safe, structured, and consistent pathway, we protect
              children from retraumatization.
            </p>
            <p>
              Our goal is to ensure that every disclosure is met with a trauma-informed
              response, closing the systemic gaps that have historically left children
              unprotected.
            </p>
            <Link href="/reform" style={{ color: 'var(--calm-blue)', fontWeight: '700', textDecoration: 'underline' }}>
              Learn more about the reform model
            </Link>
          </div>
        </div>
      </section>

      {/* Support Us Link (Gentle) */}
      <section className={styles.supportSection}>
        <div className="container">
          <div className={styles.supportContent}>
            <h2>Support Our Work</h2>
            <p>
              As a Community Interest Company, we rely on the kindness and support of
              our community to keep our resources free and our advocacy strong.
            </p>
            <Link href="/support" className={styles.btnGentle}>
              How You Can Help
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
