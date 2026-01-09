import styles from '../../Home.module.css';

export default function Safeguarding() {
    return (
        <div className={styles.home}>
            {/* Premium Hero - Minimal */}
            <section className={styles.hero} style={{ minHeight: '40vh', background: 'var(--safe-green-dark)' }}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <h1>Safeguarding Policy</h1>
                    <p>Protecting children and vulnerable people.</p>
                </div>
            </section>

            {/* Policy Content */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.textContent} style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2>Policy Statement</h2>
                        <p>
                            Froggy’s Voice Box CIC recognizes that safeguarding is everyone’s
                            responsibility. This policy outlines how we prevent harm, respond to
                            concerns, and ensure the safety of children, survivors, and community
                            members.
                        </p>

                        <h3>Safeguarding Principles</h3>
                        <p>
                            Our work is guided by the principle that every child deserves a safe,
                            structured, and trauma-informed pathway to speak out. We prioritize
                            emotional safety in all our digital and physical spaces.
                        </p>

                        <div className={styles.traumaAccent}>
                            We maintain a zero-tolerance approach to any form of abuse or
                            neglect.
                        </div>

                        <h3>Reporting Procedures</h3>
                        <p>
                            We maintain clear, documented processes for reporting safeguarding
                            concerns. All messages managed by Froggy's Voice Box CIC are handled
                            with professionalism, confidentiality, and care.
                        </p>
                        <p>
                            If you have a concern about a child or vulnerable person, please
                            contact your local authority safeguarding team or call 999 in an
                            emergency.
                        </p>

                        <h3>Information Sharing</h3>
                        <p>
                            We share information responsibly and only when necessary for the
                            safety and protection of individuals involved, in accordance with
                            UK safeguarding laws and data protection standards.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
