import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ProjectsGallery from './pages/ProjectsGallery'; // Import the new page
import AboutHome from './components/AboutHome'; // Import the new component
import About from './pages/About'; // Import the new page
import './index.css';



// Create a wrapper component to conditionally render Header
const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      {isHomePage && <Header />}
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <AboutHome />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </>
          } />
          <Route path="/projects" element={<ProjectsGallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid #333' }}>
        <p>&copy; {new Date().getFullYear()} Ruth Ewonubari Deemua. All rights reserved.</p>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
