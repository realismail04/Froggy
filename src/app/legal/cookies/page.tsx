export default function Cookies() {
    return (
        <div className="container animate-fade" style={{ padding: '8rem 2rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 className="text-calm animate-slide-up">Cookie Policy</h1>
                <p className="animate-slide-up" style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--safe-green)', marginBottom: '2rem' }}>
                    Clear Information About Website Cookies
                </p>

                <div className="animate-slide-up" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '3rem' }}>
                        This policy explains how cookies are used on the Froggy’s Law website.
                        We use cookies to improve your experience and understand how our site is used.
                    </p>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '1.5rem' }}>Essential Cookies</h2>
                        <p>These are necessary for the website to function correctly, such as maintaining security and accessibility features.</p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '1.5rem' }}>Analytics Cookies</h2>
                        <p>We use basic analytics to understand which pages are most helpful to our visitors, helping us provide better resources.</p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '1.5rem' }}>Management</h2>
                        <p>You can manage or disable cookies through your browser settings at any time.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
