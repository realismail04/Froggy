import Link from 'next/link';
import styles from '../Home.module.css';

export default function Training() {
    return (
        <div className={styles.home}>
            {/* Hero-like Intro */}
            <section className={styles.hero} style={{ minHeight: '40vh', padding: '10rem 0 5rem' }}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className="text-calm">Survivor-Led Training for Professionals</h1>
                        <p style={{ fontSize: '1.4rem' }}>
                            Practical guidance shaped by lived experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Context */}
            <section className={`${styles.introSection} ${styles.lawSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <h2>Professional Safeguarding Training</h2>
                        <p>
                            Froggy’s Voice Box CIC delivers survivor-informed training for schools, social care,
                            police, youth services, and community organisations. All training is grounded in
                            lived experience and trauma-informed practice.
                        </p>
                    </div>
                </div>
            </section>

            {/* Training Modules */}
            <section className={`${styles.introSection} ${styles.voiceBoxSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <h2>Our Core Training Modules</h2>
                        <div style={{ display: 'grid', gap: '3rem', marginTop: '3rem' }}>
                            <div style={{ padding: '2.5rem', background: 'var(--white)', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-sm)' }}>
                                <h3 style={{ color: 'var(--safe-green)', marginBottom: '1rem' }}>1. Understanding Child Disclosure</h3>
                                <p style={{ fontSize: '1.1rem' }}>A deep dive into how children show abuse in real life. Learn why children show the way they do, common barriers, and how to recognise indirect disclosures.</p>
                            </div>
                            <div style={{ padding: '2.5rem', background: 'var(--white)', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-sm)' }}>
                                <h3 style={{ color: 'var(--safe-green)', marginBottom: '1rem' }}>2. Safe First-Response Protocol</h3>
                                <p style={{ fontSize: '1.1rem' }}>A simple framework guiding adults through the first moments of a disclosure. Learn what to say, what not to say, and how to avoid leading questions.</p>
                            </div>
                            <div style={{ padding: '2.5rem', background: 'var(--white)', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-sm)' }}>
                                <h3 style={{ color: 'var(--safe-green)', marginBottom: '1rem' }}>3. Trauma-Informed Communication</h3>
                                <p style={{ fontSize: '1.1rem' }}>How to communicate in ways that reduce harm and build trust. Covers tone, body language, and maintaining compassionate boundaries.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Outcomes */}
            <section className={`${styles.introSection} ${styles.lawSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <h2>Outcomes & Benefits</h2>
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', lineHeight: '2' }}>
                            <li>🌿 Confidence in responding to disclosures</li>
                            <li>🌿 Practical trauma-informed communication skills</li>
                            <li>🌿 Standardised framework for your organisation</li>
                            <li>🌿 Improved outcomes for children in your care</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.supportSection}>
                <div className="container">
                    <div className={styles.supportContent}>
                        <h2>Enquire About Training</h2>
                        <p>
                            To request a session or learn more about our workshop formats,
                            please get in touch. We offer both online and in-person sessions.
                        </p>
                        <Link href="/contact" className={styles.btnGentle}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
