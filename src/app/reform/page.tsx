export default function Reform() {
    return (
        <div className="container animate-fade" style={{ padding: '8rem 2rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 className="text-calm animate-slide-up">A Clear, Safe, Survivor-Led Pathway for Children to Disclose Abuse</h1>
                <p className="animate-slide-up" style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--safe-green)', marginBottom: '2rem' }}>
                    Fixing the gaps that allow children to fall through the cracks.
                </p>

                <div className="animate-slide-up" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '4rem' }}>
                        Froggy’s Law is a survivor-designed reform model that transforms how children
                        show abuse and how professionals respond. It provides a safe, structured, and
                        consistent pathway that protects children from retraumatization, ensures disclosures
                        are managed correctly, and prevents the systemic failures that have harmed
                        generations of survivors.
                    </p>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '1.5rem' }}>Why Reform Is Needed</h2>
                        <p style={{ marginBottom: '1.5rem' }}>Children rarely show abuse in controlled environments. They speak out to friends, teachers, parents, or people they trust in moments of fear. But these individuals often lack the training or confidence to respond safely.</p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div style={{ background: 'var(--soft-red)', color: 'white', padding: '1.5rem', borderRadius: 'var(--border-radius)' }}>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li>• Missed opportunities</li>
                                    <li>• Inconsistent responses</li>
                                </ul>
                            </div>
                            <div style={{ background: 'var(--soft-red)', color: 'white', padding: '1.5rem', borderRadius: 'var(--border-radius)' }}>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li>• Retraumatization</li>
                                    <li>• Children left unprotected</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '1.5rem' }}>What Froggy’s Law Provides</h2>
                        <ul style={{ display: 'grid', gap: '1.2rem', listStyle: 'none', padding: 0 }}>
                            <li><strong>1. A Safe Disclosure Pathway:</strong> A clear, step-by-step process that guides children and adults through what happens next.</li>
                            <li><strong>2. A Standardised Professional Response:</strong> Every professional follows the same survivor-informed protocol.</li>
                            <li><strong>3. Survivor-Led Insight:</strong> Shaped by lived experience, reflecting the realities of how children actually show.</li>
                            <li><strong>4. Trauma-Informed Practice:</strong> Language and procedure designed to minimise harm.</li>
                            <li><strong>5. Accountability and Clarity:</strong> Clear roles for every adult involved.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '4rem', background: 'var(--off-white)', padding: '3rem', borderRadius: 'var(--border-radius-lg)' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '2rem' }}>How Froggy’s Law Works in Practice</h2>
                        <div style={{ display: 'grid', gap: '2rem' }}>
                            <div><strong>Step 1: Safe First Response</strong> - An adult follows a simple, emotionally safe protocol to avoid leading questions.</div>
                            <div><strong>Step 2: Immediate Safeguarding Pathway</strong> - The disclosure is passed through a structured route quickly.</div>
                            <div><strong>Step 3: Trauma-Informed Support</strong> - Children receive support that prioritises emotional safety and stability.</div>
                            <div><strong>Step 4: Professional Coordination</strong> - Schools, social care, and police follow a unified process.</div>
                            <div><strong>Step 5: Ongoing Protection</strong> - The child’s safety stays central throughout and beyond.</div>
                        </div>
                    </section>

                    <section style={{ textAlign: 'center', background: 'var(--grad-safe)', color: 'white', padding: '4rem', borderRadius: 'var(--border-radius-lg)' }}>
                        <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>The Impact</h2>
                        <p style={{ fontSize: '1.3rem', opacity: 0.9 }}>
                            Fewer missed disclosures. More consistent responses. Reduced retraumatization.
                            Stronger cases. Increased trust. A safer, more accountable system nationwide.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
