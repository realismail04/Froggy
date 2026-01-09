export default function Resources() {
    return (
        <div className="container animate-fade" style={{ padding: '8rem 2rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 className="text-calm animate-slide-up">Safe, Clear Guidance for Survivors, Families, and Professionals</h1>
                <p className="animate-slide-up" style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--safe-green)', marginBottom: '2rem' }}>
                    Information designed to support, not overwhelm.
                </p>

                <div className="animate-slide-up" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '4rem' }}>
                        Froggy’s Law CIC provides survivor-informed, emotionally safe resources for
                        anyone affected by child abuse — whether you’re a survivor, a parent, or a
                        professional working with children. Every resource is written with clarity,
                        compassion, and lived-experience insight.
                    </p>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '1.5rem' }}>1. For Survivors</h2>
                        <p style={{ marginBottom: '1.5rem' }}><strong>Safe Information, Not Overload</strong> - Our survivor-focused resources are designed to offer clarity without pressure. They explain what disclosure is and what support options exist in simple, non-clinical language.</p>
                        <div style={{ background: 'var(--off-white)', padding: '2rem', borderRadius: 'var(--border-radius)' }}>
                            <h4 style={{ marginBottom: '1rem' }}>What You’ll Find:</h4>
                            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', listStyle: 'none', padding: 0 }}>
                                <li>• Understanding disclosure</li>
                                <li>• What emotional safety means</li>
                                <li>• How to recognise safe adults</li>
                                <li>• What happens when someone speaks out</li>
                                <li>• Survivor-led reflections</li>
                                <li>• Signposting to external support</li>
                            </ul>
                        </div>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '1.5rem' }}>2. For Parents & Carers</h2>
                        <p style={{ marginBottom: '1.5rem' }}><strong>Supporting a Child Safely</strong> - Parents and carers often want to help but don’t know where to start. Our guidance explains how to respond calmly and how to create an environment where a child feels safe to speak.</p>
                        <div style={{ background: 'var(--safe-green-soft)', padding: '2rem', borderRadius: 'var(--border-radius)' }}>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li>• How to respond if a child hints or discloses</li>
                                <li>• What not to say</li>
                                <li>• How to stay grounded and supportive</li>
                                <li>• Understanding the safeguarding process</li>
                                <li>• How to advocate for your child</li>
                            </ul>
                        </div>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '1.5rem' }}>3. For Professionals</h2>
                        <p style={{ marginBottom: '1.5rem' }}><strong>Clear, Consistent, Survivor-Led Guidance</strong> - Professionals are often the first adults children turn to. Our resources provide simple, standardised guidance aligned with the Froggy’s Law reform model.</p>
                        <div style={{ background: 'var(--calm-blue-soft)', padding: '2rem', borderRadius: 'var(--border-radius)' }}>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li>• The safe first-response protocol</li>
                                <li>• Trauma-informed communication</li>
                                <li>• How to avoid leading questions</li>
                                <li>• When and how to escalate concerns</li>
                                <li>• Working collaboratively across agencies</li>
                            </ul>
                        </div>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '1.5rem' }}>External Support Signposting</h2>
                        <p>A curated list of national and local support services, chosen for emotional safety, accessibility, and survivor-centred practice. No triggering descriptions. Just safe, reliable options.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
