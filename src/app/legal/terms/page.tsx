export default function Terms() {
    return (
        <div className="container animate-fade" style={{ padding: '8rem 2rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 className="text-calm animate-slide-up">Terms of Use</h1>
                <p className="animate-slide-up" style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--safe-green)', marginBottom: '2rem' }}>
                    Using Our Website Safely and Respectfully
                </p>

                <div className="animate-slide-up" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '3rem' }}>
                        This document sets out the terms for using the Froggy’s Law CIC website.
                        By using this site, you agree to these terms, which are designed to
                        protect our community and mission.
                    </p>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '1.5rem' }}>Acceptable Use</h2>
                        <p>Users are expected to use the resources provided with respect and in line with our safeguarding principles.</p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '1.5rem' }}>Intellectual Property</h2>
                        <p>All resources, text, and design are the property of Froggy's Law CIC. Please contact us for permission before redistributing our materials.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
