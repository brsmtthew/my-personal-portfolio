export type NavItem = {
  label: string
  href: string
}

export type Profile = {
  name: string
  role: string
  location: string
  email: string
  phone: string
  availability: string
  summary: string
  headline: string
  focusAreas: string[]
  photoUrl: string
  cvUrl: string
  socials: SocialLink[]
}

export type SocialLink = {
  label: string
  href: string
}

export type Stat = {
  label: string
  value: string
}

export type Highlight = {
  title: string
  description: string
}

export type SkillGroup = {
  title: string
  description: string
  skills: string[]
}

export type Project = {
  title: string
  type: string
  category: string
  description: string
  impact: string
  imageUrl?: string
  imageAlt?: string
  gallery?: string[]
  logoUrl?: string
  featured?: boolean
  stack: string[]
  links: SocialLink[]
}

export type Experience = {
  role: string
  company: string
  period: string
  details: string[]
}

export type Education = {
  school: string
  degree: string
  period: string
  summary: string
  strengths: string[]
}

export type PortfolioData = {
  navItems: NavItem[]
  profile: Profile
  stats: Stat[]
  highlights: Highlight[]
  skillGroups: SkillGroup[]
  projects: Project[]
  experiences: Experience[]
  education: Education[]
  languages: string[]
}

