import styles from '../../Home.module.css';

export default function Cookies() {
    return (
        <div className={styles.home}>
            {/* Hero-like Intro */}
            <section className={styles.hero} style={{ minHeight: '30vh', padding: '10rem 0 5rem' }}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className="text-calm">Cookie Policy</h1>
                        <p style={{ fontSize: '1.4rem' }}>
                            Clear information about website cookies.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className={`${styles.introSection} ${styles.voiceBoxSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <p>
                            This policy explains how cookies are used on the Froggy’s Voice Box website.
                            We use cookies to improve your experience and understand how our site is used.
                        </p>

                        <h2 style={{ marginTop: '3rem' }}>Essential Cookies</h2>
                        <p>
                            These are necessary for the website to function correctly, such as maintaining
                            security and accessibility features.
                        </p>

                        <h2 style={{ marginTop: '3rem' }}>Analytics Cookies</h2>
                        <p>
                            We use basic analytics to understand which pages are most helpful to our visitors,
                            helping us provide better resources.
                        </p>

                        <h2 style={{ marginTop: '3rem' }}>Management</h2>
                        <p>
                            You can manage or disable cookies through your browser settings at any time.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
