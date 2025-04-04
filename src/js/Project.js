import React from 'react';
import '../css/Hover.css';
import '../css/Project.css';
import github_image from '../img/github.png';
import images from './Images';

const Project = ({ project }) => {
  // Extract technology tags from description (this is a simple implementation)
  const getTags = (description) => {
    const techTerms = [
      'React', 'JavaScript', 'Python', 'C#', 'Unity', 'Java', 'GAN', 
      'AI', 'ML', 'Django', 'WordPress', 'C', 'LLM', 'API'
    ];
    
    const tags = [];
    techTerms.forEach(term => {
      if (description.includes(term)) {
        tags.push(term);
      }
    });
    
    // Limit to 3 tags
    return tags.slice(0, 3);
  };

  const tags = getTags(project.description);

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={images[project.image] ? images[project.image] : "fallback.png"} alt={project.name} />
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.name}</h3>
        
        <p className="project-description">{project.description}</p>
        
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        
        <div className="project-links">
          {project.link && (
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
          
          {project.githubLink && (
            <a href={project.githubLink} className="project-link github" target="_blank" rel="noopener noreferrer">
              <img src={github_image} alt="GitHub" className="github-icon" />
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
