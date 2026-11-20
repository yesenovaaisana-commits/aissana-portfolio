export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  category: 'HTML / CSS / JS' | 'React';
  liveUrl: string;
  githubUrl: string;
  accentGradient: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'Work' | 'Leadership' | 'Education';
  bullets: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const HERO_DATA = {
  name: 'Yessenova Aissana',
  badge: '1st-Year Student · Open to beginner internships & study projects',
  role: 'Aspiring Frontend Developer',
  major: 'Information Systems Student',
  tagline:
    'I build clean, responsive web pages and small interactive apps while mastering modern JavaScript and React.',
};

export const ABOUT_DATA = {
  paragraphs: [
    'Hi! I’m Aissana, a first-year Information Systems student passionate about web development and UI design. I love turning ideas into structured, responsive websites that look great on both desktop and mobile screens.',
    'Right now, I am strengthening my foundation in JavaScript, TypeScript, and React through hands-on coursework and personal mini-projects. I enjoy learning how clean layout, semantic HTML, and thoughtful styling make interfaces intuitive for users.',
  ],
  quickFacts: [
    { label: 'Year & Major', value: '1st Year · Information Systems' },
    { label: 'Current Focus', value: 'JavaScript, React & Tailwind CSS' },
    { label: 'Location', value: 'Almaty, Kazakhstan' },
  ],
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Web Fundamentals',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Design', 'Flexbox & Grid'],
  },
  {
    category: 'Frameworks & Styling',
    items: ['React (Basics)', 'TypeScript (Basics)', 'Tailwind CSS', 'Figma (UI Prototyping)'],
  },
  {
    category: 'Tools & Basics',
    items: ['Git', 'GitHub', 'VS Code', 'Vite', 'Vercel'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'study-planner',
    title: 'UniTrack',
    subtitle: 'Simple Course & Task Tracker',
    description:
      'A clean single-page to-do and deadline tracker built to organize first-year university assignments, filter tasks by subject, and save progress directly in the browser.',
    highlights: [
      'Add, complete, and filter tasks by status',
      'Saves tasks automatically via LocalStorage',
      'Light & dark mode support with responsive layout',
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    category: 'React',
    liveUrl: 'https://unitrack-demo.vercel.app',
    githubUrl: 'https://github.com/yessenova/unitrack',
    accentGradient: 'from-indigo-500/15 via-sky-500/10 to-transparent',
  },
  {
    id: 'coffee-landing',
    title: 'AlmaBrew',
    subtitle: 'Local Coffee Shop Landing Page',
    description:
      'A responsive promotional website for a fictional specialty coffee shop in Almaty, featuring an interactive menu filter, mobile navigation drawer, and table booking form.',
    highlights: [
      'Mobile-first layout built with CSS Grid & Flexbox',
      'Interactive category tabs for drinks and desserts',
      'Client-side form validation with instant feedback',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'HTML / CSS / JS',
    liveUrl: 'https://almabrew-site.vercel.app',
    githubUrl: 'https://github.com/yessenova/almabrew',
    accentGradient: 'from-amber-500/15 via-orange-500/10 to-transparent',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'bsc-is',
    role: 'B.Sc. in Information Systems (1st Year)',
    organization: 'University Studies',
    period: '2026 – Present',
    type: 'Education',
    bullets: [
      'Studying Programming Fundamentals, Web Technologies, Discrete Mathematics, and Computer Architecture.',
      'Building responsive web interfaces and practicing version control with Git and GitHub.',
    ],
  },
  {
    id: 'it-club',
    role: 'Frontend Member',
    organization: 'University IT & Coding Club',
    period: 'Sep 2026 – Present',
    type: 'Leadership',
    bullets: [
      'Collaborating with fellow freshmen on weekly HTML/CSS layout challenges and beginner hackathons.',
    ],
  },
];

export const CONTACT_DATA = {
  email: 'yesenovaaisana@gmail.com',
  phone: '+7 700 987 8233',
  phoneHref: '+77009878233',
  instagramHandle: '@is_yass',
  instagramUrl: 'https://instagram.com/is_yass',
};