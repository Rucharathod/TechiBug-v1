import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, BookOpen, Code, CheckCircle, ExternalLink, Download } from 'lucide-react';

const LessonPage: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const [code, setCode] = useState('# Write your Python code here\nprint("Hello, World!")');
  const [output, setOutput] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Mock lesson data
  const lesson = {
    id: lessonId,
    title: 'Python Fundamentals',
    description: 'Learn the basics of Python programming including variables, data types, and basic operations.',
    duration: '45 minutes',
    videoUrl: 'https://www.youtube.com/embed/kqtD5dpn9C8', // Python tutorial
    cheatSheetUrl: '#',
    content: {
      introduction: `
        Python is a high-level, interpreted programming language known for its simplicity and readability. 
        It's an excellent choice for beginners and is widely used in web development, data science, 
        artificial intelligence, and automation.
      `,
      concepts: [
        {
          title: 'Variables and Data Types',
          explanation: `
            In Python, variables are used to store data. You don't need to declare the type of a variable 
            explicitly - Python figures it out automatically. Here are the main data types:
            
            • Strings: Text data enclosed in quotes
            • Integers: Whole numbers
            • Floats: Decimal numbers
            • Booleans: True or False values
          `,
          example: `# Variables and Data Types
name = "Alice"        # String
age = 25             # Integer
height = 5.6         # Float
is_student = True    # Boolean

print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height}")
print(f"Is student: {is_student}")`
        },
        {
          title: 'Basic Operations',
          explanation: `
            Python supports various operations for different data types:
            
            • Arithmetic: +, -, *, /, //, %, **
            • Comparison: ==, !=, <, >, <=, >=
            • Logical: and, or, not
          `,
          example: `# Basic Operations
a = 10
b = 3

# Arithmetic
print(f"Addition: {a + b}")
print(f"Division: {a / b}")
print(f"Floor division: {a // b}")
print(f"Modulo: {a % b}")

# Comparison
print(f"Is a greater than b? {a > b}")

# Logical
print(f"Both conditions: {a > 5 and b < 5}")`
        }
      ],
      realWorldExample: `
        Let's create a simple calculator that demonstrates these concepts:
        
        Imagine you're building a tip calculator for a restaurant app. You need to:
        1. Store the bill amount (float)
        2. Store the tip percentage (integer)
        3. Calculate the tip amount
        4. Calculate the total amount
        5. Display the results in a user-friendly format
      `
    },
    questions: [
      {
        id: 1,
        question: 'Create a variable called "temperature" and assign it the value 25.5. Then print it.',
        expectedOutput: '25.5',
        hint: 'Use the assignment operator (=) to assign the value to the variable.'
      },
      {
        id: 2,
        question: 'Create two variables: "first_name" with value "John" and "last_name" with value "Doe". Print the full name.',
        expectedOutput: 'John Doe',
        hint: 'You can concatenate strings using the + operator or use f-strings.'
      },
      {
        id: 3,
        question: 'Calculate the area of a rectangle with width 8 and height 12. Store the result in a variable called "area" and print it.',
        expectedOutput: '96',
        hint: 'Area of rectangle = width × height'
      }
    ]
  };

  const runCode = () => {
    // Simulate code execution
    setOutput('Running code...\n');
    setTimeout(() => {
      setOutput('Hello, World!\n\n✅ Code executed successfully!');
    }, 1000);
  };

  const nextQuestion = () => {
    if (currentQuestion < lesson.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center space-x-4"
      >
        <Link
          to="/"
          className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-white">{lesson.title}</h1>
          <p className="text-gray-400">{lesson.description}</p>
          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
            <span>⏱️ {lesson.duration}</span>
            <span>📚 Beginner Level</span>
          </div>
        </div>
      </motion.div>

      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gray-800 rounded-lg p-6 border border-gray-700"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white flex items-center space-x-2">
            <Play className="text-primary-400" size={20} />
            <span>Lesson Video</span>
          </h2>
          <div className="flex space-x-2">
            <a
              href={lesson.cheatSheetUrl}
              className="flex items-center space-x-1 px-3 py-1 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors text-sm"
            >
              <Download size={14} />
              <span>Cheat Sheet</span>
            </a>
            <a
              href={lesson.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 px-3 py-1 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 transition-colors text-sm"
            >
              <ExternalLink size={14} />
              <span>Full Screen</span>
            </a>
          </div>
        </div>
        
        <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
          <iframe
            src={lesson.videoUrl}
            title={lesson.title}
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Theory */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
              <BookOpen className="text-primary-400" size={20} />
              <span>Introduction</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">{lesson.content.introduction}</p>
          </div>

          {lesson.content.concepts.map((concept, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">{concept.title}</h3>
              <p className="text-gray-300 mb-4 whitespace-pre-line">{concept.explanation}</p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-sm text-gray-100 overflow-x-auto">
                  <code>{concept.example}</code>
                </pre>
              </div>
            </div>
          ))}

          <div className="bg-gradient-to-r from-accent-600 to-accent-500 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">🌍 Real-World Application</h3>
            <p className="text-accent-100 whitespace-pre-line">{lesson.content.realWorldExample}</p>
          </div>
        </motion.div>

        {/* Practice */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          {/* Code Editor */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h3 className="font-semibold text-white flex items-center space-x-2">
                <Code className="text-primary-400" size={18} />
                <span>Practice Code</span>
              </h3>
              <button
                onClick={runCode}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                <Play size={16} />
                <span>Run</span>
              </button>
            </div>
            
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-48 p-4 bg-gray-900 text-gray-100 font-mono text-sm resize-none focus:outline-none"
              placeholder="Write your code here..."
            />
          </div>

          {/* Output */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-semibold text-white">Output</h3>
            </div>
            <div className="h-32 p-4 bg-gray-900 overflow-y-auto">
              <pre className="text-gray-100 font-mono text-sm whitespace-pre-wrap">
                {output || 'Click "Run" to see output here...'}
              </pre>
            </div>
          </div>

          {/* Practice Questions */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-white">Practice Questions</h3>
              <span className="text-sm text-gray-400">
                {currentQuestion + 1} of {lesson.questions.length}
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-gray-700 rounded-lg">
                <h4 className="font-medium text-white mb-2">Question {currentQuestion + 1}:</h4>
                <p className="text-gray-300">{lesson.questions[currentQuestion].question}</p>
              </div>

              <div className="p-3 bg-blue-500 bg-opacity-20 border border-blue-500 border-opacity-50 rounded-lg">
                <p className="text-blue-300 text-sm">
                  💡 <strong>Hint:</strong> {lesson.questions[currentQuestion].hint}
                </p>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                  className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 transition-colors disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  onClick={nextQuestion}
                  disabled={currentQuestion === lesson.questions.length - 1}
                  className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Completion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-success-600 to-success-500 rounded-lg p-6 text-center"
      >
        <CheckCircle size={48} className="text-white mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Great Progress!</h3>
        <p className="text-success-100 mb-6">
          You're doing amazing! Complete the practice questions to master this lesson.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-success-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Mark as Complete
          </button>
          <Link
            to="/"
            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-success-600 transition-colors"
          >
            Next Lesson
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default LessonPage;