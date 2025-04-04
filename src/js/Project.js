import React from 'react';
import '../css/Hover.css';
import '../css/Project.css';
import github_image from '../img/github.png';
import images from './Images';

const Project = ({ project, categoryName }) => {
  // Determine if we have both link types or just one
  const hasBothLinks = project.link && project.githubLink;
  
  // Create a category-specific class name for alignment
  const categoryClass = categoryName ? `project-${categoryName.toLowerCase().replace(/\s+/g, '-')}` : '';
  
  return (
    <div className={`project-card ${categoryClass}`}>
      <div className="project-image">
        <img src={images[project.image] ? images[project.image] : "fallback.png"} alt={project.name} />
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.name}</h3>
        
        <div className="project-description-container">
          <p className="project-description">{project.description}</p>
          
          {project.keywords && (
            <div className="project-tags">
              {project.keywords.map((keyword, index) => (
                <span key={index} className="project-tag">{keyword}</span>
              ))}
            </div>
          )}
        </div>
        
        <div className={`project-links ${hasBothLinks ? 'dual-links' : 'single-link'}`}>
          {project.link && (
            <a 
              href={project.link} 
              className={`project-link ${hasBothLinks ? 'half-width' : 'full-width'}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Project
            </a>
          )}
          
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              className={`project-link github ${hasBothLinks ? 'half-width' : 'full-width'}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
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
