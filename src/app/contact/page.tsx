import styles from '../Home.module.css';

export default function Contact() {
    return (
        <div className={styles.home}>
            {/* Hero-like Intro */}
            <section className={styles.hero} style={{ minHeight: '40vh', padding: '10rem 0 5rem' }}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className="text-calm">Contact Froggy’s Voice Box</h1>
                        <p style={{ fontSize: '1.4rem' }}>
                            We welcome enquiries from families, professionals, and the community.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Context */}
            <section className={`${styles.introSection} ${styles.voiceBoxSection}`}>
                <div className="container">
                    <div className={styles.sectionContent}>
                        <p style={{ fontSize: '1.2rem', opacity: 0.8, textAlign: 'center' }}>
                            If you’d like to learn more about our work, discuss partnership
                            opportunities, or enquire about training, please get in touch.
                        </p>

                        <form style={{
                            display: 'grid',
                            gap: '2rem',
                            background: 'var(--white)',
                            padding: '3rem',
                            borderRadius: 'var(--border-radius)',
                            boxShadow: 'var(--shadow-md)',
                            border: '1px solid rgba(0,0,0,0.03)',
                            marginTop: '4rem',
                            maxWidth: '800px',
                            margin: '4rem auto 0'
                        }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
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
                            <button type="submit" className={styles.btnHero} style={{ border: 'none', cursor: 'pointer', textAlign: 'center', justifyContent: 'center' }}>
                                Send Secure Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Direct Contact Info */}
            <section className={styles.supportSection}>
                <div className="container">
                    <div className={styles.supportContent}>
                        <h2>Professional & Media Enquiries</h2>
                        <p>
                            For enquiries from schools, safeguarding leads, social care, police, or journalists,
                            please use the form or email directly:
                        </p>
                        <p style={{ fontSize: '1.4rem', color: 'var(--calm-blue)', fontWeight: '600' }}>
                            client@haxotech.com
                        </p>
                        <div style={{ marginTop: '3rem', fontSize: '1rem', opacity: 0.7 }}>
                            <strong>Froggy’s Voice Box CIC</strong><br />
                            Community Interest Company Registered in the UK
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
