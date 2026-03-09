"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  FileText,
  ExternalLink,
  Code2,
  Server,
  Layout,
  Mail,
  Phone,
} from "lucide-react";

export default function Portfolio() {

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100">
      {/* --- HEADER / NAVIGATION --- */}
      <motion.header
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-black text-slate-900 tracking-tighter hover:opacity-80 transition-opacity"
          >
            VINH<span className="text-blue-600">.</span>DEV
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Icon (Sẽ chỉ hiện trên điện thoại) */}
          <button className="md:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors">
            {/* Nếu chưa import Menu từ lucide-react thì hãy import nó ở đầu file nhé */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </motion.header>

      {/* --- HOME / HERO SECTION --- */}
      <section
        id="home"
        className="min-h-[90vh] flex items-center justify-center px-6 relative overflow-hidden bg-white"
      >
        {/* Background Gradient nhẹ nhàng */}
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-50 rounded-full blur-3xl opacity-60" />
        </div>

        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-16">
          {/* --- TEXT CONTENT --- */}
          <motion.div
            className="flex-1 space-y-4 text-center md:text-left z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-slate-400 font-medium tracking-[0.3em] uppercase text-xs md:text-sm"
            >
              Welcome to my portfolio
            </motion.p>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight">
              I&apos;m <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Nguyen Duc Vinh
              </span>
            </h1>

            {/* Chức danh mới thay thế Full-stack */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl text-slate-600 font-light tracking-wide mt-2"
            >
              Software Engineer
            </motion.p>

            {/* Buttons & Links */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-6 pt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="flex gap-8 items-center">
                <a
                  href="https://github.com/vinh047"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-slate-900 transition-all hover:scale-110"
                >
                  <Github size={28} strokeWidth={1.5} />
                </a>
                <a
                  href="https://linkedin.com/in/vinh047"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-blue-600 transition-all hover:scale-110"
                >
                  <Linkedin size={28} strokeWidth={1.5} />
                </a>
                <a
                  href="/Nguyen_Duc_Vinh_Resume.pdf"
                  target="_blank"
                  className="group flex items-center gap-2 text-slate-900 font-semibold border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all"
                >
                  <FileText
                    size={20}
                    className="group-hover:-translate-y-1 transition-transform"
                  />
                  <span>Resume</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* --- IMAGE CONTENT (FLOATING ANIMATIONS) --- */}
          <motion.div
            className="relative flex-1 flex justify-center mt-10 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {/* Vòng tròn trang trí xoay chậm */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 m-auto w-[18rem] h-[18rem] md:w-[26rem] md:h-[26rem] border border-dashed border-slate-300 rounded-full -z-10"
            />

            {/* Khung ảnh chính trôi lơ lửng */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-[22rem] md:w-[22rem] md:h-[30rem] rounded-t-full rounded-b-[3rem] bg-slate-100 overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border-8 border-white"
            >
              {/* Vị trí chèn ảnh thật của bạn sau này */}
              <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <span className="text-slate-300 text-sm font-semibold tracking-widest uppercase">
                  
                </span>
              </div>
            </motion.div>

            {/* Icon vệ tinh 1 */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-10 right-4 md:-right-4 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100"
            >
              <Code2 className="text-blue-600" size={32} />
            </motion.div>

            {/* Icon vệ tinh 2 */}
            <motion.div
              animate={{ y: [10, -10, 10], rotate: [0, -5, 5, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute bottom-20 left-4 md:-left-4 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100"
            >
              <Server className="text-cyan-500" size={32} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-32 bg-slate-50 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Cột trái: Tiêu đề */}
            <motion.div
              className="lg:col-span-5 sticky top-24"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                <span className="text-blue-600">About me</span>
              </h2>
              <div className="w-20 h-1.5 bg-linear-to-r from-blue-600 to-cyan-500 rounded-full mb-8"></div>
              <p className="text-slate-500 font-medium">
                Driven by curiosity, focused on architecture.
              </p>
            </motion.div>

            {/* Cột phải: Nội dung chi tiết */}
            <motion.div
              className="lg:col-span-7 space-y-8 text-lg text-slate-600 font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p>
                Hello! I am currently a third-year{" "}
                <strong className="font-semibold text-slate-900">
                  Software Engineering
                </strong>{" "}
                student at{" "}
                <strong className="font-semibold text-slate-900">
                  Saigon University
                </strong>
                . My journey in tech is driven by a deep fascination with how
                complex systems operate behind the scenes.
              </p>

              <p>
                While I enjoy building seamless user interfaces with Next.js, my
                true passion lies in backend development and system design. I
                don&apos;t just write code to make things work; I focus on{" "}
                <strong className="font-semibold text-slate-900">how</strong>{" "}
                they work. I constantly explore and apply advanced paradigms
                like{" "}
                <strong className="font-semibold text-slate-900">
                  Clean Architecture, Domain-Driven Design (DDD), and
                  Microservices
                </strong>{" "}
                using tools like NestJS and Spring Boot to ensure my
                applications are scalable, maintainable, and efficient.
              </p>

              <p>
                Beyond coding, my experience in handling and translating
                precise, highly technical and legal documentation has honed my
                meticulous attention to detail and professional English
                communication skills. I believe that writing good code is much
                like writing a good document—it requires clarity, structure, and
                precision.
              </p>

              <p>
                Right now, I am eager to bring my foundational knowledge,
                architectural mindset, and problem-solving skills to a
                professional environment through an{" "}
                <strong className="font-semibold text-blue-600">
                  internship opportunity
                </strong>
                .
              </p>

              {/* Thông tin High-light nhỏ */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-slate-200 mt-8">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Education
                  </h4>
                  <p className="text-sm text-slate-500">Saigon University</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Major
                  </h4>
                  <p className="text-sm text-slate-500">Software Engineering</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Status
                  </h4>
                  <p className="text-sm text-blue-600 font-medium">
                    Available for Internship
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Technical <span className="text-blue-600">Arsenal.</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
              My core technologies and tools for building robust,
              high-performance applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Nhóm 1: Backend & System */}
            <motion.div
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <Server className="text-blue-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Backend & System
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Server-side logic, databases, and architectural patterns.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    name: "NestJS",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
                  },
                  {
                    name: "Spring Boot",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
                  },
                  {
                    name: "Java",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
                  },
                  {
                    name: "Node.js",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
                  },
                  {
                    name: "PostgreSQL",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
                  },
                  {
                    name: "Prisma",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
                  },
                  { name: "Clean Arch", icon: "" },
                  { name: "DDD", icon: "" },
                ].map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:border-blue-400 hover:text-blue-600 hover:shadow-sm cursor-default transition-all"
                  >
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-5 h-5"
                      />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Nhóm 2: Frontend */}
            <motion.div
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <Layout className="text-indigo-500" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Frontend
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Building modern, interactive, and responsive user interfaces.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    name: "Next.js",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
                  },
                  {
                    name: "React",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                  },
                  {
                    name: "TypeScript",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
                  },
                  {
                    name: "Tailwind CSS",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                  },
                  {
                    name: "Framer Motion",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
                  },
                  {
                    name: "HTML5/CSS3",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
                  },
                ].map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:border-indigo-400 hover:text-indigo-600 hover:shadow-sm cursor-default transition-all"
                  >
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-5 h-5"
                      />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Nhóm 3: Tools & Others */}
            <motion.div
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <div className="font-bold text-orange-500 text-xl">⚙️</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Tools & Others
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                DevOps, version control, and core computer science fundamentals.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    name: "Git",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
                  },
                  {
                    name: "Docker",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
                  },
                  {
                    name: "Postman",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
                  },
                  {
                    name: "Linux",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
                  },
                  {
                    name: "Vercel",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
                  },
                  { name: "Algorithms", icon: "" },
                  { name: "Agile", icon: "" },
                ].map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:border-orange-400 hover:text-orange-600 hover:shadow-sm cursor-default transition-all"
                  >
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-5 h-5"
                      />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-32 bg-slate-50 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Featured <span className="text-blue-600">Projects.</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
              Showcasing my ability to architect, build, and deploy full-stack
              systems from scratch.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project 1: E-Commerce */}
            <motion.div
              className="group bg-white rounded-[2rem] overflow-hidden border border-slate-200 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                {/* Thay ảnh thực tế của bạn vào div này */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-50 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="w-16 h-16 bg-blue-500 text-white rounded-2xl flex items-center justify-center mb-3 shadow-lg">
                    <Layout size={32} />
                  </div>
                  <span className="text-slate-500 font-semibold tracking-wider text-sm">
                    E-COMMERCE
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Tech Store E-Commerce
                </h3>
                <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                  A comprehensive mobile device e-commerce platform. The
                  standout feature is the integration of an{" "}
                  <strong className="font-semibold text-slate-900">
                    AI-powered RAG (Retrieval-Augmented Generation) chatbot
                  </strong>{" "}
                  to assist customers intelligently.
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Next.js", "Prisma"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 border-t border-slate-100 pt-6 mt-auto">
                  <a
                    href="https://github.com/vinh047/eCommerce-Mobile"
                    className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                  <a
                    href="https://e-commerce-mobile-sgu.vercel.app/"
                    className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 2: SoundWave */}
            <motion.div
              className="group bg-white rounded-[2rem] overflow-hidden border border-slate-200 hover:shadow-2xl hover:shadow-cyan-900/10 transition-all duration-500 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-blue-50 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="w-16 h-16 bg-cyan-500 text-white rounded-2xl flex items-center justify-center mb-3 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18V5l12-2v13"></path>
                      <circle cx="6" cy="18" r="3"></circle>
                      <circle cx="18" cy="16" r="3"></circle>
                    </svg>
                  </div>
                  <span className="text-slate-500 font-semibold tracking-wider text-sm">
                    STREAMING
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  SoundWave
                </h3>
                <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                  A high-performance audio streaming platform inspired by
                  SoundCloud. Features secure{" "}
                  <strong className="font-semibold text-slate-900">
                    JWT authentication
                  </strong>{" "}
                  and robust media playback handling.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["Next.js", "NestJS", "PostgreSQL"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 border-t border-slate-100 pt-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-cyan-600 transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                  {/* <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-cyan-600 transition-colors"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a> */}
                </div>
              </div>
            </motion.div>

            {/* Project 3: Smart School Bus Tracking */}
            <motion.div
              className="group bg-white rounded-[2rem] overflow-hidden border border-slate-200 hover:shadow-2xl hover:shadow-orange-900/10 transition-all duration-500 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-amber-50 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center mb-3 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1 .4-1 1v10h2"></path>
                      <circle cx="16.5" cy="17.5" r="2.5"></circle>
                      <circle cx="5.5" cy="17.5" r="2.5"></circle>
                    </svg>
                  </div>
                  <span className="text-slate-500 font-semibold tracking-wider text-sm">
                    IOT / TRACKING
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Smart Bus Tracking
                </h3>
                <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                  A real-time monitoring system designed to track school buses.
                  Focused on low-latency data transmission and robust backend
                  architecture to ensure student safety and route optimization.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["React", "NestJS", "WebSockets", "Maps API"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 border-t border-slate-100 pt-6 mt-auto">
                  <a
                    href="https://github.com/nvkdzvcl/Smart-School-Bus-Tracking-System"
                    className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                  {/* <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="bg-slate-900 py-16 text-slate-300 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
            {/* Cột trái: Lời kêu gọi & Thông tin liên hệ */}
            <div className="text-center md:text-left space-y-4">
              <h3 className="text-3xl font-bold text-white tracking-tight">
                Let&apos;s Work <span className="text-blue-500">Together.</span>
              </h3>
              <p className="text-slate-400 max-w-sm mx-auto md:mx-0 text-sm leading-relaxed">
                I am currently open for an internship or entry-level position.
                Whether you have a question or just want to say hi, I&apos;ll
                try my best to get back to you!
              </p>

              {/* Email & SĐT */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-8 pt-4">
                <a
                  href="mailto:vinh@example.com"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span className="font-medium text-sm">
                    ndvinh360@gmail.com
                  </span>
                </a>

                <a
                  href="tel:+84123456789"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-cyan-600 transition-colors">
                    <Phone size={18} />
                  </div>
                  <span className="font-medium text-sm">+84 845 632 968</span>
                </a>
              </div>
            </div>

            {/* Cột phải: Social Links & Copyright */}
            <div className="flex flex-col items-center md:items-end gap-6 mt-4 md:mt-0">
              <div className="flex gap-5">
                <a
                  href="https://github.com/vinh047"
                  target="_blank"
                  className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-white transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/vinh047"
                  target="_blank"
                  className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Linkedin size={20} />
                </a>
              </div>
              <div className="text-center md:text-right text-sm text-slate-500 space-y-1">
                <p>© 2026 Nguyen Duc Vinh.</p>
                <p>Built with Next.js, Tailwind CSS & Framer Motion.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
