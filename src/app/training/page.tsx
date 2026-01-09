import Link from 'next/link';
import styles from '../Home.module.css';

export default function Training() {
    const abstractImg = "/supportive_community_abstract_1767979159722.png";

    return (
        <div className={styles.home}>
            {/* Premium Hero - Minimal */}
            <section className={styles.hero} style={{ minHeight: '50vh', background: 'var(--calm-blue-dark)' }}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <h1>Professional Training & Workshops</h1>
                    <p>
                        Survivor-led guidance shaped by lived experience.
                        Empowering professionals to respond with clarity and care.
                    </p>
                </div>
            </section>

            {/* Training Hub Split */}
            <section className={`${styles.section} ${styles.voiceBoxSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionContent}>
                        <div className={styles.textContent}>
                            <h2>Survivor-Informed Excellence</h2>
                            <p>
                                Froggy’s Voice Box CIC delivers professional training for schools,
                                social care, police, and community organisations. Our workshops
                                bridge the gap between legal requirements and emotional safety.
                            </p>
                            <div className={styles.traumaAccent}>
                                We provide the practical tools needed to recognise indirect
                                disclosures and maintain trauma-informed boundaries.
                            </div>
                        </div>
                        <div
                            className={styles.imageBox}
                            style={{ backgroundImage: `url(${abstractImg})` }}
                        />
                    </div>
                </div>
            </section>

            {/* Core Modules - Premium List */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '3rem', color: 'var(--calm-blue-dark)' }}>Core Training Modules</h2>
                    </div>

                    <div style={{ display: 'grid', gap: '3rem' }}>
                        {[
                            { id: "01", title: "Understanding Child Disclosure", desc: "A deep dive into how children show abuse in real life. Learn why children show the way they do, common barriers, and how to recognise indirect disclosures." },
                            { id: "02", title: "Safe First-Response Protocol", desc: "A simple framework guiding adults through the first moments of a disclosure. Learn what to say, what not to say, and how to avoid leading questions." },
                            { id: "03", title: "Trauma-Informed Communication", desc: "How to communicate in ways that reduce harm and build trust. Covers tone, body language, and maintaining compassionate boundaries." }
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', gap: '3rem', padding: '3rem', background: 'white', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-md)', alignItems: 'center' }}>
                                <span style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--neutral-300)' }}>{item.id}</span>
                                <div>
                                    <h3 style={{ fontSize: '1.8rem', color: 'var(--calm-blue-dark)', marginBottom: '1rem' }}>{item.title}</h3>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--neutral-700)', lineHeight: '1.7' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Training CTA */}
            <section className={styles.supportSection}>
                <div className={styles.container}>
                    <div className={styles.supportContent}>
                        <h2>Enquire About Sessions</h2>
                        <p>
                            To request a workshop or learn more about our online and in-person formats,
                            please get in touch with our team.
                        </p>
                        <Link href="/contact" className={styles.btnPrimary}>
                            Contact for Enquiries
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
