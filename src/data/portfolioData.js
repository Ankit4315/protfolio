const PORTFOLIO_DATA = {
  name: "Ankit Dhakad",
  role: "Full Stack & Mobile Developer",
  tagline: "Engineering enterprise-level scalable web & mobile applications.",
  about: "Passionate and detail-oriented developer with 1.4+ years of experience specializing in Flutter, React.js, Node.js, and scalable backend architectures. I build secure, high-performance solutions.",
  email: "ankit.dhakad0001@gmail.com",
  github: "https://www.github.com/Ankit4315",
  linkedin: "https://www.linkedin.com/in/ankit-dhakad-173076241",
  skills: [
    { category: "Languages", items: ["Python", "JavaScript", "Dart", "C", "SQL"] },
    { category: "Frontend", items: ["React.js", "Tailwind CSS", "Redux"] },
    { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "MySQL", "RESTful APIs"] },
    { category: "Mobile", items: ["Flutter", "Riverpod", "Deep Linking"] },
    { category: "Tools", items: ["Git", "Firebase", "Azure Blob", "Postman", "Docker"] }
  ],
  projects: [
    {
      id: 1,
      title: "Enterprise Property Platform",
      description: "A scalable backend handling core property, tenant, and cash-collection workflows for 100+ properties.",
      tech: ["Node.js", "Express", "MongoDB", "Google Gemini AI"],
      type: "Backend",
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "Field Operations App",
      description: "Modular mobile app utilizing Riverpod for state management, implementing RBAC and dynamic PDF generation.",
      tech: ["Flutter", "Dart", "Firebase", "Riverpod"],
      type: "Mobile",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Amazon Clone (MERN)",
      description: "Full-stack e-commerce application implementing full CRUD operations and secure user management.",
      tech: ["React.js", "Redux", "Node.js", "Express"],
      type: "Full Stack",
      color: "from-emerald-400 to-teal-500"
    },
    {
      id: 4,
      title: "AnkTalk",
      description: "A responsive and intuitive cross-platform mobile communication application with real-time features.",
      tech: ["Flutter", "Node.js", "WebSockets"],
      type: "Mobile",
      color: "from-orange-400 to-red-500"
    }
  ]
};

export default PORTFOLIO_DATA;
