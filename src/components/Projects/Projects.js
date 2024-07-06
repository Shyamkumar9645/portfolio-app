import React from 'react';
import styles from './Projects.module.css';

const projectsData = [
    { id: 1, title: 'Weather Forecast', description: 'Developed a web application that displays real-time weather information like temperature, description, and user location (street and country) leveraging the OpenWeatherMap API and user’s geographical coordinates.' },
    { id: 2, title: 'Portfolio Application', description: 'Developed a dynamic and interactive portfolio website to showcase my skills and experience in web development. Utilizes ReactJS libraries and components to implement a user-friendly interface with smooth navigation and animations' },
    { id: 3, title: 'Inventory Management API', description: 'Developed a RESTful API using Spring Boot (Java) to manage inventory, enabling functionalities like creating, reading, updating, and deleting (CRUD) data, ensuring secure access.\n' },
];

const Projects = () => {
    return (
        <section className={styles.projects}>
            <h2 className={styles.title}>My Projects</h2>
            <div className={styles.projectGrid}>
                {projectsData.map((project) => (
                    <div key={project.id} className={styles.projectCard}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={`#project-${project.id}`} className={styles.projectLink}>Learn More</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;