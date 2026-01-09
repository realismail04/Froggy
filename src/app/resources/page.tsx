import Link from 'next/link';
import styles from '../Home.module.css';

export default function Resources() {
    return (
        <div className={styles.home}>
            {/* Hero-like Intro */}
            <section className={styles.hero} style={{ minHeight: '40vh', padding: '10rem 0 5rem' }}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className="text-calm">Safe Guidance and Resources</h1>
                        <p style={{ fontSize: '1.4rem' }}>
                            Designed to support, not overwhelm.
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro Context */}
            <section className={`${styles.introSection} ${styles.lawSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <h2>A Central Hub for Support</h2>
                        <p>
                            Froggy’s Voice Box CIC provides survivor-informed, emotionally safe resources for
                            anyone affected by child abuse. Every guide and tool is written with clarity,
                            compassion, and lived-experience insight.
                        </p>
                    </div>
                </div>
            </section>

            {/* Category: Survivors */}
            <section className={`${styles.introSection} ${styles.voiceBoxSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <h2>1. For Survivors</h2>
                        <p>Our survivor-focused resources offer clarity without pressure. They explain safeguarding and disclosure in simple, non-clinical language.</p>
                        <div style={{ padding: '2rem', background: 'var(--white)', borderRadius: 'var(--border-radius)', marginTop: '2rem' }}>
                            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', listStyle: 'none', padding: 0 }}>
                                <li>🌿 Understanding disclosure</li>
                                <li>🌿 What emotional safety means</li>
                                <li>🌿 How to recognise safe adults</li>
                                <li>🌿 What happens when someone speaks</li>
                                <li>🌿 Signposting to safe services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category: Families */}
            <section className={`${styles.introSection} ${styles.lawSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <h2>2. For Parents & Carers</h2>
                        <p>Guided support for those wanting to help. We explain how to respond calmly and how to create an environment where a child feels safe.</p>
                        <div style={{ padding: '2rem', background: 'var(--safe-green-soft)', borderRadius: 'var(--border-radius)', marginTop: '2rem' }}>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                                <li>🛡️ How to respond to hints or disclosures</li>
                                <li>🛡️ What to avoid saying</li>
                                <li>🛡️ Staying grounded and supportive</li>
                                <li>🛡️ Understanding the safeguarding process</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category: Professionals */}
            <section className={`${styles.introSection} ${styles.voiceBoxSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <h2>3. For Professionals</h2>
                        <p>Standardised, survivor-led guidance for schools, police, and social care, aligned with the Froggy’s Law reform model.</p>
                        <div style={{ padding: '2rem', background: 'var(--calm-blue-soft)', borderRadius: 'var(--border-radius)', marginTop: '2rem' }}>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                                <li>⭐ The safe first-response protocol</li>
                                <li>⭐ Trauma-informed communication</li>
                                <li>⭐ Avoiding leading questions</li>
                                <li>⭐ Working across agencies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support us link */}
            <section className={styles.supportSection}>
                <div className="container">
                    <div className={styles.supportContent}>
                        <h2>Need Further Support?</h2>
                        <p>
                            We curate a list of external services chosen for their
                            survivor-centred and emotionally safe practices.
                        </p>
                        <Link href="/contact" className={styles.btnGentle}>
                            Contact For Guidance
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
