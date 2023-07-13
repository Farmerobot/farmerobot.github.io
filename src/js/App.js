import React from 'react';
import Header from './Header';
import Category from './Category';
import '../css/App.css';
import projectsJson from '../projects.json';

const App = () => {
  return (
    <div className="App">
      <Header />
      {Object.keys(projectsJson).map((category) => (
        <Category key={category} name={category} projects={projectsJson[category]} />
      ))}
    </div>
  );
}

export default App;
