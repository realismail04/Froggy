import styles from '../Home.module.css';
import Link from 'next/link';

export default function Reform() {
    const vanImg = "/safeguarding_van_safespace_1767979144119.png";

    return (
        <div className={styles.home}>
            {/* Premium Hero - Reform Focus */}
            <section className={styles.hero} style={{ minHeight: '50vh', background: 'var(--calm-blue-dark)' }}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <h1>A Safe Pathway for Child Disclosure</h1>
                    <p>
                        Transforming how children show abuse and how professionals respond
                        through survivor-designed reform.
                    </p>
                </div>
            </section>

            {/* Why Reform Split */}
            <section className={`${styles.section} ${styles.lawSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionContent}>
                        <div className={styles.textContent}>
                            <h2>Why Froggy’s Law Exists</h2>
                            <p>
                                Froggy’s Law is a survivor-designed reform model that transforms how children
                                show abuse and how professionals respond. It provides a safe, structured, and
                                consistent pathway that protects children from retraumatization.
                            </p>
                            <div className={styles.traumaAccent}>
                                Children rarely show abuse in controlled environments. They speak out in moments
                                of fear. Froggy’s Law ensures every adult is ready.
                            </div>
                            <p>
                                By providing clear, mandated steps, we empower teachers, police, and families
                                to handle disclosures with the care and legal clarity they deserve.
                            </p>
                        </div>
                        <div
                            className={styles.imageBox}
                            style={{ backgroundImage: `url(${vanImg})` }}
                        />
                    </div>
                </div>
            </section>

            {/* The 5-Step Model - Premium Grid */}
            <section className={`${styles.section} ${styles.voiceBoxSection}`}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '3rem', color: 'var(--calm-blue-dark)' }}>The Five-Step Pathway</h2>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '2rem auto' }}>
                            A standardized, trauma-informed response protocol designed to eliminate missed disclosures.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { step: "Step 1", title: "Safe First Response", desc: "Adults follow an emotionally safe protocol to avoid leading questions." },
                            { step: "Step 2", title: "Immediate Pathway", desc: "Disclosures are passed through a prioritized, trauma-informed route." },
                            { step: "Step 3", title: "Structural Support", desc: "Stabilizing the environment for the child immediately." },
                            { step: "Step 4", title: "Agency Calibration", desc: "Unified standards across police, schools, and social care." },
                            { step: "Step 5", title: "Verification", desc: "Ensuring the child's voice has been documented and heard." }
                        ].map((item, i) => (
                            <div key={i} style={{ padding: '2.5rem', background: 'white', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-md)' }}>
                                <span style={{ color: 'var(--safe-green)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase' }}>{item.step}</span>
                                <h3 style={{ marginTop: '0.5rem', marginBottom: '1rem', color: 'var(--calm-blue-dark)' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--neutral-700)', lineHeight: '1.6' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Reform CTA */}
            <section className={styles.supportSection}>
                <div className={styles.container}>
                    <div className={styles.supportContent}>
                        <h2>Drive Systemic Change</h2>
                        <p>
                            Our impact is shown through fewer missed disclosures and more consistent
                            professional responses across the UK.
                        </p>
                        <Link href="/contact" className={styles.btnPrimary}>
                            Partner with the Reform
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
