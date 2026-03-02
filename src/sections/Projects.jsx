import React, { useState } from "react";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Plus } from "lucide-react";

// Existing Images
import teeth from "../Assets/Projects/teeth.jpeg";
import chatapp from "../Assets/Projects/chatapp.jfif";
import ecommerce from "../Assets/Projects/ecommerce.webp";
import sabir from "../Assets/Projects/sabir_tailors.png";
import hrms from "../Assets/Projects/hrms.png";
import mentalease from "../Assets/Projects/mentalease.png";

// New iOS Project Images
import smartCloset from "../Assets/Projects/Smart Closet & AI Stylist.jpg";
import intelliDocs from "../Assets/Projects/IntelliDocs AI.jpg";
import aiTranslator from "../Assets/Projects/AI Translator – Universal Language Translator.jpg";
import plantEyes from "../Assets/Projects/PlantEyes – AI Plant Identifier & Smart Care Companion.jpg";
import bubbleNexus from "../Assets/Projects/Bubble Nexus – Smart Real-Time Crypto Tracker.jpg";
import codeCourse from "../Assets/Projects/CodeCourse – Learn to Code Step by Step.jpg";
import renovateAi from "../Assets/Projects/RenovateAI – Smart AI Interior Design from a Photo.jpg";
import lisanAi from "../Assets/Projects/LisanAI Language coach.jpg";
import portfolioImg from "../Assets/Projects/codeEditor.png";

