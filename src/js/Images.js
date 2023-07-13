import projectsJson from '../projects.json';

const images = [];

Object.keys(projectsJson).map((category) =>
    projectsJson[category].filter(e => e.image.length > 0).forEach(element => {
        images[element.image] = require(`../img/${element.image}.png`);
    })
);

export default images;