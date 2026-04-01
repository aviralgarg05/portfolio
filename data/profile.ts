export const profile = {
  identity: {
    name: "Aviral Garg",
    location: "New Delhi, India",
    tagline: "AI/ML Developer, Researcher, and Startup Builder",
    bio: "Co-Founder @Waysorted | Former DRDO Intern | AI/ML Developer and Researcher",
    email: "gargaviral99@gmail.com",
    phone: "+91-9971195728",
  },
  
  socials: {
    github: "https://github.com/aviralgarg05",
    linkedin: "https://www.linkedin.com/in/aviral-garg99",
    devto: "https://dev.to/aviralgarg05",
    twitter: "https://twitter.com/aviralgarg39805",
    geeksforgeeks: "https://www.geeksforgeeks.org/profile/gargaviwmuu",
    pypi: "https://pypi.org/user/Aviral_Garg/",
  },
  
  metrics: {
    github: {
      repos: 191,
      nonForkRepos: 96,
      followers: 49,
      prsAuthored: 169,
      prsMerged: 91,
      issuesAuthored: 154,
      issuesCommented: 417,
    },
    writing: {
      devtoArticles: 10,
      devtoReactions: 33,
      linkedinFollowers: 2537,
      linkedinPosts: 21,
    },
    packages: {
      pypiPackages: 1,
    }
  },
  
  education: {
    university: "Guru Gobind Singh Indraprastha University",
    degree: "B.Tech in Computer Science (IIOT)",
    period: "2023-2027",
    senior: "88%",
    secondary: "92.7%",
  },
  
  currentFocus: [
    "Building Waysorted - Unified Tools Hub for Makers",
    "Publishing research papers on AI/ML systems",
    "Contributing to open-source projects across the ecosystem",
    "Developing evaluation frameworks for multi-agent systems",
  ],
  
  domains: [
    "AI/ML Systems",
    "Multi-Agent Frameworks",
    "Database Engineering",
    "Open Source",
    "Developer Tooling",
    "Research & Publications",
  ],
  
  languages: {
    Python: 73,
    TypeScript: 7,
    "Jupyter Notebook": 6,
    HTML: 2,
    JavaScript: 2,
    Rust: 1,
    Dockerfile: 1,
  },
};

export const experience = [
  {
    title: "Co-Founder & CTO",
    company: "Waysorted",
    period: "May 2025 - Present",
    location: "New Delhi, India",
    type: "current",
    description: "Building unified tools hub for makers. Leading technical strategy and product development.",
    verified: "public",
    links: {
      github: "https://github.com/Waysorted-s-Organisation",
      website: "https://wayweb-kje9.vercel.app",
    }
  },
  {
    title: "AI & ML Intern",
    company: "Toastd AI",
    period: "Nov 2025 - Mar 2026",
    location: "Remote",
    type: "prior",
    description: "Working on AI/ML systems and model development.",
    verified: "cv",
  },
  {
    title: "Vice President",
    company: "AWS Cloud Club GGSIPU",
    period: "June 2025 - Present",
    location: "New Delhi, India",
    type: "leadership",
    description: "Leading cloud computing initiatives and community engagement at university level.",
    verified: "public",
  },
  {
    title: "Founding ML Engineer",
    company: "Leadshike Labs",
    period: "May 2025 - Nov 2025",
    location: "Remote",
    type: "prior",
    description: "Led machine learning engineering initiatives for early-stage startup.",
    verified: "cv",
  },
  {
    title: "AI/ML Intern",
    company: "IHMCL",
    period: "June 2025 - Oct 2025",
    location: "Remote",
    type: "prior",
    description: "Developed AI/ML solutions for healthcare and logistics applications.",
    verified: "cv",
  },
  {
    title: "Sr. AI/ML Developer",
    company: "Heimatverse",
    period: "Aug 2024 - May 2025",
    location: "Remote",
    type: "prior",
    description: "Senior role developing AI/ML systems for metaverse applications.",
    verified: "cv",
  },
  {
    title: "Research Intern",
    company: "DRDO",
    period: "June 2024 - Oct 2024",
    location: "New Delhi, India",
    type: "research",
    description: "Developed intrusion detection system using machine learning for ARP-MiTM and SSDP Flood prediction. Worked on cybersecurity research projects.",
    verified: "public",
  },
  {
    title: "Intern",
    company: "Quine",
    period: "May 2024 - Aug 2024",
    location: "Remote",
    type: "prior",
    description: "Contributed to developer community platform and tools.",
    verified: "public",
  },
  {
    title: "Member",
    company: "Microsoft for Startups Founder's Hub",
    period: "2024 - Present",
    location: "Remote",
    type: "community",
    description: "Active member of Microsoft's startup founder community.",
    verified: "cv",
  },
  {
    title: "Lifetime Member",
    company: "Indian Red Cross Society",
    period: "June 2025 - Present",
    location: "India",
    type: "community",
    description: "Contributing to humanitarian and social welfare initiatives.",
    verified: "cv",
  },
];

