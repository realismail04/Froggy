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
            className={styles.escapeBtn}
            aria-label="Quick Escape: Instantly leave this site and go to BBC"
            title="Quick Escape"
        >
            Quick Escape
        </button>
    );
};

export default QuickEscape;
