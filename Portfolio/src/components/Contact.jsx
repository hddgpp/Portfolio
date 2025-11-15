import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new opportunities, creative projects, 
              or just having a chat about technology and development.
            </p>
            
            <div className="social-links">
              <a href="https://github.com/hddgpp" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/meftouhi-youssef-034836388/" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href="https://x.com/hddgpp" target="_blank" rel="noopener noreferrer" className="social-link">
                X
              </a>
            </div>

            <div className="resume-download">
              <a href="/resume.pdf" download className="resume-button">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact