import React, { useState } from 'react';
import Project from './Project';
import '../css/Category.css';

const Category = ({ name, projects }) => {
  const [filter, setFilter] = useState('all');
  
  // Get unique tags from all projects in this category
  const getAllTags = () => {
    const techTerms = [
      'React', 'JavaScript', 'Python', 'C#', 'Unity', 'Java', 'GAN', 
      'AI', 'ML', 'Django', 'WordPress', 'C', 'LLM', 'API'
    ];
    
    const tags = new Set(['all']);
    
    projects.forEach(project => {
      techTerms.forEach(term => {
        if (project.description.includes(term)) {
          tags.add(term);
        }
      });
    });
    
    return Array.from(tags);
  };
  
  const tags = getAllTags();
  
  // Filter projects based on selected tag
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.description.includes(filter));

  return (
    <section id={name.toLowerCase().replace(/\s+/g, '-')} className="category-section">
      <div className="category-header">
        <h2 className="category-title">{name}</h2>
        <div className="category-filters">
          {tags.map((tag, index) => (
            <button 
              key={index} 
              className={`filter-button ${filter === tag ? 'active' : ''}`}
              onClick={() => setFilter(tag)}
            >
              {tag === 'all' ? 'All' : tag}
            </button>
          ))}
        </div>
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Category;
