import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, ExternalLink, MessageCircle, Users, Award } from 'lucide-react';
import { mentors } from '../data/mentors';

const MentorsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('All');

  const allExpertise = ['All', ...new Set(mentors.flatMap(mentor => mentor.expertise))];
  
  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesExpertise = selectedExpertise === 'All' || mentor.expertise.includes(selectedExpertise);
    
    return matchesSearch && matchesExpertise;
  });

  const MentorCard = ({ mentor }: { mentor: typeof mentors[0] }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-primary-500 transition-all duration-300 group"
    >
      <div className="flex items-start space-x-4 mb-4">
        <div className="relative">
          <img
            src={mentor.image}
            alt={mentor.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          {mentor.verified && (
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
              <Award size={12} className="text-white" />
            </div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
            {mentor.name}
          </h3>
          <p className="text-primary-400 text-sm font-medium">{mentor.title}</p>
          {mentor.verified && (
            <span className="inline-flex items-center space-x-1 text-xs text-green-400 mt-1">
              <Award size={12} />
              <span>Verified Expert</span>
            </span>
          )}
        </div>
      </div>

      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{mentor.bio}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {mentor.expertise.map((skill, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-primary-500 bg-opacity-20 text-primary-400 text-xs rounded"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-1">
          <Star size={16} className="text-yellow-400 fill-current" />
          <span className="text-sm text-gray-400">4.9 (127 reviews)</span>
        </div>
        <div className="flex items-center space-x-1 text-sm text-gray-400">
          <Users size={14} />
          <span>250+ students</span>
        </div>
      </div>

      <div className="flex space-x-2">
        <button className="flex-1 flex items-center justify-center space-x-2 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
          <MessageCircle size={16} />
          <span>Message</span>
        </button>
        <button className="px-3 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 transition-colors">
          <ExternalLink size={16} />
        </button>
      </div>

      {/* Social Links */}
      <div className="flex items-center space-x-3 mt-4 pt-4 border-t border-gray-700">
        {mentor.social.youtube && (
          <a
            href={mentor.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        )}
        {mentor.social.linkedin && (
          <a
            href={mentor.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        )}
        {mentor.social.twitter && (
          <a
            href={mentor.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        )}
        {mentor.social.github && (
          <a
            href={mentor.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-4">
          Expert Mentors
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Learn from industry professionals and experienced developers. Get personalized guidance and accelerate your learning journey.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
          <div className="text-2xl font-bold text-primary-400">{mentors.length}</div>
          <div className="text-sm text-gray-400">Expert Mentors</div>
        </div>
        <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
          <div className="text-2xl font-bold text-accent-400">50+</div>
          <div className="text-sm text-gray-400">Technologies</div>
        </div>
        <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
          <div className="text-2xl font-bold text-success-400">4.9</div>
          <div className="text-sm text-gray-400">Average Rating</div>
        </div>
        <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
          <div className="text-2xl font-bold text-yellow-400">1000+</div>
          <div className="text-sm text-gray-400">Students Helped</div>
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
              placeholder="Search mentors by name, title, or expertise..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
            />
          </div>

          {/* Expertise Filter */}
          <div className="flex items-center space-x-2">
            <Filter size={18} className="text-gray-400" />
            <select
              value={selectedExpertise}
              onChange={(e) => setSelectedExpertise(e.target.value)}
              className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
            >
              {allExpertise.map(expertise => (
                <option key={expertise} value={expertise}>{expertise}</option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      {/* Mentors Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {filteredMentors.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <MentorCard mentor={mentor} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">👨‍🏫</div>
            <h3 className="text-xl font-semibold text-white mb-2">No Mentors Found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-4">Want to Become a Mentor?</h3>
        <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
          Share your expertise and help the next generation of developers. Join our community of expert mentors and make a difference.
        </p>
        <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Apply to be a Mentor
        </button>
      </motion.div>
    </div>
  );
};

export default MentorsPage;