const Projects = () => {
    const [visibleCount, setVisibleCount] = useState(6);

    const projects = [
        {
            title: "Smart Closet & AI Stylist",
            description: "All-in-one AI fashion assistant for wardrobe management, virtual try-ons, and weather-based styling recommendations.",
            imgPath: smartCloset,
            appStoreLink: "https://apps.apple.com/us/app/smart-closet-your-ai-stylist/id1263105601",
            tags: ["AI", "iOS", "Fashion Tech", "Computer Vision"],
        },
        {
            title: "IntelliDocs AI",
            description: "AI-powered PDF assistant that generates instant summaries, study notes, and interactive quizzes from any document.",
            imgPath: intelliDocs,
            appStoreLink: "https://apps.apple.com/us/app/intellidocs-ai/id6755372119",
            tags: ["AI", "PDF", "NLP", "Education"],
        },
        {
            title: "AI Translator Universal",
            description: "Real-time multilingual communication platform supporting text, voice, and OCR-powered camera translation for 100+ languages.",
            imgPath: aiTranslator,
            appStoreLink: "https://apps.apple.com/us/app/ai-translator-all-languages/id1263976547",
            tags: ["AI", "Translation", "OCR", "Communication"],
        },
        {
            title: "PlantEyes AI",
            description: "Advanced plant identification and disease diagnosis tool. Features smart care reminders and a detailed botanical knowledge hub.",
            imgPath: plantEyes,
            appStoreLink: "https://apps.apple.com/us/app/plant-eyes-ai-plant-identifier/id6754831279",
            tags: ["AI", "Plant Care", "Image Recognition", "GreenTech"],
        },
        {
            title: "Bubble Nexus Crypto",
            description: "Real-time cryptocurrency tracker with live price monitoring, market trend analysis, and integrated global blockchain news.",
            imgPath: bubbleNexus,
            appStoreLink: "https://apps.apple.com/us/app/bubblenexus-crpyto-tracker/id6758075149",
            tags: ["Crypto", "Real-time Data", "Blockchain", "Finance"],
        },
        {
            title: "CodeCourse Studio",
            description: "Interactive coding bootcamp for mobile. Structured lessons and quizzes for Python, Java, C++, and Web Development.",
            imgPath: codeCourse,
            appStoreLink: "https://apps.apple.com/us/app/code-course-learn-to-code/id6755722567",
            tags: ["LMS", "Coding", "Education", "Mobile Learning"],
        },
        {
            title: "RenovateAI Design",
            description: "Transform space photos into professionally designed realistic interiors using AI. Features smart furniture and layout planning.",
            imgPath: renovateAi,
            appStoreLink: "https://apps.apple.com/us/app/renovate-ai-smart-home-decor/id6756610861",
            tags: ["AI", "Interior Design", "Generative AI", "HomeDecor"],
        },
        {
            title: "Lisan AI Coach",
            description: "Intelligent language learning platform with visual vocabulary, pronunciation support, and adaptive progress tracking.",
            imgPath: lisanAi,
            appStoreLink: "https://apps.apple.com/us/app/lisan-ai-language-coach/id6757189064",
            tags: ["AI", "EdTech", "Linguistics", "Personalization"],
        },
        {
            title: "Premium AI Portfolio",
            description: "My personal professional portfolio featuring a custom neural-network cursor, glassmorphic UI, and high-fidelity animations.",
            imgPath: portfolioImg,
            ghLink: "https://github.com/NabeelSohail321/Portfolio",
            tags: ["React", "Framer Motion", "Tailwind CSS", "Premium UI"],
        },
        {
            title: "Mental Ease",
            description: "Full-stack mental health platform with AI assessments, scheduling, and encrypted video consultations.",
            imgPath: mentalease,
            ghLink: "https://github.com/NabeelSohail321/Mental-Ease",
            tags: ["Flutter", "Firebase", "Agora", "AI"],
        },
        {
            title: "Teeth Segmentation",
            description: "Real-time computer vision app using YOLOv8 for on-device dental image analysis and segmentation.",
            imgPath: teeth,
            ghLink: "https://github.com/NabeelSohail321/Teeth_Segmentation",
            tags: ["Flutter", "YOLOv8", "ONNX", "Vision"],
        },
        {
            title: "Multi-Vendor E-commerce",
            description: "Full-featured platform with real-time order tracking, Stripe payments, and dynamic analytics for sellers and admins.",
            imgPath: ecommerce,
            ghLink: "https://github.com/NabeelSohail321/xoxo_ecommerce",
            tags: ["Flutter", "Firebase", "Stripe", "Maps API"],
        },
        {
            title: "Chat Application",
            description: "Real-time messaging with Firebase. Features image sharing, user status syncing, and email authentication.",
            imgPath: chatapp,
            ghLink: "https://github.com/NabeelSohail321/Chat-Application",
            tags: ["Flutter", "Firebase", "Provider", "Real-time"],
        },
        {
            title: "Sabir Tailors",
            description: "Business management system for tailors. Order tracking, progress monitoring, and printable invoice generation.",
            imgPath: sabir,
            ghLink: "https://github.com/NabeelSohail321/Sabir-Tailor",
            tags: ["Flutter", "Firebase", "Dashboard", "PDF Gen"],
        },
        {
            title: "HRM System",
            description: "Enterprise solution for onboarding, attendance, and leave management with role-based access for HR and employees.",
            imgPath: hrms,
            ghLink: "https://github.com/NabeelSohail321/HRMS-App",
            tags: ["Flutter", "Firebase", "Auth", "Admin"],
        },
    ];

    const loadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 6, projects.length));
    };

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

    return (
        <Section id="projects" subtitle="Portfolio" title="Featured Projects">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
                <AnimatePresence mode="popLayout">
                    {projects.slice(0, visibleCount).map((project, idx) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {visibleCount < projects.length && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-20 flex flex-col items-center gap-8"
                >
                    <button
                        onClick={loadMore}
                        className="btn-primary group flex items-center gap-3 px-10"
                    >
                        <span className="font-bold uppercase tracking-widest text-sm">Load More Projects</span>
                        <Plus className="w-5 h-5 transition-transform group-hover:rotate-180 duration-500" />
                    </button>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent opacity-20 mb-4 rounded-full"></div>
                        <p className="text-muted-foreground text-xs italic opacity-60">Showing {visibleCount} of {projects.length} innovations</p>
                    </div>
                </motion.div>
            )}

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-32 text-center"
            >
                <motion.a
                    href="https://github.com/nabeelsohail321"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary inline-flex items-center space-x-3 group"
                >
                    <span className="font-bold">Explore Legacy Archive</span>
                    <Github className="w-5 h-5 transition-transform group-hover:rotate-12" />
                </motion.a>
            </motion.div>
        </Section>
    );
};

export default Projects;
