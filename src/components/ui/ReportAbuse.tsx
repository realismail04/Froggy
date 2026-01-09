import Link from 'next/link';
import styles from './ReportAbuse.module.css';

const ReportAbuse = () => {
    return (
        <div className={styles.reportContainer}>
            <Link
                href="/contact"
                className={styles.reportButton}
                aria-label="Report Abuse"
                title="Send a secure message to report abuse"
            >
                <span className={styles.icon}>⚠️</span>
                <span className={styles.text}>Report Abuse</span>
            </Link>
        </div>
    );
};

export default ReportAbuse;
