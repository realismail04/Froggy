import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`${styles.container} container`}>
                <div className={styles.info}>
                    <h3 className={styles.logoText}>Froggy's Voice Box <span className={styles.cic}>CIC</span></h3>
                    <p className={styles.mission}>
                        A central, calm hub for safeguarding information, resources, and community connection.
                    </p>
                    <p className={styles.cicNumber}>
                        Community Interest Company: Registered in UK
                    </p>
                </div>

                <div className={styles.links}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/reform">Froggy’s Law</Link></li>
                        <li><Link href="/resources">Resources</Link></li>
                        <li><Link href="/training">Training</Link></li>
                        <li><Link href="/projects">Our Impact</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className={styles.legal}>
                    <h4>Legal & Policies</h4>
                    <ul>
                        <li><Link href="/legal/safeguarding">Safeguarding Policy</Link></li>
                        <li><Link href="/legal/privacy">Privacy Policy</Link></li>
                        <li><Link href="/legal/cookies">Cookie Policy</Link></li>
                        <li><Link href="/legal/accessibility">Accessibility Statement</Link></li>
                        <li><Link href="/legal/terms">Terms of Use</Link></li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className="container">
                    <p>&copy; {currentYear} Froggy's Voice Box CIC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
