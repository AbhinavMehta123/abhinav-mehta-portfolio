"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#020203] border-t border-white/5 py-6 px-6">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* LEFT: Copyright */}
        <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
          © 2026 Abhinav Mehta
        </p>

        {/* RIGHT: Social Links */}
        <div className="flex items-center gap-6">
          
          <motion.a
            href="https://github.com/AbhinavMehta123"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-zinc-500 hover:text-white transition"
          >
            <FaGithub size={18} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/abhinav-mehta-237194324?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-zinc-500 hover:text-blue-500 transition"
          >
            <FaLinkedin size={18} />
          </motion.a>

        </div>
      </div>
    </footer>
  );
}