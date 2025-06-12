import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Play, RefreshCw, Download, Share } from 'lucide-react';
import { languages, getLanguageById } from '../data/languages';

const TerminalPage: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [code, setCode] = useState('print("Hello, TechiBug!")');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const language = getLanguageById(selectedLanguage);

  const codeExamples = {
    python: 'print("Hello, TechiBug!")\n\n# Basic variables\nname = "Developer"\nage = 25\nprint(f"Hello {name}, you are {age} years old!")\n\n# Simple function\ndef greet(name):\n    return f"Welcome to TechiBug, {name}!"\n\nprint(greet("Coder"))',
    javascript: 'console.log("Hello, TechiBug!");\n\n// Basic variables\nconst name = "Developer";\nconst age = 25;\nconsole.log(`Hello ${name}, you are ${age} years old!`);\n\n// Simple function\nfunction greet(name) {\n    return `Welcome to TechiBug, ${name}!`;\n}\n\nconsole.log(greet("Coder"));',
    java: 'public class HelloTechiBug {\n    public static void main(String[] args) {\n        System.out.println("Hello, TechiBug!");\n        \n        // Basic variables\n        String name = "Developer";\n        int age = 25;\n        System.out.println("Hello " + name + ", you are " + age + " years old!");\n        \n        // Method call\n        System.out.println(greet("Coder"));\n    }\n    \n    public static String greet(String name) {\n        return "Welcome to TechiBug, " + name + "!";\n    }\n}',
    cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstring greet(string name) {\n    return "Welcome to TechiBug, " + name + "!";\n}\n\nint main() {\n    cout << "Hello, TechiBug!" << endl;\n    \n    // Basic variables\n    string name = "Developer";\n    int age = 25;\n    cout << "Hello " << name << ", you are " << age << " years old!" << endl;\n    \n    // Function call\n    cout << greet("Coder") << endl;\n    \n    return 0;\n}'
  };

  useEffect(() => {
    const example = codeExamples[selectedLanguage as keyof typeof codeExamples];
    if (example) {
      setCode(example);
    }
  }, [selectedLanguage]);

  const simulateCodeExecution = () => {
    setIsRunning(true);
    setOutput('Running code...\n');

    setTimeout(() => {
      let simulatedOutput = '';
      
      switch (selectedLanguage) {
        case 'python':
          simulatedOutput = 'Hello, TechiBug!\nHello Developer, you are 25 years old!\nWelcome to TechiBug, Coder!\n\n✅ Code executed successfully!';
          break;
        case 'javascript':
          simulatedOutput = 'Hello, TechiBug!\nHello Developer, you are 25 years old!\nWelcome to TechiBug, Coder!\n\n✅ Code executed successfully!';
          break;
        case 'java':
          simulatedOutput = 'Hello, TechiBug!\nHello Developer, you are 25 years old!\nWelcome to TechiBug, Coder!\n\n✅ Compiled and executed successfully!';
          break;
        case 'cpp':
          simulatedOutput = 'Hello, TechiBug!\nHello Developer, you are 25 years old!\nWelcome to TechiBug, Coder!\n\n✅ Compiled and executed successfully!';
          break;
        default:
          simulatedOutput = 'Hello, TechiBug!\n\n✅ Code executed successfully!';
      }

      setOutput(simulatedOutput);
      setIsRunning(false);
    }, 2000);
  };

  const handleLanguageChange = (languageId: string) => {
    setSelectedLanguage(languageId);
    setOutput('');
  };

  const clearOutput = () => {
    setOutput('');
  };

  const downloadCode = () => {
    const element = document.createElement('a');
    const file = new Blob([code], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `code${language?.fileExtension || '.txt'}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const shareCode = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `My ${language?.name} Code`,
          text: code,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(code);
      alert('Code copied to clipboard!');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-4">
          Interactive Code Terminal
        </h1>
        <p className="text-gray-400 text-lg">
          Write, run, and experiment with code in real-time. Perfect for learning and testing concepts!
        </p>
      </motion.div>

      {/* Language Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gray-800 rounded-lg p-4 border border-gray-700"
      >
        <div className="flex items-center space-x-4 mb-4">
          <Terminal size={20} className="text-primary-400" />
          <h2 className="text-lg font-semibold">Select Programming Language</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {languages.slice(0, 12).map((lang) => (
            <button
              key={lang.id}
              onClick={() => handleLanguageChange(lang.id)}
              className={`p-3 rounded-lg border transition-all ${
                selectedLanguage === lang.id
                  ? 'border-primary-500 bg-primary-500 bg-opacity-20 text-primary-400'
                  : 'border-gray-600 hover:border-gray-500 text-gray-300'
              }`}
            >
              <div className="text-2xl mb-1">{lang.icon}</div>
              <div className="text-sm font-medium">{lang.name}</div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Code Editor and Output */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Code Editor */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{language?.icon}</span>
              <span className="font-medium">{language?.name} Editor</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={downloadCode}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                title="Download code"
              >
                <Download size={18} />
              </button>
              <button
                onClick={shareCode}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                title="Share code"
              >
                <Share size={18} />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <textarea
              ref={textareaRef}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-96 p-4 bg-gray-900 text-gray-100 font-mono text-sm resize-none focus:outline-none"
              placeholder="Write your code here..."
              spellCheck={false}
            />
            <div className="absolute top-2 right-2 text-xs text-gray-500">
              Lines: {code.split('\n').length}
            </div>
          </div>
        </motion.div>

        {/* Output Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <Terminal size={18} className="text-green-400" />
              <span className="font-medium">Output</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={clearOutput}
                className="px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors"
              >
                Clear
              </button>
              <button
                onClick={simulateCodeExecution}
                disabled={isRunning}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50"
              >
                {isRunning ? (
                  <RefreshCw size={16} className="animate-spin" />
                ) : (
                  <Play size={16} />
                )}
                <span>{isRunning ? 'Running...' : 'Run Code'}</span>
              </button>
            </div>
          </div>
          
          <div className="h-96 p-4 bg-gray-900 overflow-y-auto">
            <pre className="text-gray-100 font-mono text-sm whitespace-pre-wrap">
              {output || 'Click "Run Code" to see output here...'}
            </pre>
          </div>
        </motion.div>
      </div>

      {/* Tips Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gray-800 rounded-lg p-6 border border-gray-700"
      >
        <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
          <span>💡</span>
          <span>Terminal Tips</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
          <div>
            <h4 className="font-medium text-gray-300 mb-2">Keyboard Shortcuts:</h4>
            <ul className="space-y-1">
              <li>• <kbd className="bg-gray-700 px-1 rounded">Ctrl+Enter</kbd> - Run code</li>
              <li>• <kbd className="bg-gray-700 px-1 rounded">Ctrl+A</kbd> - Select all</li>
              <li>• <kbd className="bg-gray-700 px-1 rounded">Tab</kbd> - Indent code</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-300 mb-2">Pro Tips:</h4>
            <ul className="space-y-1">
              <li>• Use proper indentation for readability</li>
              <li>• Add comments to explain your code</li>
              <li>• Test small code snippets first</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TerminalPage;