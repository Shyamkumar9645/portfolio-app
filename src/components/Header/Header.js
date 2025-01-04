// Header.js
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false); // Close mobile menu after clicking
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>Amgoth Shyam Kumar</div>
                <nav className={styles.desktopNav}>
                    <button onClick={() => scrollToSection('home')} className={styles.navLink}>Home</button>
                    <button onClick={() => scrollToSection('about')} className={styles.navLink}>About</button>
                    <button onClick={() => scrollToSection('skills')} className={styles.navLink}>Skills</button>
                    <button onClick={() => scrollToSection('projects')} className={styles.navLink}>Projects</button>
                    <button onClick={() => scrollToSection('contact')} className={styles.navLink}>Contact</button>
                </nav>
                {/* Mobile Menu Button */}
                <div className={styles.mobileMenuButton}>
                    <button onClick={toggleMenu} className={styles.menuButton}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className={styles.mobileNav}>
                    <button onClick={() => scrollToSection('home')} className={styles.mobileNavLink}>Home</button>
                    <button onClick={() => scrollToSection('about')} className={styles.mobileNavLink}>About</button>
                    <button onClick={() => scrollToSection('skills')} className={styles.mobileNavLink}>Skills</button>
                    <button onClick={() => scrollToSection('projects')} className={styles.mobileNavLink}>Projects</button>
                    <button onClick={() => scrollToSection('contact')} className={styles.mobileNavLink}>Contact</button>
                </div>
            )}
        </header>
    );
};

export default Header;