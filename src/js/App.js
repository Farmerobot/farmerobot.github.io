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
      <section id="contact" className="contact-section">
        <div className="contact-content">
          <h2 className="contact-heading">Get in Touch</h2>
          <p className="contact-subtext">Feel free to reach out via email or phone.</p>
          <div className="contact-details">
            <a href="mailto:mateusz.stawicki@3lance.pl" className="contact-item">
              <span className="contact-label">Email</span>
              <span className="contact-value">mateusz.stawicki@3lance.pl</span>
            </a>
            <a href="tel:+48605561680" className="contact-item">
              <span className="contact-label">Phone</span>
              <span className="contact-value">+48 605 561 680</span>
            </a>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Mateusz Stawicki. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/Farmerobot" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/mateuszstawicki/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/documents/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
