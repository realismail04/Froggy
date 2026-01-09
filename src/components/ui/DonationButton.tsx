import Link from 'next/link';
import styles from './DonationButton.module.css';

const DonationButton = () => {
    return (
        <Link href="/support#donate" className={styles.donateBtn} aria-label="Donate to Froggy's Law">
            Donate
        </Link>
    );
};

export default DonationButton;
