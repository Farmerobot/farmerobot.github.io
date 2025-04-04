import React, { useEffect, useRef } from 'react';
import Project from './Project';
import '../css/Category.css';

const Category = ({ name, projects }) => {
  const categoryRef = useRef(null);
  
  // Function to equalize heights within this category
  useEffect(() => {
    if (categoryRef.current) {
      // Wait for rendering to complete
      setTimeout(() => {
        equalizeHeights();
      }, 100);
      
      // Also equalize on window resize
      window.addEventListener('resize', equalizeHeights);
      return () => window.removeEventListener('resize', equalizeHeights);
    }
  }, [projects]);
  
  const equalizeHeights = () => {
    if (!categoryRef.current) return;
    
    // Get all description elements in this category
    const descriptions = categoryRef.current.querySelectorAll('.project-description');
    if (descriptions.length <= 1) return; // No need to equalize if only one project
    
    // Reset heights to auto to get natural heights
    descriptions.forEach(desc => {
      desc.style.height = 'auto';
    });
    
    // Find the tallest description
    let maxHeight = 0;
    descriptions.forEach(desc => {
      const height = desc.scrollHeight;
      maxHeight = Math.max(maxHeight, height);
    });
    
    // Set all descriptions to the same height
    descriptions.forEach(desc => {
      desc.style.height = `${maxHeight}px`;
    });
    
    // Similarly equalize the tags container positions
    const tagContainers = categoryRef.current.querySelectorAll('.project-tags');
    tagContainers.forEach(container => {
      container.style.marginTop = '0';
    });
  };
  
  return (
    <section 
      id={name.toLowerCase().replace(/\s+/g, '-')} 
      className="category-section"
      ref={categoryRef}
    >
      <div className="category-header">
        <h2 className="category-title">{name}</h2>
      </div>
      
      <div className="projects-grid">
        <div className="category-projects-row">
          {projects.map((project, index) => (
            <Project key={index} project={project} categoryName={name} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;
