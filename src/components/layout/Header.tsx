import Link from 'next/link';
import DonationButton from '../ui/DonationButton';
import styles from './Header.module.css';

const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Reform', href: '/reform' },
    { name: 'Resources', href: '/resources' },
    { name: 'Training', href: '/training' },
    { name: 'Impact', href: '/projects' },
    { name: 'Contact', href: '/contact' },
];

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.container} container`}>
                <div className={styles.logo}>
                    <Link href="/">
                        <span className={styles.logoText}>Froggy's Voice Box <span className={styles.cic}>CIC</span></span>
                    </Link>
                </div>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        ))}
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
