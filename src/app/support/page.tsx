import styles from '../Home.module.css';
import Link from 'next/link';

export default function Support() {
    const abstractImg = "/supportive_community_abstract_1767979159722.png";

    return (
        <div className={styles.home}>
            {/* Premium Hero - Minimal */}
            <section className={styles.hero} style={{ minHeight: '50vh', background: 'var(--safe-green-dark)' }}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <h1>Support Our Mission</h1>
                    <p>
                        Building safer pathways for children through survivor-led reform.
                        Your partnership allows us to scale our impact nationally.
                    </p>
                </div>
            </section>

            {/* Intro Split */}
            <section className={`${styles.section} ${styles.voiceBoxSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionContent}>
                        <div className={styles.textContent}>
                            <h2>Sustainable Social Impact</h2>
                            <p>
                                Froggy’s Voice Box CIC is a survivor-led organisation committed to
                                transforming safeguarding standards. As a Community Interest Company,
                                we reinvest every resource into protecting children.
                            </p>
                            <div className={styles.traumaAccent}>
                                Your support maintains our resource hub and directly funds
                                community initiatives like the Safeguarding Van.
                            </div>
                        </div>
                        <div
                            className={styles.imageBox}
                            style={{ backgroundImage: `url(${abstractImg})` }}
                        />
                    </div>
                </div>
            </section>

            {/* Support Options Grid - Premium */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '3rem', color: 'var(--calm-blue-dark)' }}>How You Can Help</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>

                        <div style={{ padding: '3.5rem', background: 'white', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-premium)', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '2rem' }}>🤝</div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Grant Funding</h3>
                            <p style={{ color: 'var(--neutral-600)', marginBottom: '2rem' }}>We work with trusts and funders to deliver scalable community projects and national reform.</p>
                            <Link href="/contact" className={styles.btnSecondary} style={{ color: 'var(--calm-blue-dark)', borderColor: 'var(--calm-blue-dark)' }}>Partner with us</Link>
                        </div>

                        <div style={{ padding: '3.5rem', background: 'var(--calm-blue-dark)', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-premium)', textAlign: 'center', color: 'white' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '2rem' }}>⭐</div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'inherit' }}>Crowdfunding</h3>
                            <p style={{ opacity: 0.8, marginBottom: '2rem' }}>Direct public support allows us to remain independent and responsive to survivor needs.</p>
                            <button className={styles.btnPrimary}>Support on Crowdfunder</button>
                        </div>

                        <div style={{ padding: '3.5rem', background: 'white', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-premium)', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '2rem' }}>🌱</div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Volunteering</h3>
                            <p style={{ color: 'var(--neutral-600)', marginBottom: '2rem' }}>Lend your expertise in design, outreach, or policy to strengthen the voice of survivors.</p>
                            <Link href="/contact" className={styles.btnSecondary} style={{ color: 'var(--calm-blue-dark)', borderColor: 'var(--calm-blue-dark)' }}>Get involved</Link>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
