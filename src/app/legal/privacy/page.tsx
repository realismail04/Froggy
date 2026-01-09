import styles from '../../Home.module.css';

export default function Privacy() {
    return (
        <div className={styles.home}>
            {/* Premium Hero - Minimal */}
            <section className={styles.hero} style={{ minHeight: '40vh', background: 'var(--neutral-900)' }}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <h1>Privacy Policy</h1>
                    <p>How we manage and protect personal information.</p>
                </div>
            </section>

            {/* Policy Content */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.textContent} style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2>Introduction</h2>
                        <p>
                            Froggy’s Voice Box CIC is committed to protecting the privacy and
                            security of your personal information. This privacy policy describes
                            how we collect and use personal data about you during and after your
                            working relationship with us, in accordance with the UK General Data
                            Protection Regulation (UK GDPR).
                        </p>

                        <h3>Information Collection</h3>
                        <p>
                            We collect minimal information necessary for our services, such as
                            names and email addresses provided via our contact form or donation
                            links. We do not use tracking cookies for marketing purposes.
                        </p>

                        <h3>Data Storage & Security</h3>
                        <p>
                            Your information is stored securely on encrypted servers and is only
                            accessible to authorised personnel within Froggy’s Voice Box CIC who
                            require access to perform their duties.
                        </p>

                        <div className={styles.traumaAccent}>
                            We never sell or share your personal data with third parties for
                            marketing purposes.
                        </div>

                        <h3>Your Rights</h3>
                        <p>
                            Under UK GDPR, you have the right to access, rectify, or erase your
                            personal data. You also have the right to restrict or object to the
                            processing of your data.
                        </p>
                        <p>
                            Please contact us at <strong>client@haxotech.com</strong> if you have
                            any concerns regarding your privacy or wish to exercise your rights.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
