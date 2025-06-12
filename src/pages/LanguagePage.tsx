import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Code, Users, Star, Clock, Trophy, Play } from 'lucide-react';
import { getLanguageById } from '../data/languages';
import { getProjectsByLanguage } from '../data/projects';

const LanguagePage: React.FC = () => {
  const { languageId } = useParams<{ languageId: string }>();
  const language = languageId ? getLanguageById(languageId) : null;
  const projects = languageId ? getProjectsByLanguage(languageId) : [];

  if (!language) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-white mb-4">Language Not Found</h1>
        <Link to="/" className="text-primary-400 hover:text-primary-300">
          Return to Home
        </Link>
      </div>
    );
  }

  const lessons = [
    { id: 1, title: `${language.name} Fundamentals`, duration: '45 min', completed: true },
    { id: 2, title: 'Variables and Data Types', duration: '30 min', completed: true },
    { id: 3, title: 'Control Structures', duration: '40 min', completed: false },
    { id: 4, title: 'Functions and Methods', duration: '50 min', completed: false },
    { id: 5, title: 'Object-Oriented Concepts', duration: '60 min', completed: false },
  ];

  const achievements = [
    { name: 'First Steps', description: 'Complete your first lesson', earned: true },
    { name: 'Quick Learner', description: 'Complete 5 lessons in a day', earned: false },
    { name: 'Project Master', description: 'Complete your first project', earned: true },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center space-x-4 mb-6"
      >
        <Link
          to="/"
          className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>
        <div className="flex items-center space-x-4">
          <div className="text-4xl">{language.icon}</div>
          <div>
            <h1 className="text-3xl font-bold text-white">{language.name}</h1>
            <p className="text-gray-400">{language.description}</p>
          </div>
        </div>
      </motion.div>

      {/* Language Info Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-800 rounded-lg p-6 border border-gray-700"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Star className="text-yellow-400" size={24} />
            <h3 className="text-lg font-semibold">Difficulty Level</h3>
          </div>
          <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
            language.difficulty === 'Beginner' ? 'bg-green-500 bg-opacity-20 text-green-400' :
            language.difficulty === 'Intermediate' ? 'bg-yellow-500 bg-opacity-20 text-yellow-400' :
            'bg-red-500 bg-opacity-20 text-red-400'
          }`}>
            {language.difficulty}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800 rounded-lg p-6 border border-gray-700"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Users className="text-primary-400" size={24} />
            <h3 className="text-lg font-semibold">Popularity</h3>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-gray-700 rounded-full h-2">
              <div 
                className="bg-primary-500 h-2 rounded-full" 
                style={{ width: `${language.popularity}%` }}
              />
            </div>
            <span className="text-primary-400 font-medium">{language.popularity}%</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800 rounded-lg p-6 border border-gray-700"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Code className="text-accent-400" size={24} />
            <h3 className="text-lg font-semibold">File Extension</h3>
          </div>
          <div className="font-mono text-accent-400 text-lg">{language.fileExtension}</div>
        </motion.div>
      </div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gray-800 rounded-lg p-6 border border-gray-700"
      >
        <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {language.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-400 rounded-full" />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Learning Path */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Lessons */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-800 rounded-lg p-6 border border-gray-700"
        >
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="text-primary-400" size={24} />
            <h3 className="text-xl font-semibold">Learning Path</h3>
          </div>
          
          <div className="space-y-4">
            {lessons.map((lesson, index) => (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`p-4 rounded-lg border transition-colors ${
                  lesson.completed 
                    ? 'border-green-500 border-opacity-50 bg-green-500 bg-opacity-10' 
                    : 'border-gray-600 hover:border-gray-500'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      lesson.completed ? 'bg-green-500' : 'bg-gray-600'
                    }`}>
                      {lesson.completed ? '✓' : index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{lesson.title}</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Clock size={14} />
                        <span>{lesson.duration}</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/lesson/${lesson.id}`}
                    className="flex items-center space-x-1 px-3 py-1 text-sm bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    <Play size={14} />
                    <span>{lesson.completed ? 'Review' : 'Start'}</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects & Achievements */}
        <div className="space-y-6">
          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-800 rounded-lg p-6 border border-gray-700"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Code className="text-accent-400" size={24} />
                <h3 className="text-xl font-semibold">Practice Projects</h3>
              </div>
              <Link 
                to="/projects" 
                className="text-primary-400 hover:text-primary-300 text-sm"
              >
                View All
              </Link>
            </div>
            
            <div className="space-y-3">
              {projects.slice(0, 3).map((project) => (
                <div key={project.id} className="p-3 bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-white mb-1">{project.title}</h4>
                  <p className="text-sm text-gray-400 mb-2">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded ${
                      project.difficulty === 'Beginner' ? 'bg-green-500 bg-opacity-20 text-green-400' :
                      project.difficulty === 'Intermediate' ? 'bg-yellow-500 bg-opacity-20 text-yellow-400' :
                      'bg-red-500 bg-opacity-20 text-red-400'
                    }`}>
                      {project.difficulty}
                    </span>
                    <span className="text-xs text-gray-500">{project.estimatedTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gray-800 rounded-lg p-6 border border-gray-700"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Trophy className="text-yellow-400" size={24} />
              <h3 className="text-xl font-semibold">Achievements</h3>
            </div>
            
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`p-3 rounded-lg border ${
                    achievement.earned 
                      ? 'border-yellow-500 border-opacity-50 bg-yellow-500 bg-opacity-10' 
                      : 'border-gray-600'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      achievement.earned ? 'bg-yellow-500' : 'bg-gray-600'
                    }`}>
                      <Trophy size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{achievement.name}</h4>
                      <p className="text-sm text-gray-400">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <Link
          to={`/terminal?language=${languageId}`}
          className="flex items-center space-x-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          <Code size={18} />
          <span>Try in Terminal</span>
        </Link>
        <Link
          to="/projects"
          className="flex items-center space-x-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 transition-colors"
        >
          <BookOpen size={18} />
          <span>View Projects</span>
        </Link>
        <Link
          to="/mentors"
          className="flex items-center space-x-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 transition-colors"
        >
          <Users size={18} />
          <span>Find Mentors</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default LanguagePage;