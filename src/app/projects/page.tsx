import Link from 'next/link';
import styles from '../Home.module.css';

export default function Projects() {
    return (
        <div className={styles.home}>
            {/* Hero-like Intro */}
            <section className={styles.hero} style={{ minHeight: '40vh', padding: '10rem 0 5rem' }}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className="text-calm">Our Projects and Impact</h1>
                        <p style={{ fontSize: '1.4rem' }}>
                            Real-world action driven by lived experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro Context */}
            <section className={`${styles.introSection} ${styles.lawSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <h2>Community-Driven Movement</h2>
                        <p>
                            Froggy’s Voice Box CIC is more than a hub — it is an active, community-driven
                            movement. Our projects focus on improving safeguarding practice, supporting
                            survivors, and creating safer environments for children to speak out.
                        </p>
                    </div>
                </div>
            </section>

            {/* Safeguarding Van */}
            <section className={`${styles.introSection} ${styles.voiceBoxSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <h2>1. Safeguarding Van Project</h2>
                        <p><strong>A Mobile Safe-Space for Children and Families</strong></p>
                        <p>
                            The safeguarding van is a community-based initiative designed to bring support
                            directly to children, families, and professionals. It provides a calm, accessible
                            environment where safeguarding conversations can take place safely.
                        </p>
                        <div style={{ padding: '2rem', background: 'var(--white)', borderRadius: 'var(--border-radius)', marginTop: '2rem' }}>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                                <li>🚛 A mobile safe-space for outreach</li>
                                <li>🚛 Visits to schools and community events</li>
                                <li>🚛 On-the-ground safeguarding awareness</li>
                                <li>🚛 Direct access to survivor-informed resources</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Engagement */}
            <section className={`${styles.introSection} ${styles.lawSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <h2>2. Community Engagement</h2>
                        <p>
                            Froggy’s Voice Box regularly engages with communities to raise awareness about child
                            disclosure, emotional safety, and reform through talks, awareness campaigns, and
                            survivor-led storytelling.
                        </p>
                    </div>
                </div>
            </section>

            {/* Impact Outcomes */}
            <section className={styles.supportSection}>
                <div className="container">
                    <div className={styles.sectionContent} style={{ textAlign: 'center' }}>
                        <h2>Impact & Outcomes</h2>
                        <p style={{ fontSize: '1.3rem', color: 'var(--calm-blue)', fontWeight: '600' }}>
                            Increased awareness. Stronger safeguarding in schools.
                            More emotionally safe environments. A growing national movement for change.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
