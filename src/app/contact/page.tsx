export default function Contact() {
    return (
        <div className="container" style={{ padding: '4rem 2rem' }}>
            <h1 className="text-calm">Contact Us</h1>
            <div style={{ maxWidth: '800px', fontSize: '1.1rem' }}>
                <p style={{ marginBottom: '2rem' }}>
                    If you have questions about the reform, need resources, or want to partner with us,
                    please get in touch.
                </p>

                <form style={{
                    display: 'grid',
                    gap: '1.5rem',
                    background: 'white',
                    padding: '2.5rem',
                    borderRadius: '8px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                }}>
                    <div>
                        <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                        <input type="text" id="name" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} required />
                    </div>
                    <div>
                        <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                        <input type="email" id="email" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} required />
                    </div>
                    <div>
                        <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                        <textarea id="message" rows={5} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} required></textarea>
                    </div>
                    <button type="submit" className="bg-safe" style={{ padding: '12px', fontSize: '1.1rem', borderRadius: '4px' }}>
                        Send Message
                    </button>
                </form>

                <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--slate-grey)' }}>
                    Direct email: <a href="mailto:client@haxotech.com" style={{ color: 'var(--calm-blue)' }}>client@haxotech.com</a>
                </p>
            </div>
        </div>
    );
}
