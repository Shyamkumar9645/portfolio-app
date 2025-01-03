import React from 'react';
import styles from './Timeline.module.css';

const timelineData = [
    {
        date: '2021 - Present',
        title: 'Senior Software Developer',
        company: 'SS&C Technologies',
        description: 'Leading Full Stack development for enterprise applications.'
    },
    {
        date: '2021 - 2021',
        title: 'Android Developer',
        company: 'Digital Panda',
        description: 'Assisted in the development of mobile application.'
    },
    {
        date: '2020 - 2020',
        title: 'Android Developer',
        company: 'Chamber of Product',
        description: 'Assisted in the development of mobile application.'
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