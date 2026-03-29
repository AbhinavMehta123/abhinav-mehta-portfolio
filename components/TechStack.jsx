"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, Layers, Layout, Server, ShieldCheck, Cpu } from "lucide-react";
import React, { useState } from "react";

const TECH_DATA = [
  {
    category: "Frontend",
    icon: Layout,
    color: "text-blue-500",
    skills: ["Next.js", "React", "Tailwind CSS", "Three.js"],
    description: "Crafting immersive, 3D-integrated user interfaces.",
  },
  {
    category: "Backend",
    icon: Server,
    color: "text-emerald-500",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    description: "Architecting high-concurrency server environments.",
  },
  {
    category: "Languages",
    icon: Code2,
    color: "text-orange-500",
    skills: ["TypeScript", "Python", "C++", "Rust"],
    description: "System-level programming and type-safe logic.",
  },
  {
    category: "Security",
    icon: ShieldCheck,
    color: "text-red-500",
    skills: ["Kali Linux", "Network Pentesting", "Ethical Hacking"],
    description: "Maintaining system integrity and defensive protocols.",
  },
];

// --- Sub-Component: Interactive Card ---
function TechCard({ item, index }) {
  const Icon = item.icon;
  
  // Motion Values for 3D Tilt (Desktop only)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div id="Tech Stack"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileTap={{ scale: 0.95 }} // Visual feedback for Mobile tap
      className="group relative p-8 rounded-[32px] bg-[#0A0A0B] border border-white/5 transition-colors duration-500 cursor-pointer"
    >
      {/* 1. MOUSE SPOTLIGHT (High End Interaction) */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px] pointer-events-none overflow-hidden">
        <div className="absolute -inset-[100px] bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(37,99,235,0.15)_0%,transparent_70%)]" 
             style={{ 
               "--mouse-x": `${mouseXSpring.get() * 100 + 50}%`, 
               "--mouse-y": `${mouseYSpring.get() * 100 + 50}%` 
             }} 
        />
      </div>

      <div className="relative z-10 space-y-6 pointer-events-none" style={{ transform: "translateZ(50px)" }}>
        
        {/* Animated Icon Frame */}
        <div className="p-3 w-fit rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-500">
          <Icon className={`${item.color} group-hover:scale-110 transition-transform duration-500`} size={28} />
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">
            {item.category}
          </h3>
          <p className="text-zinc-500 text-sm font-light leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Dynamic Skill Chips */}
        <div className="flex flex-wrap gap-2">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/[0.02] border border-white/5 text-zinc-500 group-hover:border-blue-500/20 group-hover:text-blue-300 transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section className="relative w-full bg-[#020203] py-32 px-6 overflow-hidden">
      
      {/* Floating Particles Decor */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20 space-y-4 text-center lg:text-left"
        >
          <div className="flex items-center gap-2 px-3 py-1 w-fit mx-auto lg:mx-0 rounded-full border border-white/5 bg-white/[0.02]">
            <Cpu size={14} className="text-blue-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">System_Capabilities</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            TECH <span className="text-blue-600 underline decoration-blue-500/20 underline-offset-8">ARSENAL.</span>
          </h2>
        </motion.div>

        {/* THE INTERACTIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TECH_DATA.map((item, index) => (
            <TechCard key={item.category} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}