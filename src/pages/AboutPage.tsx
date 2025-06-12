import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, BookOpen, Trophy, Code, Heart, Zap, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const mission = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To democratize programming education and make high-quality coding skills accessible to everyone, everywhere.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description: 'Creating a world where anyone can learn to code and build amazing things that solve real problems.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Zap,
      title: 'Our Values',
      description: 'We believe in hands-on learning, community support, and making programming education engaging and fun.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const features = [
    {
      icon: Code,
      title: 'Interactive Coding',
      description: 'Learn by writing real code with immediate feedback and guidance.',
      stats: '1M+ code executions'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Structured learning paths from beginner to advanced levels.',
      stats: '100+ languages covered'
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Get guidance from industry professionals and experienced developers.',
      stats: '50+ expert mentors'
    },
    {
      icon: Trophy,
      title: 'Gamified Learning',
      description: 'Earn achievements, maintain streaks, and track your progress.',
      stats: '10K+ badges earned'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Connect with learners and developers from around the world.',
      stats: '100+ countries'
    }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      bio: 'Former Google engineer passionate about education technology.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Education',
      bio: 'Computer Science PhD with 10+ years in curriculum development.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead Developer',
      bio: 'Full-stack engineer building the next generation of learning tools.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-12"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-6">
            About TechiBug
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to revolutionize how people learn programming. TechiBug combines 
            interactive learning, real-world projects, and expert mentorship to create the ultimate 
            coding education experience.
          </p>
        </motion.div>
      </motion.section>

      {/* Mission, Vision, Values */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid md:grid-cols-3 gap-8"
      >
        {mission.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="text-center p-8 bg-gray-800 rounded-xl border border-gray-700"
          >
            <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
              <item.icon size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Story Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-gray-800 rounded-2xl p-8 lg:p-12"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              TechiBug was born from a simple observation: traditional programming education wasn't keeping 
              up with how people actually learn best. We saw brilliant minds struggling with outdated teaching 
              methods, and talented individuals giving up on their coding dreams because of poor learning experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Founded in 2023 by a team of educators and engineers from top tech companies, TechiBug represents 
              a fundamental shift toward interactive, practical, and engaging programming education. We believe 
              that everyone has the potential to code – they just need the right environment and support.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Today, we're proud to serve thousands of learners worldwide, from complete beginners taking their 
              first steps in programming to experienced developers expanding their skill sets. Our platform continues 
              to evolve, always with one goal in mind: making programming education accessible, effective, and enjoyable for everyone.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Features Grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">What Makes Us Different</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We've reimagined programming education from the ground up, focusing on what actually works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-primary-500 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{feature.description}</p>
              <div className="text-primary-400 font-medium text-sm">{feature.stats}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-gray-400 text-lg">The passionate individuals behind TechiBug's mission.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-primary-500 transition-colors"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
              <div className="text-primary-400 font-medium mb-3">{member.role}</div>
              <p className="text-gray-400 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Impact Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-12 text-center"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Impact</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">10K+</div>
            <div className="text-primary-100">Students Trained</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-primary-100">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-primary-100">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">100+</div>
            <div className="text-primary-100">Countries Reached</div>
          </div>
        </div>
        <p className="text-primary-100 text-lg max-w-2xl mx-auto">
          We're proud of the impact we've made, but we're just getting started. Join us in our mission 
          to make programming education accessible to everyone.
        </p>
      </motion.section>
    </div>
  );
};

export default AboutPage;