import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Trophy, Clock, Users, Star, Gamepad2 } from 'lucide-react';

const GamesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const games = [
    {
      id: 1,
      title: 'Code Combat',
      description: 'Learn programming by commanding your hero through epic adventures',
      category: 'Adventure',
      difficulty: 'Beginner',
      players: '1.2M+',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
      languages: ['Python', 'JavaScript', 'Java'],
      estimatedTime: '30-60 min'
    },
    {
      id: 2,
      title: 'CSS Battle',
      description: 'Replicate targets with the shortest CSS code possible',
      category: 'Puzzle',
      difficulty: 'Intermediate',
      players: '500K+',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      languages: ['CSS', 'HTML'],
      estimatedTime: '15-30 min'
    },
    {
      id: 3,
      title: 'Algorithm Arena',
      description: 'Compete in real-time algorithm challenges',
      category: 'Competition',
      difficulty: 'Advanced',
      players: '800K+',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      languages: ['Python', 'C++', 'Java', 'JavaScript'],
      estimatedTime: '45-90 min'
    },
    {
      id: 4,
      title: 'Debug Detective',
      description: 'Find and fix bugs in mysterious code scenarios',
      category: 'Mystery',
      difficulty: 'Intermediate',
      players: '300K+',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      languages: ['JavaScript', 'Python', 'Java'],
      estimatedTime: '20-40 min'
    },
    {
      id: 5,
      title: 'Regex Racer',
      description: 'Master regular expressions through fast-paced challenges',
      category: 'Racing',
      difficulty: 'Intermediate',
      players: '250K+',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400',
      languages: ['Regex', 'JavaScript', 'Python'],
      estimatedTime: '10-25 min'
    },
    {
      id: 6,
      title: 'SQL Quest',
      description: 'Embark on database adventures and master SQL queries',
      category: 'Adventure',
      difficulty: 'Beginner',
      players: '600K+',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400',
      languages: ['SQL'],
      estimatedTime: '25-45 min'
    },
    {
      id: 7,
      title: 'Git Guardian',
      description: 'Learn version control through interactive scenarios',
      category: 'Strategy',
      difficulty: 'Beginner',
      players: '400K+',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400',
      languages: ['Git', 'Command Line'],
      estimatedTime: '20-35 min'
    },
    {
      id: 8,
      title: 'API Adventure',
      description: 'Build and consume APIs in exciting real-world scenarios',
      category: 'Adventure',
      difficulty: 'Advanced',
      players: '350K+',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=400',
      languages: ['JavaScript', 'Python', 'Node.js'],
      estimatedTime: '60-120 min'
    },
    {
      id: 9,
      title: 'Memory Manager',
      description: 'Optimize memory usage in challenging programming puzzles',
      category: 'Puzzle',
      difficulty: 'Advanced',
      players: '200K+',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
      languages: ['C', 'C++', 'Rust'],
      estimatedTime: '40-80 min'
    },
    {
      id: 10,
      title: 'Frontend Frenzy',
      description: 'Build beautiful UIs under time pressure',
      category: 'Racing',
      difficulty: 'Intermediate',
      players: '450K+',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
      languages: ['HTML', 'CSS', 'JavaScript', 'React'],
      estimatedTime: '30-60 min'
    }
  ];

  const categories = ['All', ...new Set(games.map(game => game.category))];

  const filteredGames = selectedCategory === 'All' 
    ? games 
    : games.filter(game => game.category === selectedCategory);

  const GameCard = ({ game }: { game: typeof games[0] }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-primary-500 transition-all duration-300 group"
    >
      <div className="relative">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-2 py-1 rounded text-xs font-medium ${
            game.difficulty === 'Beginner' ? 'bg-green-500 bg-opacity-80 text-white' :
            game.difficulty === 'Intermediate' ? 'bg-yellow-500 bg-opacity-80 text-white' :
            'bg-red-500 bg-opacity-80 text-white'
          }`}>
            {game.difficulty}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 bg-gray-900 bg-opacity-80 text-white rounded text-xs">
            {game.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {game.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{game.description}</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {game.languages.slice(0, 3).map((language, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary-500 bg-opacity-20 text-primary-400 text-xs rounded"
            >
              {language}
            </span>
          ))}
          {game.languages.length > 3 && (
            <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded">
              +{game.languages.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center space-x-1">
            <Star size={14} className="text-yellow-400 fill-current" />
            <span>{game.rating}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users size={14} />
            <span>{game.players}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>{game.estimatedTime}</span>
          </div>
        </div>

        <button className="w-full flex items-center justify-center space-x-2 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors group">
          <Play size={16} />
          <span>Play Now</span>
        </button>
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
          Learning Games
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Master programming concepts through engaging games and interactive challenges. Learn while having fun!
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
          <div className="text-2xl font-bold text-primary-400">{games.length}</div>
          <div className="text-sm text-gray-400">Games Available</div>
        </div>
        <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
          <div className="text-2xl font-bold text-accent-400">5M+</div>
          <div className="text-sm text-gray-400">Games Played</div>
        </div>
        <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
          <div className="text-2xl font-bold text-success-400">4.7</div>
          <div className="text-sm text-gray-400">Average Rating</div>
        </div>
        <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
          <div className="text-2xl font-bold text-yellow-400">15+</div>
          <div className="text-sm text-gray-400">Languages</div>
        </div>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center"
      >
        <div className="bg-gray-800 rounded-lg p-1 border border-gray-700">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Games Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <GameCard game={game} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Featured Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg p-8"
      >
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Gamepad2 size={48} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Game of the Week</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Try "Algorithm Arena" - our most popular competitive programming game. 
            Challenge yourself against players worldwide and climb the leaderboards!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              <Play size={18} />
              <span>Play Now</span>
            </button>
            <button className="flex items-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              <Trophy size={18} />
              <span>View Leaderboard</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Tips Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gray-800 rounded-lg p-6 border border-gray-700"
      >
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
          <span>🎯</span>
          <span>Gaming Tips</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400">
          <div>
            <h4 className="font-medium text-gray-300 mb-2">Maximize Learning:</h4>
            <ul className="space-y-1">
              <li>• Start with beginner games to build confidence</li>
              <li>• Focus on understanding concepts, not just winning</li>
              <li>• Review solutions after completing challenges</li>
              <li>• Practice regularly to maintain skills</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-300 mb-2">Pro Strategies:</h4>
            <ul className="space-y-1">
              <li>• Read problem statements carefully</li>
              <li>• Plan your approach before coding</li>
              <li>• Use debugging tools when stuck</li>
              <li>• Learn from other players' solutions</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GamesPage;