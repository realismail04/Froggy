import styles from '../Home.module.css';

export default function About() {
    return (
        <div className="container animate-fade" style={{ padding: '8rem 2rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 className="text-calm animate-slide-up">A Survivor-Led Movement for Safer Childhoods</h1>
                <p className="animate-slide-up" style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--safe-green)', marginBottom: '2rem' }}>
                    Born from lived experience. Built for every child.
                </p>

                <div className="animate-slide-up" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '2rem' }}>
                        Froggy’s Law CIC was created to transform how children show abuse and how
                        professionals respond. Rooted in lived experience and guided by survivor-led insight,
                        the organisation exists to close the dangerous gaps that allow children to fall through
                        the cracks. Our mission is simple: ensure every child is heard, protected, and
                        supported from the moment they speak out.
                    </p>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '1.5rem' }}>Our Story</h2>
                        <p>
                            Froggy’s Law began with one survivor’s journey — a journey marked by silence,
                            missed opportunities, and systems that weren’t designed to protect children when
                            they needed it most. Through years of reflection, advocacy, and community work,
                            this experience evolved into a clear reform model that places children’s safety,
                            dignity, and emotional wellbeing at the centre of disclosure.
                        </p>
                        <p style={{ marginTop: '1rem' }}>
                            Today, Froggy’s Law CIC stands as a movement dedicated to preventing the same
                            failures from happening to another child.
                        </p>
                    </section>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
                        <div style={{ background: 'var(--calm-blue-soft)', padding: '2.5rem', borderRadius: 'var(--border-radius)' }}>
                            <h3 style={{ color: 'var(--calm-blue)', marginBottom: '1rem' }}>Our Mission</h3>
                            <p style={{ fontSize: '1rem' }}>To reform child disclosure practices across the UK by creating safe, structured, and consistent pathways for children to speak out — and ensuring professionals respond with clarity, compassion, and accountability.</p>
                        </div>
                        <div style={{ background: 'var(--safe-green-soft)', padding: '2.5rem', borderRadius: 'var(--border-radius)' }}>
                            <h3 style={{ color: 'var(--safe-green-dark)', marginBottom: '1rem' }}>Our Vision</h3>
                            <p style={{ fontSize: '1rem' }}>A society where every child’s voice leads to safety, not silence. Where survivors shape the systems that failed them. Where safeguarding is proactive, not reactive.</p>
                        </div>
                    </div>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ color: 'var(--calm-blue)', marginBottom: '1.5rem' }}>Our Values</h2>
                        <ul style={{ display: 'grid', gap: '1rem', listStyle: 'none', padding: 0 }}>
                            <li><strong>Survivor-Led:</strong> Lived experience guides every decision.</li>
                            <li><strong>Safety First:</strong> Emotional safety is prioritised in all communication and design.</li>
                            <li><strong>Transparency:</strong> Clear, honest, documented processes.</li>
                            <li><strong>Collaboration:</strong> Working with families, professionals, and communities.</li>
                            <li><strong>Reform-Driven:</strong> Focused on long-term, systemic change.</li>
                        </ul>
                    </section>

                    <div style={{
                        background: 'var(--white)',
                        padding: '4rem',
                        borderRadius: 'var(--border-radius-lg)',
                        boxShadow: 'var(--shadow-md)',
                        border: '1px solid rgba(0,0,0,0.03)'
                    }}>
                        <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1.5rem' }}>Founder Introduction</h2>
                        <p>
                            Froggy’s Law CIC was founded by <strong>Paul Waine</strong>, a survivor, author, and advocate
                            dedicated to transforming safeguarding through truth, clarity, and lived-experience
                            leadership. Paul’s work spans community projects, trauma-informed storytelling,
                            and national reform efforts — all rooted in the belief that children deserve systems
                            that protect them, not fail them.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
