import React from 'react'
import '../styles/About.css'

const About = () => {
  const skills = [
    'React', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'Responsive Design',
    'API Integration', 'Problem Solving', 'UI/UX Principles', 'TypeScript',
    'Tailwind', 'Next.js'
  ]

  const currentlyLearning = [
    'Advanced React Patterns',
    'Performance Optimization',
    'Testing (Jest, React Testing Library)'
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">My Journey</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="journey-section">
              <h3>From Day 1 to Day 79</h3>
              <p>
                My coding journey started from scratch with no degree, and I taught myself through daily problem-solving & projects
                and Iv'e built over 40+ small JS apps and multiple big ones, and I went from zero to deployed AI applications in 79 days.
              </p>
            </div>

            <div className="journey-section">
              <h3>Why I Love Coding</h3>
              <p>
                I am Ambitious, consistent, and extremely driven for a dev career,
                I Wants to work with great teams and build real products and solve complex problems.
              </p>
            </div>

            <div className="skills-section">
              <h3>Skills & Tools</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="learning-section">
              <h3>Currently Learning</h3>
              <ul>
                {currentlyLearning.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-visual">
            <div className="profile-card">
              <div className="profile-image">
                {/* Add your profile image here */}
                <img src="./myPhoto.jpg" alt="youssef" />
              </div>
              <div className="profile-stats">
                <div className="stat">
                  <span className="stat-number">7</span>
                  <span className="stat-label">Tech stack</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5</span>
                  <span className="stat-label">Tech tools</span>
                </div>
                <div className="stat">
                  <span className="stat-number">2</span>
                  <span className="stat-label">Deployment tools</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About