import React from 'react';
import styles from './Home.module.css';
import profileImage from '../../assets/shyam.jpg'
// Remove this line: import {Image} from "lucide-react";

const Home = () => {
    return (
        <section className={styles.home}>
            <div className={styles.content}>
                <h1 className={styles.title}>Welcome to My Portfolio</h1>
                <p className={styles.subtitle}>I'm a web developer passionate about creating amazing digital experiences</p>
                <a href="#projects" className={styles.cta}>View My Work</a>
            </div>
            <div className={styles.imageContainer}>
                <img
                    src={profileImage}
                    alt="Shyam"
                    width={300}
                    height={300}
                    className={styles.profileImage}
                />
            </div>
        </section>
    );
};

export default Home;