import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import WhyHireMe from './components/WhyHireMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import { TbMessageChatbot } from "react-icons/tb";
import './styles/index.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [chatbotOpen, setChatbotOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDarkMode(prefersDark)
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('portfolio-theme', newDarkMode ? 'dark' : 'light')
  }

  const toggleChatbot = () => {
    setChatbotOpen(!chatbotOpen)
  }

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Projects />
        <About />
        <WhyHireMe />
        <Contact />
      </main>
      <Footer />
      <Chatbot isOpen={chatbotOpen} onClose={toggleChatbot} />
      <button 
        className="chatbot-toggle"
        onClick={toggleChatbot}
        aria-label="Open AI Chatbot"
      >
        <TbMessageChatbot />
      </button>
    </div>
  )
}

export default App