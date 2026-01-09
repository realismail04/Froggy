export default function Projects() {
    return (
        <div className="container animate-fade" style={{ padding: '8rem 2rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 className="text-calm animate-slide-up">Real-World Action Driven by Lived Experience</h1>
                <p className="animate-slide-up" style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--safe-green)', marginBottom: '2rem' }}>
                    Building safer communities through practical safeguarding initiatives.
                </p>

                <div className="animate-slide-up" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '4rem' }}>
                        Froggy’s Law CIC is more than a reform model — it is an active, community-driven
                        movement. Our projects focus on improving safeguarding practice, supporting
                        survivors, and creating safer environments for children to speak out.
                    </p>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '1.5rem' }}>1. Safeguarding Van Project</h2>
                        <p style={{ fontSize: '1.3rem', fontWeight: '600', color: 'var(--safe-green-dark)', marginBottom: '1rem' }}>A Mobile Safe-Space for Children and Families</p>
                        <p style={{ marginBottom: '1.5rem' }}>The safeguarding van is a community-based initiative designed to bring support directly to children, families, and professionals. It provides a calm, accessible environment where safeguarding conversations can take place safely.</p>
                        <div style={{ background: 'var(--off-white)', padding: '2.5rem', borderRadius: 'var(--border-radius)' }}>
                            <h4 style={{ marginBottom: '1rem' }}>What the Van Will Offer:</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem' }}>
                                <li>• A mobile safe-space for children and families</li>
                                <li>• Outreach to schools and public events</li>
                                <li>• On-the-ground safeguarding awareness</li>
                                <li>• Access to survivor-informed resources</li>
                            </ul>
                        </div>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '1.5rem' }}>2. Community Engagement</h2>
                        <p>Froggy’s Law CIC regularly engages with communities to raise awareness about child disclosure, emotional safety, and safeguarding reform through talks, awareness campaigns, and survivor-led storytelling.</p>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '1.5rem' }}>3. Professional Collaboration</h2>
                        <p>We collaborate with schools, services, and agencies to strengthen safeguarding practice and introduce survivor-led insight into their work, helping embed trauma-informed responses across the system.</p>
                    </section>

                    <section style={{ background: 'var(--white)', padding: '4rem', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-md)', border: '1px solid rgba(0,0,0,0.03)' }}>
                        <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1.5rem' }}>Impact & Outcomes</h2>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li>• Increased awareness of child disclosure challenges</li>
                            <li>• Stronger safeguarding responses in schools</li>
                            <li>• More emotionally safe environments for children</li>
                            <li>• A growing movement for national change</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
