import React from 'react';
import Project from './Project';
import '../css/Category.css';

const Category = ({ name, projects }) => {
  return (
    <div className="category">
      <h2 className="name center">{name}</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Category;
