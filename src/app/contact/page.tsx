import styles from '../Home.module.css';

export default function Contact() {
    return (
        <div className={styles.home}>
            {/* Premium Hero - Minimal */}
            <section className={styles.hero} style={{ minHeight: '50vh', background: 'var(--calm-blue-dark)' }}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <h1>Get in Touch</h1>
                    <p>
                        We welcome enquiries from families, professionals, and the media.
                        Our team is here to provide guidance and partnership.
                    </p>
                </div>
            </section>

            {/* Main Form Split */}
            <section className={`${styles.section} ${styles.voiceBoxSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionContent}>
                        <div className={styles.textContent}>
                            <h2>Send a Secure Message</h2>
                            <p>
                                Whether you are looking for training, interested in the Reform,
                                or need signposting to safe services, please use the form below.
                            </p>
                            <div className={styles.traumaAccent}>
                                All communications are handled with the highest level of
                                confidentiality and trauma-informed care.
                            </div>
                            <p style={{ marginTop: '2rem' }}>
                                <strong>Media & Professional Enquiries:</strong><br />
                                For press or multi-agency collaboration, please specify your
                                organisation so we can route your message to the correct lead.
                            </p>
                        </div>

                        <div className={styles.formContainer} style={{ background: 'white', padding: '3rem', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-premium)' }}>
                            <form style={{ display: 'grid', gap: '2rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--neutral-500)' }}>Full Name</label>
                                        <input type="text" placeholder="e.g. Jane Smith" style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid var(--neutral-300)', background: 'var(--neutral-100)' }} required />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--neutral-500)' }}>Email Address</label>
                                        <input type="email" placeholder="jane@example.com" style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid var(--neutral-300)', background: 'var(--neutral-100)' }} required />
                                    </div>
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--neutral-500)' }}>Subject / Enquire Type</label>
                                    <select style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid var(--neutral-300)', background: 'var(--neutral-100)' }}>
                                        <option>General Guidance</option>
                                        <option>Training Request</option>
                                        <option>Media Enquiry</option>
                                        <option>Reform Partnership</option>
                                        <option>Support & Donations</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--neutral-500)' }}>Message</label>
                                    <textarea rows={6} placeholder="How can we help?" style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid var(--neutral-300)', background: 'var(--neutral-100)', resize: 'none' }} required></textarea>
                                </div>
                                <button type="submit" className={styles.btnPrimary} style={{ border: 'none', cursor: 'pointer', textAlign: 'center' }}>
                                    Submit Enquire
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Direct Info Section */}
            <section className={styles.supportSection}>
                <div className={styles.container}>
                    <div className={styles.supportContent} style={{ textAlign: 'center' }}>
                        <h2>Direct Contact</h2>
                        <p>For urgent organisational matters or sensitive professional collaboration:</p>
                        <p style={{ fontSize: '2rem', color: 'var(--calm-blue-dark)', fontWeight: '800', margin: '2rem 0' }}>
                            client@haxotech.com
                        </p>
                        <div style={{ opacity: 0.6, fontSize: '0.9rem' }}>
                            Froggy’s Voice Box CIC<br />
                            A Registered Community Interest Company in England & Wales
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