export const research = {
  status: {
    underReview: 1,
    readyToPublish: 2,
    underDevelopment: 2,
  },
  
  projects: [
    {
      title: "Intrusion Detection System",
      context: "DRDO Research Project",
      description: "Machine learning model for ARP-MiTM and SSDP Flood prediction using multiple algorithms",
      status: "completed",
      type: "cybersecurity",
    },
    {
      title: "Speech-to-Speech Translation",
      description: "Real-time speech-to-speech translation on calls with latency of less than 300ms",
      status: "research",
      type: "nlp",
    },
  ],
  
  themes: [
    "Multi-Agent Systems",
    "Real-time AI Systems",
    "Cybersecurity & ML",
    "Natural Language Processing",
    "Database Optimization",
  ],
};

export const projects = [
  {
    name: "AgentUnit",
    tagline: "Evaluation framework for multi-agent systems",
    description: "Evaluation, monitoring, and benchmarking framework for multi-agent systems and RAG workflows. Published on PyPI with 200+ downloads in first 48 hours.",
    tech: ["Python", "Multi-Agent Systems", "RAG", "Benchmarking"],
    links: {
      github: "https://github.com/aviralgarg05/agentunit",
      pypi: "https://pypi.org/project/agentunit/",
    },
    metrics: {
      stars: 7,
      forks: 16,
      downloads: "200+ in 48 hours",
      version: "0.7.0",
    },
    featured: true,
    status: "active",
  },
  {
    name: "NexumDB",
    tagline: "AI-native database with semantic caching",
    description: "AI-native database combining SQL, semantic caching, and reinforcement learning query optimization. Built with Rust for performance.",
    tech: ["Rust", "SQL", "AI", "Semantic Caching", "RL"],
    links: {
      github: "https://github.com/aviralgarg05/NexumDB",
    },
    metrics: {
      stars: 9,
      forks: 27,
    },
    featured: true,
    status: "active",
  },
  {
    name: "Codebot",
    tagline: "Intelligent coding assistant",
    description: "Intelligent coding assistant with MindsDB integration, project management capabilities, and predictive analytics for development workflows.",
    tech: ["TypeScript", "MindsDB", "AI", "Analytics"],
    links: {
      github: "https://github.com/aviralgarg05/Codebot",
      article: "https://dev.to/aviralgarg05/supercharge-your-coding-with-codebot-an-ai-powered-assistant-5g8m",
    },
    metrics: {
      stars: 6,
    },
    featured: true,
    status: "active",
  },
  {
    name: "MindMate",
    tagline: "AI-powered mental health companion",
    description: "Mental health companion powered by AI to provide support, insights, and resources for mental wellness.",
    tech: ["Python", "AI", "NLP", "Healthcare"],
    links: {
      github: "https://github.com/aviralgarg05/MindMate",
      article: "https://dev.to/aviralgarg05/introducing-mindmate-a-mental-health-companion-powered-by-ai-4h8g",
    },
    featured: true,
    status: "completed",
  },
  {
    name: "SocialSellers",
    tagline: "AI-powered social media product analyzer",
    description: "AI-powered social media content analyzer for product recommendations. Top 25 in Amazon Smbhav Hackathon among 100,000+ teams.",
    tech: ["AI", "Web Scraping", "Social Media", "Product Analysis"],
    links: {
      live: "https://social-sellers.vercel.app/",
      github: "https://github.com/aviralgarg05/SocialSellers-Scraping",
    },
    achievement: "Top 25 in Amazon Smbhav Hackathon (100,000+ teams)",
    featured: true,
    status: "completed",
  },
  {
    name: "Basic Stock Price Prediction",
    tagline: "Stock market prediction using ML",
    description: "Machine learning model for stock price prediction using historical data and technical indicators.",
    tech: ["Python", "Jupyter Notebook", "ML", "Finance"],
    links: {
      github: "https://github.com/aviralgarg05/Basic-Stock-Price-Prediction",
    },
    metrics: {
      stars: 2,
    },
    featured: false,
    status: "completed",
  },
  {
    name: "Language Detection Model",
    tagline: "Real-time language detection",
    description: "Machine learning model for detecting languages from text input with high accuracy.",
    tech: ["Jupyter Notebook", "Python", "NLP", "ML"],
    links: {
      github: "https://github.com/aviralgarg05/Language-Detection-Model",
      live: "https://language-detection-model.vercel.app",
    },
    featured: false,
    status: "completed",
  },
];

