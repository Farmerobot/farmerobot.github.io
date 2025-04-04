# Mateusz Stawicki | Portfolio

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

A modern, responsive portfolio website showcasing my professional projects and skills. Built with React and designed with a minimalist aesthetic to highlight my work in machine learning, game development, web development, and more.

![Portfolio Preview](public/preview.png)

## Features

- **Modern Design**: Clean, minimalist interface with a focus on content
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **Project Showcase**: Categorized display of projects with detailed descriptions
- **Technology Tags**: Visual indicators of technologies used in each project
- **Interactive Navigation**: Smooth scrolling between sections
- **Performance Optimized**: Fast loading times and smooth animations

## Technologies

- **Frontend**: React, JavaScript (ES6+), CSS3
- **Styling**: Custom CSS with responsive design principles
- **Deployment**: GitHub Pages
- **Version Control**: Git

## Project Structure

```
farmerobot.github.io/
├── public/
│   ├── documents/      # Resume and other documents
│   ├── index.html      # Entry HTML file
│   └── ...             # Other static assets
├── src/
│   ├── css/            # Stylesheets
│   ├── img/            # Image assets
│   ├── js/             # React components
│   ├── index.js        # Main entry point
│   └── projects.json   # Project data
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Farmerobot/farmerobot.github.io.git
   cd farmerobot.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Deployment

To deploy to GitHub Pages:

```bash
npm run deploy
```

## Customization

To add or modify projects, edit the `src/projects.json` file. Each project follows this structure:

```json
{
  "name": "Project Name",
  "link": "https://project-link.com",
  "githubLink": "https://github.com/username/project",
  "image": "image-key",
  "description": "Project description text.",
  "keywords": ["Keyword1", "Keyword2", "Keyword3"]
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Mateusz Stawicki - [GitHub](https://github.com/Farmerobot)

---

 2025 Mateusz Stawicki. All Rights Reserved.
