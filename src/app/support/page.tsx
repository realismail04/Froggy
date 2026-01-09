export default function Support() {
    return (
        <div className="container animate-fade" style={{ padding: '8rem 2rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 className="text-calm animate-slide-up">Help Us Build Safer Pathways for Children</h1>
                <p className="animate-slide-up" style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--safe-green)', marginBottom: '2rem' }}>
                    Your support strengthens survivor-led reform and protects the next generation.
                </p>

                <div className="animate-slide-up" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '4rem' }}>
                        Froggy’s Law CIC is a survivor-led organisation committed to transforming how
                        children show abuse and how professionals respond. As a Community Interest Company,
                        we rely on grants, partnerships, and public support to deliver our projects.
                    </p>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '1.5rem' }}>Why Your Support Matters</h2>
                        <ul style={{ display: 'grid', gap: '1.5rem', listStyle: 'none', padding: 0 }}>
                            <li><strong>1. Reform That Saves Lives:</strong> Providing a clear pathway that prevents missed disclosures.</li>
                            <li><strong>2. Community Projects with Real Impact:</strong> Initiatives like the safeguarding van reaching families.</li>
                            <li><strong>3. Survivor-Led Insight:</strong> Ensuring lived experience shapes safeguarding practice across the UK.</li>
                        </ul>
                    </section>

                    <div id="donate" style={{
                        background: 'var(--white)',
                        padding: '4rem',
                        borderRadius: 'var(--border-radius-lg)',
                        boxShadow: 'var(--shadow-premium)',
                        border: '2px solid var(--gold-accent)',
                        textAlign: 'center',
                        marginBottom: '4rem'
                    }}>
                        <h2 style={{ color: 'var(--calm-blue)', fontSize: '2.5rem' }}>Donations & Crowdfunding</h2>
                        <p style={{ marginBottom: '2.5rem', opacity: 0.8 }}>
                            Public support helps us sustain our work and grow our impact. Every contribution supports survivor-led safeguarding initiatives.
                        </p>
                        <button className="btn-gold" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                            Donate via Crowdfunder
                        </button>
                    </div>

                    <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
                        <div style={{ background: 'var(--calm-blue-soft)', padding: '2.5rem', borderRadius: 'var(--border-radius)' }}>
                            <h3 style={{ color: 'var(--calm-blue)' }}>Grant Funding & Partnerships</h3>
                            <p style={{ fontSize: '1rem' }}>We work with funders and trusts who share our commitment. Partnerships help us expand our community projects and deliver training.</p>
                        </div>
                        <div style={{ background: 'var(--safe-green-soft)', padding: '2.5rem', borderRadius: 'var(--border-radius)' }}>
                            <h3 style={{ color: 'var(--safe-green-dark)' }}>Volunteering & Skills</h3>
                            <p style={{ fontSize: '1rem' }}>We welcome support from individuals with skills in design, outreach, safeguarding, and community engagement.</p>
                        </div>
                    </section>

                    <section style={{ textAlign: 'center', opacity: 0.8 }}>
                        <p>If you’re interested in partnering or exploring funding opportunities, <a href="/contact" style={{ color: 'var(--calm-blue)', fontWeight: '600' }}>please get in touch</a>.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
