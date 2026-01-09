import styles from '../../Home.module.css';

export default function Cookies() {
    return (
        <div className={styles.home}>
            {/* Premium Hero - Minimal */}
            <section className={styles.hero} style={{ minHeight: '40vh', background: 'var(--neutral-900)' }}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <h1>Cookie Policy</h1>
                    <p>Clear information about website cookies.</p>
                </div>
            </section>

            {/* Policy Content */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.textContent} style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2>How We Use Cookies</h2>
                        <p>
                            This website uses cookies to improve your experience while you
                            navigate through the site. Cookies are small files stored on your
                            device that help us provide a safer and more reliable service.
                        </p>

                        <h3>Essential Cookies</h3>
                        <p>
                            These cookies are essential for the operation of our website. They
                            include, for example, cookies that enable you to log into secure
                            areas or use the "Quick Exit" feature reliably.
                        </p>

                        <div className={styles.traumaAccent}>
                            We do not use advertising or marketing cookies to track your
                            activity across other websites.
                        </div>

                        <h3>Analytics Cookies</h3>
                        <p>
                            We use basic analytics tools to understand how our visitors interact
                            with the site. This helps us identify which resources are the most
                            helpful and where we can improve our guidance. All data is anonymised.
                        </p>

                        <h3>Managing Cookies</h3>
                        <p>
                            You can set your browser to refuse all or some browser cookies, or to
                            alert you when websites set or access cookies. If you disable or
                            refuse cookies, please note that some parts of this website may
                            become inaccessible or not function properly.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
