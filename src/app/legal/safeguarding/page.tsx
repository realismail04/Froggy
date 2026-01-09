import styles from '../../Home.module.css';

export default function Safeguarding() {
    return (
        <div className={styles.home}>
            {/* Hero-like Intro */}
            <section className={styles.hero} style={{ minHeight: '30vh', padding: '10rem 0 5rem' }}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className="text-calm">Safeguarding Policy</h1>
                        <p style={{ fontSize: '1.4rem' }}>
                            Protecting children and vulnerable people.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className={`${styles.introSection} ${styles.voiceBoxSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <p>
                            Our safeguarding policy outlines how Froggy’s Voice Box CIC prevents harm, responds to
                            concerns, and ensures the safety of children, survivors, and community members.
                            This policy reflects survivor-led insight and trauma-informed practice.
                        </p>

                        <h2 style={{ marginTop: '3rem' }}>Safeguarding Principles</h2>
                        <p>
                            We are committed to a "safety first" approach, where emotional safety is prioritised
                            in all communication and design. Our work is guided by the principle that every
                            child deserves a safe, structured pathway to speak out.
                        </p>

                        <h2 style={{ marginTop: '3rem' }}>Reporting Procedures</h2>
                        <p>
                            We maintain clear, documented processes for reporting safeguarding concerns.
                            All messages managed by Froggy's Voice Box CIC are handled with professionalism,
                            confidentiality, and care.
                        </p>

                        <h2 style={{ marginTop: '3rem' }}>Confidentiality</h2>
                        <p>
                            Information-sharing is conducted responsibly and only when necessary for the safety
                            and protection of the individuals involved, in line with UK safeguarding standards.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
