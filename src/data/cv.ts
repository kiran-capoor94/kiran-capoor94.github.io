export const profile = {
  name: 'Kiran Capoor',
  role: 'Senior Software Engineer',
  tagline: 'Polyglot engineer working across backend, platform, frontend, infra, and developer tooling.',
  location: 'Mumbai, India',
  email: 'kiran.capoor94@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kiran-capoor/',
  summary: [
    "I'm a software engineer with over 8 years of experience across backend, platform, frontend, infra, and developer tooling. I work best when I can own a problem end to end — from architecture through to the thing running in production. I'm a genuine polyglot: TypeScript, Python, Go, Lua, GDScript depending on what the problem needs, and I build for the machine I sit on as much as I build for users.",
    "A lot of what I do outside work is tooling for the way I work. I built Wizard, a persistent memory and work triage layer for AI coding agents, because I kept losing context between sessions. I built Wand, a full custom Neovim distribution in Lua, because I wanted an editor that fits exactly how I think. I built Ritual, a one-command dotfiles bootstrap for my CachyOS machine with a Tailscale bridge to my Mac, because setup should be solved once. They're tools I use every day.",
    "On the AI side, I'm interested in the engineering layer below the model — memory systems, agent orchestration, MCP server design, RAG pipelines, and how you make AI tooling actually reliable in a production context. I run a YouTube channel, Ctrl Alt Tech, where I talk about this kind of work. I write, I teach, and I think out loud. I like sharing what I have learnt through my experiments.",
  ],
};

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    role: 'Senior Software Engineer',
    company: 'SiSU Health UK',
    period: 'Nov 2024 – Present',
    location: 'Mumbai, India',
    points: [
      'Working across three products: Halo (orchestration and integration layer), Universe (core health platform), and SISU IQ (reporting layer).',
      'Building and maintaining integration pipelines and API layers that connect third-party health data providers into the core platform.',
      'Making architecture calls on event-driven flows, data ingestion, and service reliability across the stack.',
      'Working in TypeScript, Python, and Go depending on what makes sense for the problem.',
      'Building internal AI tooling and exploring MCP-based integrations to speed up engineering workflows.',
    ],
  },
  {
    role: 'Head of Technology',
    company: 'Schbang',
    period: 'Nov 2022 – Jun 2024',
    location: 'Mumbai, India',
    points: [
      'Led the technology function at a 500+ person creative and technology agency, covering engineering, architecture, vendor decisions, and team building.',
      'Worked directly on client projects spanning Generative AI, web platforms, and custom applications, from planning through to delivery.',
      'Consulted with clients on technology strategy and solution design, translating business problems into concrete technical approaches.',
      'Set up engineering standards and a design thinking culture across the department.',
    ],
  },
  {
    role: 'Technology Lead',
    company: 'Oaktree Connect',
    period: 'Jun 2022 – Nov 2022',
    location: 'Bengaluru, India',
    points: [
      'Hired and built an internal engineering team from scratch, introducing NodeJS, ReactJS, GraphQL, and Apollo Federation as the core stack.',
      'Migrated roughly 13 microservices from a legacy vendor stack and got overall application performance up by around 25%.',
      'Cut developer turnaround time by about 50% by bringing in a plan-then-design-then-implement approach, Dockerised services, and AWS ECS.',
      'Brought in Sentry and AWS CloudWatch for observability, and put consistent SDLC practices in place across the team.',
    ],
  },
  {
    role: 'Technology Lead',
    company: 'Nirveda Cognition, Inc.',
    period: 'Sep 2021 – Jun 2022',
    location: 'Bengaluru, India',
    points: [
      'Technology lead at a Jiddu, Inc. portfolio company, covering engineering direction, architecture decisions, and helping the team grow.',
      'Worked across backend services and contributed to the architecture of the core product platform.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'BeamX TechLabs Pvt Ltd',
    period: 'Oct 2020 – Aug 2021',
    location: 'Hyderabad, India',
    points: [
      'Principal engineer across several concurrent projects, owning architecture and infrastructure design from scratch.',
      'Brought in proper SDLC processes, 12-Factor methodology, DRY principles, and Docker-based builds with clean separation of concerns.',
      'Ran training sessions for the backend team on Docker, Docker Compose, Celery, and Django performance tuning.',
      'Built custom integration SDKs for Shipway.in and Zoho Mail, and handled deployments on both Heroku and AWS.',
      'Hardened the security layer across backend services and improved existing implementations where gaps existed.',
    ],
  },
  {
    role: 'Managing Director',
    company: 'Texmith Technologies',
    period: 'Jan 2019 – Sep 2020',
    location: 'Mumbai, India',
    points: [
      'Started and ran a technology company, handling product development, client delivery, and the general business side of things.',
      'Built and shipped projects across web and application domains with full technical ownership from brief to delivery.',
    ],
  },
  {
    role: 'Equity Data Analyst',
    company: 'MSCI Inc.',
    period: 'Mar 2017 – Dec 2017',
    location: 'Mumbai, India',
    points: [
      'Worked in the global equity data team, focusing on data quality, analysis, and reporting across equity datasets.',
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['TypeScript', 'Python', 'Go', 'JavaScript', 'Lua', 'GDScript', 'Bash/Shell'] },
  { group: 'Backend', items: ['Node.js', 'Django', 'FastAPI', 'Celery', 'GraphQL', 'Apollo Federation', 'httpx', 'REST API design'] },
  { group: 'Frontend & UI', items: ['React.js', 'Streamlit', 'HTML', 'CSS'] },
  { group: 'AI Engineering', items: ['LangChain', 'FastMCP', 'LiteLLM', 'Pydantic AI', 'RAG pipelines', 'multi-agent orchestration', 'vector search', 'AI memory systems', 'prompt engineering'] },
  { group: 'Data & Persistence', items: ['PostgreSQL', 'SQLite', 'ChromaDB', 'Supabase', 'SQLModel', 'Alembic', 'vector databases'] },
  { group: 'Infrastructure', items: ['Docker', 'Docker Compose', 'AWS (ECS, CloudWatch, SSM)', 'Heroku', 'Tailscale', 'SSHFS', 'systemd', 'Linux (Arch/CachyOS)', 'yay/AUR'] },
  { group: 'Architecture', items: ['Distributed systems', 'microservices', 'event-driven design', 'MCP server design', 'integration engineering', 'SDK development', '12-Factor', 'platform architecture'] },
  { group: 'Dev Tooling', items: ['Neovim', 'Chezmoi', 'Fish', 'tmux', 'tree-sitter', 'DAP', 'Mason', 'uv', 'dotenvx', 'Git', 'shell automation'] },
  { group: 'Testing & Quality', items: ['pytest', 'Mypy', 'neotest', 'coverage', 'Black', 'Ruff', 'ESLint', 'Sentry', 'CloudWatch'] },
];

export interface Project {
  name: string;
  description: string;
  link?: string;
}

export const projects: Project[] = [
  {
    name: 'Wizard',
    description:
      'Persistent memory layer for AI coding agents. Exposes 17 MCP tools via FastMCP, uses SQLite for storage, LiteLLM for transcript synthesis, and a custom compact format (TOON) that cuts token usage by ~40% vs JSON. Ships with session continuity, work triage scoring, PII scrubbing, and optional Notion/Obsidian write-back. Python 3.14+.',
    link: 'https://github.com/kiran-capoor94/wizard',
  },
  {
    name: 'Wand.nvim',
    description:
      'Custom Neovim distribution built in Lua. Targets sub-100ms boot, manages the full LSP/formatter/linter toolchain via Mason, and includes a handbuilt Pomodoro system with forced break overlays and challenge phrases. First-class support for Python, TypeScript, Go, Rust, SQL, and more. Includes DAP, neotest, Telescope, AI prompt modules, and Jupyter/Molten for notebook workflows.',
    link: 'https://github.com/buildWithAlchemist/wand',
  },
  {
    name: 'Ritual',
    description:
      'Chezmoi-managed dotfiles for a CachyOS/Arch development machine with a Tailscale bridge to a Mac. One-command bootstrap via curl. Sets up SSH multi-account config, SSHFS mount, clipboard bridge, Fish + nvm, and a custom Neovim config. Drift detection and per-machine templating via Go templates.',
    link: 'https://github.com/kiran-capoor94/ritual',
  },
  {
    name: 'RAG Agentic Code Analysis',
    description:
      'Multi-agent RAG system for querying codebases. AST-based parsing for Python and JavaScript, ChromaDB for vector storage, LangChain for agent orchestration, and Streamlit for the UI. Tracks response latency, token usage, and confidence scores per session.',
    link: 'https://github.com/kiran-capoor94/sws_rag',
  },
  {
    name: 'Texmail',
    description: 'Django application built on Cookiecutter Django with Celery, Docker, Sentry, and Heroku deployment.',
  },
  {
    name: 'Ctrl Alt Tech',
    description:
      'YouTube channel about senior software engineering, tooling, and how I actually work. Built a few mini games in Godot/GDScript on the side.',
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
