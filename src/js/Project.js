import React from 'react';
import '../css/Hover.css';
import '../css/Project.css';
import github_image from '../img/github.png';
import images from './Images';

// const images = {
//   wolniewicz: require('../img/wolniewicz.png'),
//   pp: require('../img/pp.png'),
//   archerio: require('../img/archerio.png'),
//   rough_mobs_revamped: require('../img/rough_mobs_revamped.png'),
//   better_slimes: require('../img/better_slimes.png'),
//   corpse_complex: require('../img/corpse_complex.png'),
//   coffee_finder: require('../img/coffee_finder.png')
// }

const Project = ({ project }) => {
  return (
    <a className="project hover" href={project.link ? project.link : project.githubLink} target="_blank" rel="noopener noreferrer">
      <div className='project-header'>
        <div className="center image-container">
          <img src={images[project.image] ? images[project.image] : "fallback.png"} alt="project_image" />
        </div>
        <div className="project-info center">
          <h3 className='project-name center'>{project.name}</h3>
          {project.githubLink &&
            (<a className="github-link-container center" target="_blank" rel="noopener noreferrer" href={project.githubLink}>
              <span className='github-link-text'>Github Link</span>
              <img className="github-image" src={github_image} />
            </a>)}
        </div>
      </div>
      <p>{project.description}</p>
    </a>
  );
}

export default Project;
