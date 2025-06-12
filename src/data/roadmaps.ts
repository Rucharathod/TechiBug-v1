export interface RoadmapNode {
  id: string;
  title: string;
  description: string;
  skills: string[];
  level: number;
  position: { x: number; y: number };
  dependencies: string[];
}

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  estimatedDuration: string;
  nodes: RoadmapNode[];
}

export const roadmaps: Roadmap[] = [
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Complete path to becoming a software developer',
    estimatedDuration: '12-18 months',
    nodes: [
      {
        id: 'fundamentals',
        title: 'Programming Fundamentals',
        description: 'Learn basic programming concepts and logic',
        skills: ['Variables', 'Control structures', 'Functions', 'Data types'],
        level: 1,
        position: { x: 0, y: 0 },
        dependencies: []
      },
      {
        id: 'oop',
        title: 'Object-Oriented Programming',
        description: 'Master OOP principles and design patterns',
        skills: ['Classes', 'Inheritance', 'Polymorphism', 'Encapsulation'],
        level: 2,
        position: { x: 1, y: 0 },
        dependencies: ['fundamentals']
      },
      {
        id: 'data-structures',
        title: 'Data Structures & Algorithms',
        description: 'Understand efficient data organization and algorithms',
        skills: ['Arrays', 'Linked Lists', 'Trees', 'Sorting algorithms'],
        level: 3,
        position: { x: 2, y: 0 },
        dependencies: ['oop']
      },
      {
        id: 'databases',
        title: 'Database Management',
        description: 'Learn to work with databases and SQL',
        skills: ['SQL', 'Database design', 'CRUD operations', 'Relationships'],
        level: 3,
        position: { x: 2, y: 1 },
        dependencies: ['oop']
      },
      {
        id: 'version-control',
        title: 'Version Control',
        description: 'Master Git and collaborative development',
        skills: ['Git basics', 'Branching', 'Merging', 'GitHub'],
        level: 2,
        position: { x: 1, y: 1 },
        dependencies: ['fundamentals']
      }
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Frontend and backend web development skills',
    estimatedDuration: '8-12 months',
    nodes: [
      {
        id: 'html-css',
        title: 'HTML & CSS',
        description: 'Foundation of web development',
        skills: ['HTML5', 'CSS3', 'Responsive design', 'Flexbox/Grid'],
        level: 1,
        position: { x: 0, y: 0 },
        dependencies: []
      },
      {
        id: 'javascript-basics',
        title: 'JavaScript Fundamentals',
        description: 'Interactive web programming',
        skills: ['DOM manipulation', 'Events', 'Async programming', 'ES6+'],
        level: 2,
        position: { x: 1, y: 0 },
        dependencies: ['html-css']
      },
      {
        id: 'frontend-framework',
        title: 'Frontend Framework',
        description: 'Modern frontend development with React/Vue/Angular',
        skills: ['Component architecture', 'State management', 'Routing', 'Hooks'],
        level: 3,
        position: { x: 2, y: 0 },
        dependencies: ['javascript-basics']
      },
      {
        id: 'backend-development',
        title: 'Backend Development',
        description: 'Server-side programming and APIs',
        skills: ['Node.js/Express', 'RESTful APIs', 'Authentication', 'Middleware'],
        level: 3,
        position: { x: 2, y: 1 },
        dependencies: ['javascript-basics']
      }
    ]
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Analytics, machine learning, and data insights',
    estimatedDuration: '10-15 months',
    nodes: [
      {
        id: 'python-basics',
        title: 'Python Programming',
        description: 'Python fundamentals for data science',
        skills: ['Python syntax', 'Data types', 'Libraries', 'Functions'],
        level: 1,
        position: { x: 0, y: 0 },
        dependencies: []
      },
      {
        id: 'data-analysis',
        title: 'Data Analysis',
        description: 'Data manipulation and analysis with pandas',
        skills: ['Pandas', 'NumPy', 'Data cleaning', 'Statistical analysis'],
        level: 2,
        position: { x: 1, y: 0 },
        dependencies: ['python-basics']
      },
      {
        id: 'visualization',
        title: 'Data Visualization',
        description: 'Creating insights through visual representation',
        skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Dashboard creation'],
        level: 2,
        position: { x: 1, y: 1 },
        dependencies: ['python-basics']
      },
      {
        id: 'machine-learning',
        title: 'Machine Learning',
        description: 'Predictive modeling and AI algorithms',
        skills: ['Scikit-learn', 'Model training', 'Feature engineering', 'Evaluation'],
        level: 3,
        position: { x: 2, y: 0 },
        dependencies: ['data-analysis', 'visualization']
      }
    ]
  }
];

export const getRoadmapById = (id: string) => {
  return roadmaps.find(roadmap => roadmap.id === id);
};