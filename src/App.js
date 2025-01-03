import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Timeline from './components/Timeline/Timeline';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Home />
                <About />
                <Skills />
                <Projects />
                <Timeline />
                <Contact />
            </main>
            <Footer />

        </div>
    );
}

export default App;