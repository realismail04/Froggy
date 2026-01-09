import styles from '../../Home.module.css';

export default function Terms() {
    return (
        <div className={styles.home}>
            {/* Premium Hero - Minimal */}
            <section className={styles.hero} style={{ minHeight: '40vh', background: 'var(--neutral-900)' }}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <h1>Terms of Use</h1>
                    <p>Using our website safely and respectfully.</p>
                </div>
            </section>

            {/* Policy Content */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.textContent} style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2>Agreement to Terms</h2>
                        <p>
                            By accessing the Froggy’s Voice Box CIC website, you agree to be bound
                            by these terms of use. These terms are designed to protect our
                            community, our resources, and our survivor-led mission.
                        </p>

                        <h3>Acceptable Use</h3>
                        <p>
                            Users are expected to use the resources provided with respect and in
                            line with our safeguarding principles. You must not use this website
                            to harass, abuse, or engage in any conduct that triggers or harms
                            vulnerable individuals.
                        </p>

                        <div className={styles.traumaAccent}>
                            Froggy’s Voice Box CIC reserves the right to restrict access to any
                            individual who violates these values.
                        </div>

                        <h3>Intellectual Property</h3>
                        <p>
                            All resources, text, design, and imagery on this site are the
                            intellectual property of Froggy’s Voice Box CIC unless otherwise
                            stated.
                        </p>
                        <p>
                            You may use our guidance for personal or educational purposes, but
                            permission must be sought for commercial redistribution or structural
                            modification. Please contact us for licensing enquiries.
                        </p>

                        <h3>Governing Law</h3>
                        <p>
                            These terms are governed by the laws of England and Wales.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
