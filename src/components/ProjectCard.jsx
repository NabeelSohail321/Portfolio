import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Apple, X, ZoomIn } from "lucide-react";

const ProjectCard = ({ title, description, imgPath, ghLink, demoLink, appStoreLink, tags }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col h-full rounded-[2rem] bg-card/40 backdrop-blur-xl border border-white/[0.05] ring-1 ring-white/[0.05] hover:ring-primary/40 transition-all duration-700 overflow-hidden shadow-2xl shadow-black/40"
            >
                <div
                    className="relative aspect-video overflow-hidden cursor-zoom-in"
                    onClick={() => setIsModalOpen(true)}
                >
                    {/* Overlay with glassmorphism */}
                    <div className="absolute inset-0 bg-background/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 flex flex-col items-center justify-center gap-6">
                        <div className="flex gap-4">
                            {ghLink && !appStoreLink && (
                                <motion.a
                                    href={ghLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-4 rounded-2xl bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-primary/20 hover:border-primary/50 transition-colors"
                                >
                                    <Github className="w-6 h-6 outline-none" strokeWidth={1.5} />
                                </motion.a>
                            )}
                            {appStoreLink && (
                                <motion.a
                                    href={appStoreLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-4 rounded-2xl bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-primary/20 hover:border-primary/50 transition-colors"
                                >
                                    <Apple className="w-6 h-6" strokeWidth={1.5} />
                                </motion.a>
                            )}
                            {demoLink && (
                                <motion.a
                                    href={demoLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-4 rounded-2xl bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-primary/20 hover:border-primary/50 transition-colors"
                                >
                                    <ExternalLink className="w-6 h-6" strokeWidth={1.5} />
                                </motion.a>
                            )}
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 text-white/60 text-[10px] font-black uppercase tracking-[0.2em]"
                        >
                            <ZoomIn size={14} />
                            Click to expand
                        </motion.div>
                    </div>

                    <img
                        src={imgPath}
                        alt={title}
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-[1.1] group-hover:contrast-[1.1] group-hover:saturate-[1.1] antialiased [image-rendering:-webkit-optimize-contrast]"
                        style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                    />

                    {/* Gradient fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-6 flex-grow">
                        <h3 className="text-2xl font-display font-bold mb-3 tracking-tight group-hover:text-primary transition-colors duration-500">
                            {title}
                        </h3>
                        <p className="text-muted-foreground/90 text-sm leading-relaxed font-medium">
                            {description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                        {tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.05] text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground group-hover:text-foreground group-hover:border-primary/30 transition-all duration-500"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Image Lightbox Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10 bg-background/90 backdrop-blur-2xl cursor-zoom-out"
                    >
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            className="absolute top-10 right-10 p-3 rounded-full bg-white/5 border border-white/10 text-white z-[110]"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <X size={24} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative max-w-7xl w-full h-[85vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={imgPath}
                                alt={title}
                                className="max-w-full max-h-full object-contain rounded-3xl shadow-3xl ring-1 ring-white/20 [image-rendering:high-quality] contrast-[1.05] brightness-[1.05]"
                                style={{ transform: "translateZ(0)" }}
                            />

                            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center w-full px-6">
                                <h2 className="text-3xl font-display font-bold text-white mb-2 tracking-tight drop-shadow-2xl">{title}</h2>
                                <p className="text-primary text-sm font-bold uppercase tracking-[0.2em]">{tags.join(" • ")}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectCard;
