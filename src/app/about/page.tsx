import styles from '../Home.module.css';

export default function About() {
    return (
        <div className={styles.home}>
            {/* Hero-like Intro */}
            <section className={styles.hero} style={{ minHeight: '40vh', padding: '10rem 0 5rem' }}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className="text-calm">A Survivor-Led Movement for Safer Childhoods</h1>
                        <p style={{ fontSize: '1.4rem' }}>
                            Born from lived experience. Built for every child.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Mission Section */}
            <section className={`${styles.introSection} ${styles.voiceBoxSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <h2>The Mission of Froggy’s Voice Box</h2>
                        <p>
                            Froggy’s Voice Box CIC was created to transform how children show abuse and how
                            professionals respond. Rooted in lived experience and guided by survivor-led insight,
                            we exist to close the dangerous gaps that allow children to fall through
                            the cracks.
                        </p>
                        <p>
                            Our mission is simple: ensure every child is heard, protected, and
                            supported from the moment they speak out.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className={`${styles.introSection} ${styles.lawSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <h2>Our Story</h2>
                        <p>
                            Froggy’s Voice Box began with one survivor’s journey — a journey marked by silence,
                            missed opportunities, and systems that weren’t designed to protect children when
                            they needed it most.
                        </p>
                        <p>
                            Through years of reflection, advocacy, and community work, this experience evolved
                            into a clear reform model—Froggy’s Law—that places children’s safety, dignity,
                            and emotional wellbeing at the centre of disclosure.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className={`${styles.introSection} ${styles.voiceBoxSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <h2>Our Values</h2>
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', lineHeight: '2' }}>
                            <li>🌿 <strong>Survivor-Led:</strong> Lived experience guides every decision.</li>
                            <li>🛡️ <strong>Safety First:</strong> Emotional safety is prioritised in all communication.</li>
                            <li>🤝 <strong>Collaboration:</strong> Working with families, professionals, and communities.</li>
                            <li>⭐ <strong>Transparency:</strong> Clear, honest, and documented processes.</li>
                            <li>🌱 <strong>Reform-Driven:</strong> Focused on long-term, systemic change.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Founder Introduction */}
            <section className={`${styles.introSection} ${styles.supportSection}`}>
                <div className="container">
                    <div className={styles.sectionContent} style={{ textAlign: 'center' }}>
                        <h2>Founder Introduction</h2>
                        <p>
                            Froggy’s Voice Box CIC was founded by <strong>Paul Waine</strong>, a survivor, author, and advocate
                            dedicated to transforming safeguarding through truth, clarity, and lived-experience
                            leadership.
                        </p>
                        <p>
                            Paul’s work spans community projects, trauma-informed storytelling,
                            and national reform efforts — all rooted in the belief that children deserve systems
                            that protect them, not fail them.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
