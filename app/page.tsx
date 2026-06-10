"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Server,
  Layout,
  Mail,
  Phone,
  Menu,
  X,
  FileText,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState, useEffect } from "react";

const SKILLS = {
  backend: {
    label: "Backend & System",
    icon: <Server size={28} strokeWidth={1.5} />,
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
    bgDark: "dark:bg-blue-950/30",
    borderHover: "hover:border-blue-400 dark:hover:border-blue-600",
    iconColor: "text-blue-600 dark:text-blue-400",
    tagBg: "bg-blue-100 dark:bg-blue-900/50",
    tagText: "text-blue-700 dark:text-blue-300",
    desc: "Server-side logic, databases, and architecture patterns.",
    items: [
      { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
    ],
  },
  frontend: {
    label: "Frontend",
    icon: <Layout size={28} strokeWidth={1.5} />,
    color: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50",
    bgDark: "dark:bg-violet-950/30",
    borderHover: "hover:border-violet-400 dark:hover:border-violet-600",
    iconColor: "text-violet-600 dark:text-violet-400",
    tagBg: "bg-violet-100 dark:bg-violet-900/50",
    tagText: "text-violet-700 dark:text-violet-300",
    desc: "Modern, interactive, and responsive user interfaces.",
    items: [
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML5/CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    ],
  },
  tools: {
    label: "Tools & Others",
    icon: <Wrench size={28} strokeWidth={1.5} />,
    color: "from-orange-500 to-amber-500",
    bgLight: "bg-orange-50",
    bgDark: "dark:bg-orange-950/30",
    borderHover: "hover:border-orange-400 dark:hover:border-orange-600",
    iconColor: "text-orange-500 dark:text-orange-400",
    tagBg: "bg-orange-100 dark:bg-orange-900/50",
    tagText: "text-orange-700 dark:text-orange-300",
    desc: "DevOps, version control, and core CS fundamentals.",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
    ],
  },
};

const PROJECTS = [
  {
    title: "Tech Store E-Commerce",
    desc: "A comprehensive mobile device e-commerce platform featuring an AI-powered RAG chatbot to assist customers intelligently. Built with a focus on performance and scalability.",
    highlight: "AI-powered RAG chatbot",
    badge: "Full Stack · AI",
    tags: ["Next.js", "Prisma", "PostgreSQL", "OpenAI"],
    image: "/e-commerce.png",
    github: "https://github.com/vinh047/eCommerce-Mobile",
    demo: "https://e-commerce-mobile-sgu.vercel.app/",
    accent: "blue",
    gradient: "",
    icon: null,
  },
  {
    title: "SmartDoc AI",
    desc: "An intelligent document analysis application using a RAG architecture for complete data privacy by running entirely locally. Dynamically chunks documents, performs semantic similarity searches, and generates context-aware answers in English or Vietnamese.",
    highlight: "RAG architecture",
    badge: "AI · Privacy-First",
    tags: ["Python", "FAISS", "Streamlit"],
    image: null,
    github: "https://github.com/vinh047/smartdoc-ai.git",
    demo: null,
    accent: "violet",
    gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
    icon: "doc",
  },
  {
    title: "SoundWave",
    desc: "A high-performance audio streaming platform inspired by SoundCloud. Features secure JWT authentication and robust media playback.",
    highlight: "JWT authentication",
    badge: "Full Stack · Audio",
    tags: ["Next.js", "NestJS", "PostgreSQL"],
    image: "/soundwave.jpg",
    github: "#",
    demo: null,
    accent: "cyan",
    gradient: "",
    icon: null,
  },
  {
    title: "Smart Bus Tracking",
    desc: "A real-time monitoring system for school buses. Focused on low-latency data transmission and robust backend architecture to ensure student safety.",
    highlight: "low-latency data transmission",
    badge: "IoT · Real-time",
    tags: ["React", "NestJS", "WebSockets", "Maps API"],
    image: null,
    github: "https://github.com/nvkdzvcl/Smart-School-Bus-Tracking-System",
    demo: null,
    accent: "orange",
    gradient: "from-orange-500 via-rose-500 to-pink-600",
    icon: "bus",
  },
];

