import React from 'react';
import '../css/Hover.css';
import '../css/Project.css';
import github_image from '../img/github.png';
import images from './Images';

const Project = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={images[project.image] ? images[project.image] : "fallback.png"} alt={project.name} />
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.name}</h3>
        
        <p className="project-description">{project.description}</p>
        
        {project.keywords && (
          <div className="project-tags">
            {project.keywords.map((keyword, index) => (
              <span key={index} className="project-tag">{keyword}</span>
            ))}
          </div>
        )}
        
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
