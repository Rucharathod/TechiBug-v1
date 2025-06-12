export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  languageId: string;
  estimatedTime: string;
  skills: string[];
  image?: string;
}

export const projects: Project[] = [
  // Python Projects
  {
    id: 'python-calculator',
    title: 'Simple Calculator',
    description: 'Build a basic calculator with GUI using tkinter',
    difficulty: 'Beginner',
    languageId: 'python',
    estimatedTime: '2-3 hours',
    skills: ['Basic syntax', 'Functions', 'GUI programming']
  },
  {
    id: 'python-todo',
    title: 'To-Do List App',
    description: 'Create a task management application with file storage',
    difficulty: 'Beginner',
    languageId: 'python',
    estimatedTime: '4-5 hours',
    skills: ['File handling', 'Data structures', 'User input']
  },
  {
    id: 'python-weather',
    title: 'Weather App',
    description: 'Fetch weather data from API and display it beautifully',
    difficulty: 'Intermediate',
    languageId: 'python',
    estimatedTime: '6-8 hours',
    skills: ['API integration', 'JSON handling', 'Error handling']
  },
  {
    id: 'python-web-scraper',
    title: 'Web Scraper',
    description: 'Extract data from websites using BeautifulSoup',
    difficulty: 'Intermediate',
    languageId: 'python',
    estimatedTime: '8-10 hours',
    skills: ['Web scraping', 'HTML parsing', 'Data processing']
  },
  {
    id: 'python-chatbot',
    title: 'AI Chatbot',
    description: 'Build an intelligent chatbot using NLP libraries',
    difficulty: 'Advanced',
    languageId: 'python',
    estimatedTime: '15-20 hours',
    skills: ['Machine learning', 'NLP', 'AI integration']
  },

  // JavaScript Projects
  {
    id: 'js-clock',
    title: 'Digital Clock',
    description: 'Create an interactive digital clock with multiple time zones',
    difficulty: 'Beginner',
    languageId: 'javascript',
    estimatedTime: '2-3 hours',
    skills: ['DOM manipulation', 'Date objects', 'CSS styling']
  },
  {
    id: 'js-quiz',
    title: 'Quiz Application',
    description: 'Interactive quiz game with scoring and timer',
    difficulty: 'Intermediate',
    languageId: 'javascript',
    estimatedTime: '6-8 hours',
    skills: ['Event handling', 'Local storage', 'Game logic']
  },
  {
    id: 'js-expense-tracker',
    title: 'Expense Tracker',
    description: 'Personal finance management application',
    difficulty: 'Intermediate',
    languageId: 'javascript',
    estimatedTime: '10-12 hours',
    skills: ['Data persistence', 'Charts/graphs', 'Form validation']
  },

  // Java Projects
  {
    id: 'java-banking',
    title: 'Banking System',
    description: 'Simple banking application with account management',
    difficulty: 'Intermediate',
    languageId: 'java',
    estimatedTime: '12-15 hours',
    skills: ['OOP concepts', 'File I/O', 'Exception handling']
  },
  {
    id: 'java-library',
    title: 'Library Management',
    description: 'Manage books, members, and borrowing system',
    difficulty: 'Advanced',
    languageId: 'java',
    estimatedTime: '20-25 hours',
    skills: ['Database integration', 'GUI development', 'System design']
  }
];

export const getProjectsByLanguage = (languageId: string) => {
  return projects.filter(project => project.languageId === languageId);
};

export const intermediateProjects: Project[] = [
  {
    id: 'full-stack-blog',
    title: 'Full-Stack Blog Platform',
    description: 'Complete blogging platform with authentication, comments, and admin panel',
    difficulty: 'Advanced',
    languageId: 'javascript',
    estimatedTime: '40-50 hours',
    skills: ['Frontend development', 'Backend APIs', 'Database design', 'Authentication']
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Website',
    description: 'Online shopping platform with payment integration',
    difficulty: 'Advanced',
    languageId: 'javascript',
    estimatedTime: '60-80 hours',
    skills: ['Full-stack development', 'Payment processing', 'Inventory management']
  },
  {
    id: 'social-media-app',
    title: 'Social Media Application',
    description: 'Social networking app with real-time features',
    difficulty: 'Advanced',
    languageId: 'javascript',
    estimatedTime: '80-100 hours',
    skills: ['Real-time communication', 'Media handling', 'Scalable architecture']
  }
];