export const writing = [
  {
    title: "Introducing MindMate: A Mental Health Companion Powered by AI",
    platform: "Dev.to",
    url: "https://dev.to/aviralgarg05",
    reactions: 33,
    category: "AI",
  },
  {
    title: "Elevate Your Kubernetes Game with Cyclops: The Ultimate Beginner's Guide",
    platform: "Dev.to",
    url: "https://dev.to/aviralgarg05",
    category: "DevOps",
  },
  {
    title: "Getting Started with Random Forest Machine Learning Model Training",
    platform: "Dev.to",
    url: "https://dev.to/aviralgarg05",
    category: "ML",
  },
  {
    title: "Dive into Decision Trees: A Fun Guide!",
    platform: "Dev.to",
    url: "https://dev.to/aviralgarg05",
    category: "ML",
  },
  {
    title: "Supercharge Your Coding with Codebot: An AI-Powered Assistant",
    platform: "Dev.to",
    url: "https://dev.to/aviralgarg05",
    category: "AI",
  },
  {
    title: "Supervised vs. Unsupervised Learning: A Fun Comparison!",
    platform: "Dev.to",
    url: "https://dev.to/aviralgarg05",
    category: "ML",
  },
  {
    title: "Database Management Systems (DBMS) Explained",
    platform: "Dev.to",
    url: "https://dev.to/aviralgarg05",
    category: "Databases",
  },
  {
    title: "Neural Networks Explained",
    platform: "Dev.to",
    url: "https://dev.to/aviralgarg05",
    category: "AI",
  },
  {
    title: "From Algorithms to Applications: My Journey as a Machine Learning Developer",
    platform: "Dev.to",
    url: "https://dev.to/aviralgarg05",
    category: "Personal",
  },
  {
    title: "The Power of Predictive Analytics in Data Science",
    platform: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/the-power-of-predictive-analytics-in-data-science/",
    category: "Data Science",
  },
];

export const openSource = {
  contributions: {
    reposContributed: [
      "crossplane/crossplane",
      "open-telemetry/opentelemetry-dotnet-instrumentation",
      "apache/shardingsphere",
      "apache/datafusion",
      "apache/nuttx",
      "dapr/dapr",
      "docker/mcp-gateway",
      "llvm/llvm-project",
      "dragonflyoss/dragonfly",
    ],
    stats: {
      totalPRs: 169,
      mergedPRs: 91,
      issues: 154,
      comments: 417,
    }
  },
  
  pinnedRepos: [
    "agentunit",
    "NexumDB",
    "Basic-Stock-Price-Prediction",
    "Codebot",
    "Language-Detection-Model",
  ],
};

export const achievements = [
  {
    title: "Top 25 in Amazon Smbhav Hackathon",
    description: "Among 100,000+ teams",
    year: "2025",
    project: "SocialSellers",
  },
  {
    title: "Top 20 in Bank of Baroda & Microsoft Azure Hackathon",
    year: "2025",
  },
  {
    title: "PyPI Package Published",
    description: "AgentUnit - 200+ downloads in 48 hours",
    year: "2025",
  },
];

export const narrative = `Aviral Garg is a New Delhi-based AI/ML developer, researcher, open-source contributor, and startup builder. He contributes actively across GitHub OSS ecosystems, publishes technical writing on Dev.to and GeeksforGeeks, and has shipped projects such as AgentUnit, NexumDB, Codebot, MindMate, and SocialSellers. He studies Computer Science at GGSIPU and, based on his CV and public footprint, has worked across DRDO, Quine, Heimatverse, Leadshike Labs, IHMCL, and Toastd AI. His CV also documents an active research pipeline with one paper under review, two ready to publish, and two under development.`;
