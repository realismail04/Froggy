import Link from 'next/link';
import styles from '../Home.module.css';

export default function Resources() {
    const abstractImg = "/supportive_community_abstract_1767979159722.png";

    return (
        <div className={styles.home}>
            {/* Premium Hero - Minimal */}
            <section className={styles.hero} style={{ minHeight: '50vh', background: 'var(--safe-green-dark)' }}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <h1>Safe Guidance & Resources</h1>
                    <p>
                        Survivor-informed, emotionally safe information for everyone.
                        Designed to support, not overwhelm.
                    </p>
                </div>
            </section>

            {/* Intro Hub split */}
            <section className={`${styles.section} ${styles.lawSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionContent}>
                        <div className={styles.textContent}>
                            <h2>The Central Wisdom Hub</h2>
                            <p>
                                At Froggy’s Voice Box, we believe that information is only powerful if it
                                is safe. Every guide and tool in our hub is written with clarity,
                                compassion, and lived-experience insight.
                            </p>
                            <div className={styles.traumaAccent}>
                                Our resources are designed to be "breathable"—providing the depth needed
                                without triggering the nervous system.
                            </div>
                        </div>
                        <div
                            className={styles.imageBox}
                            style={{ backgroundImage: `url(${abstractImg})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
                        />
                    </div>
                </div>
            </section>

            {/* Resource Grid - Three Columns Big Org Style */}
            <section className={`${styles.section} ${styles.voiceBoxSection}`}>
                <div className={styles.container}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>

                        {/* For Survivors */}
                        <div style={{ padding: '3.5rem', background: 'white', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-premium)' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>🌿</div>
                            <h3 style={{ fontSize: '2rem', color: 'var(--calm-blue-dark)', marginBottom: '1.5rem' }}>For Survivors</h3>
                            <p style={{ marginBottom: '2rem', color: 'var(--neutral-600)' }}>Clarity without pressure. Exploring safeguarding and disclosure in simple, non-clinical language.</p>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2', fontWeight: '500' }}>
                                <li>→ Understanding Disclosure</li>
                                <li>→ Emotional Safety 101</li>
                                <li>→ Recognising Safe Adults</li>
                                <li>→ Pathways to Support</li>
                            </ul>
                        </div>

                        {/* For Families */}
                        <div style={{ padding: '3.5rem', background: 'white', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-premium)' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>🛡️</div>
                            <h3 style={{ fontSize: '2rem', color: 'var(--safe-green-dark)', marginBottom: '1.5rem' }}>For Families</h3>
                            <p style={{ marginBottom: '2rem', color: 'var(--neutral-600)' }}>Guided support for those wanting to help. How to respond calmly and create a safe environment.</p>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2', fontWeight: '500' }}>
                                <li>→ Responding to Disclosures</li>
                                <li>→ Staying Grounded</li>
                                <li>→ The Safeguarding Process</li>
                                <li>→ Supporting Your Child</li>
                            </ul>
                        </div>

                        {/* For Professionals */}
                        <div style={{ padding: '3.5rem', background: 'white', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-premium)' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>⭐</div>
                            <h3 style={{ fontSize: '2rem', color: 'var(--calm-blue-dark)', marginBottom: '1.5rem' }}>For Professionals</h3>
                            <p style={{ marginBottom: '2rem', color: 'var(--neutral-600)' }}>Standardised, survivor-led guidance for schools, police, and social care, aligned with reform.</p>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2', fontWeight: '500' }}>
                                <li>→ Safe First-Response Protocol</li>
                                <li>→ Trauma-Informed Communication</li>
                                <li>→ Avoiding Leading Questions</li>
                                <li>→ Multi-Agency Collaboration</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* Need Help CTA */}
            <section className={styles.supportSection}>
                <div className={styles.container}>
                    <div className={styles.supportContent}>
                        <h2>Navigating the Path</h2>
                        <p>
                            We curate a list of external services chosen for their
                            survivor-centred and emotionally safe practices.
                        </p>
                        <Link href="/contact" className={styles.btnPrimary}>
                            Contact for signposting
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
