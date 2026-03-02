import React, { useState } from "react";
import Section from "../components/Section";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setError(null);

        // Web3Forms Integration
        const formObject = {
            ...formData,
            access_key: "ed91e805-8ad7-45b9-b9b9-ae8f00054ebb", // User needs to replace this
            from_name: formData.name,
            subject: `New Portfolio Message: ${formData.subject}`
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formObject),
            });

            const result = await response.json();
            if (result.success) {
                setIsSubmitted(true);
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setIsSubmitted(false), 8000);
            } else {
                setError("Something went wrong. Please try again or email me directly.");
            }
        } catch (err) {
            setError("Network error. Please check your connection and try again.");
        } finally {
            setIsSending(false);
        }
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: "Email",
            value: "nabeelsohail321@gmail.com",
            link: "mailto:nabeelsohail321@gmail.com",
            color: "from-blue-500/20 to-indigo-500/20"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            label: "Phone",
            value: "+92 305 9880462",
            link: "tel:+923059880462",
            color: "from-emerald-500/20 to-teal-500/20"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            label: "Location",
            value: "Johar Town, Lahore",
            link: "https://maps.google.com/?q=Johar+Town+Lahore",
            color: "from-purple-500/20 to-pink-500/20"
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
        hidden: { opacity: 0, x: -20 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        },
    };

    return (
        <Section id="contact" subtitle="Connect" title="Let's build something extraordinary.">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                {/* Contact Info */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="lg:col-span-5 space-y-8"
                >
                    <motion.p variants={item} className="text-xl text-muted-foreground/90 leading-relaxed font-medium">
                        Whether you have a groundbreaking project in mind or just want to connect, my inbox is always open for a <span className="text-foreground italic">meaningful conversation.</span>
                    </motion.p>

                    <div className="space-y-4">
                        {contactInfo.map((info, idx) => (
                            <motion.a
                                key={idx}
                                variants={item}
                                href={info.link}
                                whileHover={{ x: 10 }}
                                className="flex items-center space-x-6 p-6 rounded-[1.5rem] bg-card/40 backdrop-blur-xl border border-white/[0.05] hover:border-primary/40 transition-all duration-500 group relative overflow-hidden"
                            >
                                <div className={`absolute top-0 left-0 w-24 h-24 bg-gradient-to-br ${info.color} blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 z-10 shadow-inner">
                                    {info.icon}
                                </div>
                                <div className="z-10">
                                    <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold mb-1">{info.label}</p>
                                    <p className="text-lg font-display font-semibold tracking-tight">{info.value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <motion.div variants={item} className="pt-8 border-t border-white/5">
                        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground/40 mb-6">Preferred reach</p>
                        <div className="flex gap-4">
                            <div className="px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">Freelance</div>
                            <div className="px-4 py-2 rounded-xl bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider">Consulting</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-7 glass-card p-10 relative overflow-hidden group border-white/[0.05]"
                >
                    <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[80px] -z-10 group-hover:bg-primary/10 transition-colors duration-1000"></div>

                    {isSubmitted ? (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary shadow-2xl">
                                <CheckCircle size={40} strokeWidth={1.5} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-3xl font-display font-bold">Transmission Received</h3>
                                <p className="text-muted-foreground font-medium max-w-xs mx-auto">
                                    I appreciate your reach out. Expect a response within the next 24 business hours.
                                </p>
                            </div>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60 ml-1">Identity</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-5 py-4 focus:outline-none focus:border-primary/50 focus:bg-white/[0.04] transition-all text-foreground font-medium placeholder:text-muted-foreground/30 shadow-inner"
                                        placeholder="Name or Brand"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60 ml-1">Digital Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-5 py-4 focus:outline-none focus:border-primary/50 focus:bg-white/[0.04] transition-all text-foreground font-medium placeholder:text-muted-foreground/30 shadow-inner"
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60 ml-1">Purpose</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-5 py-4 focus:outline-none focus:border-primary/50 focus:bg-white/[0.04] transition-all text-foreground font-medium placeholder:text-muted-foreground/30 shadow-inner"
                                    placeholder="Project collaboration, Inquiry, etc."
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60 ml-1">Message</label>
                                <textarea
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-5 py-4 focus:outline-none focus:border-primary/50 focus:bg-white/[0.04] transition-all text-foreground font-medium placeholder:text-muted-foreground/30 shadow-inner resize-none"
                                    placeholder="Tell me about your vision..."
                                />
                            </div>

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-400 text-xs font-bold text-center bg-red-400/10 py-3 rounded-xl border border-red-400/20"
                                >
                                    {error}
                                </motion.div>
                            )}

                            <motion.button
                                type="submit"
                                disabled={isSending}
                                whileHover={!isSending ? { scale: 1.02, y: -2 } : {}}
                                whileTap={!isSending ? { scale: 0.98 } : {}}
                                className={`btn-primary w-full py-5 flex items-center justify-center space-x-3 group ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                <span className="font-bold tracking-wide uppercase text-sm">
                                    {isSending ? "Scanning Frequencies..." : "Initiate Conversation"}
                                </span>
                                {isSending ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                )}
                            </motion.button>
                        </form>
                    )}
                </motion.div>
            </div>
        </Section>
    );
};

export default Contact;
