import React from "react";
import Section from "../components/Section";
import { motion } from "framer-motion";
import {
    Code2,
    Smartphone,
    Globe,
    Wrench,
    Database,
    Layers
} from "lucide-react";

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <Code2 className="w-6 h-6" />,
            skills: ["Dart", "JavaScript", "C++", "Java", "Python"],
            color: "from-blue-500/20 to-indigo-500/20",
            accent: "blue",
        },
        {
            title: "Mobile Development",
            icon: <Smartphone className="w-6 h-6" />,
            skills: ["Flutter", "React Native", "Android Studio", "Provider", "Bloc"],
            color: "from-sky-500/20 to-blue-500/20",
            accent: "sky",
        },
        {
            title: "Web & Backend",
            icon: <Globe className="w-6 h-6" />,
            skills: ["React.js", "Node.js", "Express.js", "Ruby on Rails", "Astro JS", "API Development"],
            color: "from-emerald-500/20 to-teal-500/20",
            accent: "emerald",
        },
        {
            title: "Databases & AI",
            icon: <Database className="w-6 h-6" />,
            skills: ["Firebase", "MongoDB", "AI Integration", "TensorFlow Lite"],
            color: "from-orange-500/20 to-red-500/20",
            accent: "orange",
        },
        {
            title: "Tools & DevOps",
            icon: <Wrench className="w-6 h-6" />,
            skills: ["Git", "Postman", "Railway", "Netlify", "Vercel", "Bash"],
            color: "from-purple-500/20 to-pink-500/20",
            accent: "purple",
        },
        {
            title: "Expertise",
            icon: <Layers className="w-6 h-6" />,
            skills: ["UI/UX Design", "System Architecture", "Security", "Scalability"],
            color: "from-amber-500/20 to-yellow-500/20",
            accent: "amber",
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    const item = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        },
    };

    return (
        <Section id="skills" subtitle="Expertise" title="Professional Skillset">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        variants={item}
                        whileHover={{ y: -10 }}
                        className="relative group p-8 rounded-[2rem] bg-card/40 backdrop-blur-xl border border-white/[0.05] ring-1 ring-white/[0.05] hover:ring-primary/40 transition-all duration-700 overflow-hidden"
                    >
                        {/* Ambient Background Gradient */}
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                        <div className="flex items-center space-x-5 mb-8 relative z-10">
                            <motion.div
                                whileHover={{ rotate: 15, scale: 1.1 }}
                                className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] group-hover:text-primary transition-all duration-500 shadow-inner shadow-white/[0.05]"
                            >
                                {category.icon}
                            </motion.div>
                            <h3 className="text-2xl font-display font-semibold tracking-tight">{category.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-3 relative z-10">
                            {category.skills.map((skill, sIdx) => (
                                <motion.span
                                    key={sIdx}
                                    whileHover={{ scale: 1.05 }}
                                    className="px-4 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[13px] font-semibold text-muted-foreground hover:text-foreground hover:bg-white/[0.05] hover:border-primary/40 transition-all cursor-default shadow-sm"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
};

export default Skills;
