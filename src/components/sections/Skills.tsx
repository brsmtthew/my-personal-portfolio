import { useEffect, useState } from 'react'
import type { IconType } from 'react-icons'
import {
  FiActivity,
  FiArrowRight,
  FiCpu,
  FiDatabase,
  FiFileText,
  FiGlobe,
  FiHardDrive,
  FiMonitor,
  FiPrinter,
  FiShield,
  FiSmartphone,
  FiTool,
  FiWifi,
  FiX,
} from 'react-icons/fi'
import {
  SiAsana,
  SiAngular,
  SiAndroid,
  SiAndroidstudio,
  SiApache,
  SiAnthropic,
  SiArduino,
  SiAuth0,
  SiBrevo,
  SiBootstrap,
  SiBuffer,
  SiCanva,
  SiClaude,
  SiClerk,
  SiClickup,
  SiCss,
  SiDjango,
  SiDigitalocean,
  SiDiscord,
  SiDocker,
  SiDotnet,
  SiDropbox,
  SiElectron,
  SiEspressif,
  SiEvernote,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiFigma,
  SiFlask,
  SiFlutter,
  SiGmail,
  SiGo,
  SiGithub,
  SiGit,
  SiGooglecalendar,
  SiGoogledocs,
  SiGoogledrive,
  SiGooglegemini,
  SiGooglemeet,
  SiGooglesheets,
  SiGrammarly,
  SiHootsuite,
  SiHubspot,
  SiHostinger,
  SiHtml5,
  SiIonic,
  SiJira,
  SiJavascript,
  SiJsonwebtokens,
  SiKotlin,
  SiLaravel,
  SiLinux,
  SiMailchimp,
  SiMariadb,
  SiMaterialdesign,
  SiMeta,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiNuxt,
  SiOpenai,
  SiOpenjdk,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiQt,
  SiQuickbooks,
  SiRailway,
  SiReact,
  SiRedis,
  SiRender,
  SiRubyonrails,
  SiSalesforce,
  SiSharp,
  SiShadcnui,
  SiShopify,
  SiShopee,
  SiSlack,
  SiSpringboot,
  SiSqlite,
  SiSupabase,
  SiSwift,
  SiTailwindcss,
  SiTauri,
  SiTrello,
  SiTrpc,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVuedotjs,
  SiWebpack,
  SiWoocommerce,
  SiXcode,
  SiXero,
  SiZendesk,
  SiZoho,
  SiZoom,
} from 'react-icons/si'
import SectionHeading from '../ui/SectionHeading'
import type { SkillGroup } from '../../data/portfolio'

type SkillsProps = {
  skillGroups: SkillGroup[]
}

type ToolIcon = {
  name: string
  icon: IconType
  color: string
  label?: string
}

type SkillPreviewCard = {
  title: string
  type: string
  description: string
  impact: string
  tools: string[]
  skills: string[]
  expertSkills?: string[]
  activeSkills?: string[]
  sections?: {
    title: string
    skills: string[]
  }[]
}

