import Link from 'next/link';
import styles from '../Home.module.css';

export default function Projects() {
    const vanImg = "/safeguarding_van_safespace_1767979144119.png";
    const abstractImg = "/supportive_community_abstract_1767979159722.png";

    return (
        <div className={styles.home}>
            {/* Premium Hero - Minimal */}
            <section className={styles.hero} style={{ minHeight: '50vh', background: 'var(--calm-blue-dark)' }}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <h1>Our Projects & Impact</h1>
                    <p>
                        Real-world action driven by lived experience.
                        Improving safeguarding practice through community-led movement.
                    </p>
                </div>
            </section>

            {/* Safeguarding Van Premium Split */}
            <section className={`${styles.section} ${styles.voiceBoxSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionContent}>
                        <div className={styles.textContent}>
                            <h2>The Safeguarding Van Project</h2>
                            <p>
                                A mobile sanctuary designed to bring expert support directly to
                                children, families, and professionals in their own communities.
                            </p>
                            <div className={styles.traumaAccent}>
                                Our van travels across the UK, providing on-the-ground awareness and
                                direct access to survivor-informed resources.
                            </div>
                            <p>
                                From school visits to community festivals, the van acts as a visible
                                sign of safety, encouraging conversations that might otherwise
                                remain unspoken.
                            </p>
                        </div>
                        <div
                            className={styles.imageBox}
                            style={{ backgroundImage: `url(${vanImg})` }}
                        />
                    </div>
                </div>
            </section>

            {/* Impact Stats Grid */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '3rem', color: 'var(--calm-blue-dark)' }}>Our Core Outcomes</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        <div style={{ padding: '3rem', background: 'white', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>📈</div>
                            <h3 style={{ marginBottom: '1rem' }}>National Reform</h3>
                            <p>Establishing Froggy’s Law as the national standard for child disclosure pathways.</p>
                        </div>
                        <div style={{ padding: '3rem', background: 'white', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🚜</div>
                            <h3 style={{ marginBottom: '1rem' }}>Community Outreach</h3>
                            <p>Reaching thousands of families annually through our mobile safeguarding hub.</p>
                        </div>
                        <div style={{ padding: '3rem', background: 'white', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🎓</div>
                            <h3 style={{ marginBottom: '1rem' }}>Professional Upskilling</h3>
                            <p>Training thousands of professionals in trauma-informed safeguarding responses.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Impact CTA */}
            <section className={styles.supportSection}>
                <div className={styles.container}>
                    <div className={styles.supportContent}>
                        <h2>Help Us Scale Our Impact</h2>
                        <p>
                            Your support allows us to reach more communities and drive the
                            structural changes needed for a safer national safeguarding system.
                        </p>
                        <Link href="/support" className={styles.btnPrimary}>
                            Become a Supporter
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
