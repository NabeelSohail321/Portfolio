import React from "react";
import Section from "../components/Section";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import myImg from "../Assets/myimg.png";

const About = () => {
    const stats = [
        { label: "Years Experience", value: "3+", detail: "Full-stack Focus" },
        { label: "Projects Completed", value: "15+", detail: "Mobile & Web" },
        { label: "Client Satisfaction", value: "100%", detail: "Global Reach" },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    };

    return (
        <Section id="about" subtitle="Expertise" title="Designing the bridge between code and user.">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-5 relative group"
                >
                    {/* Multi-layered Tech Frame */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>

                    {/* Decorative Corner Brackets */}
                    <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-xl z-20"></div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-accent/40 rounded-br-xl z-20"></div>

                    <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 shadow-2xl transition-all duration-700 group-hover:border-primary/30">
                        {/* Scanning Line Animation */}
                        <motion.div
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent z-20 pointer-events-none"
                        >
                            <div className="absolute inset-0 blur-[4px] bg-primary/30"></div>
                        </motion.div>

                        <img
                            src={myImg}
                            alt="Nabeel Sohail"
                            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                        />

                        {/* Data Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 z-10"></div>

                        {/* Coordinate Points */}
                        <div className="absolute top-6 right-6 flex flex-col items-end space-y-1 z-20 opacity-40 group-hover:opacity-100 transition-opacity">
                            <span className="text-[8px] font-mono text-primary uppercase">Lat: 31.4815° N</span>
                            <span className="text-[8px] font-mono text-accent uppercase">Long: 74.2704° E</span>
                        </div>

                        {/* Tech Tags */}
                        <div className="absolute bottom-6 left-6 flex flex-col space-y-2 z-20">
                            <div className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/80">System: Active</span>
                            </div>
                            <div className="px-2 py-0.5 rounded bg-white/5 border border-white/10 backdrop-blur-md">
                                <span className="text-[9px] font-bold text-white/40 uppercase tracking-tighter">Core Eng: High Performance</span>
                            </div>
                        </div>
                    </div>

                    {/* Refined Floating Experience Badge */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-4 -right-4 glass-card p-5 border-white/10 shadow-2xl backdrop-blur-3xl z-30 min-w-[140px]"
                    >
                        <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                            <p className="text-3xl font-display font-bold text-primary">3+</p>
                            <div className="flex items-end gap-[2px] h-6">
                                {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: [`${h * 100}%`, `${(1 - h) * 100}%`, `${h * 100}%`] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                                        className="w-[2px] bg-primary/40 rounded-full"
                                    />
                                ))}
                            </div>
                        </div>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-black leading-tight">Years OF <br />Pure Engineering</p>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="lg:col-span-7 flex flex-col space-y-8 pt-4"
                >
                    <motion.div variants={item} className="space-y-4">
                        <p className="text-2xl md:text-3xl leading-snug text-foreground font-medium tracking-tight">
                            I'm <span className="text-primary italic">Nabeel Sohail</span>, a Software Engineer dedicated to crafting <span className="opacity-60">meaningful digital experiences.</span>
                        </p>
                        <p className="text-lg leading-relaxed text-muted-foreground/90 max-w-2xl">
                            Specializing in <span className="text-foreground">Flutter</span> and <span className="text-foreground">React Native</span>, I build production-ready applications that combine aesthetic elegance with engineering rigor. My work is defined by a commitment to <span className="text-primary-light">performance</span>, <span className="text-primary-light">scalability</span>, and <span className="text-primary-light">seamless integration</span>.
                        </p>
                    </motion.div>

                    <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="glass-card p-6 border-white/[0.03] hover:border-primary/20 transition-all duration-500 group">
                                <p className="text-3xl font-display font-bold text-primary mb-1">{stat.value}</p>
                                <p className="text-xs font-bold uppercase tracking-widest text-foreground group-hover:text-primary-light transition-colors">{stat.label}</p>
                                <p className="text-[10px] text-muted-foreground mt-2 font-medium opacity-60">{stat.detail}</p>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div variants={item} className="space-y-6 pt-4">
                        <div className="flex items-center space-x-3 text-muted-foreground bg-white/[0.02] border border-white/[0.05] w-fit px-4 py-2 rounded-xl">
                            <MapPin size={18} className="text-primary" />
                            <span className="text-sm font-medium">Based in <span className="text-foreground">Johar Town, Lahore</span> (from Gujranwala)</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
                            <div className="space-y-3">
                                <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Technical Focus</h4>
                                <ul className="space-y-2">
                                    {["Mobile Architecture", "API Engineering", "AI Integration", "Performance Audit"].map((text, i) => (
                                        <li key={i} className="flex items-center gap-2 text-[13px] font-semibold">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Interests</h4>
                                <ul className="space-y-2">
                                    {["Gaming", "Travelling", "Open Source", "Exploring AI"].map((text, i) => (
                                        <li key={i} className="flex items-center gap-2 text-[13px] font-semibold">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent/40"></div>
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
};

export default About;