const toolIcons: Record<string, ToolIcon> = {
  'AI Agents': { name: 'AI Agents', icon: SiAnthropic, color: '#f4a261', label: 'Agent work' },
  ChatGPT: { name: 'ChatGPT', icon: SiOpenai, color: '#10a37f', label: 'AI drafting' },
  Codex: { name: 'Codex', icon: SiOpenai, color: '#00f2ea', label: 'Code support' },
  Claude: { name: 'Claude', icon: SiClaude, color: '#d97757', label: 'Analysis' },
  Gemini: { name: 'Gemini', icon: SiGooglegemini, color: '#8ab4f8', label: 'Research' },
  HTML5: { name: 'HTML5', icon: SiHtml5, color: '#e34f26', label: 'Structure' },
  CSS3: { name: 'CSS3', icon: SiCss, color: '#663399', label: 'Styling' },
  JavaScript: { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', label: 'Browser logic' },
  'React JS': { name: 'React JS', icon: SiReact, color: '#61dafb', label: 'Frontend UI' },
  'React.js': { name: 'React.js', icon: SiReact, color: '#61dafb', label: 'Frontend UI' },
  'Vue.js': { name: 'Vue.js', icon: SiVuedotjs, color: '#4fc08d', label: 'Frontend UI' },
  Angular: { name: 'Angular', icon: SiAngular, color: '#dd0031', label: 'Frontend UI' },
  'Next.js': { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', label: 'Full-stack web' },
  'Nuxt.js': { name: 'Nuxt.js', icon: SiNuxt, color: '#00dc82', label: 'Vue framework' },
  TypeScript: { name: 'TypeScript', icon: SiTypescript, color: '#3178c6', label: 'Typed apps' },
  'Tailwind CSS': { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4', label: 'Responsive UI' },
  Bootstrap: { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3', label: 'UI framework' },
  'Material UI': { name: 'Material UI', icon: SiMui, color: '#007fff', label: 'UI components' },
  'ShadCN UI': { name: 'ShadCN UI', icon: SiShadcnui, color: '#ffffff', label: 'UI components' },
  'Node.js': { name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e', label: 'Backend runtime' },
  'Express.js': { name: 'Express.js', icon: SiExpress, color: '#ffffff', label: 'API server' },
  NestJS: { name: 'NestJS', icon: SiNestjs, color: '#e0234e', label: 'Backend framework' },
  PHP: { name: 'PHP', icon: SiPhp, color: '#777bb4', label: 'Backend' },
  Laravel: { name: 'Laravel', icon: SiLaravel, color: '#ff2d20', label: 'PHP framework' },
  Python: { name: 'Python', icon: SiPython, color: '#3776ab', label: 'Backend scripts' },
  Django: { name: 'Django', icon: SiDjango, color: '#092e20', label: 'Python web' },
  Flask: { name: 'Flask', icon: SiFlask, color: '#ffffff', label: 'Python API' },
  FastAPI: { name: 'FastAPI', icon: SiFastapi, color: '#009688', label: 'Python API' },
  Java: { name: 'Java', icon: SiOpenjdk, color: '#f89820', label: 'Backend apps' },
  'Spring Boot': { name: 'Spring Boot', icon: SiSpringboot, color: '#6db33f', label: 'Java backend' },
  'C# ASP.NET': { name: 'ASP.NET', icon: SiDotnet, color: '#512bd4', label: 'C# web' },
  'Ruby on Rails': { name: 'Rails', icon: SiRubyonrails, color: '#cc0000', label: 'Web framework' },
  'Go Fiber': { name: 'Go Fiber', icon: SiGo, color: '#00add8', label: 'Go API' },
  Firebase: { name: 'Firebase', icon: SiFirebase, color: '#ffca28', label: 'Backend' },
  'Firebase Realtime Database': { name: 'Realtime DB', icon: SiFirebase, color: '#ffca28', label: 'Live data' },
  Firestore: { name: 'Firestore', icon: SiFirebase, color: '#ffca28', label: 'Cloud database' },
  MySQL: { name: 'MySQL', icon: SiMysql, color: '#4479a1', label: 'SQL database' },
  PostgreSQL: { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1', label: 'SQL database' },
  MongoDB: { name: 'MongoDB', icon: SiMongodb, color: '#47a248', label: 'NoSQL database' },
  SQLite: { name: 'SQLite', icon: SiSqlite, color: '#003b57', label: 'Local database' },
  MariaDB: { name: 'MariaDB', icon: SiMariadb, color: '#003545', label: 'SQL database' },
  Supabase: { name: 'Supabase', icon: SiSupabase, color: '#3ecf8e', label: 'Backend platform' },
  Redis: { name: 'Redis', icon: SiRedis, color: '#dc382d', label: 'Cache' },
  'Database Management': { name: 'Database', icon: FiDatabase, color: '#7dd3fc', label: 'Records data' },
  'Firebase Auth': { name: 'Firebase Auth', icon: SiFirebase, color: '#ffca28', label: 'Authentication' },
  JWT: { name: 'JWT', icon: SiJsonwebtokens, color: '#ffffff', label: 'Token auth' },
  OAuth: { name: 'OAuth', icon: FiShield, color: '#86efac', label: 'Secure login' },
  Auth0: { name: 'Auth0', icon: SiAuth0, color: '#eb5424', label: 'Identity' },
  Clerk: { name: 'Clerk', icon: SiClerk, color: '#6c47ff', label: 'User auth' },
  Vercel: { name: 'Vercel', icon: SiVercel, color: '#ffffff', label: 'Deployment' },
  Netlify: { name: 'Netlify', icon: SiNetlify, color: '#00c7b7', label: 'Deployment' },
  'Firebase Hosting': { name: 'Firebase Hosting', icon: SiFirebase, color: '#ffca28', label: 'Hosting' },
  Render: { name: 'Render', icon: SiRender, color: '#46e3b7', label: 'Deployment' },
  Railway: { name: 'Railway', icon: SiRailway, color: '#ffffff', label: 'Deployment' },
  AWS: { name: 'AWS', icon: FiGlobe, color: '#ff9900', label: 'Cloud' },
  DigitalOcean: { name: 'DigitalOcean', icon: SiDigitalocean, color: '#0080ff', label: 'Cloud' },
  Hostinger: { name: 'Hostinger', icon: SiHostinger, color: '#673de6', label: 'Hosting' },
  Azure: { name: 'Azure', icon: FiGlobe, color: '#0078d4', label: 'Cloud' },
  Git: { name: 'Git', icon: SiGit, color: '#f05032', label: 'Versioning' },
  GitHub: { name: 'GitHub', icon: SiGithub, color: '#ffffff', label: 'Repositories' },
  Docker: { name: 'Docker', icon: SiDocker, color: '#2496ed', label: 'Containers' },
  Postman: { name: 'Postman', icon: SiPostman, color: '#ff6c37', label: 'API testing' },
  'VS Code': { name: 'VS Code', icon: FiMonitor, color: '#007acc', label: 'Editor' },
  Vite: { name: 'Vite', icon: SiVite, color: '#646cff', label: 'Build tool' },
  Webpack: { name: 'Webpack', icon: SiWebpack, color: '#8dd6f9', label: 'Bundler' },
  Linux: { name: 'Linux', icon: SiLinux, color: '#facc15', label: 'Server OS' },
  Apache: { name: 'Apache', icon: SiApache, color: '#d22128', label: 'Web server' },
  tRPC: { name: 'tRPC', icon: SiTrpc, color: '#2596be', label: 'Type-safe API' },
  Prisma: { name: 'Prisma', icon: SiPrisma, color: '#2d3748', label: 'ORM' },
  'MERN Stack': { name: 'MERN', icon: SiReact, color: '#61dafb', label: 'Mongo Express React Node' },
  'MEVN Stack': { name: 'MEVN', icon: SiVuedotjs, color: '#4fc08d', label: 'Mongo Express Vue Node' },
  'LAMP Stack': { name: 'LAMP', icon: SiPhp, color: '#777bb4', label: 'Linux Apache MySQL PHP' },
  'T3 Stack': { name: 'T3', icon: SiNextdotjs, color: '#ffffff', label: 'Next TypeScript tRPC' },
  'Firebase Stack': { name: 'Firebase Stack', icon: SiFirebase, color: '#ffca28', label: 'Auth Firestore Hosting' },
  '.NET Stack': { name: '.NET Stack', icon: SiDotnet, color: '#512bd4', label: 'C# ASP.NET SQL' },
  Slack: { name: 'Slack', icon: SiSlack, color: '#4a154b', label: 'Team chat' },
  'Microsoft Teams': { name: 'Teams', icon: FiMonitor, color: '#6264a7', label: 'Team meetings' },
  Zoom: { name: 'Zoom', icon: SiZoom, color: '#0b5cff', label: 'Video calls' },
  'Google Meet': { name: 'Google Meet', icon: SiGooglemeet, color: '#00897b', label: 'Video calls' },
  Skype: { name: 'Skype', icon: FiGlobe, color: '#00aff0', label: 'Calls' },
  Discord: { name: 'Discord', icon: SiDiscord, color: '#5865f2', label: 'Community chat' },
  'Google Workspace': { name: 'Google Workspace', icon: SiGoogledrive, color: '#4285f4', label: 'Office suite' },
  Gmail: { name: 'Gmail', icon: SiGmail, color: '#ea4335', label: 'Email' },
  'Google Docs': { name: 'Google Docs', icon: SiGoogledocs, color: '#4285f4', label: 'Documents' },
  'Google Sheets': { name: 'Google Sheets', icon: SiGooglesheets, color: '#34a853', label: 'Spreadsheets' },
  'Google Drive': { name: 'Google Drive', icon: SiGoogledrive, color: '#4285f4', label: 'Files' },
  'Google Calendar': { name: 'Google Calendar', icon: SiGooglecalendar, color: '#4285f4', label: 'Scheduling' },
  'Microsoft 365': { name: 'Microsoft 365', icon: FiGlobe, color: '#eb3c00', label: 'Office suite' },
  Word: { name: 'Word', icon: FiFileText, color: '#2b579a', label: 'Documents' },
  Excel: { name: 'Excel', icon: FiDatabase, color: '#217346', label: 'Spreadsheets' },
  'Microsoft Excel': { name: 'Excel', icon: FiDatabase, color: '#217346', label: 'Spreadsheets' },
  PowerPoint: { name: 'PowerPoint', icon: FiFileText, color: '#d24726', label: 'Presentations' },
  Outlook: { name: 'Outlook', icon: FiGlobe, color: '#0078d4', label: 'Email' },
  OneDrive: { name: 'OneDrive', icon: FiGlobe, color: '#0078d4', label: 'Cloud files' },
  Notion: { name: 'Notion', icon: SiNotion, color: '#ffffff', label: 'Workspace' },
  Evernote: { name: 'Evernote', icon: SiEvernote, color: '#00a82d', label: 'Notes' },
  Trello: { name: 'Trello', icon: SiTrello, color: '#0052cc', label: 'Boards' },
  Asana: { name: 'Asana', icon: SiAsana, color: '#f06a6a', label: 'Tasks' },
  ClickUp: { name: 'ClickUp', icon: SiClickup, color: '#7b68ee', label: 'Projects' },
  'Monday.com': { name: 'Monday.com', icon: FiActivity, color: '#ff3d57', label: 'Projects' },
  Jira: { name: 'Jira', icon: SiJira, color: '#0052cc', label: 'Issue tracking' },
  Dropbox: { name: 'Dropbox', icon: SiDropbox, color: '#0061ff', label: 'File storage' },
  HubSpot: { name: 'HubSpot', icon: SiHubspot, color: '#ff7a59', label: 'CRM' },
  Salesforce: { name: 'Salesforce', icon: SiSalesforce, color: '#00a1e0', label: 'CRM' },
  Zendesk: { name: 'Zendesk', icon: SiZendesk, color: '#03363d', label: 'Support' },
  Freshdesk: { name: 'Freshdesk', icon: FiGlobe, color: '#22c55e', label: 'Support' },
  'Zoho CRM': { name: 'Zoho CRM', icon: SiZoho, color: '#ef4444', label: 'CRM' },
  Buffer: { name: 'Buffer', icon: SiBuffer, color: '#231f20', label: 'Social scheduling' },
  Hootsuite: { name: 'Hootsuite', icon: SiHootsuite, color: '#143059', label: 'Social management' },
  'Meta Business Suite': { name: 'Meta Business', icon: SiMeta, color: '#0866ff', label: 'Social business' },
  CapCut: { name: 'CapCut', icon: FiTool, color: '#ffffff', label: 'Video editing' },
  Grammarly: { name: 'Grammarly', icon: SiGrammarly, color: '#15c39a', label: 'Writing AI' },
  'Notion AI': { name: 'Notion AI', icon: SiNotion, color: '#ffffff', label: 'AI workspace' },
  'Canva AI': { name: 'Canva AI', icon: SiCanva, color: '#00c4cc', label: 'AI design' },  
  'Otter.ai': { name: 'Otter.ai', icon: FiFileText, color: '#2563eb', label: 'Transcription' },
  Mailchimp: { name: 'Mailchimp', icon: SiMailchimp, color: '#ffe01b', label: 'Email marketing' },
  ConvertKit: { name: 'ConvertKit', icon: FiGlobe, color: '#fb6970', label: 'Email marketing' },
  Brevo: { name: 'Brevo', icon: SiBrevo, color: '#0b996e', label: 'Email marketing' },
  QuickBooks: { name: 'QuickBooks', icon: SiQuickbooks, color: '#2ca01c', label: 'Bookkeeping' },
  Xero: { name: 'Xero', icon: SiXero, color: '#13b5ea', label: 'Accounting' },
  Wave: { name: 'Wave', icon: FiActivity, color: '#1c9ad6', label: 'Finance' },
  Shopify: { name: 'Shopify', icon: SiShopify, color: '#7ab55c', label: 'E-commerce' },
  WooCommerce: { name: 'WooCommerce', icon: SiWoocommerce, color: '#96588a', label: 'E-commerce' },
  'Amazon Seller Central': { name: 'Amazon Seller', icon: FiGlobe, color: '#ff9900', label: 'Marketplace' },
  'Lazada Seller Center': { name: 'Lazada Seller', icon: FiGlobe, color: '#1a4dff', label: 'Marketplace' },
  'Shopee Seller Center': { name: 'Shopee Seller', icon: SiShopee, color: '#ee4d2d', label: 'Marketplace' },
  'Responsive UI': { name: 'Responsive UI', icon: FiGlobe, color: '#00f2ea', label: 'Web screens' },
  'Prompt Engineering': { name: 'Prompting', icon: FiFileText, color: '#c084fc', label: 'Instructions' },
  'Electronic Medical Records': { name: 'EMR', icon: FiActivity, color: '#73fbd3', label: 'Records' },
  'Medical Coding': { name: 'Medical Coding', icon: FiFileText, color: '#7dd3fc', label: 'Coding' },
  'Data Privacy Practices': { name: 'Data Privacy', icon: FiShield, color: '#86efac', label: 'Security' },
  'Records Management': { name: 'Records', icon: FiDatabase, color: '#93c5fd', label: 'Tracking' },
  'Data Entry': { name: 'Data Entry', icon: FiFileText, color: '#d8b4fe', label: 'Accuracy' },
  'Workflow Documentation': { name: 'Documentation', icon: FiFileText, color: '#facc15', label: 'Process' },
  'Patient Data Handling': { name: 'Patient Data', icon: FiShield, color: '#fb7185', label: 'Protected' },
  'IoT Development': { name: 'IoT', icon: FiCpu, color: '#00f2ea', label: 'Connected' },
  Android: { name: 'Android', icon: SiAndroid, color: '#3ddc84', label: 'Mobile OS' },
  Kotlin: { name: 'Kotlin', icon: SiKotlin, color: '#7f52ff', label: 'Android code' },
  'Android Studio': { name: 'Android Studio', icon: SiAndroidstudio, color: '#3ddc84', label: 'Mobile IDE' },
  iOS: { name: 'iOS', icon: FiSmartphone, color: '#ffffff', label: 'Apple mobile' },
  Swift: { name: 'Swift', icon: SiSwift, color: '#f05138', label: 'iOS code' },
  Xcode: { name: 'Xcode', icon: SiXcode, color: '#147efb', label: 'Apple IDE' },
  Flutter: { name: 'Flutter', icon: SiFlutter, color: '#02569b', label: 'Cross-platform' },
  'React Native': { name: 'React Native', icon: SiReact, color: '#61dafb', label: 'Mobile apps' },
  Ionic: { name: 'Ionic', icon: SiIonic, color: '#3880ff', label: 'Hybrid apps' },
  Expo: { name: 'Expo', icon: SiExpo, color: '#ffffff', label: 'RN tooling' },
  Xamarin: { name: 'Xamarin', icon: SiDotnet, color: '#3498db', label: '.NET mobile' },
  '.NET MAUI': { name: '.NET MAUI', icon: SiDotnet, color: '#512bd4', label: 'Cross-platform' },
  Cordova: { name: 'Cordova', icon: SiApache, color: '#e8e8e8', label: 'Hybrid apps' },
  'Node.js API': { name: 'Node API', icon: SiNodedotjs, color: '#5fa04e', label: 'Mobile backend' },
  'Laravel API': { name: 'Laravel API', icon: SiLaravel, color: '#ff2d20', label: 'Mobile backend' },
  'MongoDB Atlas': { name: 'MongoDB Atlas', icon: SiMongodb, color: '#47a248', label: 'Cloud DB' },
  NativeWind: { name: 'NativeWind', icon: SiTailwindcss, color: '#06b6d4', label: 'RN styling' },
  'React Native Paper': { name: 'RN Paper', icon: SiMaterialdesign, color: '#a78bfa', label: 'UI library' },
  'Flutter Material Design': { name: 'Flutter Material', icon: SiMaterialdesign, color: '#757575', label: 'UI library' },
  'Flutter Cupertino': { name: 'Cupertino', icon: SiFlutter, color: '#02569b', label: 'iOS UI' },
  'VB.NET': { name: 'VB.NET', icon: SiDotnet, color: '#512bd4', label: 'Windows apps' },
  'C# WinForms': { name: 'WinForms', icon: SiSharp, color: '#239120', label: 'Desktop UI' },
  'C# WPF': { name: 'WPF', icon: SiSharp, color: '#239120', label: 'Desktop UI' },
  '.NET Framework': { name: '.NET Framework', icon: SiDotnet, color: '#512bd4', label: 'Windows apps' },
  'Visual Studio': { name: 'Visual Studio', icon: FiMonitor, color: '#5c2d91', label: 'IDE' },
  'Electron.js': { name: 'Electron', icon: SiElectron, color: '#47848f', label: 'Desktop apps' },
  Tauri: { name: 'Tauri', icon: SiTauri, color: '#ffc131', label: 'Desktop apps' },
  'Flutter Desktop': { name: 'Flutter Desktop', icon: SiFlutter, color: '#02569b', label: 'Desktop UI' },
  Qt: { name: 'Qt', icon: SiQt, color: '#41cd52', label: 'Desktop UI' },
  JavaFX: { name: 'JavaFX', icon: SiOpenjdk, color: '#f89820', label: 'Desktop UI' },
  'SQL Server': { name: 'SQL Server', icon: FiDatabase, color: '#dc2626', label: 'Database' },
  'MS Access': { name: 'MS Access', icon: FiDatabase, color: '#a855f7', label: 'Database' },
  'Crystal Reports': { name: 'Crystal Reports', icon: FiFileText, color: '#7dd3fc', label: 'Reports' },
  'RDLC Reports': { name: 'RDLC Reports', icon: FiFileText, color: '#7dd3fc', label: 'Reports' },
  FastReport: { name: 'FastReport', icon: FiFileText, color: '#7dd3fc', label: 'Reports' },
  iTextSharp: { name: 'iTextSharp', icon: FiFileText, color: '#7dd3fc', label: 'PDF reports' },
  ESP32: { name: 'ESP32', icon: SiEspressif, color: '#e7352c', label: 'Hardware' },
  Arduino: { name: 'Arduino', icon: SiArduino, color: '#00979d', label: 'Prototype' },
  'IoT Integration': { name: 'IoT Integration', icon: SiArduino, color: '#00979d', label: 'Devices' },
  'Network Configuration': { name: 'Networking', icon: FiWifi, color: '#60a5fa', label: 'Setup' },
  'Network Troubleshooting': { name: 'Network Fixes', icon: FiWifi, color: '#60a5fa', label: 'Repair' },
  'Hardware Troubleshooting': { name: 'Hardware', icon: FiHardDrive, color: '#f97316', label: 'Devices' },
  'Software Troubleshooting': { name: 'Software', icon: FiMonitor, color: '#a78bfa', label: 'Apps' },
  'Printer Troubleshooting': { name: 'Printers', icon: FiPrinter, color: '#facc15', label: 'Queue' },
  'Computer Lab Support': { name: 'Lab Support', icon: FiMonitor, color: '#7dd3fc', label: 'Stations' },
  'Adobe Photoshop': { name: 'Photoshop', icon: FiTool, color: '#31a8ff', label: 'Design' },
  Canva: { name: 'Canva', icon: SiCanva, color: '#00c4cc', label: 'Assets' },
  Figma: { name: 'Figma', icon: SiFigma, color: '#f24e1e', label: 'UI planning' },
  'Printing Equipment': { name: 'Printing', icon: FiPrinter, color: '#facc15', label: 'Production' },
  'Graphic Layout': { name: 'Layout', icon: FiGlobe, color: '#fb7185', label: 'Creative' },
  'Technical Documentation': { name: 'Tech Docs', icon: FiFileText, color: '#d8b4fe', label: 'Writing' },
  Prompting: { name: 'Prompting', icon: FiFileText, color: '#c084fc', label: 'AI input' },
  Documentation: { name: 'Documentation', icon: FiFileText, color: '#facc15', label: 'Output' },
  Research: { name: 'Research', icon: FiGlobe, color: '#7dd3fc', label: 'Search' },
  Networking: { name: 'Networking', icon: FiWifi, color: '#60a5fa', label: 'Connectivity' },
  Hardware: { name: 'Hardware', icon: FiHardDrive, color: '#f97316', label: 'Devices' },
  'Software Support': { name: 'Software', icon: FiMonitor, color: '#a78bfa', label: 'Apps' },
  'Desktop Apps': { name: 'Desktop Apps', icon: FiMonitor, color: '#7dd3fc', label: 'Workstations' },
  Websites: { name: 'Websites', icon: FiGlobe, color: '#00f2ea', label: 'Browser apps' },
  'Print Layout': { name: 'Print Layout', icon: FiPrinter, color: '#facc15', label: 'Production' },
}

const skillPreviewCards: SkillPreviewCard[] = [
  {
    title: 'AI Agent Productivity Workflows',
    type: 'AI-assisted work',
    description:
      'Uses AI agents and modern tools to accelerate research, organize technical tasks, prepare documentation, and support development problem solving.',
    impact:
      'Turns complex work into clearer steps, faster drafts, stronger documentation, and more consistent technical outputs.',
    tools: ['ChatGPT', 'Codex', 'Claude', 'Gemini'],
    skills: ['AI Agents', 'Prompting', 'Documentation', 'Research'],
    expertSkills: ['ChatGPT', 'Claude', 'AI Agents', 'Prompting', 'Documentation'],
    activeSkills: ['ChatGPT', 'Claude', 'AI Agents', 'Prompting', 'Documentation', 'Research'],
  },
  {
    title: 'IT Support and Lab Operations',
    type: 'Support operations',
    description:
      'Supports students, faculty, office systems, desktop applications, websites, network connectivity, printers, and computer lab equipment.',
    impact:
      'Keeps daily operations stable through practical troubleshooting across hardware, software, networks, printers, and workstations.',
    tools: ['Desktop Apps', 'Websites', 'Network Configuration', 'Printer Troubleshooting'],
    skills: ['Networking', 'Hardware', 'Software Support', 'Computer Lab Support'],
    expertSkills: ['Network Configuration', 'Network Troubleshooting', 'Hardware Troubleshooting', 'Software Troubleshooting', 'Printer Troubleshooting', 'Computer Lab Support', 'Networking', 'Hardware'],
    activeSkills: ['Desktop Apps', 'Websites', 'Network Configuration', 'Network Troubleshooting', 'Hardware Troubleshooting', 'Software Troubleshooting', 'Printer Troubleshooting', 'Computer Lab Support', 'Networking', 'Hardware', 'Software Support'],
  },
  {
    title: 'Design and Print Production',
    type: 'Creative production',
    description:
      'Creates custom print materials including tarpaulins, business cards, brochures, IDs, layouts, and quick design assets.',
    impact:
      'Combines design software, production accuracy, print equipment operation, and technical documentation in a fast-paced workflow.',
    tools: ['Adobe Photoshop', 'Canva', 'Figma', 'Printing Equipment'],
    skills: ['Adobe Photoshop', 'Canva', 'Printing Equipment', 'Graphic Layout'],
    expertSkills: ['Adobe Photoshop', 'Canva', 'Printing Equipment', 'Graphic Layout'],
    activeSkills: ['Adobe Photoshop', 'Canva', 'Printing Equipment', 'Graphic Layout', 'Technical Documentation'],
  },
  {
    title: 'Full Stack Web App Development',
    type: 'Web app stack',
    description:
      'Builds browser-based systems using modern frontend frameworks, backend APIs, databases, authentication, deployment platforms, and developer tools.',
    impact:
      'Covers the practical pieces needed for responsive websites, admin dashboards, records systems, APIs, secure login, database-driven apps, and production deployment.',
    tools: ['React.js', 'Node.js', 'Firebase', 'Vercel'],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Node.js', 'MySQL', 'Firebase Auth'],
    expertSkills: [
      'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Tailwind CSS',
      'Firebase Realtime Database', 'Firestore', 'Firebase Auth',
      'Git', 'GitHub', 'VS Code', 'Vite',
    ],
    activeSkills: [
      'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Tailwind CSS',
      'Node.js', 'Express.js',
      'MySQL', 'Firebase Realtime Database', 'Firestore', 'SQLite',
      'Firebase Auth', 'JWT', 'Git', 'GitHub', 'VS Code', 'Vite', 'Vercel', 'Firebase Hosting',
    ],
    sections: [
      {
        title: 'Frontend',
        skills: [
          'HTML5',
          'CSS3',
          'JavaScript',
          'TypeScript',
          'React.js',
          'Vue.js',
          'Angular',
          'Next.js',
          'Nuxt.js',
          'Tailwind CSS',
          'Bootstrap',
          'Material UI',
          'ShadCN UI',
        ],
      },
      {
        title: 'Backend',
        skills: [
          'Node.js',
          'Express.js',
          'NestJS',
          'PHP',
          'Laravel',
          'Python',
          'Django',
          'Flask',
          'FastAPI',
          'Java',
          'Spring Boot',
          'C# ASP.NET',
          'Ruby on Rails',
          'Go Fiber',
        ],
      },
      {
        title: 'Database',
        skills: [
          'MySQL',
          'PostgreSQL',
          'MongoDB',
          'Firebase Realtime Database',
          'Firestore',
          'SQLite',
          'MariaDB',
          'Supabase',
          'Redis',
        ],
      },
      {
        title: 'Auth, Hosting, and Dev Tools',
        skills: [
          'Firebase Auth',
          'JWT',
          'OAuth',
          'Auth0',
          'Clerk',
          'Vercel',
          'Netlify',
          'Firebase Hosting',
          'Render',
          'Railway',
          'AWS',
          'DigitalOcean',
          'Hostinger',
          'Git',
          'GitHub',
          'Docker',
          'Postman',
          'VS Code',
          'Vite',
          'Webpack',
        ],
      },
    ],
  },
  {
    title: 'Mobile App Development',
    type: 'Mobile app stack',
    description:
      'Plans and builds mobile applications using native Android/iOS tools, cross-platform frameworks, mobile backends, and mobile UI libraries.',
    impact:
      'Supports mobile app workflows from interface buildout to authentication, cloud data, API integration, and cross-platform deployment planning.',
    tools: ['Android', 'Flutter', 'React Native', 'Firebase'],
    skills: ['Android', 'Kotlin', 'Swift', 'Flutter', 'React Native', 'Firebase', 'Supabase', 'NativeWind'],
    expertSkills: ['Android', 'Java', 'Kotlin', 'Android Studio', 'React Native'],
    activeSkills: ['Android', 'Java', 'Kotlin', 'Android Studio', 'React Native', 'Expo', 'Firebase', 'NativeWind', 'React Native Paper', 'Node.js API'],
    sections: [
      {
        title: 'Native Mobile Development',
        skills: ['Android', 'Java', 'Kotlin', 'Android Studio', 'iOS', 'Swift', 'Xcode'],
      },
      {
        title: 'Cross-Platform Mobile',
        skills: ['Flutter', 'React Native', 'Ionic', 'Expo', 'Xamarin', '.NET MAUI', 'Cordova'],
      },
      {
        title: 'Mobile Backend and Services',
        skills: ['Firebase', 'Supabase', 'Node.js API', 'Laravel API', 'MongoDB Atlas'],
      },
      {
        title: 'Mobile UI Libraries',
        skills: ['NativeWind', 'React Native Paper', 'Flutter Material Design', 'Flutter Cupertino'],
      },
    ],
  },
  {
    title: 'Desktop App Development',
    type: 'Desktop app stack',
    description:
      'Creates and supports desktop applications for Windows and cross-platform environments using .NET, Electron, Tauri, Flutter Desktop, Qt, and JavaFX.',
    impact:
      'Useful for office tools, local records systems, reporting utilities, printing workflows, desktop databases, and workstation-based applications.',
    tools: ['.NET MAUI', 'Electron.js', 'SQLite', 'Crystal Reports'],
    skills: ['VB.NET', 'C# WinForms', 'C# WPF', 'Electron.js', 'Tauri', 'SQLite', 'SQL Server', 'RDLC Reports'],
    expertSkills: ['VB.NET', 'C# WinForms', 'C# WPF', 'Visual Studio', 'SQL Server', 'SQLite', 'Crystal Reports', 'RDLC Reports'],
    activeSkills: ['VB.NET', 'C# WinForms', 'C# WPF', '.NET Framework', 'Visual Studio', 'SQLite', 'MySQL', 'SQL Server', 'MS Access', 'Crystal Reports', 'RDLC Reports', 'iTextSharp'],
    sections: [
      {
        title: 'Windows Desktop Development',
        skills: ['VB.NET', 'C# WinForms', 'C# WPF', '.NET Framework', '.NET MAUI', 'Visual Studio'],
      },
      {
        title: 'Cross-Platform Desktop Apps',
        skills: ['Electron.js', 'Tauri', 'Flutter Desktop', 'Qt', 'JavaFX'],
      },
      {
        title: 'Desktop Databases',
        skills: ['SQLite', 'MySQL', 'PostgreSQL', 'SQL Server', 'MS Access'],
      },
      {
        title: 'Reporting and Printing',
        skills: ['Crystal Reports', 'RDLC Reports', 'FastReport', 'iTextSharp'],
      },
    ],
  },
  {
    title: 'Popular Full Stack Combinations',
    type: 'Stack combinations',
    description:
      'Understands common end-to-end combinations used for production web systems, dashboards, records platforms, and cloud-backed applications.',
    impact:
      'Helps choose practical stack pairings based on project needs, hosting plans, database requirements, team familiarity, and long-term maintainability.',
    tools: ['MERN Stack', 'Firebase Stack', 'T3 Stack', '.NET Stack'],
    skills: ['MERN Stack', 'MEVN Stack', 'LAMP Stack', 'T3 Stack', 'Firebase Stack', '.NET Stack'],
    expertSkills: ['MERN Stack', 'Firebase Stack', 'React.js', 'TypeScript', 'Tailwind CSS', 'Firebase Auth', 'Firestore', 'Firebase Hosting'],
    activeSkills: [
      'MERN Stack', 'Firebase Stack',
      'React.js', 'Node.js', 'Express.js',
      'MySQL', 'TypeScript', 'Tailwind CSS',
      'Firebase Auth', 'Firestore', 'Firebase Hosting',
      'SQL Server', 'C# ASP.NET',
    ],
    sections: [
      {
        title: 'MERN Stack',
        skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      },
      {
        title: 'MEVN Stack',
        skills: ['MongoDB', 'Express.js', 'Vue.js', 'Node.js'],
      },
      {
        title: 'LAMP Stack',
        skills: ['Linux', 'Apache', 'MySQL', 'PHP'],
      },
      {
        title: 'T3, Firebase, and .NET',
        skills: [
          'Next.js',
          'TypeScript',
          'tRPC',
          'Prisma',
          'Tailwind CSS',
          'Firebase Auth',
          'Firestore',
          'Firebase Hosting',
          'C# ASP.NET',
          'SQL Server',
          'Azure',
        ],
      },
    ],
  },
  {
    title: 'Virtual Assistant Tool Stack',
    type: 'VA operations stack',
    description:
      'Supports remote administrative work using communication apps, office suites, project management tools, file systems, CRM platforms, social media tools, AI assistants, email marketing, bookkeeping, and e-commerce dashboards.',
    impact:
      'Helps clients stay organized through inbox support, scheduling, documentation, data entry, task tracking, customer support, content coordination, and online store operations.',
    tools: ['Slack', 'Google Workspace', 'Notion', 'Trello'],
    skills: ['Slack', 'Google Workspace', 'Google Sheets', 'Notion', 'Trello', 'HubSpot', 'Canva', 'ChatGPT'],
    expertSkills: ['Google Workspace', 'Gmail', 'Google Docs', 'Google Sheets', 'Google Drive', 'Google Calendar', 'Notion', 'Trello', 'ChatGPT', 'Canva'],
    activeSkills: [
      'Slack', 'Google Workspace', 'Gmail', 'Google Docs', 'Google Sheets', 'Google Drive', 'Google Calendar',
      'Microsoft 365', 'Word', 'Excel', 'Microsoft Excel', 'PowerPoint', 'Outlook', 'OneDrive',
      'Notion', 'Trello', 'ClickUp', 'ChatGPT', 'Grammarly', 'Canva', 'Canva AI',
    ],
    sections: [
      {
        title: 'Communication Tools',
        skills: ['Slack', 'Microsoft Teams', 'Zoom', 'Google Meet', 'Skype', 'Discord'],
      },
      {
        title: 'Productivity and Office Tools',
        skills: [
          'Google Workspace',
          'Gmail',
          'Google Docs',
          'Google Sheets',
          'Google Drive',
          'Google Calendar',
          'Microsoft 365',
          'Word',
          'Excel',
          'PowerPoint',
          'Outlook',
          'OneDrive',
          'Notion',
          'Evernote',
        ],
      },
      {
        title: 'Project Management and File Work',
        skills: ['Trello', 'Asana', 'ClickUp', 'Monday.com', 'Jira', 'Microsoft Excel', 'Google Sheets', 'Dropbox', 'Google Drive', 'OneDrive'],
      },
      {
        title: 'CRM, Support, and Social Media',
        skills: ['HubSpot', 'Salesforce', 'Zendesk', 'Freshdesk', 'Zoho CRM', 'Canva', 'Buffer', 'Hootsuite', 'Meta Business Suite', 'CapCut'],
      },
      {
        title: 'AI, Email Marketing, Finance, and E-commerce',
        skills: [
          'ChatGPT',
          'Grammarly',
          'Notion AI',
          'Canva AI',
          'Otter.ai',
          'Mailchimp',
          'ConvertKit',
          'Brevo',
          'QuickBooks',
          'Xero',
          'Wave',
          'Shopify',
          'WooCommerce',
          'Amazon Seller Central',
          'Lazada Seller Center',
          'Shopee Seller Center',
        ],
      },
    ],
  },
]

function getToolIcon(name: string) {
  return toolIcons[name] ?? { name, icon: FiTool, color: '#00f2ea', label: 'Skill' }
}

function isActive(skill: string, activeSkills?: string[]): boolean {
  return !activeSkills || activeSkills.includes(skill)
}

function getSkillTier(skill: string, expertSkills?: string[], activeSkills?: string[]): 'expert' | 'proficient' | 'familiar' {
  if (!activeSkills) return 'proficient'
  if (expertSkills?.includes(skill)) return 'expert'
  if (activeSkills.includes(skill)) return 'proficient'
  return 'familiar'
}

function SkillChip({
  skill,
  activeSkills,
  expertSkills,
  showTier,
}: {
  skill: string
  activeSkills?: string[]
  expertSkills?: string[]
  showTier?: boolean
}) {
  const tool = getToolIcon(skill)
  const Icon = tool.icon
  const active = isActive(skill, activeSkills)
  const tier = showTier ? getSkillTier(skill, expertSkills, activeSkills) : null

  return (
    <span className="skill-chip inline-flex items-center gap-2 px-3 py-1 text-[10px] font-bold">
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ background: active ? '#00f2ea' : '#4a6a66' }}
      />
      <Icon className="h-3.5 w-3.5" style={{ color: tool.color }} aria-hidden="true" />
      {skill}
      {tier === 'expert' && (
        <span className="rounded bg-[#00f2ea]/15 px-1 py-px font-mono-label text-[8px] font-bold uppercase tracking-wide text-[#00f2ea]">
          exp
        </span>
      )}
      {tier === 'proficient' && (
        <span className="rounded bg-blue-500/15 px-1 py-px font-mono-label text-[8px] font-bold uppercase tracking-wide text-blue-300">
          pro
        </span>
      )}
    </span>
  )
}

const TYPE_CONFIG: Record<string, { icon: IconType; accent: string; bg: string }> = {
  'AI-assisted work':    { icon: SiAnthropic,  accent: '#f59e0b', bg: 'rgba(245,158,11,0.07)' },
  'Support operations':  { icon: FiTool,       accent: '#3b82f6', bg: 'rgba(59,130,246,0.07)' },
  'Creative production': { icon: FiPrinter,    accent: '#ec4899', bg: 'rgba(236,72,153,0.07)' },
  'Web app stack':       { icon: FiGlobe,      accent: '#00f2ea', bg: 'rgba(0,242,234,0.07)'  },
  'Mobile app stack':    { icon: FiSmartphone, accent: '#22c55e', bg: 'rgba(34,197,94,0.07)'  },
  'Desktop app stack':   { icon: FiMonitor,    accent: '#a855f7', bg: 'rgba(168,85,247,0.07)' },
  'Stack combinations':  { icon: FiDatabase,   accent: '#14b8a6', bg: 'rgba(20,184,166,0.07)' },
  'VA operations stack': { icon: FiActivity,   accent: '#eab308', bg: 'rgba(234,179,8,0.07)'  },
  'Core skill stack':    { icon: FiCpu,        accent: '#00f2ea', bg: 'rgba(0,242,234,0.07)'  },
}

const INITIAL_CARD_COUNT = 4

function StackDrawer({ card, onClose }: { card: SkillPreviewCard; onClose: () => void }) {
  const cfg = TYPE_CONFIG[card.type] ?? TYPE_CONFIG['Core skill stack']
  const CategoryIcon = cfg.icon

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-lg flex-col border-l border-white/10 bg-[#070f1c] shadow-2xl"
        style={{ animation: 'slide-in-right 0.25s ease' }}
        role="dialog"
        aria-modal="true"
        aria-label={`${card.title} full stack`}
      >
        {/* sticky header */}
        <div className="shrink-0 border-b border-white/10 p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
                style={{ background: cfg.bg, borderColor: `${cfg.accent}30`, color: cfg.accent }}
              >
                <CategoryIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono-label text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: cfg.accent }}>
                  {card.type}
                </p>
                <h3 className="font-heading text-lg font-bold leading-tight text-[#d4e4fa]">
                  {card.title}
                </h3>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 text-[#849492] transition hover:border-white/30 hover:text-[#d4e4fa]"
              aria-label="Close"
            >
              <FiX className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-3 rounded-lg border border-white/10 bg-white/3 p-3 text-[11px] italic leading-5 text-[#849492]">
            {card.impact}
          </p>
          {/* mini legend */}
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 font-mono-label text-[10px] text-[#4a6a66]">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00f2ea]" />
              <span className="rounded bg-[#00f2ea]/15 px-1 text-[8px] font-bold text-[#00f2ea]">EXP</span>
              Expert
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00f2ea]" />
              <span className="rounded bg-blue-500/15 px-1 text-[8px] font-bold text-blue-300">PRO</span>
              Proficient
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4a6a66]" />
              Familiar — Can Adapt
            </span>
          </div>
        </div>

        {/* scrollable sections */}
        <div className="flex-1 overflow-y-auto p-5">
          <div className="grid gap-6">
            {card.sections ? (
              card.sections.map((section) => {
                const used = card.activeSkills
                  ? section.skills.filter((s) => card.activeSkills!.includes(s))
                  : section.skills
                const familiar = card.activeSkills
                  ? section.skills.filter((s) => !card.activeSkills!.includes(s))
                  : []

                return (
                  <div key={section.title}>
                    <p className="mb-3 font-mono-label text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: cfg.accent }}>
                      {section.title}
                    </p>
                    {used.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {used.map((skill) => (
                          <SkillChip key={skill} skill={skill} activeSkills={card.activeSkills} expertSkills={card.expertSkills} showTier />
                        ))}
                      </div>
                    )}
                    {familiar.length > 0 && (
                      <div className="mt-3 rounded-xl border border-dashed border-[#4a6a66]/35 bg-white/[0.02] p-3">
                        <p className="mb-2 font-mono-label text-[9px] font-bold uppercase tracking-widest text-[#4a6a66]">
                          Familiar — Can Adapt
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {familiar.map((skill) => (
                            <SkillChip key={skill} skill={skill} activeSkills={card.activeSkills} expertSkills={card.expertSkills} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })
            ) : (
              <div className="flex flex-wrap gap-2">
                {card.skills.map((skill) => (
                  <SkillChip key={skill} skill={skill} activeSkills={card.activeSkills} expertSkills={card.expertSkills} showTier />
                ))}
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  )
}

function Skills({ skillGroups }: SkillsProps) {
  const [stackPanelCard, setStackPanelCard] = useState<SkillPreviewCard | null>(null)
  const [showAll, setShowAll] = useState(false)

  const groupCards: SkillPreviewCard[] = skillGroups.map((group) => ({
    title: group.title,
    type: 'Core skill stack',
    description: group.description,
    impact: 'Applies these tools and practices to build reliable systems, support users, document work, and solve operational problems.',
    tools: group.skills.slice(0, 4),
    skills: group.skills,
    sections: [{ title: 'Current stack', skills: group.skills }],
  }))

  const allCards = [...groupCards, ...skillPreviewCards]
  const cards = showAll ? allCards : allCards.slice(0, INITIAL_CARD_COUNT)
  const hiddenCount = allCards.length - INITIAL_CARD_COUNT

  return (
    <section id="skills" className="border-y border-white/10 bg-white/3 px-5 py-16 md:py-28 lg:px-8">
      <div className="mx-auto max-w-300">
        <SectionHeading
          eyebrow="Skills Preview"
          title="Practical skills connected to real tools and work environments."
          description="A client-ready view of AI agents, web systems, medical records workflows, IoT, support operations, software applications, websites, desktop apps, and creative production tools."
        />

        {/* Legend */}
        <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-xl border border-white/10 bg-[#010f1f]/60 p-4">
          <p className="font-mono-label text-[10px] font-bold uppercase tracking-widest text-[#4a6a66]">
            Confidence:
          </p>
          <span className="flex items-center gap-2 text-[11px] text-[#849492]">
            <span className="skill-chip inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00f2ea]" />
              React.js
              <span className="rounded bg-[#00f2ea]/15 px-1 py-px font-mono-label text-[8px] font-bold text-[#00f2ea]">EXP</span>
            </span>
            = Expert — deep hands-on in real projects
          </span>
          <span className="flex items-center gap-2 text-[11px] text-[#849492]">
            <span className="skill-chip inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00f2ea]" />
              Node.js
              <span className="rounded bg-blue-500/15 px-1 py-px font-mono-label text-[8px] font-bold text-blue-300">PRO</span>
            </span>
            = Proficient — used in real work
          </span>
          <span className="flex items-center gap-2 text-[11px] text-[#849492]">
            <span className="skill-chip inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold opacity-60">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4a6a66]" />
              Vue.js
            </span>
            = Familiar — can adapt quickly
          </span>
        </div>

        {/* Card Grid */}
        <div className="grid gap-5 lg:grid-cols-2">
          {cards.map((card, index) => {
            const cfg = TYPE_CONFIG[card.type] ?? TYPE_CONFIG['Core skill stack']
            const CategoryIcon = cfg.icon
            const totalCount = card.sections?.reduce((t, s) => t + s.skills.length, 0) ?? card.skills.length
            const previewSkills = card.skills.slice(0, 6)

            return (
              <article
                key={card.title}
                className="glass-card card-hover flex flex-col overflow-hidden"
                style={{ borderLeft: `3px solid ${cfg.accent}40` }}
              >
                {/* Header */}
                <div
                  className="flex items-start justify-between gap-3 border-b border-white/10 p-5"
                  style={{ background: cfg.bg }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
                      style={{ background: cfg.bg, borderColor: `${cfg.accent}30`, color: cfg.accent }}
                    >
                      <CategoryIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono-label text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: cfg.accent }}>
                        {card.type}
                      </p>
                      <h3 className="font-heading text-xl font-bold leading-snug text-[#d4e4fa]">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                  <span className="mt-1 shrink-0 font-mono-label text-[10px] text-[#849492]/40">
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <p className="text-sm leading-6 text-[#b9cac8]">{card.description}</p>

                  {/* Key tools — compact row */}
                  <div>
                    <p className="mb-2 font-mono-label text-[9px] font-bold uppercase tracking-widest text-[#4a6a66]">
                      Key Tools
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {card.tools.map((toolName) => {
                        const tool = getToolIcon(toolName)
                        const Icon = tool.icon
                        return (
                          <span
                            key={toolName}
                            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] text-[#d4e4fa]"
                          >
                            <Icon className="h-3.5 w-3.5" style={{ color: tool.color }} aria-hidden="true" />
                            {tool.name}
                          </span>
                        )
                      })}
                    </div>
                  </div>

                  {/* Preview skill chips */}
                  <div>
                    <p className="mb-2 font-mono-label text-[9px] font-bold uppercase tracking-widest text-[#4a6a66]">
                      Skill Preview
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {previewSkills.map((skill) => (
                        <SkillChip key={skill} skill={skill} activeSkills={card.activeSkills} expertSkills={card.expertSkills} />
                      ))}
                      {card.skills.length > 6 && (
                        <span className="skill-chip px-3 py-1 text-[10px] font-bold" style={{ color: cfg.accent }}>
                          +{card.skills.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* View full stack CTA */}
                  <button
                    type="button"
                    className="mt-auto flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/3 px-4 py-3 transition hover:border-white/20 hover:bg-white/5"
                    onClick={() => setStackPanelCard(card)}
                  >
                    <span className="font-mono-label text-[10px] font-bold uppercase tracking-wider" style={{ color: cfg.accent }}>
                      View Full Stack
                    </span>
                    <span className="flex items-center gap-2 font-mono-label text-[10px] text-[#849492]">
                      {totalCount} tools
                      <FiArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="rounded-xl border border-[#00f2ea]/25 px-6 py-3 font-mono-label text-[10px] font-bold uppercase tracking-[0.14em] text-[#00f2ea] transition hover:bg-[#00f2ea] hover:text-[#051424]"
          >
            {showAll ? 'Show less' : `Show all skill categories (+${hiddenCount} more)`}
          </button>
        </div>
      </div>

      {stackPanelCard && (
        <StackDrawer card={stackPanelCard} onClose={() => setStackPanelCard(null)} />
      )}
    </section>
  )
}

export default Skills
