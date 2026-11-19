export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  category: 'React' | 'Next.js' | 'UI / Data';
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
  badge: 'Open to internships & junior frontend roles',
  role: 'Frontend Developer',
  major: 'Information Systems Student',
  tagline:
    'I build responsive, accessible, and clean web interfaces that turn complex logic into smooth user experiences.',
};

export const ABOUT_DATA = {
  paragraphs: [
    'Hi! I’m Aissana, an Information Systems student with a strong focus on Frontend Development. I enjoy bridging the gap between structured backend data and intuitive, visually balanced user interfaces.',
    'Currently, I focus on modern React ecosystems, component architecture, and web performance. Whether building an interactive analytics dashboard or designing a responsive product page, I care deeply about clean code, accessibility, and subtle micro-interactions.',
  ],
  quickFacts: [
    { label: 'Major', value: 'Information Systems' },
    { label: 'Primary Focus', value: 'React & TypeScript' },
    { label: 'Location', value: 'Almaty, Kazakhstan' },
  ],
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Frontend Core',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js'],
  },
  {
    category: 'Styling & UI',
    items: ['Tailwind CSS', 'CSS Modules', 'Framer Motion', 'Responsive Design', 'Figma'],
  },
  {
    category: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'Vite', 'REST APIs', 'Postman', 'Vercel'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'nomadflow',
    title: 'NomadFlow',
    subtitle: 'Task & Study Planner',
    description:
      'A minimalist productivity web app designed for students to organize coursework deadlines, track study sessions with a built-in Pomodoro timer, and visualize weekly progress.',
    highlights: [
      'Drag-and-drop Kanban board',
      'Persistent local storage state',
      'Weekly study analytics chart',
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    category: 'React',
    liveUrl: 'https://nomadflow-demo.vercel.app',
    githubUrl: 'https://github.com/yessenova/nomadflow',
    accentGradient: 'from-indigo-500/15 via-sky-500/10 to-transparent',
  },
  {
    id: 'qazaqart',
    title: 'QazaqArt',
    subtitle: 'Digital Exhibition Catalog',
    description:
      'An interactive virtual gallery showcasing contemporary Central Asian visual artists with category filtering, high-resolution artwork zoom, and curated audio-guide previews.',
    highlights: [
      'Dynamic search & tag filtering',
      'Responsive masonry grid layout',
      'Smooth route transitions',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'Next.js',
    liveUrl: 'https://qazaqart-gallery.vercel.app',
    githubUrl: 'https://github.com/yessenova/qazaqart',
    accentGradient: 'from-emerald-500/15 via-teal-500/10 to-transparent',
  },
  {
    id: 'aeropulse',
    title: 'AeroPulse',
    subtitle: 'Urban Air Quality Dashboard',
    description:
      'A real-time environmental monitoring dashboard displaying AQI metrics, temperature trends, and district-level forecasts with interactive markers and alert thresholds.',
    highlights: [
      'Live weather & AQI API integration',
      'Interactive time-series charts',
      'Mobile-first responsive layout',
    ],
    tags: ['React', 'JavaScript', 'REST API', 'Recharts'],
    category: 'UI / Data',
    liveUrl: 'https://aeropulse-ui.vercel.app',
    githubUrl: 'https://github.com/yessenova/aeropulse',
    accentGradient: 'from-amber-500/15 via-orange-500/10 to-transparent',
  },
  {
    id: 'bytebite',
    title: 'ByteBite',
    subtitle: 'Campus Food Pre-Order UI',
    description:
      'A mobile-first web interface for university cafeterias that lets students browse daily menus, customize orders, and schedule pickup slots to skip lunch queues.',
    highlights: [
      'Interactive cart state management',
      'Real-time order status tracker',
      'Accessible form validation',
    ],
    tags: ['React', 'Tailwind CSS', 'Context API', 'Vite'],
    category: 'React',
    liveUrl: 'https://bytebite-campus.vercel.app',
    githubUrl: 'https://github.com/yessenova/bytebite',
    accentGradient: 'from-violet-500/15 via-fuchsia-500/10 to-transparent',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'kortex',
    role: 'Frontend Developer Intern',
    organization: 'Kortex Digital Studio',
    period: 'Jun 2026 – Aug 2026',
    type: 'Work',
    bullets: [
      'Built reusable UI components in React and Tailwind CSS for two client web portals, cutting initial page load times by ~20%.',
      'Collaborated with UI/UX designers in Figma to translate wireframes into responsive, cross-browser layouts.',
    ],
  },
  {
    id: 'it-club',
    role: 'Web Team Lead',
    organization: 'University IT Club',
    period: 'Sep 2025 – May 2026',
    type: 'Leadership',
    bullets: [
      'Maintained the club’s event registration portal and mentored 15+ first-year students on HTML, CSS, and Git fundamentals.',
    ],
  },
  {
    id: 'bsc-is',
    role: 'B.Sc. in Information Systems',
    organization: 'University Studies',
    period: '2024 – Present',
    type: 'Education',
    bullets: [
      'Relevant coursework: Web Engineering, Database Systems, Human-Computer Interaction, Algorithms & Data Structures.',
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