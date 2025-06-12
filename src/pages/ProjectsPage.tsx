import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Code, Clock, Star, ArrowRight } from 'lucide-react';
import { projects, intermediateProjects } from '../data/projects';
import { getLanguageById } from '../data/languages';

const ProjectsPage: React.FC =() => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [activeTab, setActiveTab] = useState('language-specific');

  const allProjects = [...projects, ...intermediateProjects];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const languages = ['All', ...new Set(allProjects.map(p => getLanguageById(p.languageId)?.name).filter(Boolean))];

  const filteredProjects = allProjects.filter(project => {
    const language = getLanguageById(project.languageId);
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'All' || project.difficulty === selectedDifficulty;
    const matchesLanguage = selectedLanguage === 'All' || language?.name === selectedLanguage;
    
    if (activeTab === 'language-specific') {
      return matchesSearch && matchesDifficulty && matchesLanguage && projects.includes(project);
    } else {
      return matchesSearch && matchesDifficulty && matchesLanguage && intermediateProjects.includes(project);
    }
  });

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
    const language = getLanguageById(project.languageId);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-primary-500 transition-all duration-300 group"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">{language?.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              <span className="text-sm text-gray-400">{language?.name}</span>
            </div>
          </div>
          <div className={`px-2 py-1 rounded text-xs font-medium ${
            project.difficulty === 'Beginner' ? 'bg-green-500 bg-opacity-20 text-green-400' :
            project.difficulty === 'Intermediate' ? 'bg-yellow-500 bg-opacity-20 text-yellow-400' :
            'bg-red-500 bg-opacity-20 text-red-400'
          }`}>
            {project.difficulty}
          </div>
        </div>

        <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>

        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>{project.estimatedTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Code size={14} />
            <span>{project.skills.length} skills</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
            >
              {skill}
            </span>
          ))}
          {project.skills.length > 3 && (
            <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded">
              +{project.skills.length - 3} more
            </span>
          )}
        </div>

        <button className="w-full flex items-center justify-center space-x-2 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors group">
          <span>Start Project</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-4">
          Practice Projects
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Build real-world projects to solidify your programming skills. From beginner-friendly exercises to advanced challenges.
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex justify-center"
      >
        <div className="bg-gray-800 rounded-lg p-1 border border-gray-700">
          <button
            onClick={() => setActiveTab('language-specific')}
            className={`px-6 py-2 rounded-md transition-colors ${
              activeTab === 'language-specific'
                ? 'bg-primary-500 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Language-Specific Projects ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab('intermediate')}
            className={`px-6 py-2 rounded-md transition-colors ${
              activeTab === 'intermediate'
                ? 'bg-primary-500 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Intermediate Combined ({intermediateProjects.length})
          </button>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gray-800 rounded-lg p-6 border border-gray-700"
      >
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
            />
          </div>

          {/* Difficulty Filter */}
          <div className="flex items-center space-x-2">
            <Filter size={18} className="text-gray-400" />
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>

          {/* Language Filter */}
          <div className="flex items-center space-x-2">
            <Code size={18} className="text-gray-400" />
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
            >
              {languages.map(language => (
                <option key={language} value={language}>{language}</option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No Projects Found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
          <div className="text-2xl font-bold text-primary-400">{projects.length}</div>
          <div className="text-sm text-gray-400">Language Projects</div>
        </div>
        <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
          <div className="text-2xl font-bold text-accent-400">{intermediateProjects.length}</div>
          <div className="text-sm text-gray-400">Combined Projects</div>
        </div>
        <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
          <div className="text-2xl font-bold text-success-400">
            {allProjects.filter(p => p.difficulty === 'Beginner').length}
          </div>
          <div className="text-sm text-gray-400">Beginner Level</div>
        </div>
        <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
          <div className="text-2xl font-bold text-danger-400">
            {allProjects.filter(p => p.difficulty === 'Advanced').length}
          </div>
          <div className="text-sm text-gray-400">Advanced Level</div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;