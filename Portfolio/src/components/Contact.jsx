import React from 'react'
import { SiReaddotcv } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import '../styles/Contact.css'

const Contact = () => {
  const handleResumeDownload = () => {
    // Create a temporary anchor element for download
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Youssef_Meftouhi_Frontend_Developer_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
            <div className="contact-details">
              <div className="contact-detail">
                
                <div>
                  <h4>Email</h4>
                  <a href="mailto:youssef.dev.ai@outlook.com" className="social-link">
                    youssef.dev.ai@outlook.com
                  </a>
                </div>
              </div>
            </div>

            
              <a href="https://github.com/hddgpp" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon"><FaGithub /></span>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/meftouhi-youssef-034836388/" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon"><FaLinkedin /></span>
                LinkedIn
              </a>
              <a href="https://x.com/hddgpp" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon"><FaXTwitter /></span>
                X / Twitter
              </a>
            </div>

            <div className="resume-download">
              <button 
                onClick={handleResumeDownload}
                className="resume-button"
              >
                <span className="resume-icon"><SiReaddotcv /></span>
                Download Resume
              </button>
              <p className="file-info">PDF • Updated December 2025</p>
            </div>
          </div>

          <div className="contact-actions">
            
            
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact