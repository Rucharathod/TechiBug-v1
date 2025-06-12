import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import BugAssistant from '../BugAssistant/BugAssistant';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setLeftSidebarOpen(false);
        setRightSidebarOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar 
        onToggleLeftSidebar={() => setLeftSidebarOpen(!leftSidebarOpen)}
        onToggleRightSidebar={() => setRightSidebarOpen(!rightSidebarOpen)}
      />
      
      <div className="flex pt-16">
        {/* Left Sidebar */}
        <motion.div
          initial={false}
          animate={{
            width: leftSidebarOpen ? (isMobile ? '100%' : '320px') : '0px',
            opacity: leftSidebarOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <LeftSidebar isOpen={leftSidebarOpen} onClose={() => setLeftSidebarOpen(false)} />
        </motion.div>

        {/* Main Content */}
        <motion.main
          className="flex-1 overflow-y-auto"
          animate={{
            marginLeft: leftSidebarOpen && !isMobile ? '0px' : '0px',
            marginRight: rightSidebarOpen && !isMobile ? '0px' : '0px'
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="p-6">
            {children}
          </div>
        </motion.main>

        {/* Right Sidebar */}
        <motion.div
          initial={false}
          animate={{
            width: rightSidebarOpen ? (isMobile ? '100%' : '320px') : '0px',
            opacity: rightSidebarOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <RightSidebar isOpen={rightSidebarOpen} onClose={() => setRightSidebarOpen(false)} />
        </motion.div>
      </div>

      <BugAssistant />
    </div>
  );
};

export default Layout;