export const portfolio: PortfolioData = {
  navItems: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],
  profile: {
    name: 'Boris Matthew O. Dairo',
    role: 'IT Specialist for AI Workflows, Medical Systems, and IoT',
    location: 'Purok Cafe, Visayan Village, Tagum City',
    email: 'borisdairo123@gmail.com',
    phone: '09382180531',
    availability: 'Available Now — Remote, Freelance & Full-time',
    headline: 'I ship systems teams depend on — hospital records, live IoT, and AI-powered workflows.',
    summary:
      'IT professional with production-proven experience building systems that real organizations rely on. From a hospital-grade Medical Records Management System to an ESP32 IoT monitoring platform, I take projects from zero to deployed. I close skill gaps fast using AI workflows, and I bring precision to every system I touch.',
    focusAreas: [
      'AI WORKFLOWS',
      'ELECTRONIC MEDICAL RECORDS',
      'MEDICAL CODING',
      'IOT DEVELOPMENT',
      'TECHNICAL SUPPORT',
    ],
    photoUrl: '/boris-matthew-dairo-profile.jpg',
    cvUrl: '/boris-matthew-dairo-cv.pdf',
    socials: [
      { label: 'Email', href: 'mailto:borisdairo123@gmail.com' },
      { label: 'Call', href: 'tel:09382180531' },
      { label: 'View CV', href: '/boris-matthew-dairo-cv.pdf' },
      { label: 'Apply / Invite', href: 'mailto:borisdairo123@gmail.com?subject=Online%20Job%20Opportunity' },
    ],
  },
  stats: [
    { value: '2 Live', label: 'Production Systems Deployed' },
    { value: 'BSIT', label: 'Information Technology — Class of 2025' },
    { value: 'Remote', label: 'Available Now — All Timezones' },
  ],
  highlights: [
    {
      title: 'AI-Assisted Workflows',
      description:
        'Integrates AI agents into real work — automating documentation, accelerating research, and solving technical problems faster. Not just a user; an actual workflow builder.',
    },
    {
      title: 'Production Medical Systems',
      description:
        'Built and deployed a hospital-grade Medical Records Management System currently in active use — handling patient data, chart workflows, coding processes, and role-based access at scale.',
    },
    {
      title: 'IoT & Full-Stack Delivery',
      description:
        'Shipped an ESP32 IoT monitoring platform with a live React dashboard connected to Firebase. End-to-end: hardware, backend, UI, and deployment — all in production.',
    },
  ],
  skillGroups: [
    {
      title: 'AI and Web Development',
      description:
        'Creates responsive web interfaces and uses AI agents to improve documentation, planning, and development speed.',
      skills: [
        'React JS',
        'TypeScript',
        'Tailwind CSS',
        'Firebase',
        'Database Management',
        'Git',
        'GitHub',
        'Responsive UI',
        'Prompt Engineering',
      ],
    },
    {
      title: 'Medical and Records Systems',
      description:
        'Supports organized EMR workflows, accurate records handling, and medical coding related data processes.',
      skills: [
        'Electronic Medical Records',
        'Medical Coding',
        'Data Privacy Practices',
        'Records Management',
        'Data Entry',
        'Workflow Documentation',
        'Patient Data Handling',
      ],
    },
    {
      title: 'IT Support and IoT',
      description:
        'Connects troubleshooting experience with IoT development, networking, hardware, and software support.',
      skills: [
        'IoT Development',
        'ESP32',
        'Network Configuration',
        'Network Troubleshooting',
        'Hardware Troubleshooting',
        'Software Troubleshooting',
        'Printer Troubleshooting',
        'Computer Lab Support',
      ],
    },
    {
      title: 'Creative and Operations',
      description:
        'Combines technical operations with design tools, print production, and structured office workflows.',
      skills: [
        'AI Agents',
        'IoT Integration',
        'Adobe Photoshop',
        'Canva',
        'Printing Equipment',
        'Graphic Layout',
        'Technical Documentation',
      ],
    },
  ],
  projects: [
    {
      title: 'Smart Chest Miner',
      type: 'IoT and web monitoring system',
      category: 'IoT',
      featured: true,
      imageUrl: '/projects/smart-chest-miner-login.png',
      imageAlt: 'Smart Chest Miner login page with secure telemetry access form',
      logoUrl: '/projects/smart-chest-miner-logo.svg',
      gallery: [
        '/projects/smart-chest-miner-live-monitor.png',
        '/projects/smart-chest-miner-analytics.png',
        '/projects/smart-chest-miner-device-registry.png',
        '/projects/smart-chest-miner-health-logs.png',
        '/projects/smart-chest-miner-sensor-status.png',
        '/projects/smart-chest-miner-wifi-config.png',
        '/projects/smart-chest-miner-system-config.png',
      ],
      description:
        'Built an IoT-enabled miner monitoring system using ESP32 sensor hardware, Firebase Realtime Database, and a React JS admin dashboard. The device sends miner telemetry to Firebase, while the website fetches and displays live readings for monitoring and response.',
      impact:
        'Helped admins monitor miner safety data including heart rate, SpO2, chest contact, online status, sensor health, alerts, health logs, device registry, WiFi configuration, and system thresholds from one responsive dashboard.',
      stack: [
        'React JS',
        'Firebase Realtime Database',
        'ESP32',
        'IoT Sensors',
        'Heart Rate',
        'SpO2',
        'Realtime Dashboard',
      ],
      links: [],
    },
    {
      title: 'Medical Records Management System',
      type: 'Medical records workflow system',
      category: 'Medical Systems',
      imageUrl: '/projects/tgmci-records-login.png',
      imageAlt: 'TGMCI Medical Records System login page with hospital branding and secure access form',
      gallery: [
        '/projects/tgmci-records-dashboard.png',
        '/projects/tgmci-records-patients.png',
        '/projects/tgmci-records-chart-requests.png',
        '/projects/tgmci-records-chart-circulation.png',
        '/projects/tgmci-records-chart-viewing.png',
        '/projects/tgmci-records-medical-documents.png',
        '/projects/tgmci-records-laboratory-results.png',
        '/projects/tgmci-records-civil-documents.png',
        '/projects/tgmci-records-chart-reports.png',
        '/projects/tgmci-records-medical-reports.png',
        '/projects/tgmci-records-print-reports.png',
        '/projects/tgmci-records-users.png',
        '/projects/tgmci-records-settings-system.png',
        '/projects/tgmci-records-settings-departments.png',
        '/projects/tgmci-records-settings-notifications.png',
        '/projects/tgmci-records-settings-about.png',
      ],
      description:
        'Built a TGMCI records workspace for patient registry, chart requests, chart circulation, scanned chart viewing, medical documents, laboratory results, civil documents, reports, users, and system settings. The interface supports records staff with searchable tables, status filters, department lists, audit logs, and role-aware account access.',
      impact:
        'Centralized patient record workflows so staff can track physical chart movement, prepare and receive chart requests, view local chart scans, manage certificate and laboratory requests, generate reports, and control user access from one organized dashboard.',
      stack: [
        'React JS',
        'Tailwind CSS',
        'Firebase Firestore',
        'Express API',
        'Recharts',
        'Framer Motion',
        'Role-Based Access',
        'Report Export',
        'Local Chart Preview',
      ],
      links: [],
    },
  ],
  experiences: [
    {
      role: 'IT / Encoder',
      company: 'TGMCI (Electronic Medical Records)',
      period: '2025 - Present',
      details: [
        'Developed and maintained a Medical Records Management System to improve workflow efficiency and digital record organization.',
        'Provided technical support and troubleshooting for computer systems and office network connectivity within the organization.',
        'Implemented data privacy practices to help protect patient information and support responsible records handling.',
      ],
    },
    {
      role: 'Graphic Design & Printing Assistant',
      company: 'Chans Print Solutions',
      period: '2024 - 2025',
      details: [
        'Designed print materials including tarpaulins, business cards, brochures, and ID cards.',
        'Operated and maintained computer systems and printing equipment for daily production tasks.',
        'Troubleshot hardware, software, network, and printer connectivity issues.',
        'Used AI tools and agents to support faster documentation, design planning, and technical problem solving.',
      ],
    },
    {
      role: 'Library Computer Lab. (Student Training Assistant)',
      company: 'UM Tagum College',
      period: '2022 - 2024',
      details: [
        'Provided technical support to students and faculty during computer lab sessions.',
        'Monitored equipment usage, reported malfunctions, and coordinated basic maintenance.',
        'Troubleshot network issues and helped maintain stable internet connectivity in the lab.',
      ],
    },
  ],
  education: [
    {
      school: 'STNHS',
      degree: 'Accountancy and Business Management',
      period: '2015 - 2021',
      summary:
        'Built a business-focused academic foundation in communication, organization, basic accounting, documentation, and professional presentation.',
      strengths: ['Business foundation', 'Documentation', 'Communication'],
    },
    {
      school: 'University of Mindanao',
      degree: 'Bachelor of Science in Information Technology',
      period: '2021 - 2025',
      summary:
        'Developed practical IT knowledge across software, databases, networking, systems analysis, and technical problem solving for real operational needs.',
      strengths: ['Systems thinking', 'Database work', 'Technical support'],
    },
  ],
  languages: ['English', 'Tagalog', 'Bisaya'],
}
