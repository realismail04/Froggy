export default function Privacy() {
    return (
        <div className="container animate-fade" style={{ padding: '8rem 2rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 className="text-calm animate-slide-up">Privacy Policy</h1>
                <p className="animate-slide-up" style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--safe-green)', marginBottom: '2rem' }}>
                    How We Manage Personal Information
                </p>

                <div className="animate-slide-up" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '3rem' }}>
                        Our privacy policy explains how we collect, store, and use personal data in
                        line with UK GDPR and data protection laws. We are committed to transparency
                        and responsible data handling.
                    </p>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '1.5rem' }}>Information Collection</h2>
                        <p>We collect minimal information necessary for our services, such as names and email addresses provided via our contact form or donation links.</p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '1.5rem' }}>Data Storage</h2>
                        <p>Your information is stored securely and is only accessible to authorised personnel within Froggy's Law CIC.</p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '1.5rem' }}>Your Rights</h2>
                        <p>Under UK GDPR, you have the right to access, rectify, or erase your personal data. Please contact us if you have any concerns regarding your privacy.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
