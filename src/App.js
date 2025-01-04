import React from 'react';
import Header from './components/Header/Header';
import Landing from './components/LandingPage/Landing'
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Timeline from './components/Timeline/Timeline';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
    return (
    <Router>
        <div className="App">
            <Header />
                    <main>

            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/footer" element={<Footer />} />
            </Routes>
</main>
<Footer />
        </div>
    </Router>
    );
}

export default App;