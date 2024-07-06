import React from 'react';
import styles from './Skills.module.css';

const skillsData = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
];

const Skills = () => {
    return (
        <section className={styles.skills}>
            <h2 className={styles.title}>My Skills</h2>
            <div className={styles.skillsList}>
                {skillsData.map((skill, index) => (
                    <div key={index} className={styles.skillItem}>
                        <div className={styles.skillInfo}>
                            <span className={styles.skillName}>{skill.name}</span>
                            <span className={styles.skillLevel}>{skill.level}%</span>
                        </div>
                        <div className={styles.progressBar}>
                            <div
                                className={styles.progressFill}
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;