/* ── Accent color config ── */
const ACCENT_CONFIG: Record<string, {
  badgeBg: string; badgeText: string; badgeBorder: string;
  hoverText: string; btnBg: string; btnHover: string; btnShadow: string;
  border: string; glow: string;
}> = {
  blue: {
    badgeBg: "bg-blue-50 dark:bg-blue-900/40", badgeText: "text-blue-600 dark:text-blue-300", badgeBorder: "border-blue-200 dark:border-blue-800",
    hoverText: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    btnBg: "bg-blue-600", btnHover: "hover:bg-blue-700", btnShadow: "hover:shadow-blue-500/30",
    border: "hover:border-blue-400/50 dark:hover:border-blue-600/50",
    glow: "hover:shadow-[0_20px_60px_-12px_rgba(59,130,246,0.18)]",
  },
  violet: {
    badgeBg: "bg-violet-50 dark:bg-violet-900/40", badgeText: "text-violet-600 dark:text-violet-300", badgeBorder: "border-violet-200 dark:border-violet-800",
    hoverText: "group-hover:text-violet-600 dark:group-hover:text-violet-400",
    btnBg: "bg-violet-600", btnHover: "hover:bg-violet-700", btnShadow: "hover:shadow-violet-500/30",
    border: "hover:border-violet-400/50 dark:hover:border-violet-600/50",
    glow: "hover:shadow-[0_20px_60px_-12px_rgba(139,92,246,0.18)]",
  },
  cyan: {
    badgeBg: "bg-cyan-50/90 dark:bg-cyan-900/50", badgeText: "text-cyan-700 dark:text-cyan-300", badgeBorder: "border-cyan-200 dark:border-cyan-800",
    hoverText: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400",
    btnBg: "bg-cyan-600", btnHover: "hover:bg-cyan-700", btnShadow: "hover:shadow-cyan-500/30",
    border: "hover:border-cyan-400/50 dark:hover:border-cyan-600/50",
    glow: "hover:shadow-[0_20px_60px_-12px_rgba(6,182,212,0.15)]",
  },
  orange: {
    badgeBg: "bg-orange-50/90 dark:bg-orange-900/50", badgeText: "text-orange-600 dark:text-orange-300", badgeBorder: "border-orange-200 dark:border-orange-800",
    hoverText: "group-hover:text-orange-500 dark:group-hover:text-orange-400",
    btnBg: "bg-orange-600", btnHover: "hover:bg-orange-700", btnShadow: "hover:shadow-orange-500/30",
    border: "hover:border-orange-400/50 dark:hover:border-orange-600/50",
    glow: "hover:shadow-[0_20px_60px_-12px_rgba(249,115,22,0.15)]",
  },
};

