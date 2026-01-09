import styles from '../Home.module.css';

export default function Reform() {
    return (
        <div className={styles.home}>
            {/* Hero-like Intro */}
            <section className={styles.hero} style={{ minHeight: '40vh', padding: '10rem 0 5rem' }}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className="text-calm">A Safe Pathway for Child Disclosure</h1>
                        <p style={{ fontSize: '1.4rem' }}>
                            Transforming how children show abuse and how professionals respond.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Context */}
            <section className={`${styles.introSection} ${styles.lawSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <h2>Why Froggy’s Law Exists</h2>
                        <p>
                            Froggy’s Law is a survivor-designed reform model that transforms how children
                            show abuse and how professionals respond. It provides a safe, structured, and
                            consistent pathway that protects children from retraumatization.
                        </p>
                        <p>
                            Children rarely show abuse in controlled environments. They speak out to friends,
                            teachers, or parents in moments of fear. But these individuals often lack the
                            clear guidance to respond safely. Froggy's Law fixes these gaps.
                        </p>
                    </div>
                </div>
            </section>

            {/* What it Provides */}
            <section className={`${styles.introSection} ${styles.voiceBoxSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <h2>What the Reform Provides</h2>
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', lineHeight: '2.5' }}>
                            <li>✅ <strong>Safe Disclosure Pathway:</strong> A clear, step-by-step process.</li>
                            <li>✅ <strong>Standardised Professional Response:</strong> Unified protocol for all agencies.</li>
                            <li>✅ <strong>Survivor-Led Insight:</strong> Shaped by lived experience.</li>
                            <li>✅ <strong>Trauma-Informed Practice:</strong> Minimising harm at every stage.</li>
                            <li>✅ <strong>Accountability:</strong> Clear roles for every adult involved.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className={`${styles.introSection} ${styles.lawSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <h2>How it Works in Practice</h2>
                        <div style={{ display: 'grid', gap: '2rem', marginTop: '3rem' }}>
                            <div style={{ padding: '2rem', background: 'var(--calm-blue-soft)', borderRadius: 'var(--border-radius)' }}>
                                <strong>Step 1: Safe First Response</strong>
                                <p style={{ fontSize: '1rem', marginTop: '0.5rem', opacity: 0.8 }}>Adults follow an emotionally safe protocol to avoid leading questions.</p>
                            </div>
                            <div style={{ padding: '2rem', background: 'var(--safe-green-soft)', borderRadius: 'var(--border-radius)' }}>
                                <strong>Step 2: Immediate Safeguarding Pathway</strong>
                                <p style={{ fontSize: '1rem', marginTop: '0.5rem', opacity: 0.8 }}>The disclosure is passed through a structured, prioritised route.</p>
                            </div>
                            <div style={{ padding: '2rem', background: 'var(--calm-blue-soft)', borderRadius: 'var(--border-radius)' }}>
                                <strong>Step 3: Trauma-Informed Support</strong>
                                <p style={{ fontSize: '1rem', marginTop: '0.5rem', opacity: 0.8 }}>Children receive support that prioritises stability and emotional safety.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className={styles.supportSection}>
                <div className="container">
                    <div className={styles.sectionContent} style={{ textAlign: 'center' }}>
                        <h2>The Impact of Reform</h2>
                        <p style={{ fontSize: '1.3rem', color: 'var(--calm-blue)', fontWeight: '600' }}>
                            Fewer missed disclosures. More consistent responses. Reduced retraumatization.
                            A safer, more accountable system for every child.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
