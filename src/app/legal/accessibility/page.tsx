import styles from '../../Home.module.css';

export default function Accessibility() {
    return (
        <div className={styles.home}>
            {/* Hero-like Intro */}
            <section className={styles.hero} style={{ minHeight: '30vh', padding: '10rem 0 5rem' }}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className="text-calm">Accessibility Statement</h1>
                        <p style={{ fontSize: '1.4rem' }}>
                            A website for everyone.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className={`${styles.introSection} ${styles.voiceBoxSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <p>
                            We are committed to making our website accessible to all users, including
                            those with disabilities or added needs. This reflects our commitment
                            to inclusion and emotional safety.
                        </p>

                        <h2 style={{ marginTop: '3rem' }}>Standards</h2>
                        <p>
                            We aim to meet WCAG 2.1 AA standards, ensuring that headings, contrast,
                            and navigation are accessible to everyone.
                        </p>

                        <h2 style={{ marginTop: '3rem' }}>Feedback</h2>
                        <p>
                            If you encounter any accessibility issues, please contact us so we can
                            make the necessary improvements.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
