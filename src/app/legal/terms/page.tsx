import styles from '../../Home.module.css';

export default function Terms() {
    return (
        <div className={styles.home}>
            {/* Hero-like Intro */}
            <section className={styles.hero} style={{ minHeight: '30vh', padding: '10rem 0 5rem' }}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className="text-calm">Terms of Use</h1>
                        <p style={{ fontSize: '1.4rem' }}>
                            Using our website safely and respectfully.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className={`${styles.introSection} ${styles.voiceBoxSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <p>
                            This document sets out the terms for using the Froggy’s Voice Box CIC website.
                            By using this site, you agree to these terms, which are designed to
                            protect our community and mission.
                        </p>

                        <h2 style={{ marginTop: '3rem' }}>Acceptable Use</h2>
                        <p>
                            Users are expected to use the resources provided with respect and in line
                            with our safeguarding principles.
                        </p>

                        <h2 style={{ marginTop: '3rem' }}>Intellectual Property</h2>
                        <p>
                            All resources, text, and design are the property of Froggy’s Voice Box CIC.
                            Please contact us for permission before redistributing our materials.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
