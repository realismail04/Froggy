export default function Support() {
    return (
        <div className="container" style={{ padding: '4rem 2rem' }}>
            <h1 className="text-calm">Support Us</h1>
            <div style={{ maxWidth: '800px', fontSize: '1.1rem' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                    Froggy’s Law CIC relies on the support of our community to continue advocating
                    for better safeguarding standards.
                </p>

                <div id="donate" style={{
                    background: 'white',
                    padding: '3rem',
                    borderRadius: '8px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                    marginTop: '2rem'
                }}>
                    <h2 style={{ color: 'var(--gold-accent)' }}>Make a Donation</h2>
                    <p style={{ marginBottom: '2rem' }}>
                        Your contribution helps us provide resources and campaign for legislative change.
                    </p>
                    <button className="btn-gold" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>
                        Donate via Crowdfunder
                    </button>
                </div>

                <h2 style={{ color: 'var(--safe-green)', marginTop: '3rem' }}>Other Ways to Help</h2>
                <ul style={{ paddingLeft: '1.5rem' }}>
                    <li style={{ marginBottom: '1rem' }}>Volunteer your professional skills.</li>
                    <li style={{ marginBottom: '1rem' }}>Share our resources with your local community.</li>
                    <li style={{ marginBottom: '1rem' }}>Follow us on social media for updates.</li>
                </ul>
            </div>
        </div>
    );
}
