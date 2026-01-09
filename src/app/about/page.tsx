import styles from '../Home.module.css';

export default function About() {
    const abstractImg = "/supportive_community_abstract_1767979159722.png";

    return (
        <div className={styles.home}>
            {/* Premium Hero - Minimal */}
            <section className={styles.hero} style={{ minHeight: '50vh', background: 'var(--calm-blue-dark)' }}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <h1>Our Vision & Leadership</h1>
                    <p>
                        Born from lived experience. Built for every child.
                        A survivor-led movement for national structural reform.
                    </p>
                </div>
            </section>

            {/* Mission Split Section */}
            <section className={`${styles.section} ${styles.voiceBoxSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionContent}>
                        <div className={styles.textContent}>
                            <h2>The Mission of Froggy’s Voice Box</h2>
                            <p>
                                Froggy’s Voice Box CIC was created to transform how children show abuse and how
                                professionals respond. Rooted in lived experience, we exist to close the dangerous
                                gaps that allow children to fall through the cracks.
                            </p>
                            <div className={styles.traumaAccent}>
                                Our mission is simple: ensure every child is heard, protected, and
                                supported from the moment they speak out.
                            </div>
                            <p>
                                By providing a centralized, non-triggering hub, we empower families and
                                professionals with the clarity needed to navigate sensitive disclosures.
                            </p>
                        </div>
                        <div
                            className={styles.imageBox}
                            style={{ backgroundImage: `url(${abstractImg})` }}
                        />
                    </div>
                </div>
            </section>

            {/* Founder Section - Premium Big Org */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={`${styles.sectionContent} ${styles.founderRow}`}>
                        <div className={styles.imageBox} style={{ backgroundColor: 'var(--neutral-400)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: '1.2rem', color: 'var(--neutral-700)', fontWeight: '600' }}>[ Founder Headshot: Paul Waine ]</span>
                        </div>
                        <div className={styles.textContent}>
                            <h2>Leadership & Lived Experience</h2>
                            <p>
                                Froggy’s Voice Box CIC was founded by <strong>Paul Waine</strong>, a survivor, author, and advocate
                                dedicated to transforming safeguarding through truth and clarity.
                            </p>
                            <p>
                                Paul’s leadership ensures that every resource and policy we produce is
                                grounded in the reality of those who have navigated the system themselves.
                            </p>
                            <p>
                                His work spans community projects, trauma-informed storytelling, and
                                national reform efforts—all rooted in the belief that children deserve
                                systems that protect them, not fail them.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values - Full width clean */}
            <section className={styles.section}>
                <div className={styles.container} style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', color: 'var(--calm-blue-dark)', marginBottom: '4rem' }}>Our Core Values</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                        <div style={{ padding: '3rem', background: 'var(--neutral-200)', borderRadius: 'var(--border-radius)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🌿</div>
                            <h3 style={{ marginBottom: '1rem' }}>Survivor-Led</h3>
                            <p>Lived experience guides every decision and resource we create.</p>
                        </div>
                        <div style={{ padding: '3rem', background: 'var(--neutral-200)', borderRadius: 'var(--border-radius)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🛡️</div>
                            <h3 style={{ marginBottom: '1rem' }}>Safety First</h3>
                            <p>Emotional safety is prioritized in all communication and outreach.</p>
                        </div>
                        <div style={{ padding: '3rem', background: 'var(--neutral-200)', borderRadius: 'var(--border-radius)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🤝</div>
                            <h3 style={{ marginBottom: '1rem' }}>Collaboration</h3>
                            <p>Working with families and professionals to bridge systemic gaps.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
