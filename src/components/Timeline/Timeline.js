import React from 'react';
import styles from './Timeline.module.css';

const timelineData = [
    {
        date: '2020 - Present',
        title: 'Senior Web Developer',
        company: 'Tech Solutions Inc.',
        description: 'Leading front-end development for enterprise applications.'
    },
    {
        date: '2018 - 2020',
        title: 'Web Developer',
        company: 'Digital Creations Co.',
        description: 'Developed and maintained multiple client websites.'
    },
    {
        date: '2016 - 2018',
        title: 'Junior Developer',
        company: 'StartUp Innovations',
        description: 'Assisted in the development of web and mobile applications.'
    }
];

const Timeline = () => {
    return (
        <section className={styles.timeline}>
            <h2 className={styles.title}>My Journey</h2>
            <div className={styles.timelineContainer}>
                {timelineData.map((item, index) => (
                    <div key={index} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
                        <div className={styles.timelineContent}>
                            <span className={styles.date}>{item.date}</span>
                            <h3 className={styles.itemTitle}>{item.title}</h3>
                            <h4 className={styles.company}>{item.company}</h4>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;