import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Menu, X, Terminal, Home, Info, Bug } from 'lucide-react';
import { languages } from '../../data/languages';

interface NavbarProps {
  onToggleLeftSidebar: () => void;
  onToggleRightSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleLeftSidebar, onToggleRightSidebar }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof languages>([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = languages.filter(lang => 
        lang.name.toLowerCase().includes(query.toLowerCase()) ||
        lang.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  const handleLanguageSelect = (languageId: string) => {
    navigate(`/language/${languageId}`);
    setSearchQuery('');
    setShowResults(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-800 border-b border-gray-700 px-4 py-3"
    >
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleLeftSidebar}
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors lg:hidden"
          >
            <Menu size={20} />
          </button>

          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-2 bg-primary-500 rounded-lg"
            >
              <Bug size={24} className="text-white" />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              TechiBug
            </span>
          </Link>
        </div>

        {/* Center Section - Navigation & Search */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/terminal" className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <Terminal size={18} />
              <span>Terminal</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <Info size={18} />
              <span>About</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <div className="flex items-center">
              <Search size={18} className="absolute left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search languages..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-primary-500 transition-colors w-64"
              />
            </div>

            {/* Search Results */}
            {showResults && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-600 rounded-lg shadow-xl max-h-64 overflow-y-auto z-50"
              >
                {searchResults.length > 0 ? (
                  searchResults.map((language) => (
                    <button
                      key={language.id}
                      onClick={() => handleLanguageSelect(language.id)}
                      className="w-full px-4 py-3 text-left hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-b-0"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{language.icon}</span>
                        <div>
                          <div className="font-medium">{language.name}</div>
                          <div className="text-sm text-gray-400 truncate">{language.description}</div>
                        </div>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-3 text-gray-400">No languages found</div>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          <button
            onClick={onToggleRightSidebar}
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors lg:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;