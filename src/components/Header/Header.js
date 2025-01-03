import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';
import {Link} from 'react-router-dom';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>Amgoth Shyam Kumar</div>
                <nav className={styles.desktopNav}>
                    <a href="#home" className={styles.navLink}>Home</a>
                    <a href="#about" className={styles.navLink}>About</a>
                    <a href="#projects" className={styles.navLink}>Projects</a>
                    <a href="#contact" className={styles.navLink}>Contact</a>


                </nav>
                <div className={styles.mobileMenuButton}>
                    <button onClick={toggleMenu} className={styles.menuButton}>
                        {isOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className={styles.mobileNav}>
                <nav>
                        <a href="#home" className={styles.mobileNavLink}>Home</a>
                        <a href="#about" className={styles.mobileNavLink}>About</a>
                        <a href="#projects" className={styles.mobileNavLink}>Projects</a>
                        <a href="#contact" className={styles.mobileNavLink}>Contact</a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;