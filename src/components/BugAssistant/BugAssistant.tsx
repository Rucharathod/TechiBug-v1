import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import toast from 'react-hot-toast';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const BugAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!hasGreeted) {
      // Greet user when they first visit
      const timer = setTimeout(() => {
        toast.success('👋 Hi there! BugBot is here to help you learn!', {
          duration: 4000,
        });
        setHasGreeted(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [hasGreeted]);

  const botResponses = {
    greeting: [
      "Hello! I'm BugBot, your friendly coding assistant! 🐛",
      "Hi there! Ready to squash some bugs and learn together?",
      "Welcome to TechiBug! I'm here to help you on your coding journey!",
    ],
    help: [
      "I can help you with programming concepts, debugging, project ideas, and learning paths!",
      "Need help with code? Want to understand a concept? Or looking for project suggestions? I'm here for you!",
      "I'm great at explaining programming concepts, helping with syntax, and providing learning resources!",
    ],
    python: [
      "Python is awesome! It's perfect for beginners with its readable syntax. Would you like to start with variables or functions?",
      "Python is great for web development, data science, AI, and automation. What interests you most?",
      "Let's dive into Python! It's one of the most versatile languages. What would you like to learn first?",
    ],
    javascript: [
      "JavaScript powers the web! From frontend interactions to backend servers, it's everywhere. Ready to explore?",
      "JS is fantastic for web development. Want to learn about DOM manipulation, async programming, or frameworks?",
      "JavaScript is the language of the web! Perfect for creating interactive websites and applications.",
    ],
    projects: [
      "Building projects is the best way to learn! Start with something simple like a calculator or to-do list.",
      "I recommend starting with beginner projects and gradually increasing complexity. What language interests you?",
      "Projects help solidify your learning! Want suggestions based on your skill level?",
    ],
    debugging: [
      "Debugging is a crucial skill! Start by reading error messages carefully and using console.log to track values.",
      "Great debugging tip: Break down your problem into smaller parts and test each piece individually.",
      "Don't worry, every programmer deals with bugs! They're learning opportunities in disguise.",
    ],
    default: [
      "That's a great question! While I'd love to help more, try exploring our lessons and projects for detailed guidance.",
      "Interesting! Check out our language-specific tutorials and interactive coding examples.",
      "I'm still learning too! For complex topics, our structured lessons and mentors section might be perfect for you.",
    ]
  };

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)];
    }
    if (message.includes('help') || message.includes('assist')) {
      return botResponses.help[Math.floor(Math.random() * botResponses.help.length)];
    }
    if (message.includes('python')) {
      return botResponses.python[Math.floor(Math.random() * botResponses.python.length)];
    }
    if (message.includes('javascript') || message.includes('js')) {
      return botResponses.javascript[Math.floor(Math.random() * botResponses.javascript.length)];
    }
    if (message.includes('project')) {
      return botResponses.projects[Math.floor(Math.random() * botResponses.projects.length)];
    }
    if (message.includes('bug') || message.includes('debug') || message.includes('error')) {
      return botResponses.debugging[Math.floor(Math.random() * botResponses.debugging.length)];
    }
    
    return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      // Add welcome message when opening for the first time
      const welcomeMessage: Message = {
        id: 'welcome',
        text: "Hello! I'm BugBot, your coding companion! 🐛✨ I'm here to help you learn programming, debug code, and answer questions. How can I assist you today?",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary-500 to-accent-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="animate-bounce-subtle"
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-gray-800 border border-gray-600 rounded-lg shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Bot size={18} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">BugBot Assistant</h3>
                  <p className="text-xs text-primary-100">Always here to help!</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 h-64">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.isBot
                        ? 'bg-gray-700 text-gray-100'
                        : 'bg-primary-500 text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about coding..."
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-primary-500 text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="px-3 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BugAssistant;