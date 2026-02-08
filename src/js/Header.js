import '../css/Animation.css';
import '../css/Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <h1 className='header-name'>Mateusz Stawicki</h1>
        <h2 className='header-title'>Software Engineer & ML Researcher</h2>
        <p className='header-description'>Crafting innovative solutions across multiple technologies</p>
        
        <div className="header-links">
          <a href="https://github.com/Farmerobot" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
          <a href="https://www.linkedin.com/in/mateuszstawicki/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          <a href="/documents/resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button">View Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
