export const profile = {
  name: 'Kiran Capoor',
  role: 'Engineering Leader',
  tagline:
    'Engineering leader and hands-on polyglot engineer working across backend, platform, and AI tooling.',
  location: 'Pune, India',
  email: 'kiran.capoor94@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kiran-capoor/',
  github: 'https://github.com/kiran-capoor94',
  youtube: 'https://www.youtube.com/@CtrlAltTechWithKiran',
  summary: [
    "I'm an engineering leader and hands-on software engineer with 9+ years across backend, platform, AI, and developer tooling. I built and scaled a 66-person cross-functional technology department at a 1,100-person agency, growing department revenue 3x and pushing margins past 60%. These days I'm Tech Lead at Smart Working, contracted to SiSU Health (UK), building AI-native integration infrastructure and distributed systems. I'm a genuine polyglot — TypeScript, Python, Go — and I go wherever the interesting problem is, from architecture through to the thing running in production.",
    "A lot of what I do outside work is tooling for the way I work. I built Wizard, a persistent memory and work triage layer for AI coding agents, because I kept losing context between sessions. I built Wand, a full custom Neovim distribution in Lua, because I wanted an editor that fits exactly how I think. I built Ritual, a one-command dotfiles bootstrap for my dev machine, because setup should be solved once. They're tools I use every day.",
    "On the AI side, I'm interested in the engineering layer below the model — memory systems, agent orchestration, MCP server design, RAG pipelines, and how you make AI tooling actually reliable in a production context. I run a YouTube channel, Ctrl Alt Tech, where I talk about this kind of work. I write, I teach, and I think out loud. I like sharing what I have learnt through my experiments.",
  ],
};

// Headline outcomes — the numbers a hiring manager scans for first.
// `series` (optional) drives a tiny inline sparkline/bar; keep it 2–6 points.
export interface Metric {
  value: string;
  label: string;
  detail?: string;
  series?: number[];
}

export const metrics: Metric[] = [
  { value: '3x', label: 'dept revenue', detail: '₹4Cr → ₹12Cr at Schbang', series: [4, 6, 9, 12] },
  { value: '15→66', label: 'team scaled', detail: 'engineering, UX/UI & PM', series: [15, 28, 44, 66] },
  { value: '60%+', label: 'profit margin', detail: 'up from sub-40%', series: [38, 46, 55, 62] },
  { value: '9+', label: 'years shipping', detail: 'backend, platform, AI' },
  { value: '100+', label: 'projects delivered', detail: 'first 100 in 3 years' },
  { value: '<100ms', label: 'wand cold boot', detail: 'full LSP/DAP/test stack' },
];

// LinkedIn recommendations / colleague quotes. Renders only when non-empty —
// paste real quotes here (attribution matters more than volume; 2–3 is plenty).
export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  link?: string;
}

export const testimonials: Testimonial[] = [
  // {
  //   quote: 'Kiran ...',
  //   name: 'Full Name',
  //   title: 'Role, Company',
  //   link: 'https://www.linkedin.com/in/...',
  // },
];

// /uses — the daily-driver setup. Grouped like the rest of the site.
export interface UsesGroup {
  group: string;
  note?: string;
  items: { name: string; detail: string; link?: string }[];
}

