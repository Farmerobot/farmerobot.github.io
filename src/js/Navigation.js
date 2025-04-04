import React, { useState, useEffect } from 'react';
import '../css/Navigation.css';
import projectsJson from '../projects.json';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll event to change navigation style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get all category names from projects.json
  const categories = Object.keys(projectsJson);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for nav height
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          MS
        </div>
        
        <div className={`nav-menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {categories.map((category, index) => (
            <li key={index}>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection(category.toLowerCase().replace(/\s+/g, '-'))}
              >
                {category}
              </button>
            </li>
          ))}
          <li>
            <a href="/documents/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
          </li>
          <li>
            <a href="mailto:mateusz.stawicki@3lance.pl" className="nav-cta">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
