export default function Accessibility() {
    return (
        <div className="container animate-fade" style={{ padding: '8rem 2rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 className="text-calm animate-slide-up">Accessibility Statement</h1>
                <p className="animate-slide-up" style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--safe-green)', marginBottom: '2rem' }}>
                    A Website for Everyone
                </p>

                <div className="animate-slide-up" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '3rem' }}>
                        We are committed to making our website accessible to all users, including
                        those with disabilities or added needs. This reflects our commitment
                        to inclusion and emotional safety.
                    </p>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '1.5rem' }}>Standards</h2>
                        <p>We aim to meet WCAG 2.1 AA standards, ensuring that headings, contrast, and navigation are accessible to everyone.</p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '1.5rem' }}>Feedback</h2>
                        <p>If you encounter any accessibility issues, please contact us so we can make the necessary improvements.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
