import React, { useState, useRef, useEffect } from 'react'
import { getAIResponse } from '../utils/ai'
import '../styles/Chatbot.css'

const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: 1,
        type: 'ai',
        content: "Hi! I'm **Leo**, Youssef's portfolio assistant. I can tell you about his skills, projects, experience, and background. What would you like to know? 👋"
      }])
    }
  }, [isOpen, messages.length])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: input.trim()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      // Convert message history to the format expected by getAIResponse
      const history = messages.map(msg => ({
        sender: msg.type === 'user' ? 'user' : 'assistant',
        message: msg.content
      }))

      const aiResponse = await getAIResponse(input.trim(), history)
      
      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai', 
        content: aiResponse
      }
      
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Chatbot error:', error)
      const errorMessage = {
        id: Date.now() + 1,
        type: 'ai', 
        content: "❌ Sorry, I encountered an error while processing your request. Please try again."
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const clearChat = () => {
    setMessages([{
      id: 1,
      type: 'ai',
      content: "Hi! I'm **Leo**, Youssef's portfolio assistant. I can tell you about his skills, projects, experience, and background. What would you like to know? 👋"
    }])
  }

  if (!isOpen) return null

  return (
    <div className="chatbot-overlay">
      <div className="chatbot-panel">
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <h3>Leo Assistant</h3>
            <span className="chatbot-subtitle">Youssef's Portfolio AI</span>
          </div>
          <div className="chatbot-header-controls">
            <button 
              className="clear-chat-button"
              onClick={clearChat}
              title="Clear chat"
            >
              🗑️
            </button>
            <button 
              className="close-button" 
              onClick={onClose}
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>
        </div>

        <div className="chatbot-messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.type}`}>
              <div className="message-content">
                {message.type === 'ai' && (
                  <div className="ai-avatar">🤖</div>
                )}
                <div className="message-text">
                  {message.content.split('\n').map((line, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ 
                      __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                 .replace(/\*(.*?)\*/g, '<em>$1</em>')
                                 .replace(/\n/g, '<br/>')
                    }} />
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="message ai loading">
              <div className="message-content">
                <div className="ai-avatar">🤖</div>
                <div className="message-text">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chatbot-input" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Youssef's skills, projects, or experience..."
            disabled={isLoading}
            autoComplete="off"
          />
          <button 
            type="submit" 
            disabled={isLoading || !input.trim()}
            className="send-button"
          >
            {isLoading ? '⏳' : '📤'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chatbot