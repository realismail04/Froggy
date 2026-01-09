import styles from '../../Home.module.css';

export default function Privacy() {
    return (
        <div className={styles.home}>
            {/* Hero-like Intro */}
            <section className={styles.hero} style={{ minHeight: '30vh', padding: '10rem 0 5rem' }}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className="text-calm">Privacy Policy</h1>
                        <p style={{ fontSize: '1.4rem' }}>
                            How we manage and protect personal information.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className={`${styles.introSection} ${styles.voiceBoxSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <p>
                            Our privacy policy explains how we collect, store, and use personal data in
                            line with UK GDPR and data protection laws. We are committed to transparency
                            and responsible data handling.
                        </p>

                        <h2 style={{ marginTop: '3rem' }}>Information Collection</h2>
                        <p>
                            We collect minimal information necessary for our services, such as names and email
                            addresses provided via our contact form or donation links.
                        </p>

                        <h2 style={{ marginTop: '3rem' }}>Data Storage</h2>
                        <p>
                            Your information is stored securely and is only accessible to authorised personnel
                            within Froggy’s Voice Box CIC.
                        </p>

                        <h2 style={{ marginTop: '3rem' }}>Your Rights</h2>
                        <p>
                            Under UK GDPR, you have the right to access, rectify, or erase your personal data.
                            Please contact us if you have any concerns regarding your privacy.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
