export default function Training() {
    return (
        <div className="container animate-fade" style={{ padding: '8rem 2rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 className="text-calm animate-slide-up">Trauma-Informed, Survivor-Led Training for Professionals</h1>
                <p className="animate-slide-up" style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--safe-green)', marginBottom: '2rem' }}>
                    Practical guidance shaped by lived experience.
                </p>

                <div className="animate-slide-up" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '4rem' }}>
                        Froggy’s Law CIC delivers survivor-informed training for professionals working with
                        children, including schools, social care, police, youth services, and community
                        organisations. All training is grounded in lived experience and trauma-informed practice.
                    </p>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '2rem' }}>Training Overview</h2>
                        <div style={{ display: 'grid', gap: '2rem' }}>
                            <div style={{ background: 'var(--white)', padding: '2.5rem', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0,0,0,0.03)' }}>
                                <h3 style={{ color: 'var(--safe-green)', marginBottom: '1rem' }}>1. Understanding Child Disclosure</h3>
                                <p>A deep dive into how children show abuse in real life. Learn why children show the way they do, common barriers, and how to recognise indirect disclosures.</p>
                            </div>
                            <div style={{ background: 'var(--white)', padding: '2.5rem', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0,0,0,0.03)' }}>
                                <h3 style={{ color: 'var(--safe-green)', marginBottom: '1rem' }}>2. Safe First-Response Protocol</h3>
                                <p>A simple framework guiding adults through the first moments of a disclosure. Learn what to say, what not to say, and how to avoid leading questions.</p>
                            </div>
                            <div style={{ background: 'var(--white)', padding: '2.5rem', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0,0,0,0.03)' }}>
                                <h3 style={{ color: 'var(--safe-green)', marginBottom: '1rem' }}>3. Trauma-Informed Communication</h3>
                                <p>How to communicate in ways that reduce harm and build trust. Covers tone, body language, avoiding retraumatization, and maintaining compassionate boundaries.</p>
                            </div>
                        </div>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '1.5rem' }}>Outcomes & Benefits</h2>
                        <ul style={{ display: 'grid', gap: '1rem', listStyle: 'none', padding: 0 }}>
                            <li>• Feel more confident responding to disclosures</li>
                            <li>• Understand trauma-informed communication</li>
                            <li>• Know how to avoid common safeguarding mistakes</li>
                            <li>• Have a clear, survivor-led framework to follow</li>
                            <li>• Strengthen your organisation’s safeguarding culture</li>
                        </ul>
                    </section>

                    <section style={{ textAlign: 'center', background: 'var(--grad-calm)', color: 'white', padding: '4rem', borderRadius: 'var(--border-radius-lg)' }}>
                        <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Enquire About Training</h2>
                        <p style={{ marginBottom: '2.5rem', opacity: 0.9 }}>To request a session or learn more about our workshop formats, please get in touch.</p>
                        <a href="/contact" className="btn-gold" style={{ padding: '15px 40px', textDecoration: 'none', borderRadius: 'var(--border-radius)', fontWeight: '700' }}>Contact Us</a>
                    </section>
                </div>
            </div>
        </div>
    );
}
