import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'TailwindCSS', 'Next.JS']

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Meftouhi Youssef</span>
          </h1>
          <h2 className="hero-subtitle">Frontend Developer</h2>
          <p className="hero-tagline">
            Crafting beautiful, responsive web experiences with modern technologies
          </p>
          
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>

          <button className="cta-button" onClick={scrollToProjects}>
            View My Work
          </button>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero