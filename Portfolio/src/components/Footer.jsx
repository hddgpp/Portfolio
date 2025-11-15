import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      {/* CSS Wave Design */}
      <div className="css-wave"></div>
      
      <div className="footer-content">
        <div className="container">
          {/* ... rest of your footer content remains the same ... */}
          <div className="footer-grid">
            <div className="footer-section">
              <h3 className="footer-title">Hddgpp</h3>
              <p className="footer-description">
                Frontend Developer crafting beautiful, responsive web experiences with modern technologies.
              </p>
              <div className="social-links">
                <a href="https://github.com/hddgpp" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon"></span>
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/meftouhi-youssef-034836388/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon"></span>
                  LinkedIn
                </a>
                <a href="https://x.com/hddgpp" className="social-link">
                  <span className="social-icon"></span>
                  X
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="footer-subtitle">Quick Links</h4>
              <ul className="footer-links">
                <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
                <li><button onClick={() => scrollToSection('about')}>About</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-subtitle">Skills</h4>
              <ul className="footer-links">
                <li>React Development</li>
                <li>JavaScript</li>
                <li>AI powered</li>
                <li>Responsive Design</li>
                <li>UI/UX Principles</li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-subtitle">Connect</h4>
              <p className="footer-contact">
                Open to new opportunities and creative projects.
              </p>
              <a href="youssef.dev.ai@outlook.com" className="contact-email">
                youssef.dev.ai@outlook.com
              </a>
              <div className="resume-download">
                <a href="/resume.pdf" download className="resume-button">
                  <span className="resume-icon"></span>
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>&copy; {currentYear} hddgpp. All rights reserved.</p>
              <p className="footer-built-with">Built with React & ❤️</p>
            </div>
            <div className="footer-nav">
              <button className="back-to-top" onClick={scrollToTop}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 15l-6-6-6 6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer