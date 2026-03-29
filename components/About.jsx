"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FileDown, Terminal, Zap, CheckCircle } from "lucide-react";

export default function MobileOptimizedHero() {

    const slowTransition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const slowFadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: slowTransition },
    };

    return (
        <section id="About" className="relative min-h-screen w-full bg-[#020203] text-white flex items-center justify-center overflow-hidden px-6 pt-24 pb-16 lg:pt-0 lg:pb-0">

            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full lg:w-[60%] h-[400px] bg-blue-600/5 blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            </div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center z-10"
            >

                {/* RIGHT IMAGE */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.9 },
                        visible: { opacity: 1, scale: 1, transition: slowTransition }
                    }}
                    className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 mt-12 mb-10 lg:mt-0 lg:mb-0"
                >
                    <div className="relative group">

                        {/* Glow */}
                        <div className="absolute inset-0 bg-blue-600/10 rounded-[60px] blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000" />

                        {/* Image */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-[40px] lg:rounded-[60px] p-[2px] bg-gradient-to-b from-white/20 to-transparent">

                            <div className="relative w-full h-full rounded-[38px] lg:rounded-[58px] overflow-hidden bg-[#0A0A0B]">

                                <Image
                                    src="/WebAssets/me.jpeg"
                                    alt="Abhinav Mehta"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 420px"
                                    className="object-cover object-top group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />

                                {/* Bento Status */}
                                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/5 flex items-center justify-between shadow-2xl">

                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-blue-400 font-mono uppercase tracking-widest">
                                            Status
                                        </span>
                                        <span className="text-xs font-semibold text-white">
                                            In_Development
                                        </span>
                                    </div>

                                    {/* Icons */}
                                    <div className="flex -space-x-1">

                                        <div className="w-8 h-8 rounded-full border border-[#0A0A0B] bg-zinc-900 flex items-center justify-center hover:scale-110 transition">
                                            <Zap size={14} className="text-blue-400" />
                                        </div>

                                        <div className="w-8 h-8 rounded-full border border-[#0A0A0B] bg-zinc-900 flex items-center justify-center hover:scale-110 transition">
                                            <Terminal size={14} className="text-emerald-400" />
                                        </div>

                                        <div className="w-8 h-8 rounded-full border border-[#0A0A0B] bg-zinc-900 flex items-center justify-center">
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                            >
                                                <CheckCircle size={14} className="text-indigo-400" />
                                            </motion.div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Floating Icon */}
                        <div className="absolute -top-6 -right-6 hidden lg:block p-4 rounded-2xl bg-[#0A0A0B]/80 border border-white/5 shadow-2xl">
                            <Terminal size={18} className="text-blue-500" />
                        </div>

                    </div>
                </motion.div>

                {/* LEFT CONTENT */}
                <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

                    <motion.div variants={slowFadeUp} className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.03]">
                        <CheckCircle size={14} className="text-blue-500" />
                        <span className="text-[10px] font-mono tracking-[0.3em] text-zinc-400 uppercase">
                            Status: Live
                        </span>
                    </motion.div>

                    <motion.h1 variants={slowFadeUp} className="text-5xl md:text-7xl lg:text-[100px] font-black tracking-tight leading-[1.0] lg:leading-[0.95] mb-6">
                        ABHINAV <br />
                        <span className="text-blue-600">MEHTA.</span>
                    </motion.h1>

                    <motion.p variants={slowFadeUp} className="max-w-md text-zinc-500 text-lg font-light leading-relaxed mb-10">
                        Full-stack Software Engineer crafting high-velocity systems and refined digital experiences.
                    </motion.p>

                    <motion.div variants={slowFadeUp} className="w-full sm:w-auto">
                        <motion.a
                            href="/resume.pdf"
                            download="Abhinav_Mehta_Resume.pdf"
                            whileHover="active"
                            whileTap="active"
                            className="relative h-16 w-full sm:w-64 flex items-center justify-center bg-white text-black rounded-xl font-bold text-lg overflow-hidden shadow-2xl"
                        >
                            <motion.div
                                className="flex items-center gap-2 z-10"
                                variants={{
                                    initial: { opacity: 1, y: 0 },
                                    active: { opacity: 0, y: -20 }
                                }}
                            >
                                <FileDown size={20} />
                                Download CV
                            </motion.div>

                            <motion.div
                                className="absolute inset-0 bg-blue-600 text-white flex items-center justify-center gap-2 z-20"
                                initial={{ opacity: 0, y: 20 }}
                                variants={{
                                    active: { opacity: 1, y: 0 }
                                }}
                            >
                                <Zap size={20} />
                                Executing...
                            </motion.div>
                        </motion.a>
                    </motion.div>

                </div>

            </motion.div>
        </section>
    );
}