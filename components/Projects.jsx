"use client";

import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { ExternalLink, FolderCode, Globe, ArrowUpRight, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Tech Samaaroh 2026",
    id: "01",
    description: "Official tech-fest website with event registration and dynamic schedule management.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://tech-samarooh.vercel.app/",
    github: "https://github.com/AbhinavMehta123",
    image: "/WebAssets/Project1.jpeg",
    accent: "rgba(37, 99, 235, 0.35)", 
  },
  {
    title: "CODEX-BUILD Portal",
    id: "02",
    description: "A full-stack hackathon management platform featuring a Node.js backend and MongoDB.",
    tech: ["Node.js", "Express", "MongoDB", "Next.js"],
    link: "https://codexbuild.netlify.app/",
    github: "https://github.com/AbhinavMehta123",
    image: "/WebAssets/Project2.jpeg",
    accent: "rgba(16, 185, 129, 0.35)", 
  },
  {
    title: "Bella Vista Site",
    id: "03",
    description: "A full-stack hackathon management platform featuring a Node.js backend and MongoDB.",
    tech: ["HTML", "CSS", "Web3Forms"],
    link: "https://bella-vista-authentic-restaurant.netlify.app/",
    github: "https://github.com/AbhinavMehta123",
    image: "/WebAssets/Project3.jpeg",
    accent: "rgba(16, 185, 129, 0.35)", 
  },
   {
    title: "AI Marks Grader",
    id: "04",
    description: "A full-stack hackathon management platform featuring a Node.js backend and MongoDB.",
    tech: ["Python", "Streamlit", "SQL"],
    link: "https://ai-answer-grader.streamlit.app/",
    github: "https://github.com/AbhinavMehta123",
    image: "/WebAssets/Project4.jpeg",
    accent: "rgba(16, 185, 129, 0.35)", 
  },
  {
    title: "Gaming Site",
    id: "05",
    description: "A full-stack hackathon management platform featuring a Node.js backend and MongoDB.",
    tech: ["React.js","Tailwind CSS"],
    link: "https://illuviumcom.netlify.app/",
    github: "https://github.com/AbhinavMehta123",
    image: "/WebAssets/Project6.png",
    accent: "rgba(16, 185, 129, 0.35)", 
  },
  {
    title: "BUILD-A-THON Site",
    id: "06",
    description: "A full-stack hackathon management platform featuring a Node.js backend and MongoDB.",
    tech: ["React.js", "React Router Dom", "Tailwind CSS"],
    link: "https://build-a-thon-alfacodingclub.netlify.app/",
    github: "https://github.com/AbhinavMehta123",
    image: "/WebAssets/Project5.png",
    accent: "rgba(16, 185, 129, 0.35)", 
  },
];

function ProjectCard({ project, index }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 30 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`
    radial-gradient(
      650px circle at ${mouseXSpring}px ${mouseYSpring}px,
      ${project.accent},
      transparent 80%
    )
  `;

  return (
    <motion.a id="Projects"
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex flex-col rounded-[32px] bg-[#0A0A0B] border border-white/5 overflow-hidden transition-all duration-500 hover:border-blue-500/30 shadow-2xl cursor-pointer"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background }}
      />

      {/* Image Section */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden p-4">
        <div className="relative h-full w-full rounded-[24px] overflow-hidden border border-white/5 bg-[#121214]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:grayscale-0"
          />
          
          {/* Status Overlay */}
          <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[9px] font-mono text-white/70 uppercase tracking-widest">Project_0{project.id}</span>
          </div>

          {/* Top Right Arrow Indicator */}
          <div className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-4">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 pt-2 space-y-6 relative z-10">
        <div className="space-y-3">
          <h3 className="text-3xl font-bold text-white tracking-tighter group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-zinc-500 text-sm leading-relaxed font-light line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/[0.03] border border-white/10 text-zinc-400 group-hover:border-blue-500/20 group-hover:text-blue-300 transition-colors">
              {t}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-6 flex items-center justify-between border-t border-white/5">
          <div className="flex gap-5">
            {/* Github Stop Propagation so link doesn't trigger parent a tag if you decide to separate them later */}
            <div className="text-zinc-500 hover:text-white transition-all">
              <FaGithub size={20} />
            </div>
            <div className="text-zinc-500 hover:text-white transition-all">
              <Globe size={18} />
            </div>
          </div>
          <div className="flex items-center gap-2 text-blue-500 text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            <Code2 size={12} /> Live_Status: OK
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section className="relative w-full bg-[#020203] py-24 px-6 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header (Matched exactly with Tech Stack) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 space-y-4"
        >
          <div className="flex items-center gap-2 px-3 py-1 w-fit rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md">
            <FolderCode size={14} className="text-blue-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Selected_Works_v3</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            FEATURED <span className="text-blue-600 underline decoration-blue-500/20 underline-offset-8">PROJECTS.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}