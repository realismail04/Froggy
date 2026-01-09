import styles from '../../Home.module.css';

export default function Accessibility() {
    return (
        <div className={styles.home}>
            {/* Premium Hero - Minimal */}
            <section className={styles.hero} style={{ minHeight: '40vh', background: 'var(--neutral-900)' }}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <h1>Accessibility Statement</h1>
                    <p>A website designed for everyone.</p>
                </div>
            </section>

            {/* Policy Content */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.textContent} style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2>Our Commitment</h2>
                        <p>
                            Froggy’s Voice Box CIC is committed to making its website accessible
                            to all users, regardless of their technology or ability. We believe
                            that emotional safety starts with clear, accessible information.
                        </p>

                        <h3>Standards Compliance</h3>
                        <p>
                            We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1
                            Level AA standards. This ensures that our content is perceivable,
                            operable, understandable, and robust for a wide range of people with
                            disabilities.
                        </p>

                        <div className={styles.traumaAccent}>
                            If you find any area of this site difficult to use, please let us
                            know so we can improve it.
                        </div>

                        <h3>Key Features</h3>
                        <p>
                            - High-contrast color palette for readability.<br />
                            - Clear, sans-serif typography (Montserrat & Open Sans).<br />
                            - Keyboard-navigable elements.<br />
                            - Screen reader compatible structure.
                        </p>

                        <h3>Feedback</h3>
                        <p>
                            We welcome your feedback on the accessibility of Froggy’s Voice Box.
                            Please contact us at <strong>client@haxotech.com</strong> if you
                            encounter any barriers.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
