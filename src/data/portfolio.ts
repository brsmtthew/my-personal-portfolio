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
  atsCvUrl: string
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

export type Certificate = {
  title: string
  issuer: string
  date: string
  category: string
  /** Preview image shown as the card thumbnail and in the lightbox. */
  image?: string
  /** Downloadable / openable source file (e.g. the original PDF). */
  file?: string
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
  certificates: Certificate[]
  languages: string[]
}

export const portfolio: PortfolioData = {
  navItems: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Certificates', href: '#certificates' },
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
      'IT professional and BSIT graduate with hands-on experience taking real projects from zero to deployed. I built and actively maintain a hospital-grade Medical Records Management System used daily by clinical staff — covering patient chart workflows, medical coding, document management, and role-based access control. I also designed and shipped a full ESP32 IoT monitoring platform with live Firebase telemetry, a real-time React dashboard, and sensor alert management from hardware to production. I extended that same IoT skill set into a smart hard hat safety system for the Bureau of Fire Protection that monitors firefighters’ body temperature, smoke, and toxic gas exposure in real time, and I built an online resort booking platform handling room reservations, live availability, and payment details. I integrate AI agents throughout my development process to accelerate research, close skill gaps quickly, and maintain consistent output quality. Precise, dependable, and focused on building systems that hold up in real operational environments. Open to remote, freelance, and full-time roles where technical depth and reliability matter.',
    focusAreas: [
      'AI WORKFLOWS',
      'ELECTRONIC MEDICAL RECORDS',
      'MEDICAL CODING',
      'IOT DEVELOPMENT',
      'WEB APPLICATIONS',
      'TECHNICAL SUPPORT',
    ],
    photoUrl: '/boris-matthew-dairo-profile.jpg',
    cvUrl: '/boris-matthew-dairo-cv.pdf',
    atsCvUrl: '/Boris_Matthew_Dairo_ATS_Resume.pdf',
    socials: [
      { label: 'Email', href: 'mailto:borisdairo123@gmail.com' },
      { label: 'Call', href: 'tel:09382180531' },
      { label: 'View CV', href: '/boris-matthew-dairo-cv.pdf' },
      { label: 'Apply / Invite', href: 'mailto:borisdairo123@gmail.com?subject=Online%20Job%20Opportunity' },
    ],
  },
  stats: [
    { value: '4 Live', label: 'Production Systems Deployed' },
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
        'Builds end-to-end React + Firebase apps from hardware to UI — ESP32 IoT dashboards for miner and firefighter safety monitoring, plus an online resort booking platform. Hardware, backend, interface, and deployment all handled.',
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
      links: [
        { label: 'Live Demo', href: 'https://smart-chest-miner.firebaseapp.com/login' },
      ],
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
      links: [
        { label: 'Live Demo', href: 'https://medical-records-system-e05e9.web.app/' },
      ],
    },
    {
      title: 'BFP SmartTrack',
      type: 'IoT firefighter safety monitoring system',
      category: 'IoT',
      featured: true,
      imageUrl: '/projects/bfp-smart-hard-hat-login.png',
      imageAlt: 'BFP SmartTrack user login page with firefighter rescue background and secure access form',
      gallery: [
        '/projects/bfp-smart-hard-hat-dashboard.png',
        '/projects/bfp-smart-hard-hat-active-personel.png',
        '/projects/bfp-smart-hard-hat-analytics.png',
        '/projects/bfp-smart-hard-hat-visual-analytics.png',
        '/projects/bfp-smart-hard-hat-visual-analytics-2.png',
        '/projects/bfp-smart-hard-hat-history.png',
        '/projects/bfp-smart-hard-hat-personel.png',
        '/projects/bfp-smart-hard-hat-accounts.png',
      ],
      description:
        'Built a smart hard hat monitoring system for the Bureau of Fire Protection (Tagum City) that equips firefighters with ESP32 helmet sensors tracking body temperature, smoke, toxic gas, and environmental temperature in real time. Telemetry streams to a React command dashboard where staff monitor every responder live, manage personnel and gear IDs, review per-barangay incident history, and control role-based account access.',
      impact:
        'Gave fire command real-time visibility into each responder’s vitals and surrounding hazards — flagging sensor breaches like high smoke and toxic gas, logging risk-exposure duration, mapping incidents per barangay, and keeping a full notification and analytics history to support post-incident review and responder safety.',
      stack: [
        'React JS',
        'Firebase Realtime Database',
        'ESP32',
        'IoT Sensors',
        'Body Temperature',
        'Smoke and Toxic Gas',
        'Realtime Dashboard',
        'Risk Analytics',
        'Role-Based Access',
      ],
      links: [
        { label: 'Live Demo', href: 'https://bfpmonitoringsystem.web.app/' },
      ],
    },
    {
      title: 'SixWorld Adventures',
      type: 'Online resort booking system',
      category: 'Web Apps',
      imageUrl: '/projects/sixworld-login.png',
      imageAlt: 'SixWorld Adventures resort landing page with water park hero image and Book Now call to action',
      gallery: [
        '/projects/sixworld-login-2.png',
        '/projects/sixworld-dashboard.png',
        '/projects/sixworlddashboard-2.png',
        '/projects/sixworld-rooms-2.png',
        '/projects/sixworld-rooms.png',
        '/projects/sixworld-book-now.png',
        '/projects/sixworld-create-account.png',
      ],
      description:
        'Built an online booking and reservation system for SixWorld Adventures, an inland resort and water park in Davao del Norte. Guests can sign in, browse available rooms such as The Nuke, Grand Dormitory, Twin Comfort, The Haven, and Comfy Quad, check capacity, pricing, and availability by date, view detailed room pages with payment options, and submit booking requests online.',
      impact:
        'Gave the resort a digital reservation channel beyond walk-ins and phone calls — letting guests check real-time room availability by date, compare room types and pricing, and request bookings online with clear bank and GCash payment instructions, while giving staff a centralized way to manage reservations.',
      stack: [
        'React JS',
        'TypeScript',
        'Firebase',
        'Online Booking',
        'Room Reservations',
        'Date Availability',
        'GCash and Bank Payments',
        'Responsive UI',
      ],
      links: [
        { label: 'Live Demo', href: 'https://sixworld-booking-demo.example.com' },
      ],
    },
  ],
  experiences: [
    {
      role: 'IT Specialist',
      company: 'TGMCI (Electronic Medical Records)',
      period: '2025 - Present',
      details: [
        'Built and deployed a full Medical Records Management System covering patient registration, chart requests, chart circulation, scanned document viewing, medical coding, laboratory results, civil document management, and role-based user access — currently in active daily use by clinical and administrative staff.',
        'Developed searchable patient registries, department-filtered tables, audit logs, status tracking workflows, and print-ready report generation to support real records operations inside the hospital.',
        'Performed continuous system maintenance, bug fixes, and feature updates in response to staff feedback, keeping the platform stable and aligned with operational needs.',
        'Provided direct technical support for workstation hardware, software, and office network connectivity, diagnosing and resolving issues across clinical departments to minimize downtime.',
        'Implemented role-based access control, secure document workflows, and data handling practices to protect patient information and support responsible records management.',
      ],
    },
    {
      role: 'Graphic Design & Printing Assistant',
      company: 'Chans Print Solutions',
      period: '2024 - 2025',
      details: [
        'Designed and produced a wide range of print materials including large-format tarpaulins, event banners, business cards, brochures, flyers, ID cards, and certificates using Adobe Photoshop and Canva — managing layouts from initial client brief to final print-ready output.',
        'Operated and maintained large-format printing equipment, ensuring consistent print quality, accurate color output, and on-time completion of client orders under daily production pressure.',
        'Diagnosed and resolved hardware faults, software crashes, driver issues, network connectivity problems, and printer queue errors to keep production running without significant interruption.',
        'Used AI tools and workflow agents to speed up documentation drafts, plan design layouts, prepare technical specifications, and solve production problems faster.',
        'Communicated directly with clients to understand design requirements, manage job timelines, and deliver finished products to specification — handling multiple concurrent orders in a fast-paced print shop environment.',
      ],
    },
    {
      role: 'Library Computer Lab. (Student Training Assistant)',
      company: 'UM Tagum College',
      period: '2022 - 2024',
      details: [
        'Provided on-the-spot technical assistance to students and faculty during computer lab sessions — resolving hardware, software, peripheral, and application issues to keep sessions running without disruption.',
        'Monitored workstation and equipment usage across the lab, documented malfunctions, escalated repairs to maintenance staff, and followed up to minimize turnaround time on faulty stations.',
        'Diagnosed and resolved network and internet connectivity issues to ensure stable access for students throughout academic sessions, coordinating with IT staff when infrastructure-level fixes were required.',
        'Supported faculty with technology setup for lab and classroom sessions, including projector connections, printer access, software configuration, and peripheral troubleshooting.',
        'Assisted in enforcing proper lab usage policies, maintaining an organized and functional study environment that supported consistent access to institutional technology resources.',
      ],
    },
  ],
  education: [
    {
      school: 'University of Mindanao',
      degree: 'Bachelor of Science in Information Technology',
      period: '2021 - 2025',
      summary:
        'Earned a BSIT degree with hands-on training across software development, relational database design, networking, systems analysis, mobile development, and IT infrastructure. Completed a capstone project focused on real-world application deployment. Graduated Class of 2025 with practical experience in both computer science fundamentals and applied system development — including the production systems currently in active use at TGMCI and a live IoT monitoring platform.',
      strengths: ['Systems thinking', 'Database design', 'Full-stack development', 'Technical support'],
    },
    {
      school: 'STNHS',
      degree: 'Accountancy and Business Management (ABM)',
      period: '2015 - 2021',
      summary:
        'Completed a senior high school program under the Accountancy and Business Management strand, building a structured foundation in business principles, financial literacy, professional communication, and organizational documentation. This track developed the discipline, attention to detail, and client-facing communication skills that directly support technical project coordination and records management work today.',
      strengths: ['Business foundation', 'Documentation', 'Professional communication'],
    },
  ],
  certificates: [
    {
      title: 'EDCS-IS Users’ Online Training',
      issuer: 'DOH Academy — Epidemiology Bureau',
      date: 'June 2026',
      category: 'Medical & Health',
      image: '/certificates/edcs-is-training.png',
    },
    {
      title: 'Online Training on Basic Epidemiology',
      issuer: 'DOH Academy',
      date: 'June 2026',
      category: 'Medical & Health',
      image: '/certificates/basic-epidemiology.png',
    },
    {
      title: 'Practicing Data Privacy in the Workplace',
      issuer: 'TESDA — Online Program',
      date: 'April 2026',
      category: 'Professional',
      image: '/certificates/data-privacy-tesda.png',
    },
    {
      title: 'On-the-Job Training Completion (486 Hours)',
      issuer: 'UM Tagum College',
      date: 'February 2026',
      category: 'Professional',
      image: '/certificates/ojt-completion.png',
    },
    {
      title: 'OJT Internship Completion (486 Hours)',
      issuer: 'Tagum Global Medical Center, Inc.',
      date: 'February 2026',
      category: 'Professional',
      image: '/certificates/ojt-tgmci.png',
    },
    {
      title: 'Work Ethics Seminar',
      issuer: 'UM Tagum College',
      date: 'September 2025',
      category: 'Professional',
      image: '/certificates/work-ethics-seminar.png',
    },
    {
      title: 'Pre-Deployment Orientation Seminar (PDOS)',
      issuer: 'UM Tagum College',
      date: 'September 2025',
      category: 'Professional',
      image: '/certificates/pdos-seminar.png',
    },
    {
      title: 'Anti-Sexual Harassment Seminar',
      issuer: 'UM Tagum College',
      date: 'September 2025',
      category: 'Professional',
      image: '/certificates/anti-harassment-seminar.png',
    },
    {
      title: 'Pre-Employment Seminar for Local Applicants (PESLA)',
      issuer: 'UM Tagum College — Job Placement Office',
      date: 'November 2024',
      category: 'Professional',
      image: '/certificates/pesla-seminar.jpg',
    },
    {
      title: 'Building Front-End Tools & Robust Back-End Systems',
      issuer: 'ICTCON 2024 — DICT, DevCon Davao & Tagum City',
      date: 'October 2024',
      category: 'Development',
      image: '/certificates/ictcon-2024-fullstack.jpg',
    },
    {
      title: 'Graphic Designing Basics: Introduction to Photoshop',
      issuer: 'UM Tagum College',
      date: 'October 2024',
      category: 'Design & Creative',
      image: '/certificates/photoshop-basics-completion.jpg',
    },
    {
      title: 'Photoshop Workshop — Active Participation',
      issuer: 'UM Tagum College',
      date: 'October 2024',
      category: 'Design & Creative',
      image: '/certificates/photoshop-basics-appreciation.jpg',
    },
    {
      title: 'Virtual Assistant 101 & Social Media Management',
      issuer: 'VirtuaLearn Academy',
      date: 'October 2024',
      category: 'Design & Creative',
      image: '/certificates/virtual-assistant-101-virtualearn.jpg',
    },
    {
      title: 'Virtual Assistant 101 & Social Media Management',
      issuer: 'UM Tagum College',
      date: 'October 2024',
      category: 'Design & Creative',
      image: '/certificates/virtual-assistant-101-umtc.jpg',
    },
    {
      title: '3D Modeling Basics: Building Skills for Creative Freedom',
      issuer: 'UM Tagum College',
      date: 'September 2024',
      category: 'Design & Creative',
      image: '/certificates/3d-modeling-basics.jpg',
    },
    {
      title: 'Emerging Trends in Computer Networks Technology',
      issuer: 'UM Tagum College — Computer Debuggers Society',
      date: 'September 2023',
      category: 'Development',
      image: '/certificates/computer-networks-seminar.jpg',
    },
  ],
  languages: ['English', 'Tagalog'],
}
