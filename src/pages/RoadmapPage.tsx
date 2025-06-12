import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Map, CheckCircle, Circle, ArrowRight, Clock, Users, Star } from 'lucide-react';
import { roadmaps, getRoadmapById } from '../data/roadmaps';

const RoadmapPage: React.FC = () => {
  const [selectedRoadmap, setSelectedRoadmap] = useState(roadmaps[0].id);
  const roadmap = getRoadmapById(selectedRoadmap);

  const RoadmapCard = ({ roadmapData }: { roadmapData: typeof roadmaps[0] }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={() => setSelectedRoadmap(roadmapData.id)}
      className={`p-6 rounded-lg border cursor-pointer transition-all ${
        selectedRoadmap === roadmapData.id
          ? 'border-primary-500 bg-primary-500 bg-opacity-10'
          : 'border-gray-700 bg-gray-800 hover:border-gray-600'
      }`}
    >
      <h3 className="text-lg font-semibold text-white mb-2">{roadmapData.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{roadmapData.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Clock size={14} />
          <span>{roadmapData.estimatedDuration}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Map size={14} />
          <span>{roadmapData.nodes.length} steps</span>
        </div>
      </div>
    </motion.div>
  );

  const RoadmapNode = ({ node, index }: { node: typeof roadmap.nodes[0], index: number }) => {
    const isCompleted = index < 2; // Simulate some completed nodes
    
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 * index }}
        className="relative"
      >
        {/* Connection Line */}
        {index > 0 && (
          <div className="absolute -top-8 left-6 w-0.5 h-8 bg-gray-600" />
        )}
        
        <div className={`flex items-start space-x-4 p-4 rounded-lg border transition-all ${
          isCompleted 
            ? 'border-green-500 border-opacity-50 bg-green-500 bg-opacity-10' 
            : 'border-gray-700 bg-gray-800'
        }`}>
          <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
            isCompleted ? 'bg-green-500' : 'bg-gray-600'
          }`}>
            {isCompleted ? (
              <CheckCircle size={20} className="text-white" />
            ) : (
              <Circle size={20} className="text-white" />
            )}
          </div>
          
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-white mb-2">{node.title}</h4>
            <p className="text-gray-400 mb-3">{node.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {node.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between">
              <span className={`text-sm font-medium ${
                isCompleted ? 'text-green-400' : 'text-gray-500'
              }`}>
                Level {node.level}
              </span>
              
              <button className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-sm transition-colors ${
                isCompleted 
                  ? 'bg-green-500 text-white hover:bg-green-600' 
                  : 'bg-primary-500 text-white hover:bg-primary-600'
              }`}>
                <span>{isCompleted ? 'Review' : 'Start'}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
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
          Learning Roadmaps
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Structured learning paths designed by industry experts. Follow step-by-step guides to master your chosen field.
        </p>
      </motion.div>

      {/* Roadmap Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-2xl font-semibold text-white mb-6">Choose Your Path</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmaps.map((roadmapData, index) => (
            <motion.div
              key={roadmapData.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <RoadmapCard roadmapData={roadmapData} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Selected Roadmap Details */}
      {roadmap && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800 rounded-lg p-6 border border-gray-700"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{roadmap.title} Roadmap</h2>
              <p className="text-gray-400">{roadmap.description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400">Estimated Duration</div>
              <div className="text-lg font-semibold text-primary-400">{roadmap.estimatedDuration}</div>
            </div>
          </div>

          {/* Progress Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-white">2</div>
              <div className="text-sm text-gray-400">Completed</div>
            </div>
            <div className="text-center p-4 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-primary-400">{roadmap.nodes.length - 2}</div>
              <div className="text-sm text-gray-400">Remaining</div>
            </div>
            <div className="text-center p-4 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-accent-400">
                {Math.round((2 / roadmap.nodes.length) * 100)}%
              </div>
              <div className="text-sm text-gray-400">Progress</div>
            </div>
          </div>

          {/* Roadmap Steps */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
              <Map size={20} className="text-primary-400" />
              <span>Learning Path</span>
            </h3>
            
            {roadmap.nodes.map((node, index) => (
              <RoadmapNode key={node.id} node={node} index={index} />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-700">
            <button className="flex-1 flex items-center justify-center space-x-2 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
              <span>Continue Learning</span>
              <ArrowRight size={18} />
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 transition-colors">
              <Users size={18} />
              <span>Find Study Group</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 transition-colors">
              <Star size={18} />
              <span>Save Roadmap</span>
            </button>
          </div>
        </motion.div>
      )}

      {/* Additional Resources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-4">Need Personalized Guidance?</h3>
        <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
          Our expert mentors can help customize your learning path based on your goals, experience, and timeline.
        </p>
        <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Connect with a Mentor
        </button>
      </motion.div>
    </div>
  );
};

export default RoadmapPage;