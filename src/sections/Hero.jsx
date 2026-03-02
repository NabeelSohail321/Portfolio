import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowRight, MousePointer2, Award } from "lucide-react";
import homeLogo from "../Assets/home-main.svg";

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const [titleIndex, setTitleIndex] = useState(0);
    const titles = ["Software Engineer", "React Native Expert", "AI & API Integration"];

    useEffect(() => {
        const timer = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [titles.length]);

    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        },
    };

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#030303]"
        >
            {/* Ambient Background Elements */}
            <motion.div
                style={{ y: y1, opacity }}
                className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] -z-10"
            />
            <motion.div
                style={{ y: y2, opacity }}
                className="absolute bottom-0 right-[-5%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[150px] -z-10"
            />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none -z-10"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <div className="container-custom relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="lg:col-span-7 flex flex-col space-y-8"
                    >
                        <motion.div variants={item} className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] w-fit backdrop-blur-md shadow-inner shadow-white/[0.02]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.25em]">Available for new projects</span>
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h1
                                variants={item}
                                className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter"
                            >
                                Crafting <br />
                                <span className="text-primary-light italic relative inline-block">
                                    Digital Excellence
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ delay: 1, duration: 0.8 }}
                                        className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-accent opacity-30"
                                    />
                                </span>
                            </motion.h1>

                            <motion.p variants={item} className="text-2xl md:text-3xl font-medium text-foreground/80 tracking-tight max-w-xl">
                                Hi, I'm <span className="text-foreground">Nabeel Sohail</span>. <br />
                                A <span className="text-primary-light font-bold">Software Engineer</span> specializing in AI & Native Apps.
                            </motion.p>
                        </div>

                        <motion.div variants={item} className="h-12 flex items-center gap-4">
                            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
                                <MousePointer2 className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1 relative h-full flex items-center">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={titles[titleIndex]}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        className="text-xl md:text-2xl font-bold text-foreground inline-block whitespace-nowrap"
                                    >
                                        {titles[titleIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </motion.div>

                        <motion.p variants={item} className="text-lg text-muted-foreground/80 max-w-lg leading-relaxed font-medium">
                            Architecting high-performance Cross-Platform applications and intelligent AI solutions with a focus on premium aesthetics and global standards.
                        </motion.p>

                        <motion.div variants={item} className="flex flex-wrap gap-5 pt-4">
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-primary group"
                            >
                                Explore projects
                                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                            </motion.a>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-secondary"
                            >
                                Let's collaborate
                            </motion.a>
                        </motion.div>

                        <motion.div variants={item} className="flex items-center space-x-8 pt-6">
                            {[
                                { Icon: Github, href: "https://github.com/nabeelsohail321" },
                                { Icon: Linkedin, href: "https://linkedin.com/in/nabeelsohail321" },
                                { Icon: Instagram, href: "https://www.instagram.com/nabeelsohail321/" }
                            ].map(({ Icon, href }, i) => (
                                <motion.a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ y: -5, color: "var(--primary)" }}
                                    className="text-muted-foreground/40 hover:text-primary transition-all duration-300"
                                >
                                    <Icon size={26} strokeWidth={1.2} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 hidden lg:flex justify-end relative"
                    >
                        <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-[100px] animate-pulse-slow"></div>

                            {/* Repositioned Badge: Above the Picture */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute -top-12 left-1/2 -translate-x-1/2 z-30 glass-card px-6 py-4 border-white/10 shadow-3xl flex items-center gap-4 whitespace-nowrap"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary border border-primary/20 shadow-inner overflow-hidden">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xl font-black text-foreground tracking-tight line-height-[1]">3+ Years</div>
                                    <div className="text-[9px] uppercase font-black tracking-[0.2em] text-muted-foreground/60">Professional Experience</div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 w-full h-full flex items-center justify-center p-8 backdrop-blur-3xl rounded-[4rem] border border-white/5 bg-white/[0.01] shadow-3xl"
                            >
                                <img
                                    src={homeLogo}
                                    alt="hero illustration"
                                    className="w-full h-auto select-none pointer-events-none drop-shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent opacity-40"></div>
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-muted-foreground/40">Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
