import React from 'react';
import Project from './Project';
import '../css/Category.css';

const Category = ({ name, projects }) => {
  return (
    <section id={name.toLowerCase().replace(/\s+/g, '-')} className="category-section">
      <div className="category-header">
        <h2 className="category-title">{name}</h2>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Category;
