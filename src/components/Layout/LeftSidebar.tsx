import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Code, X, BookOpen } from 'lucide-react';
import { languages, languageCategories, getLanguagesByCategory } from '../../data/languages';

interface LeftSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ isOpen, onClose }) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['general']);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ x: -320 }}
      animate={{ x: 0 }}
      exit={{ x: -320 }}
      className="fixed lg:relative inset-y-0 left-0 z-40 w-80 bg-gray-800 border-r border-gray-700 overflow-y-auto"
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold flex items-center space-x-2">
            <Code size={20} className="text-primary-400" />
            <span>Programming Languages</span>
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-gray-700 transition-colors lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-2">
          {Object.entries(languageCategories).map(([categoryKey, categoryTitle]) => {
            const categoryLanguages = getLanguagesByCategory(categoryKey);
            const isExpanded = expandedCategories.includes(categoryKey);

            return (
              <div key={categoryKey} className="border-b border-gray-700 pb-2">
                <button
                  onClick={() => toggleCategory(categoryKey)}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <span className="text-sm font-medium text-gray-300">{categoryTitle}</span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight size={16} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 space-y-1">
                        {categoryLanguages.map((language) => (
                          <Link
                            key={language.id}
                            to={`/language/${language.id}`}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors group"
                          >
                            <span className="text-lg">{language.icon}</span>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-sm">{language.name}</div>
                              <div className="text-xs text-gray-400 truncate">{language.description}</div>
                            </div>
                            <div className="flex items-center space-x-1">
                              <div className={`w-2 h-2 rounded-full ${
                                language.difficulty === 'Beginner' ? 'bg-green-400' :
                                language.difficulty === 'Intermediate' ? 'bg-yellow-400' :
                                'bg-red-400'
                              }`} />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="mt-6 space-y-2">
          <h3 className="text-sm font-semibold text-gray-400 px-3">Quick Access</h3>
          <Link to="/curriculum/javascript" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-700 transition-colors">
            <BookOpen size={16} />
            <span className="text-sm">JavaScript Curriculum</span>
          </Link>
          <Link to="/projects" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-700 transition-colors">
            <span>📁</span>
            <span className="text-sm">All Projects</span>
          </Link>
          <Link to="/roadmap" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-700 transition-colors">
            <span>🗺️</span>
            <span className="text-sm">Learning Roadmaps</span>
          </Link>
          <Link to="/mentors" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-700 transition-colors">
            <span>👨‍🏫</span>
            <span className="text-sm">Mentors</span>
          </Link>
          <Link to="/games" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-700 transition-colors">
            <span>🎮</span>
            <span className="text-sm">Learning Games</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default LeftSidebar;