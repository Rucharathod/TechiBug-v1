export interface Language {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  popularity: number;
  fileExtension: string;
  features: string[];
}

export const languageCategories = {
  'general': '🧠 General-Purpose Programming Languages',
  'scripting': '🖥️ Scripting Languages',
  'functional': '🧮 Functional Programming Languages',
  'system': '🔧 Low-Level / System Languages',
  'scientific': '🧪 Scientific and Data Languages',
  'web': '🌐 Web Development Languages',
  'mobile': '📱 Mobile App Languages',
  'embedded': '🛠️ Embedded / Hardware Languages',
  'oop': '🧑‍💻 Object-Oriented Programming Languages',
  'legacy': '🏛️ Legacy / Historical Languages',
  'ai': '🧠 AI and Machine Learning-Oriented',
  'game': '🎮 Game Development Languages'
};

export const languages: Language[] = [
  // General-Purpose Programming Languages
  {
    id: 'c',
    name: 'C',
    category: 'general',
    icon: '⚡',
    description: 'A powerful general-purpose programming language',
    difficulty: 'Intermediate',
    popularity: 85,
    fileExtension: '.c',
    features: ['Low-level control', 'Memory management', 'System programming']
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'general',
    icon: '🚀',
    description: 'Extension of C with object-oriented features',
    difficulty: 'Advanced',
    popularity: 90,
    fileExtension: '.cpp',
    features: ['Object-oriented', 'Templates', 'Performance']
  },
  {
    id: 'java',
    name: 'Java',
    category: 'general',
    icon: '☕',
    description: 'Write once, run anywhere platform',
    difficulty: 'Intermediate',
    popularity: 95,
    fileExtension: '.java',
    features: ['Platform independent', 'Object-oriented', 'Enterprise ready']
  },
  {
    id: 'python',
    name: 'Python',
    category: 'general',
    icon: '🐍',
    description: 'Simple, readable, and versatile programming language',
    difficulty: 'Beginner',
    popularity: 98,
    fileExtension: '.py',
    features: ['Easy to learn', 'Versatile', 'Large ecosystem']
  },
  {
    id: 'csharp',
    name: 'C#',
    category: 'general',
    icon: '🔷',
    description: 'Modern, object-oriented programming language',
    difficulty: 'Intermediate',
    popularity: 82,
    fileExtension: '.cs',
    features: ['Type-safe', '.NET ecosystem', 'Cross-platform']
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'general',
    icon: '🌟',
    description: 'The language of the web',
    difficulty: 'Beginner',
    popularity: 97,
    fileExtension: '.js',
    features: ['Dynamic', 'Event-driven', 'Full-stack capable']
  },
  {
    id: 'go',
    name: 'Go',
    category: 'general',
    icon: '🚀',
    description: 'Fast, reliable, and efficient programming language',
    difficulty: 'Intermediate',
    popularity: 78,
    fileExtension: '.go',
    features: ['Concurrent', 'Fast compilation', 'Simple syntax']
  },
  {
    id: 'ruby',
    name: 'Ruby',
    category: 'general',
    icon: '💎',
    description: 'A programmer\'s best friend',
    difficulty: 'Beginner',
    popularity: 72,
    fileExtension: '.rb',
    features: ['Readable', 'Flexible', 'Web development']
  },
  {
    id: 'swift',
    name: 'Swift',
    category: 'general',
    icon: '🦉',
    description: 'Modern language for iOS and macOS development',
    difficulty: 'Intermediate',
    popularity: 75,
    fileExtension: '.swift',
    features: ['Type-safe', 'Performance', 'Modern syntax']
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    category: 'general',
    icon: '🎯',
    description: 'Modern programming language for Android',
    difficulty: 'Intermediate',
    popularity: 80,
    fileExtension: '.kt',
    features: ['Interoperable', 'Concise', 'Safe']
  },
  {
    id: 'rust',
    name: 'Rust',
    category: 'general',
    icon: '🦀',
    description: 'Systems programming with memory safety',
    difficulty: 'Advanced',
    popularity: 83,
    fileExtension: '.rs',
    features: ['Memory safe', 'Zero-cost abstractions', 'Concurrent']
  },
  {
    id: 'dart',
    name: 'Dart',
    category: 'general',
    icon: '🎪',
    description: 'Client-optimized language for fast apps',
    difficulty: 'Intermediate',
    popularity: 71,
    fileExtension: '.dart',
    features: ['Flutter framework', 'Hot reload', 'Object-oriented']
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'general',
    icon: '📘',
    description: 'JavaScript with static type definitions',
    difficulty: 'Intermediate',
    popularity: 89,
    fileExtension: '.ts',
    features: ['Type safety', 'Modern features', 'JavaScript compatible']
  },

  // Scripting Languages
  {
    id: 'bash',
    name: 'Bash',
    category: 'scripting',
    icon: '📟',
    description: 'Unix shell and command language',
    difficulty: 'Intermediate',
    popularity: 85,
    fileExtension: '.sh',
    features: ['System automation', 'Command line', 'Text processing']
  },
  {
    id: 'perl',
    name: 'Perl',
    category: 'scripting',
    icon: '🐪',
    description: 'Practical extraction and reporting language',
    difficulty: 'Intermediate',
    popularity: 45,
    fileExtension: '.pl',
    features: ['Text processing', 'Regular expressions', 'System administration']
  },
  {
    id: 'lua',
    name: 'Lua',
    category: 'scripting',
    icon: '🌙',
    description: 'Lightweight, embeddable scripting language',
    difficulty: 'Beginner',
    popularity: 52,
    fileExtension: '.lua',
    features: ['Lightweight', 'Embeddable', 'Game scripting']
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'scripting',
    icon: '🐘',
    description: 'Server-side scripting language',
    difficulty: 'Beginner',
    popularity: 78,
    fileExtension: '.php',
    features: ['Web development', 'Server-side', 'Database integration']
  },
  {
    id: 'powershell',
    name: 'PowerShell',
    category: 'scripting',
    icon: '⚡',
    description: 'Task automation and configuration management',
    difficulty: 'Intermediate',
    popularity: 68,
    fileExtension: '.ps1',
    features: ['Windows automation', 'Object-oriented', 'Cloud management']
  },
  {
    id: 'r',
    name: 'R',
    category: 'scripting',
    icon: '📊',
    description: 'Statistical computing and graphics',
    difficulty: 'Intermediate',
    popularity: 75,
    fileExtension: '.r',
    features: ['Statistical analysis', 'Data visualization', 'Machine learning']
  },

  // Web Development Languages
  {
    id: 'html',
    name: 'HTML',
    category: 'web',
    icon: '🏗️',
    description: 'HyperText Markup Language',
    difficulty: 'Beginner',
    popularity: 95,
    fileExtension: '.html',
    features: ['Structure', 'Semantic markup', 'Accessibility']
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'web',
    icon: '🎨',
    description: 'Cascading Style Sheets',
    difficulty: 'Beginner',
    popularity: 93,
    fileExtension: '.css',
    features: ['Styling', 'Responsive design', 'Animations']
  },

  // Functional Programming Languages
  {
    id: 'haskell',
    name: 'Haskell',
    category: 'functional',
    icon: '📐',
    description: 'Purely functional programming language',
    difficulty: 'Advanced',
    popularity: 38,
    fileExtension: '.hs',
    features: ['Pure functions', 'Lazy evaluation', 'Type system']
  },
  {
    id: 'elixir',
    name: 'Elixir',
    category: 'functional',
    icon: '💜',
    description: 'Dynamic, functional language for scalable applications',
    difficulty: 'Intermediate',
    popularity: 42,
    fileExtension: '.ex',
    features: ['Concurrent', 'Fault-tolerant', 'Distributed']
  },
  {
    id: 'clojure',
    name: 'Clojure',
    category: 'functional',
    icon: '🌿',
    description: 'Dynamic, functional dialect of the Lisp programming language',
    difficulty: 'Advanced',
    popularity: 35,
    fileExtension: '.clj',
    features: ['Immutable data', 'JVM compatible', 'Concurrent programming']
  }
];

export const getLanguagesByCategory = (category: string) => {
  return languages.filter(lang => lang.category === category);
};

export const getLanguageById = (id: string) => {
  return languages.find(lang => lang.id === id);
};