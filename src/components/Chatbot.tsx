"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the structure of a message
type Message = {
  sender: 'user' | 'bot';
  text: string;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false); // To show a "typing" indicator
  const chatBodyRef = useRef<HTMLDivElement>(null);

  // Automatically scroll to the bottom when new messages are added
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isLoading]);
  
  // Add a welcome message when the chat opens
  useEffect(() => {
    if (isOpen) {
      setMessages([{ sender: 'bot', text: "Hi there! I'm Trishar's personal AI assistant. Ask me anything about him." }]);
    } else {
      setMessages([]); // Clear messages when closed
    }
  }, [isOpen]);

  // This function now calls the Gemini API
  const getAIResponse = async (userInput: string) => {
    setIsLoading(true);
    
    // This is the context and instruction for the AI model
    const prompt = `
      You are Trishar's personal AI assistant on his portfolio website. Your tone is friendly, professional, and helpful. 
      Answer the user's question based ONLY on the following information about Trishar. Do not make up any information.

      Information about Trishar:
      - Name: Trishar M.
      - Education: Pursuing a B.Tech in Computer Science with a specialization in Cyber Security at Presidency University.
      - Career Goal: To become a front-end or full-stack developer. He is passionate about creating visually appealing and user-friendly interfaces.
      - Skills: React, Next.js, TypeScript, JavaScript, PHP, Java (for Android), HTML/CSS, Tailwind CSS, MySQL, Git & GitHub, Framer Motion, Three.js/R3F, and the Gemini API.
      - Projects: He has built a 'Study Verse' student dashboard and a 'Restaurant Management System'.
      - Hobbies: Photography, cars, badminton, and swimming.
      - Contact: Trisharmahesh@gmail.com or his LinkedIn profile.

      User's question: "${userInput}"
    `;

    try {
      // --- FIX IS HERE ---
      const chatHistory = []; // Changed 'let' to 'const'
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const result = await response.json();
      const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (text) {
        return text;
      } else {
        return "Sorry, I couldn't process that. Please try asking in a different way.";
      }

    } catch (error) {
      console.error("Error fetching AI response:", error);
      return "Sorry, I'm having trouble connecting right now. Please try again later.";
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '' || isLoading) return;

    const userMessage: Message = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    
    const aiResponseText = await getAIResponse(inputValue);
    const botMessage: Message = { sender: 'bot', text: aiResponseText };
    setMessages(prev => [...prev, botMessage]);

    setInputValue('');
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="fixed bottom-24 right-5 w-80 h-[28rem] bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-2xl flex flex-col z-50"
          >
            <div className="p-4 bg-gray-900/50 rounded-t-xl">
              <h3 className="text-lg font-bold text-white text-center">Ask me anything!</h3>
            </div>
            
            <div ref={chatBodyRef} className="flex-1 p-4 space-y-4 overflow-y-auto">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`px-4 py-2 rounded-2xl max-w-[80%] ${msg.sender === 'user' ? 'bg-cyan-600 text-white rounded-br-none' : 'bg-gray-700 text-white rounded-bl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="px-4 py-2 rounded-2xl max-w-[80%] bg-gray-700 text-white rounded-bl-none">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-75"></span>
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-150"></span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4 border-t border-gray-700">
              <input 
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                className="w-full bg-gray-700 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                disabled={isLoading}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 w-16 h-16 bg-cyan-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-cyan-700 transition-transform hover:scale-110 z-50"
        aria-label="Toggle chatbot"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
        </svg>
      </button>
    </>
  );
};

export default Chatbot;
