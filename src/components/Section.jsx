import React from "react";
import { motion } from "framer-motion";

const Section = ({ children, id, className, title, subtitle }) => {
    return (
        <section id={id} className={`py-24 md:py-40 ${className}`}>
            <div className="container-custom">
                {(title || subtitle) && (
                    <div className="mb-20 md:mb-24 flex flex-col items-center text-center">
                        {subtitle && (
                            <motion.span
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4"
                            >
                                {subtitle}
                            </motion.span>
                        )}
                        {title && (
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                                className="text-4xl md:text-6xl font-display font-bold tracking-tight max-w-3xl leading-[1.1]"
                            >
                                {title}
                            </motion.h2>
                        )}
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: "60px", opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mt-8"
                        />
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
