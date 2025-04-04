import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Category from './Category';
import '../css/App.css';
import projectsJson from '../projects.json';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <main className="main-content">
        {Object.keys(projectsJson).map((category) => (
          <Category key={category} name={category} projects={projectsJson[category]} />
        ))}
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Mateusz Stawicki. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/Farmerobot" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/documents/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
