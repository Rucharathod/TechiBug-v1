export interface Mentor {
  id: string;
  name: string;
  title: string;
  expertise: string[];
  bio: string;
  image: string;
  social: {
    youtube?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  verified: boolean;
}

export const mentors: Mentor[] = [
  {
    id: 'kent-dodds',
    name: 'Kent C. Dodds',
    title: 'Software Engineer & Educator',
    expertise: ['React', 'JavaScript', 'Testing', 'Web Development'],
    bio: 'Full-time educator focused on making the web better by teaching high-quality software development.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      youtube: 'https://youtube.com/@kentcdodds',
      linkedin: 'https://linkedin.com/in/kentcdodds',
      twitter: 'https://twitter.com/kentcdodds',
      github: 'https://github.com/kentcdodds'
    },
    verified: true
  },
  {
    id: 'brad-traversy',
    name: 'Brad Traversy',
    title: 'Web Developer & YouTuber',
    expertise: ['JavaScript', 'Node.js', 'React', 'Full Stack'],
    bio: 'Passionate about teaching web development and helping developers grow their skills.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      youtube: 'https://youtube.com/@TraversyMedia',
      linkedin: 'https://linkedin.com/in/bradtraversy',
      twitter: 'https://twitter.com/traversymedia',
      github: 'https://github.com/bradtraversy'
    },
    verified: true
  },
  {
    id: 'corey-schafer',
    name: 'Corey Schafer',
    title: 'Python Developer & Educator',
    expertise: ['Python', 'Django', 'Flask', 'Data Science'],
    bio: 'Creating programming tutorials to help people learn Python and web development.',
    image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      youtube: 'https://youtube.com/@coreyms',
      linkedin: 'https://linkedin.com/in/coreyschafer',
      twitter: 'https://twitter.com/coreymschafer',
      github: 'https://github.com/CoreyMSchafer'
    },
    verified: true
  },
  {
    id: 'academind',
    name: 'Maximilian Schwarzmüller',
    title: 'Full-Stack Developer & Instructor',
    expertise: ['React', 'Vue', 'Angular', 'Node.js', 'Flutter'],
    bio: 'Teaching modern web development and mobile app development to thousands of students.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      youtube: 'https://youtube.com/@academind',
      linkedin: 'https://linkedin.com/in/maximilian-schwarzmueller',
      twitter: 'https://twitter.com/maxedapps',
      github: 'https://github.com/maxschwarzmueller'
    },
    verified: true
  },
  {
    id: 'ben-awad',
    name: 'Ben Awad',
    title: 'Software Engineer & Content Creator',
    expertise: ['React', 'GraphQL', 'TypeScript', 'Full Stack'],
    bio: 'Building products and sharing knowledge about modern web development.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      youtube: 'https://youtube.com/@benawad',
      linkedin: 'https://linkedin.com/in/benawad',
      twitter: 'https://twitter.com/benawad',
      github: 'https://github.com/benawad'
    },
    verified: true
  },
  {
    id: 'sentdex',
    name: 'Harrison Kinsley',
    title: 'Python & AI Educator',
    expertise: ['Python', 'Machine Learning', 'AI', 'Data Science'],
    bio: 'Teaching Python programming with focus on practical machine learning and AI applications.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      youtube: 'https://youtube.com/@sentdex',
      linkedin: 'https://linkedin.com/in/harrisonkinsley',
      twitter: 'https://twitter.com/sentdex',
      github: 'https://github.com/Sentdex'
    },
    verified: true
  }
];