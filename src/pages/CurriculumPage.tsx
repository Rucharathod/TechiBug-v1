import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Play, CheckCircle, Clock, Trophy, Users, Download, ExternalLink } from 'lucide-react';
import { javascriptLessons, javascriptRoadmap, javascriptMentors, javascriptGames, javascriptCheatSheet } from '../data/curriculum/javascript';

const CurriculumPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('lessons');
  const [selectedLesson, setSelectedLesson] = useState(javascriptLessons[0]);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = answerIndex;
    setQuizAnswers(newAnswers);
  };

  const submitQuiz = () => {
    setShowQuizResults(true);
  };

  const calculateQuizScore = () => {
    let correct = 0;
    selectedLesson.quiz.forEach((question, index) => {
      if (quizAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / selectedLesson.quiz.length) * 100);
  };

  const TabButton = ({ id, label, icon: Icon }: { id: string; label: string; icon: any }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
        activeTab === id
          ? 'bg-primary-500 text-white'
          : 'text-gray-400 hover:text-white hover:bg-gray-700'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
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
          JavaScript Complete Curriculum
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Master JavaScript from fundamentals to advanced concepts with our comprehensive curriculum including lessons, quizzes, projects, and expert mentorship.
        </p>
      </motion.div>

      {/* Navigation Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap justify-center gap-2 bg-gray-800 rounded-lg p-2 border border-gray-700"
      >
        <TabButton id="lessons" label="Lessons" icon={BookOpen} />
        <TabButton id="roadmap" label="Roadmap" icon={Trophy} />
        <TabButton id="mentors" label="Mentors" icon={Users} />
        <TabButton id="games" label="Games" icon={Play} />
        <TabButton id="cheatsheet" label="Cheat Sheet" icon={Download} />
      </motion.div>

      {/* Content Area */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Lessons Tab */}
        {activeTab === 'lessons' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Lesson List */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold text-white mb-4">Course Lessons</h3>
              <div className="space-y-2">
                {javascriptLessons.map((lesson, index) => (
                  <motion.button
                    key={lesson.id}
                    onClick={() => setSelectedLesson(lesson)}
                    whileHover={{ x: 5 }}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      selectedLesson.id === lesson.id
                        ? 'border-primary-500 bg-primary-500 bg-opacity-20'
                        : 'border-gray-700 bg-gray-800 hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        index < 2 ? 'bg-green-500' : 'bg-gray-600'
                      }`}>
                        {index < 2 ? <CheckCircle size={16} className="text-white" /> : index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-white">{lesson.title}</h4>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <Clock size={12} />
                          <span>{lesson.duration}</span>
                          <span className={`px-2 py-0.5 rounded text-xs ${
                            lesson.difficulty === 'Beginner' ? 'bg-green-500 bg-opacity-20 text-green-400' :
                            lesson.difficulty === 'Intermediate' ? 'bg-yellow-500 bg-opacity-20 text-yellow-400' :
                            'bg-red-500 bg-opacity-20 text-red-400'
                          }`}>
                            {lesson.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Lesson Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Lesson Header */}
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedLesson.title}</h2>
                <p className="text-gray-400 mb-4">{selectedLesson.description}</p>
                
                {selectedLesson.videoUrl && (
                  <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4">
                    <iframe
                      src={selectedLesson.videoUrl}
                      title={selectedLesson.title}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                )}

                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{selectedLesson.duration}</span>
                  </div>
                  <span className={`px-2 py-1 rounded ${
                    selectedLesson.difficulty === 'Beginner' ? 'bg-green-500 bg-opacity-20 text-green-400' :
                    selectedLesson.difficulty === 'Intermediate' ? 'bg-yellow-500 bg-opacity-20 text-yellow-400' :
                    'bg-red-500 bg-opacity-20 text-red-400'
                  }`}>
                    {selectedLesson.difficulty}
                  </span>
                </div>
              </div>

              {/* Theory */}
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Theory</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                    {selectedLesson.content.theory}
                  </p>
                </div>
              </div>

              {/* Code Examples */}
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Code Examples</h3>
                <div className="space-y-4">
                  {selectedLesson.content.examples.map((example, index) => (
                    <div key={index} className="bg-gray-900 rounded-lg p-4">
                      <pre className="text-sm text-gray-100 overflow-x-auto">
                        <code>{example}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practice Exercise */}
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Practice Exercise</h3>
                <p className="text-gray-300 whitespace-pre-line">
                  {selectedLesson.content.practicalExercise}
                </p>
              </div>

              {/* Best Practices */}
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Best Practices</h3>
                <ul className="space-y-2">
                  {selectedLesson.content.bestPractices.map((practice, index) => (
                    <li key={index} className="flex items-start space-x-2 text-gray-300">
                      <span className="text-primary-400 mt-1">•</span>
                      <span>{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mini Project */}
              <div className="bg-gradient-to-r from-accent-600 to-accent-500 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">🚀 Mini Project Challenge</h3>
                <p className="text-accent-100">{selectedLesson.content.miniProject}</p>
              </div>

              {/* Quiz Section */}
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Knowledge Check Quiz</h3>
                
                {!showQuizResults ? (
                  <div className="space-y-6">
                    {selectedLesson.quiz.map((question, qIndex) => (
                      <div key={question.id} className="p-4 bg-gray-700 rounded-lg">
                        <h4 className="font-medium text-white mb-3">
                          {qIndex + 1}. {question.question}
                        </h4>
                        <div className="space-y-2">
                          {question.options.map((option, oIndex) => (
                            <label key={oIndex} className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="radio"
                                name={`question-${qIndex}`}
                                value={oIndex}
                                onChange={() => handleQuizAnswer(qIndex, oIndex)}
                                className="text-primary-500"
                              />
                              <span className="text-gray-300">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    <button
                      onClick={submitQuiz}
                      disabled={quizAnswers.length < selectedLesson.quiz.length}
                      className="w-full py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50"
                    >
                      Submit Quiz
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-center p-6 bg-gray-700 rounded-lg">
                      <div className="text-3xl font-bold text-primary-400 mb-2">
                        {calculateQuizScore()}%
                      </div>
                      <div className="text-gray-300">
                        You got {selectedLesson.quiz.filter((q, i) => quizAnswers[i] === q.correctAnswer).length} out of {selectedLesson.quiz.length} correct!
                      </div>
                    </div>
                    
                    {selectedLesson.quiz.map((question, index) => (
                      <div key={question.id} className={`p-4 rounded-lg border ${
                        quizAnswers[index] === question.correctAnswer
                          ? 'border-green-500 bg-green-500 bg-opacity-10'
                          : 'border-red-500 bg-red-500 bg-opacity-10'
                      }`}>
                        <h4 className="font-medium text-white mb-2">{question.question}</h4>
                        <p className="text-sm text-gray-400 mb-2">
                          Your answer: {question.options[quizAnswers[index]]}
                        </p>
                        <p className="text-sm text-gray-400 mb-2">
                          Correct answer: {question.options[question.correctAnswer]}
                        </p>
                        <p className="text-sm text-gray-300">{question.explanation}</p>
                      </div>
                    ))}
                    
                    <button
                      onClick={() => {
                        setShowQuizResults(false);
                        setQuizAnswers([]);
                      }}
                      className="w-full py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 transition-colors"
                    >
                      Retake Quiz
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Roadmap Tab */}
        {activeTab === 'roadmap' && (
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">{javascriptRoadmap.title}</h2>
            <p className="text-gray-400 mb-8">{javascriptRoadmap.description}</p>
            
            <div className="space-y-6">
              {javascriptRoadmap.stages.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg"
                >
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{stage.week}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{stage.title}</h3>
                    <p className="text-gray-400 mb-3">{stage.description}</p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h4 className="font-medium text-gray-300 mb-1">Lessons:</h4>
                        <ul className="text-gray-400">
                          {stage.lessons.map((lesson, i) => (
                            <li key={i}>• {lesson}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-300 mb-1">Projects:</h4>
                        <ul className="text-gray-400">
                          {stage.projects.map((project, i) => (
                            <li key={i}>• {project}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-300 mb-1">Skills:</h4>
                        <div className="flex flex-wrap gap-1">
                          {stage.skills.map((skill, i) => (
                            <span key={i} className="px-2 py-1 bg-primary-500 bg-opacity-20 text-primary-400 text-xs rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Mentors Tab */}
        {activeTab === 'mentors' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {javascriptMentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-primary-500 transition-colors"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{mentor.name}</h3>
                    <p className="text-primary-400 text-sm">{mentor.title}</p>
                    <p className="text-gray-400 text-xs">{mentor.followers} followers</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{mentor.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {mentor.expertise.map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-primary-500 bg-opacity-20 text-primary-400 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <a
                  href={mentor.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 w-full py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors justify-center"
                >
                  <ExternalLink size={16} />
                  <span>Visit {mentor.platform}</span>
                </a>
              </motion.div>
            ))}
          </div>
        )}

        {/* Games Tab */}
        {activeTab === 'games' && (
          <div className="grid md:grid-cols-2 gap-6">
            {javascriptGames.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{game.title}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    game.difficulty === 'Beginner' ? 'bg-green-500 bg-opacity-20 text-green-400' :
                    game.difficulty === 'Intermediate' ? 'bg-yellow-500 bg-opacity-20 text-yellow-400' :
                    'bg-red-500 bg-opacity-20 text-red-400'
                  }`}>
                    {game.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-400 mb-4">{game.description}</p>
                
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{game.estimatedTime}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {game.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-white mb-2">Instructions:</h4>
                  <p className="text-gray-300 text-sm whitespace-pre-line">{game.instructions}</p>
                </div>
                
                <button className="w-full py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                  Start Coding Challenge
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {/* Cheat Sheet Tab */}
        {activeTab === 'cheatsheet' && (
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">{javascriptCheatSheet.title}</h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                <Download size={16} />
                <span>Download PDF</span>
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {javascriptCheatSheet.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-gray-700 rounded-lg p-4"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{section.title}</h3>
                  <div className="bg-gray-900 rounded-lg p-3">
                    <pre className="text-sm text-gray-100 overflow-x-auto">
                      <code>{section.content}</code>
                    </pre>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default CurriculumPage;