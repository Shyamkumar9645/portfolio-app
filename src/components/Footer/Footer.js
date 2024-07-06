import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2024 Your Name. All rights reserved.</p>
            <div className={styles.social}>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
        </footer>
    );
};

export default Footer;