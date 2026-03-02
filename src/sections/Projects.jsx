import React from "react";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

// Images (Assuming these are available in assets)
import teeth from "../Assets/Projects/teeth.jpeg";
import chatapp from "../Assets/Projects/chatapp.jfif";
import ecommerce from "../Assets/Projects/ecommerce.webp";
import sabir from "../Assets/Projects/sabir_tailors.png";
import hrms from "../Assets/Projects/hrms.png";
import mentalease from "../Assets/Projects/mentalease.png";

const Projects = () => {
    const projects = [
        {
            title: "Mental Ease",
            description: "A comprehensive mental health platform with AI-powered assessment (Random Forest), appointment booking, and video consultations (Agora).",
            imgPath: mentalease,
            ghLink: "https://github.com/NabeelSohail321/Mental-Ease",
            tags: ["Flutter", "Firebase", "AI", "Stripe", "Agora"],
        },
        {
            title: "Teeth Segmentation",
            description: "Real-time teeth segmentation using YOLOv8-seg model in ONNX format. Features live camera feed and on-device processing via ONNX Runtime.",
            imgPath: teeth,
            ghLink: "https://github.com/NabeelSohail321/Teeth_Segmentation",
            tags: ["Flutter", "YOLOv8", "ONNX", "Computer Vision"],
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
            ghLink: "https://github.com/YourGitHubUsername/HRMS-App",
            tags: ["Flutter", "Firebase", "Auth", "Admin Dashboard"],
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mt-20 text-center space-y-8"
            >
                <div className="flex flex-col items-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent opacity-20 mb-6 rounded-full"></div>
                    <p className="text-muted-foreground text-sm italic tracking-wide">More innovative solutions are currently in development...</p>
                </div>

                <motion.a
                    href="https://github.com/nabeelsohail321"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary inline-flex items-center space-x-3 group"
                >
                    <span className="font-bold">Explore Entire Archive</span>
                    <Github className="w-5 h-5 transition-transform group-hover:rotate-12" />
                </motion.a>
            </motion.div>
        </Section>
    );
};

export default Projects;