export const uses: UsesGroup[] = [
  {
    group: 'editor & shell',
    items: [
      { name: 'Neovim (Wand)', detail: 'my own 5k-line Lua distribution, sub-100ms boot', link: 'https://github.com/buildWithAlchemist/wand' },
      { name: 'Fish', detail: 'interactive shell, no framework, just functions' },
      { name: 'tmux', detail: 'session-per-project, the site nav is a love letter to it' },
      { name: 'Ghostty / kitty', detail: 'GPU terminal, JetBrains Mono' },
    ],
  },
  {
    group: 'os & machine',
    note: 'update with your actual hardware',
    items: [
      { name: 'CachyOS (Arch)', detail: 'rolling, tuned; yay/AUR for everything' },
      { name: 'Linux workstation', detail: 'CPU / RAM / GPU — fill in your specs' },
    ],
  },
  {
    group: 'dotfiles & infra',
    items: [
      { name: 'Ritual', detail: 'one-command machine bootstrap', link: 'https://github.com/kiran-capoor94/ritual' },
      { name: 'chezmoi', detail: 'dotfile management with per-machine templating' },
      { name: 'Tailscale', detail: 'flat network across all my machines' },
      { name: 'SSHFS + systemd', detail: 'remote mounts, service management' },
    ],
  },
  {
    group: 'languages & runtimes',
    items: [
      { name: 'TypeScript / Node', detail: 'primary for platform & tooling work' },
      { name: 'Python 3.12 (uv)', detail: 'AI tooling, MCP servers, scripts' },
      { name: 'Go', detail: 'services & templating where it fits' },
      { name: 'Lua', detail: 'everything Neovim' },
    ],
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    role: 'Tech Lead',
    company: 'Smart Working (contracted to SiSU Health, UK)',
    period: 'Nov 2024 – Present',
    location: 'Remote (India)',
    points: [
      'Architect and build integration pipelines and API layers connecting third-party health-data providers into the core platform across three products: Halo (orchestration), Universe (core health platform), and SISU IQ (reporting).',
      'Lead architecture decisions on event-driven data ingestion, distributed-service reliability, and API contract design across the stack.',
      'Designed and shipped internal AI tooling and MCP-based integrations that reduced engineering workflow overhead across the team.',
      'Stack: TypeScript, Python, Go, event-driven architecture, REST API design, distributed systems.',
    ],
  },
  {
    role: 'Head of Technology',
    company: 'Schbang',
    period: 'Nov 2022 – Jun 2024',
    location: 'Mumbai, India',
    points: [
      'Scaled the technology function from 15 to 66 people across engineering, UX/UI, and project management — hiring, structuring, and developing the full department.',
      'Grew department revenue 3x (₹4Cr → ₹12Cr) while improving profit margins to 60%+; launched new business lines and revenue streams that did not exist on joining.',
      'Owned full technology strategy for a 1,100-person creative and technology agency — architecture, vendor decisions, engineering standards, and client-facing technology consulting.',
      'Delivered projects across generative AI, web platforms, and custom applications; introduced design-thinking practice and a culture of technical ownership.',
    ],
  },
  {
    role: 'Technology Lead',
    company: 'Oaktree Connect',
    period: 'Jun 2022 – Nov 2022',
    location: 'Bengaluru, India',
    points: [
      'Hired and built an internal engineering team from scratch on a Node.js, React.js, GraphQL, and Apollo Federation stack.',
      'Migrated 13+ microservices from a legacy vendor stack, achieving ~25% improvement in application performance.',
      'Reduced developer turnaround time ~50% through a plan-design-implement methodology, Dockerised services, and AWS ECS.',
      'Implemented observability with Sentry and AWS CloudWatch; established consistent SDLC practices across the team.',
    ],
  },
  {
    role: 'Technology Lead',
    company: 'Nirveda Cognition, Inc.',
    period: 'Sep 2021 – Jun 2022',
    location: 'Bengaluru, India',
    points: [
      'Led engineering direction, architecture decisions, and team development at a Jiddu, Inc. portfolio company; role concluded following company acquisition.',
      'Contributed to backend services architecture and core product platform design across the stack.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'BeamX TechLabs Pvt Ltd',
    period: 'Oct 2020 – Aug 2021',
    location: 'Hyderabad, India',
    points: [
      'Principal engineer across several concurrent projects, owning architecture and infrastructure design from scratch.',
      'Introduced 12-Factor methodology, DRY principles, SDLC processes, and Docker-based builds with clean separation of concerns.',
      'Ran training sessions for the backend team on Docker, Docker Compose, Celery, and Django performance tuning.',
      'Built custom integration SDKs for Shipway and Zoho Mail; managed deployments on Heroku and AWS.',
      'Hardened the security layer across backend services and improved existing implementations where gaps existed.',
    ],
  },
  {
    role: 'Founder & Managing Director',
    company: 'Texmith Technologies',
    period: 'Jan 2019 – Sep 2020',
    location: 'Mumbai, India',
    points: [
      'Founded and ran a technology company delivering end-to-end product development across web and application domains — full ownership of technical direction, client relationships, and delivery.',
      'Built and shipped products across multiple client engagements; managed the full cycle from scoping and architecture through to production deployment.',
    ],
  },
  {
    role: 'Freelance Software Engineer',
    company: 'Self-Employed',
    period: 'Dec 2017 – Jan 2019',
    location: 'Mumbai, India',
    points: [
      'Delivered client projects across web and application development; built core engineering foundations in backend development, system design, and client delivery.',
    ],
  },
  {
    role: 'Equity Data Analyst',
    company: 'MSCI Inc.',
    period: 'Mar 2017 – Dec 2017',
    location: 'Mumbai, India',
    points: [
      'Part of the global equity data team, responsible for data quality assurance, analysis, and reporting across international equity datasets at institutional scale.',
      'Built an early automation prototype that was later adopted into a production system — the start of a transition into software engineering.',
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['TypeScript', 'Python', 'Go', 'JavaScript', 'Lua', 'GDScript', 'Bash/Shell'] },
  { group: 'Leadership', items: ['Team building & scaling', 'Hiring', 'Technical strategy', 'Roadmap ownership', 'Mentoring', 'Stakeholder & client consulting'] },
  { group: 'AI Engineering', items: ['LLM integration', 'MCP server design', 'multi-agent orchestration', 'RAG pipelines', 'LangChain', 'FastMCP', 'LiteLLM', 'Pydantic AI', 'vector search', 'AI memory systems', 'prompt engineering'] },
  { group: 'Backend', items: ['Node.js', 'Django', 'FastAPI', 'Celery', 'GraphQL', 'Apollo Federation', 'httpx', 'REST API design'] },
  { group: 'Frontend & UI', items: ['React.js', 'Streamlit', 'HTML', 'CSS'] },
  { group: 'Data & Persistence', items: ['PostgreSQL', 'SQLite', 'ChromaDB', 'Supabase', 'SQLModel', 'Alembic', 'vector databases'] },
  { group: 'Infrastructure', items: ['Docker', 'Docker Compose', 'AWS (ECS, CloudWatch, SSM)', 'Heroku', 'Tailscale', 'SSHFS', 'systemd', 'Linux (Arch/CachyOS)', 'yay/AUR'] },
  { group: 'Architecture', items: ['Distributed systems', 'microservices', 'event-driven design', 'asynchronous messaging', 'MCP server design', 'integration engineering', 'SDK development', '12-Factor', 'platform architecture'] },
  { group: 'Dev Tooling', items: ['Neovim', 'Chezmoi', 'Fish', 'tmux', 'tree-sitter', 'DAP', 'Mason', 'uv', 'dotenvx', 'Git', 'shell automation'] },
  { group: 'Testing & Quality', items: ['pytest', 'Mypy', 'neotest', 'coverage', 'Black', 'Ruff', 'ESLint', 'Sentry', 'CloudWatch'] },
];

export interface Project {
  name: string;
  tagline: string;
  why: string;
  impact?: string;
  stack: string[];
  link?: string;
  cast?: string; // path to an asciinema recording in /public/casts, e.g. '/casts/wand.cast'
}

export const projects: Project[] = [
  {
    name: 'Forge',
    tagline: 'An internal ops platform that replaced four spreadsheets and a group chat.',
    why: 'A 3D-printing business needed order management, cost calculation, inventory tracking, and production workflows in one place instead of duct-taped spreadsheets — so I scoped, built, and shipped the whole thing.',
    impact: 'centralizes order management, cost calculation, inventory tracking, and production workflows into a single internal tool',
    stack: ['TypeScript', 'PostgreSQL', 'event-driven architecture'],
  },
  {
    name: 'Wizard',
    tagline: 'Long-term memory for AI coding agents that keep forgetting everything.',
    why: "Every new agent session started from zero — same context, re-explained, every single time. I got tired of being the agent's memory, so I built it one instead.",
    impact: '~40% smaller transcripts than raw JSON, via a custom compact format (TOON)',
    stack: ['Python 3.12', 'FastMCP', 'SQLite', 'LiteLLM'],
    link: 'https://github.com/kiran-capoor94/wizard',
  },
  {
    name: 'Wand.nvim',
    tagline: 'A Neovim distribution built for one very specific user: me.',
    why: "Off-the-shelf configs always fought me on something. Easier to write 5,000 lines of Lua than compromise on my workflow.",
    impact: 'sub-100ms cold boot, full LSP/DAP/test stack included',
    stack: ['Lua', 'Neovim', 'Mason', 'Telescope', 'DAP'],
    link: 'https://github.com/buildWithAlchemist/wand',
  },
  {
    name: 'Ritual',
    tagline: "Dotfiles that set up a brand-new machine before your coffee's ready.",
    why: 'Rebuilding a dev machine from scratch used to eat a weekend. Now it eats one `curl` command.',
    impact: 'one-command bootstrap, drift-detected, per-machine templating via Go templates',
    stack: ['Chezmoi', 'Go templates', 'Fish', 'Tailscale'],
    link: 'https://github.com/kiran-capoor94/ritual',
  },
  {
    name: 'RAG Agentic Code Analysis',
    tagline: 'Ask a codebase questions instead of grepping it for an hour.',
    why: 'Wanted to know if multi-agent RAG actually holds up on real code, not toy examples — so I pointed it at real repos and made it show its work.',
    impact: 'tracks latency, token cost, and confidence per query — no black-box answers',
    stack: ['LangChain', 'ChromaDB', 'AST parsing', 'Streamlit'],
    link: 'https://github.com/kiran-capoor94/sws_rag',
  },
  {
    name: 'Texmail',
    tagline: 'A Django billing app that predates my terminal obsession.',
    why: 'Built during the Texmith years, when "ship it" mattered more than "make it pretty." Still runs.',
    stack: ['Django', 'Celery', 'Docker', 'Heroku'],
  },
  {
    name: 'Ctrl Alt Tech',
    tagline: 'A YouTube channel for the engineering layer nobody puts in the demo.',
    why: 'The interesting part of senior engineering rarely makes it into tutorials — the tradeoffs, the dead ends, the "why we didn\'t do it that way." So I started filming that part instead.',
    impact: '355 subscribers, 40K+ views',
    stack: ['YouTube', 'Godot', 'GDScript'],
    link: 'https://www.youtube.com/@CtrlAltTechWithKiran',
  },
];

export const education = {
  degree: 'B.Sc. Chemistry',
  school: 'Guru Nanak Khalsa College of Arts, Science & Commerce',
  period: '2012 – 2015',
  location: 'Mumbai',
};

export const certifications: string[] = [
  'Programming Foundations: Algorithms',
  'Programming Foundations: Object-Oriented Design',
  'Programming Foundations: Beyond the Fundamentals',
  'Serverless and Microservices for AWS',
  'Graph Developer – Associate',
];