/* ── Gradient placeholder icon map ── */
function PlaceholderIcon({ type }: { type: string | null }) {
  if (type === "doc") return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" />
    </svg>
  );
  if (type === "bus") return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1 .4-1 1v10h2" />
      <circle cx="16.5" cy="17.5" r="2.5" /><circle cx="5.5" cy="17.5" r="2.5" />
    </svg>
  );
  return null;
}

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300 selection:bg-blue-500/30">

      {/* ────── HEADER ────── */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/75 dark:bg-zinc-950/75 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
            VINH<span className="text-blue-500">.</span>DEV
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">
                {item}
              </a>
            ))}
            <div className="w-px h-4 bg-zinc-200 dark:bg-zinc-700" />
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 p-6 flex flex-col gap-5">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-500">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      {/* ────── HERO ────── */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
        {/* Gradient blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 to-indigo-400/20 dark:from-blue-600/15 dark:to-indigo-600/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/20 to-purple-400/20 dark:from-cyan-600/15 dark:to-purple-600/15 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20 z-10">
          {/* Text */}
          <motion.div className="flex-1 space-y-6 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>

            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-700">
              👋 Welcome to my portfolio
            </motion.span>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500">Nguyen Duc Vinh</span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-light">
              Software Engineer
            </p>

            <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto md:mx-0 font-light leading-relaxed">
              Building scalable backend systems and crafting elegant, responsive user interfaces. Passionate about clean code and high performance.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98]">
                View Projects
              </a>
              <a href="/Nguyen_Duc_Vinh_Resume.pdf" target="_blank"
                className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full font-semibold hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all flex items-center gap-2">
                <FileText size={18} /> Resume
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-5 pt-2">
              <a href="https://github.com/vinh047" target="_blank" rel="noreferrer"
                className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-all">
                <Github size={22} strokeWidth={1.5} />
              </a>
              <a href="https://linkedin.com/in/vinh047" target="_blank" rel="noreferrer"
                className="p-2 text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-all">
                <Linkedin size={22} strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>

          {/* Avatar */}
          <motion.div className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            {/* Rotating ring */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-12px] rounded-full border border-dashed border-blue-400/40 dark:border-blue-500/30" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-28px] rounded-full border border-dashed border-indigo-400/20 dark:border-indigo-500/20" />

            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl shadow-blue-500/20 dark:shadow-blue-500/10">
              <Image src="/avatar.png" alt="Nguyen Duc Vinh" width={400} height={400} priority className="w-full h-full object-cover" />
            </div>

            {/* Floating badges */}
            <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 -right-6 md:-right-12 p-3 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-700">
              <Code2 className="text-blue-600 dark:text-blue-400" size={24} />
            </motion.div>
            <motion.div animate={{ y: [8, -8, 8] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-8 -left-6 md:-left-12 p-3 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-700">
              <Server className="text-cyan-500 dark:text-cyan-400" size={24} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ────── ABOUT ────── */}
      <section id="about" className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900/60 dark:to-zinc-950 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <motion.div className="md:col-span-4 sticky top-32"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-3">Get to know me</p>
              <h2 className="text-4xl font-bold tracking-tight mb-4">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Me</span></h2>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            </motion.div>

            <motion.div className="md:col-span-8 space-y-6 text-zinc-600 dark:text-zinc-300 font-light leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <p>
                Hello! I am currently a third-year{" "}
                <strong className="font-semibold text-zinc-900 dark:text-white">Software Engineering</strong> student at{" "}
                <strong className="font-semibold text-zinc-900 dark:text-white">Saigon University</strong>. My journey in tech is driven by a deep fascination with how complex systems operate behind the scenes.
              </p>
              <p>
                While I enjoy building seamless user interfaces with Next.js, my true passion lies in backend development and database optimization. I focus on{" "}
                <strong className="font-semibold text-zinc-900 dark:text-white">how</strong> code runs efficiently — writing clean, maintainable APIs using tools like{" "}
                <strong className="font-semibold text-zinc-900 dark:text-white">NestJS and Spring Boot</strong>.
              </p>
              <p>
                Armed with professional English communication skills and meticulous attention to detail, I am eager to contribute to real-world projects through a{" "}
                <strong className="font-semibold text-blue-600 dark:text-blue-400">Backend Engineering Internship</strong>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ────── SKILLS ────── */}
      <section id="skills" className="py-28 bg-zinc-50 dark:bg-zinc-900/50 border-y border-zinc-100 dark:border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-3">What I work with</p>
            <h2 className="text-4xl font-bold tracking-tight">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Arsenal</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(SKILLS).map(([key, group], i) => (
              <motion.div key={key}
                className={`p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 ${group.borderHover} transition-all duration-300 group hover:shadow-xl`}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                {/* Icon Header */}
                <div className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${group.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {group.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{group.label}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 font-light">{group.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill.name}
                      className={`flex items-center gap-1.5 px-3 py-1.5 ${group.tagBg} border border-zinc-100 dark:border-zinc-700 ${group.tagText} text-sm font-medium rounded-xl hover:scale-105 transition-transform cursor-default`}>
                      <img src={skill.icon} alt={skill.name} className="w-4 h-4 flex-shrink-0" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── PROJECTS ────── */}
      <section id="projects" className="py-28 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 -right-32 w-96 h-96 bg-blue-400/[0.04] dark:bg-blue-500/[0.03] rounded-full blur-3xl" />
          <div className="absolute bottom-20 -left-32 w-80 h-80 bg-violet-400/[0.04] dark:bg-violet-500/[0.03] rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-3">Selected work</p>
              <h2 className="text-4xl font-bold tracking-tight">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Projects</span>
              </h2>
            </div>
            <p className="text-sm text-zinc-400 dark:text-zinc-500 font-light max-w-xs text-right hidden sm:block">
              A curated selection of projects I&apos;ve architected and built.
            </p>
          </motion.div>

          {/* ── ALL PROJECTS (2×2 grid) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => {
              const ac = ACCENT_CONFIG[project.accent];
              const num = String(i + 1).padStart(2, "0");
              const parts = project.highlight ? project.desc.split(project.highlight) : null;

              return (
                <motion.div
                  key={project.title}
                  className={`group relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 ${ac.border} transition-all duration-500 ${ac.glow} flex flex-col`}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* ── Thumbnail ── */}
                  {project.image ? (
                    <div className="relative h-52 overflow-hidden">
                      <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" sizes="(max-width: 768px) 100vw, 50vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/50 dark:from-zinc-900/70 to-transparent" />
                      <div className="absolute top-4 left-4 z-20 w-9 h-9 rounded-full bg-white/15 dark:bg-black/25 backdrop-blur-md border border-white/25 flex items-center justify-center">
                        <span className="text-white text-xs font-bold tracking-wide">{num}</span>
                      </div>
                      <span className={`absolute bottom-4 left-4 z-20 inline-block px-3 py-1 text-xs font-semibold rounded-full ${ac.badgeBg} ${ac.badgeText} border ${ac.badgeBorder} backdrop-blur-sm`}>{project.badge}</span>
                    </div>
                  ) : (
                    <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute w-72 h-72 rounded-full border border-white/[0.07] animate-[spin_25s_linear_infinite]" />
                        <div className="absolute w-48 h-48 rounded-full border border-white/[0.07] animate-[spin_18s_linear_infinite_reverse]" />
                        <div className="absolute w-28 h-28 rounded-full border border-white/[0.05] animate-[spin_12s_linear_infinite]" />
                        <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 group-hover:scale-110 group-hover:bg-white/15 transition-all duration-500">
                          <PlaceholderIcon type={project.icon} />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-white/5 dark:from-zinc-900/20 to-transparent" />
                      <div className="absolute top-4 left-4 z-20 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center">
                        <span className="text-white text-xs font-bold tracking-wide">{num}</span>
                      </div>
                      <span className={`absolute bottom-4 left-4 z-20 inline-block px-3 py-1 text-xs font-semibold rounded-full ${ac.badgeBg} ${ac.badgeText} border ${ac.badgeBorder} backdrop-blur-sm`}>{project.badge}</span>
                    </div>
                  )}

                  {/* ── Content ── */}
                  <div className="flex flex-col flex-1 p-7">
                    <h3 className={`text-xl font-bold tracking-tight mb-2 ${ac.hoverText} transition-colors duration-300`}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed mb-5 flex-1">
                      {parts ? <>{parts[0]}<strong className="font-medium text-zinc-700 dark:text-zinc-200">{project.highlight}</strong>{parts[1]}</> : project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((t) => (
                        <span key={t} className="text-xs font-semibold px-2.5 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-full border border-zinc-200 dark:border-zinc-700">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 border-t border-zinc-100 dark:border-zinc-800 pt-5">
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <Github size={16} /> Source Code
                      </a>
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className={`flex items-center gap-2 px-4 py-2 ${ac.btnBg} ${ac.btnHover} text-white text-xs font-semibold rounded-full transition-all hover:shadow-lg ${ac.btnShadow} hover:scale-[1.03] active:scale-100`}>
                          <ExternalLink size={14} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────── FOOTER / CONTACT ────── */}
      <footer id="contact" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 dark:from-zinc-950 dark:via-zinc-950 dark:to-black" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
            <div className="text-center md:text-left space-y-5">
              <h3 className="text-3xl font-bold text-white tracking-tight">
                Let&apos;s Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Together.</span>
              </h3>
              <p className="text-zinc-400 max-w-sm text-sm font-light leading-relaxed">
                I&apos;m currently open for an internship or entry-level position. Whether you have a question or just want to say hi — I&apos;ll get back to you!
              </p>
              <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 pt-1">
                <a href="mailto:ndvinh360@gmail.com"
                  className="group flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                  <div className="p-2 bg-zinc-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Mail size={16} />
                  </div>
                  ndvinh360@gmail.com
                </a>
                <a href="tel:+84845632968"
                  className="group flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                  <div className="p-2 bg-zinc-800 rounded-lg group-hover:bg-cyan-600 transition-colors">
                    <Phone size={16} />
                  </div>
                  +84 845 632 968
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex gap-3">
                <a href="https://github.com/vinh047" target="_blank" rel="noreferrer"
                  className="p-3 bg-zinc-800 text-zinc-400 rounded-full hover:bg-zinc-700 hover:text-white transition-all hover:scale-110">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/vinh047" target="_blank" rel="noreferrer"
                  className="p-3 bg-zinc-800 text-zinc-400 rounded-full hover:bg-blue-600 hover:text-white transition-all hover:scale-110">
                  <Linkedin size={20} />
                </a>
              </div>
              <p className="text-xs text-zinc-600">
                © {new Date().getFullYear()} Nguyen Duc Vinh · Built with Next.js
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
