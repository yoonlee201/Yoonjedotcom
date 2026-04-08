export const projects = [
  {
    name: 'MCCS — Visual Inventory Management System',
    period: 'Jan 2026 – Present',
    description: 'Computer vision system to detect empty shelf spaces in retail environments, with a full-stack management portal for real-time monitoring.',
    stack: ['Vite', 'Flask', 'PostgreSQL', 'Docker'],
    bullets: [
      'Developing a computer vision pipeline to detect empty shelf spaces in retail environments using image processing techniques.',
      'Established login, registration, email-based account verification, real-time notification, and employee invitation system.',
      'Standardized task assignments and Scrum across the development team to ensure consistent progress and on-time sprint deliveries.',
    ],
    github: '',
    demo: '',
  },
  {
    name: 'GlobalDB',
    period: 'Sep 2025 – Dec 2025',
    description: 'LLM-powered platform for discovering public datasets and running SQL-based exploration, cleaning, and queries through a natural language interface.',
    stack: ['Vite', 'Flask', 'PostgreSQL', 'OpenAI API', 'Docker', 'Google Cloud'],
    bullets: [
      'Architected a full-stack platform enabling users to search, upload, and explore public datasets via a Vue frontend backed by Flask REST APIs and PostgreSQL.',
      'Integrated OpenAI API to power natural language query processing and intelligent data cleaning suggestions, lowering the barrier to SQL-based data exploration.',
      'Built reusable Vue components for dataset search, filtering, query construction, and result visualization, managing complex application state across dynamic interactions.',
      'Engineered file ingestion pipeline accepting CSV, TSV, SQLite, and other formats — normalizing all uploads to SQLite before syncing to Google Drive for consistent storage.',
      'Containerized the full application with Docker and deployed on Google Cloud Services, ensuring scalable and reliable production infrastructure.',
    ],
    github: 'https://github.com/yoonlee201/globaldb',   // e.g. 'https://github.com/ylee201/globaldb'
    demo: '',     // e.g. 'https://globaldb.vercel.app'
  },
  {
    name: 'Lotto App',
    period: 'Aug 2025 – Present',
    description: 'Cross-platform lottery app with AI-powered number suggestions and history tracking across web and mobile.',
    stack: ['React Native', 'Flask', 'SQLite', 'OpenAI API'],
    bullets: [
      'Built a Flask backend with REST APIs and SQLite database to manage lottery history and persist user data across sessions.',
      'Developed a cross-platform React Native frontend consuming backend APIs for real-time number generation and historical tracking.',
      'Integrated OpenAI API to deliver personalized number suggestions and probability insights, elevating the experience beyond basic randomization.',
    ],
    github: '',   // e.g. 'https://github.com/ylee201/lotto-app'
    demo: '',     // e.g. 'https://expo.dev/@ylee201/lotto-app'
  },
  {
    name: 'Diary Quest',
    period: 'Jan 2025 – Present',
    description: 'Web platform for structured student reflection with AI-driven theme extraction and collaborative Jigsaw learning workflows.',
    stack: ['React', 'OpenAI API'],
    bullets: [
      'Designed and built a web platform enabling students to document experiences and engage in guided, structured self-reflection.',
      'Developed analytics dashboards with word clouds, thematic maps, and collages to surface deeper patterns from student entries.',
      'Implemented AI-driven theme extraction and dynamic group formation, powering a four-phase Jigsaw workflow for collaborative peer learning.',
    ],
    github: '',   // e.g. 'https://github.com/ylee201/diary-quest'
    demo: '',     // e.g. 'https://diaryquest.vercel.app'
  },
  {
    name: 'RewardBot',
    period: 'Dec 2024',
    description: 'Gamified student reward system with Canvas API integration and a Chrome extension for real-time assignment tracking.',
    stack: ['React', 'Node.js', 'Express','MongoDB', 'Canvas API'],
    bullets: [
      'Built a gamified reward system on the MERN stack to incentivize assignment completion and surface student progress in real time.',
      'Integrated Canvas API to dynamically retrieve and visualize student assignment data, keeping progress tracking in sync with course activity.',
      'Designed a performant REST API backend improving data retrieval speed and keeping the frontend responsive under load.',
      'Shipped a Chrome extension in React and Node.js displaying live assignment deadlines directly in the browser.',
    ],
    github: '',   // e.g. 'https://github.com/ylee201/rewardbot'
    demo: '',     // e.g. 'https://chrome.google.com/webstore/...'
  },
]