export const personalData = {
  name: 'Guy Hassan',
  title: 'Senior Frontend Engineer',
  subtitle: 'Frontend Infrastructure',
  email: 'guy.hasan@gmail.com',
  phone: '+972-52-489-9286',
  location: 'Israel',
  linkedin: 'https://linkedin.com/in/guy-hassan-790a43160',
  github: 'https://github.com/guyhassan',

  profile: `Senior Frontend Engineer with 4+ years at Payoneer, working
  across large-scale product systems and frontend infrastructure. Currently
  part of the Baseline team, building a modular Nx monorepo-based host
  architecture. Focused on maintainable systems, reusable platform components,
  and improving developer experience while growing in platform-level ownership.`,

  stats: [
    { value: '4+', label: 'Years at Payoneer' },
    { value: 'Senior', label: 'Frontend Engineer' },
    { value: 'Infra', label: 'Platform & Systems' },
    { value: '∞', label: 'Coffees' },
  ],

  skills: {
    core: ['React', 'TypeScript', 'JavaScript', 'Nx Monorepo'],
    frontend: ['Module Federation', 'Styled Components', 'MUI Design System', 'Design Systems', 'REST APIs'],
    devops: ['Azure', 'CI/CD', 'Git', 'Node.js'],
    testing: ['Jest', 'Cypress', 'Playwright', 'E2E Automation'],
    tools: ['Webpack', 'Rspack', 'LaunchDarkly'],
    ai: ['GitHub Copilot', 'Cursor AI'],
  },

  experience: [
    {
      id: 1,
      role: 'Senior Frontend Developer',
      team: 'Baseline (Foundation) Team',
      company: 'Payoneer',
      period: '2025 - Present',
      type: 'Senior',
      highlights: [
        'Migrating a legacy React monolith to a modular Nx monorepo with Module Federation',
        'Designing the application bootstrap and lifecycle layer: auth, HTTP clients, host init,',
        'Building shared platform libraries enabling standalone apps and microfrontend integration',
        'Collaborating with the Framework team on architectural standards and testing stack modernization',
      ],
      tags: ['React', 'TypeScript', 'Nx', 'Module Federation'],
    },
    {
      id: 2,
      role: 'Frontend Developer',
      team: 'Product Team',
      company: 'Payoneer',
      period: '2021 - 2025',
      type: 'Mid',
      highlights: [
        'Developed and maintained high-scale React apps in JavaScript and TypeScript in production',
        'Contributed to a microfrontend architecture based on Module Federation in a multi-team system',
        'Took end-to-end ownership of features from design through production deployment',
        'Delivered business-critical functionality in a high-traffic application',
      ],
      tags: ['React', 'JavaScript', 'TypeScript', 'Microfrontends'],
    },
    {
      id: 3,
      role: 'Freelance Developer & Tutor',
      team: null,
      company: 'Self-employed',
      period: '2019 - 2021',
      type: 'Early',
      highlights: [
        'Developed and designed websites for businesses and private clients',
        'Mentored software engineering students and junior developers',
        'Provided development consulting and academic project support',
      ],
      tags: ['React', 'JavaScript', 'Node.js', 'Mentoring'],
    },
    {
      id: 4,
      role: 'B.Sc. Software Engineering',
      team: null,
      company: 'SCE - College of Engineering',
      period: '2016 - 2020',
      type: 'Education',
      highlights: [
        'Graduated with Honors',
        'Focus on algorithms, systems programming, and software architecture',
      ],
      tags: ['C/C++', 'Java', 'Python', 'Algorithms'],
    },
  ],

  outside: [
    {
      icon: '🤝',
      title: 'People',
      description: 'Deeply social by nature. I genuinely enjoy connecting with people, sharing ideas and good energy.',
    },
    {
      icon: '👨\u200d🍳',
      title: 'Cooking',
      description: 'The kitchen is my second IDE. I find the same joy in crafting a dish as I do in writing clean code.',
    },
    {
      icon: '✈️',
      title: 'Travel',
      description: 'Without experiences, what are we working for? Vacations are not a luxury - they are the whole point.',
    },
    {
      icon: '📚',
      title: 'Reading',
      description: 'From tech books to fiction, reading keeps me curious and always learning something new.',
    },
  ],
};
