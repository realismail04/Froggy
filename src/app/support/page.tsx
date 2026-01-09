import styles from '../Home.module.css';
import Link from 'next/link';

export default function Support() {
    return (
        <div className={styles.home}>
            {/* Hero-like Intro */}
            <section className={styles.hero} style={{ minHeight: '40vh', padding: '10rem 0 5rem' }}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className="text-calm">Support Our Mission</h1>
                        <p style={{ fontSize: '1.4rem' }}>
                            Building safer pathways for children through survivor-led reform.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Context */}
            <section className={`${styles.introSection} ${styles.voiceBoxSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <p>
                            Froggy’s Voice Box CIC is a survivor-led organisation committed to transforming how
                            children show abuse and how professionals respond. As a Community Interest Company,
                            we rely on grants, partnerships, and public support to deliver our projects.
                        </p>
                        <p>
                            Your support strengthens our reform work, maintains our resource hub, and directly
                            funds community initiatives like the Safeguarding Van.
                        </p>
                    </div>
                </div>
            </section>

            {/* Donate Section */}
            <section className={`${styles.introSection} ${styles.lawSection}`}>
                <div className="container">
                    <div className={styles.sectionContent} style={{ textAlign: 'center' }}>
                        <h2>Donations & Crowdfunding</h2>
                        <p>
                            Public support helps us sustain our work and grow our impact.
                            Every contribution supports survivor-led safeguarding initiatives.
                        </p>
                        <div style={{ marginTop: '3rem' }}>
                            <button className={styles.btnHero} style={{ border: 'none', cursor: 'pointer' }}>
                                Donate via Crowdfunder
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other ways to help */}
            <section className={`${styles.introSection} ${styles.voiceBoxSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                            <div style={{ padding: '2.5rem', background: 'var(--white)', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-sm)' }}>
                                <h3 style={{ color: 'var(--calm-blue)', marginBottom: '1rem' }}>Grant Funding</h3>
                                <p>We work with funders and trusts who share our commitment. Partnerships help us expand our community projects and deliver training.</p>
                            </div>
                            <div style={{ padding: '2.5rem', background: 'var(--white)', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-sm)' }}>
                                <h3 style={{ color: 'var(--safe-green-dark)', marginBottom: '1rem' }}>Volunteering</h3>
                                <p>We welcome support from individuals with skills in design, outreach, safeguarding, and community engagement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.supportSection}>
                <div className="container">
                    <div className={styles.supportContent}>
                        <h2>Interested in Partnering?</h2>
                        <p>
                            If you’re interested in exploring funding opportunities or skills-based
                            volunteering, we’d love to hear from you.
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
