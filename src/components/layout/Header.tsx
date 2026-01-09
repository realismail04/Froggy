import Link from 'next/link';
import DonationButton from '../ui/DonationButton';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.container} container`}>
                <div className={styles.logo}>
                    <Link href="/">
                        <span className={styles.logoText}>Froggy's Law <span className={styles.cic}>CIC</span></span>
                    </Link>
                </div>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/reform">The Reform</Link></li>
                        <li><Link href="/resources">Resources</Link></li>
                        <li><Link href="/training">Training</Link></li>
                        <li><Link href="/impact">Impact</Link></li>
                        <li><Link href="/support">Support Us</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <div className={styles.actions}>
                    <DonationButton />
                </div>
            </div>
        </header>
    );
};

export default Header;
