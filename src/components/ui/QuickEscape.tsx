"use client";

import React from 'react';
import styles from './QuickEscape.module.css';

const QuickEscape = () => {
    const handleEscape = () => {
        window.location.replace('https://www.bbc.co.uk');
    };

    return (
        <button
            onClick={handleEscape}
            className={styles.escapeContainer}
            aria-label="Quick Escape: Instantly leave this site"
        >
            <div className={styles.iconBox}>
                <span className={styles.closeIcon}>×</span>
            </div>
            <span className={styles.expandText}>Quick Exit</span>
        </button>
    );
};

export default QuickEscape;
