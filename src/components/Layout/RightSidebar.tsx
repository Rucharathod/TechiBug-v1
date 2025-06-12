import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Calendar, Activity, Trophy, BookOpen, Clock, X } from 'lucide-react';

interface RightSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ isOpen, onClose }) => {
  const [currentStreak, setCurrentStreak] = useState(7);
  const [studyTime, setStudyTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStudyTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const upcomingEvents = [
    { id: 1, title: 'Python Workshop', date: '2025-01-25', time: '14:00' },
    { id: 2, title: 'JavaScript Masterclass', date: '2025-01-26', time: '16:00' },
    { id: 3, title: 'React Best Practices', date: '2025-01-28', time: '10:00' }
  ];

  const recentActivities = [
    { id: 1, action: 'Completed', item: 'Python Basics Lesson', time: '2 hours ago' },
    { id: 2, action: 'Started', item: 'JavaScript Calculator Project', time: '4 hours ago' },
    { id: 3, action: 'Earned', item: 'First Steps Badge', time: '1 day ago' }
  ];

  const achievements = [
    { id: 1, title: 'First Steps', description: 'Complete your first lesson', icon: '🎯', earned: true },
    { id: 2, title: 'Code Warrior', description: 'Write 100 lines of code', icon: '⚔️', earned: true },
    { id: 3, title: 'Project Master', description: 'Complete 5 projects', icon: '🏆', earned: false },
    { id: 4, title: 'Streak Legend', description: '30-day learning streak', icon: '🔥', earned: false }
  ];

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ x: 320 }}
      animate={{ x: 0 }}
      exit={{ x: 320 }}
      className="fixed lg:relative inset-y-0 right-0 z-40 w-80 bg-gray-800 border-l border-gray-700 overflow-y-auto"
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Progress Dashboard</h2>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-gray-700 transition-colors lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        {/* Study Time */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg p-4 mb-4"
        >
          <div className="flex items-center space-x-2 mb-2">
            <Clock size={20} className="text-white" />
            <span className="text-white font-medium">Today's Study Time</span>
          </div>
          <div className="text-2xl font-bold text-white">{formatTime(studyTime)}</div>
        </motion.div>

        {/* Daily Streak */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-700 rounded-lg p-4 mb-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Flame size={20} className="text-orange-400" />
              <span className="font-medium">Daily Streak</span>
            </div>
            <div className="text-2xl font-bold text-orange-400">{currentStreak}</div>
          </div>
          <div className="text-sm text-gray-400 mt-1">Keep it up! 🔥</div>
        </motion.div>

        {/* Upcoming Events */}
        <div className="mb-6">
          <h3 className="flex items-center space-x-2 text-sm font-semibold text-gray-400 mb-3">
            <Calendar size={16} />
            <span>Upcoming Events</span>
          </h3>
          <div className="space-y-2">
            {upcomingEvents.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ x: 5 }}
                className="bg-gray-700 rounded-lg p-3"
              >
                <div className="font-medium text-sm">{event.title}</div>
                <div className="text-xs text-gray-400">{event.date} at {event.time}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-6">
          <h3 className="flex items-center space-x-2 text-sm font-semibold text-gray-400 mb-3">
            <Activity size={16} />
            <span>Recent Activity</span>
          </h3>
          <div className="space-y-2">
            {recentActivities.map((activity) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-700 rounded-lg p-3"
              >
                <div className="text-sm">
                  <span className="text-primary-400">{activity.action}</span> {activity.item}
                </div>
                <div className="text-xs text-gray-400">{activity.time}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <h3 className="flex items-center space-x-2 text-sm font-semibold text-gray-400 mb-3">
            <Trophy size={16} />
            <span>Achievements</span>
          </h3>
          <div className="space-y-2">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                whileHover={{ scale: 1.02 }}
                className={`rounded-lg p-3 ${
                  achievement.earned ? 'bg-gradient-to-r from-success-600 to-success-500' : 'bg-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div className="flex-1">
                    <div className={`font-medium text-sm ${achievement.earned ? 'text-white' : 'text-gray-300'}`}>
                      {achievement.title}
                    </div>
                    <div className={`text-xs ${achievement.earned ? 'text-green-100' : 'text-gray-400'}`}>
                      {achievement.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Completed Stats */}
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-700 rounded-lg p-3 text-center"
          >
            <BookOpen size={24} className="text-primary-400 mx-auto mb-2" />
            <div className="text-2xl font-bold">12</div>
            <div className="text-xs text-gray-400">Lessons</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-700 rounded-lg p-3 text-center"
          >
            <Trophy size={24} className="text-accent-400 mx-auto mb-2" />
            <div className="text-2xl font-bold">5</div>
            <div className="text-xs text-gray-400">Projects</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default RightSidebar;