import React from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Timeline from '../Timeline/Timeline';
import Contact from '../Contact/Contact';

const Landing = () => {

    return (
        <div>
            <section id="home">
                <Home />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
};

export default Landing


