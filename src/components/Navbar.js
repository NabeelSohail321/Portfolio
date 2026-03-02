import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { cn } from "../utils/cn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 py-5",
        scrolled ? "bg-background/40 backdrop-blur-2xl border-b border-white/[0.05] py-4" : "bg-transparent"
      )}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-primary-light to-accent origin-left z-50 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
        style={{ scaleX }}
      />
      <div className="container-custom flex items-center justify-between">
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-display font-bold text-primary italic tracking-tighter flex items-center gap-1 group"
        >
          <span className="transition-all duration-500 group-hover:rotate-12 group-hover:text-primary-light">NS</span>
          <span className="text-foreground transition-all duration-500 group-hover:-translate-y-1">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-all duration-300 relative group uppercase tracking-widest"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-premium group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          <div className="w-px h-6 bg-white/5 mx-2"></div>

          <div className="flex items-center space-x-5">
            <motion.a
              href="https://github.com/nabeelsohail321"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github size={20} strokeWidth={1.5} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/nabeelsohail321"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={20} strokeWidth={1.5} />
            </motion.a>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 text-foreground active:bg-white/5 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="md:hidden glass-card overflow-hidden absolute top-[100%] left-6 right-6 mt-4 p-8 border border-white/10"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-semibold text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-6 border-t border-white/5 flex items-center space-x-8">
                <a href="https://github.com/nabeelsohail321" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/nabeelsohail321" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
