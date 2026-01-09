export default function Contact() {
    return (
        <div className="container animate-fade" style={{ padding: '8rem 2rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 className="text-calm animate-slide-up">Contact Froggy’s Law CIC</h1>
                <div className="animate-slide-up">
                    <p style={{ marginBottom: '3rem', fontSize: '1.2rem', lineHeight: '1.7', opacity: 0.8 }}>
                        We welcome enquiries from professionals, partners, funders, and community
                        members. If you’d like to learn more about Froggy’s Law, discuss partnership
                        opportunities, or enquire about training, we’d be happy to hear from you.
                    </p>

                    <form style={{
                        display: 'grid',
                        gap: '2rem',
                        background: 'var(--white)',
                        padding: '4rem',
                        borderRadius: 'var(--border-radius-lg)',
                        boxShadow: 'var(--shadow-premium)',
                        border: '1px solid rgba(0,0,0,0.03)'
                    }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.8rem', fontWeight: '600', color: 'var(--calm-blue)' }}>Your Name</label>
                                <input type="text" id="name" placeholder="John Doe" style={{ width: '100%', padding: '15px', borderRadius: 'var(--border-radius)', border: '1px solid #e0e0e0', outline: 'none' }} required />
                            </div>
                            <div>
                                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.8rem', fontWeight: '600', color: 'var(--calm-blue)' }}>Email Address</label>
                                <input type="email" id="email" placeholder="john@example.com" style={{ width: '100%', padding: '15px', borderRadius: 'var(--border-radius)', border: '1px solid #e0e0e0', outline: 'none' }} required />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="organisation" style={{ display: 'block', marginBottom: '0.8rem', fontWeight: '600', color: 'var(--calm-blue)' }}>Organisation (Optional)</label>
                            <input type="text" id="organisation" placeholder="School/Agency Name" style={{ width: '100%', padding: '15px', borderRadius: 'var(--border-radius)', border: '1px solid #e0e0e0', outline: 'none' }} />
                        </div>
                        <div>
                            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.8rem', fontWeight: '600', color: 'var(--calm-blue)' }}>How can we help?</label>
                            <textarea id="message" rows={6} placeholder="Your message here..." style={{ width: '100%', padding: '15px', borderRadius: 'var(--border-radius)', border: '1px solid #e0e0e0', outline: 'none', resize: 'vertical' }} required></textarea>
                        </div>
                        <button type="submit" className="bg-safe" style={{ padding: '15px', fontSize: '1.1rem', borderRadius: 'var(--border-radius)', fontWeight: '700', letterSpacing: '0.02em', boxShadow: 'var(--shadow-sm)' }}>
                            Send Secure Message
                        </button>
                    </form>

                    <div style={{ marginTop: '4rem', textAlign: 'center', opacity: 0.8 }}>
                        <h3 style={{ color: 'var(--calm-blue)', marginBottom: '1rem' }}>Professional & Media Enquiries</h3>
                        <p style={{ marginBottom: '1.5rem' }}>For enquiries from schools, safeguarding leads, social care, police, or journalists, please use the form above or email directly.</p>
                        <p>Direct contact: <a href="mailto:client@haxotech.com" style={{ color: 'var(--calm-blue)', fontWeight: '600', textDecoration: 'underline' }}>client@haxotech.com</a></p>

                        <div style={{ marginTop: '3rem', fontSize: '0.9rem' }}>
                            <strong>Froggy’s Law CIC</strong><br />
                            Community Interest Company (CIC) Registered in the United Kingdom
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
