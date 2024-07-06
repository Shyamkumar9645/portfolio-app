import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.about}>
            <h2 className={styles.title}>About Me</h2>
            <p className={styles.description}>
                I'm a passionate web developer with experience in creating responsive and user-friendly websites.
                I specialize in React, Node.js, and modern web technologies.
            </p>
            <div className={styles.skills}>
                <h3>My Skills:</h3>
                <ul>
                    <li>React</li>
                    <li>JavaScript (ES6+)</li>
                    <li>HTML5 & CSS3</li>
                    <li>Node.js</li>
                    <li>Git</li>
                </ul>
            </div>
        </section>
    );
};

export default About;