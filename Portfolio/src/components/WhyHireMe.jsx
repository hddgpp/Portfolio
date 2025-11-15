import React from 'react'
import '../styles/WhyHireMe.css'

const WhyHireMe = () => {
  const strengths = [
    {
      icon: '🚀',
      title: 'Fast Learner',
      description: 'Built 14 projects in 79 days, constantly adapting to new technologies and best practices.'
    },
    {
      icon: '🌐',
      title: 'Deployment Experience',
      description: 'Experienced in deploying applications to Netlify, Vercel, and other platforms with CI/CD pipelines.'
    },
    {
      icon: '💼',
      title: 'Business Mindset',
      description: 'Always thinking from a client perspective - focusing on ROI, user experience, and business goals.'
    },
    {
      icon: '🔍',
      title: 'Problem Solver',
      description: 'Strong debugging skills and systematic approach to breaking down complex problems.'
    },
    {
      icon: '⚡',
      title: 'Consistent Progress',
      description: 'Self-driven learner with proven track record of daily progress and skill development.'
    },
    {
      icon: '🎯',
      title: 'Quality Focused',
      description: 'Attention to detail in code quality, performance optimization, and user interface design.'
    }
  ]

  return (
    <section id="why-hire-me" className="why-hire-me">
      <div className="container">
        <h2 className="section-title">Why Hire Me?</h2>
        
        <div className="strengths-grid">
          {strengths.map((strength, index) => (
            <div key={index} className="strength-card">
              <div className="strength-icon">{strength.icon}</div>
              <h3 className="strength-title">{strength.title}</h3>
              <p className="strength-description">{strength.description}</p>
            </div>
          ))}
        </div>

        <div className="hire-me-cta">
          <h3>Ready to Build Something Amazing?</h3>
          <p>Let's discuss how I can contribute to your team and projects.</p>
          <button 
            className="cta-button"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhyHireMe