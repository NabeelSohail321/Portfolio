import React, { useRef } from "react";
import Section from "../components/Section";
import { motion, useScroll, useSpring } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
    const experiences = [
        {
            type: "work",
            title: "Software Engineer",
            institution: "Clustox",
            date: "August 2025 - Present",
            location: "Johar Town, Lahore",
            description: "Leading development of high-performance software solutions, focusing on scalable architecture and modern React/React Native stacks.",
            icon: <Briefcase className="w-5 h-5" />,
            color: "from-blue-600 to-indigo-600",
        },
        {
            type: "work",
            title: "Cross Platform App Developer",
            institution: "Dot log",
            date: "November 2024 - August 2025",
            location: "Pakistan",
            description: "Architected and maintained feature-rich cross-platform applications with a meticulous focus on UI/UX and API optimization.",
            icon: <Briefcase className="w-5 h-5" />,
            color: "from-sky-500 to-blue-600",
        },
        {
            type: "work",
            title: "Cross Platform App Developer",
            institution: "Dev valley Gujranwala",
            date: "March 2023 - September 2024",
            location: "Gujranwala, Pakistan",
            description: "Developed robust mobile applications for global clients, ensuring high performance, responsiveness, and clean code standards.",
            icon: <Briefcase className="w-5 h-5" />,
            color: "from-emerald-500 to-teal-600",
        },
        {
            type: "education",
            title: "BS Software Engineering",
            institution: "Punjab University, Gujranwala",
            date: "Graduated 2025",
            location: "Pakistan",
            description: "Deep-dived into software architecture, complex algorithms, and mobile system design during my academic tenure.",
            icon: <GraduationCap className="w-5 h-5" />,
            color: "from-purple-600 to-pink-600",
        },
    ];

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    const cardVariants = (index) => ({
        hidden: {
            opacity: 0,
            y: 50,
            x: index % 2 === 0 ? 50 : -50,
            scale: 0.9
        },
        show: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1]
            }
        },
    });

    return (
        <Section id="experience" subtitle="My Career Journey" title="Experience & Education">
            <div ref={containerRef} className="relative max-w-6xl mx-auto px-6 py-10">
                {/* Vertical line with scroll-driven reveal */}
                <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.05] -translate-x-1/2 z-0 overflow-hidden">
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute inset-0 bg-gradient-to-b from-primary via-primary-light to-accent shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                    />
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-32 relative z-10"
                >
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants(idx)}
                            className={`relative flex flex-col sm:flex-row items-start sm:items-center ${idx % 2 === 0 ? "sm:flex-row-reverse" : ""}`}
                        >
                            {/* Animated Marker Dot */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 + 0.5, type: "spring", stiffness: 200 }}
                                className="absolute left-[-2px] sm:left-1/2 w-5 h-5 rounded-full bg-background border-2 border-primary -translate-x-1/2 z-20 shadow-[0_0_20px_rgba(99,102,241,0.8)]"
                            >
                                <div className="absolute inset-1 bg-primary rounded-full animate-pulse"></div>
                            </motion.div>

                            {/* Content Card with enhanced depth */}
                            <div className={`w-full sm:w-[45%] ${idx % 2 === 0 ? "sm:pr-20 text-left sm:text-right" : "sm:pl-20 text-left"}`}>
                                <div className="group relative glass-card p-10 border-white/[0.05] hover:border-primary/40 transition-all duration-700 overflow-hidden shadow-3xl transform-gpu">
                                    <div className={`absolute top-0 ${idx % 2 === 0 ? "right-0" : "left-0"} w-40 h-40 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-1000`}></div>

                                    <div className={`flex items-center gap-5 mb-6 ${idx % 2 === 0 ? "sm:flex-row-reverse" : ""}`}>
                                        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-primary shadow-inner shadow-white/[0.05] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                            {exp.icon}
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2 mb-1 text-primary-light font-black text-xs uppercase tracking-[0.2em]">
                                                <Calendar className="w-3 h-3" />
                                                {exp.date}
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground/50 text-[10px] font-bold uppercase tracking-widest">
                                                <MapPin className="w-3 h-3" />
                                                {exp.location}
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-3xl font-display font-bold mb-2 tracking-tight group-hover:text-primary transition-colors duration-500 italic">
                                        {exp.title}
                                    </h3>
                                    <p className="text-foreground/90 font-black text-base mb-6 tracking-wide">{exp.institution}</p>

                                    <div className={`w-16 h-[2px] bg-gradient-to-r from-primary to-accent mb-6 opacity-30 ${idx % 2 === 0 ? "sm:ml-auto" : ""}`}></div>

                                    <p className="text-muted-foreground/80 text-[14px] leading-relaxed font-medium">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>

                            {/* Spacer */}
                            <div className="hidden sm:block w-[45%]"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
};

export default Experience;
