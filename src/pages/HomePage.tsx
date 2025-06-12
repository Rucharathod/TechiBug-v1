import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, BookOpen, Users, Trophy, ArrowRight, Play, Star } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Interactive Learning',
      description: 'Learn by doing with our hands-on coding exercises and real-time feedback.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Master programming with structured lessons from beginner to advanced.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Expert Mentors',
      description: 'Learn from industry professionals and get personalized guidance.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Trophy,
      title: 'Gamified Experience',
      description: 'Earn badges, maintain streaks, and compete with fellow learners.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const popularLanguages = [
    { name: 'Python', icon: '🐍', students: '50K+', rating: 4.9 },
    { name: 'JavaScript', icon: '🌟', students: '45K+', rating: 4.8 },
    { name: 'Java', icon: '☕', students: '38K+', rating: 4.7 },
    { name: 'React', icon: '⚛️', students: '32K+', rating: 4.9 }
  ];

  const stats = [
    { number: '100+', label: 'Programming Languages' },
    { number: '10K+', label: 'Students Learning' },
    { number: '500+', label: 'Practice Projects' },
    { number: '50+', label: 'Expert Mentors' }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary-400 via-accent-400 to-success-400 bg-clip-text text-transparent mb-6">
            Master Programming
          </h1>
          <h2 className="text-2xl lg:text-3xl text-gray-300 mb-8">
            Interactive Learning • Real Projects • Expert Mentorship
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join thousands of learners on TechiBug and transform your coding skills with our comprehensive, 
            hands-on approach to programming education. From your first line of code to advanced software development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link
            to="/roadmap"
            className="group bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
          >
            <span>Start Learning</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/terminal"
            className="group border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-primary-500 hover:text-primary-400 transition-all duration-300 flex items-center space-x-2"
          >
            <Play size={18} />
            <span>Try Terminal</span>
          </Link>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-primary-500 transition-colors"
          >
            <div className="text-3xl lg:text-4xl font-bold text-primary-400 mb-2">{stat.number}</div>
            <div className="text-gray-400 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Choose TechiBug?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience a revolutionary approach to learning programming with features designed for modern developers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-transparent hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Popular Languages */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Most Popular Languages</h2>
          <p className="text-gray-400 text-lg">Start with the technologies that matter most in today's market.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularLanguages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-primary-500 transition-all duration-300 cursor-pointer"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{language.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{language.name}</h3>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <span className="text-gray-400">{language.rating}</span>
                </div>
                <div className="text-sm text-gray-500">{language.students} students</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-12"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
        <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
          Join our community of passionate learners and build the skills that will define your future in technology.
        </p>
        <Link
          to="/roadmap"
          className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
        >
          <span>Choose Your Path</span>
          <ArrowRight size={18} />
        </Link>
      </motion.section>
    </div>
  );
};

export default HomePage;