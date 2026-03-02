import React from "react";
import { Github, Linkedin, Instagram, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-white/[0.05] bg-[#030303] relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[100px] bg-primary/5 blur-[100px] -z-10"></div>

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6 text-center md:text-left">
            <a href="#home" className="text-3xl font-display font-bold text-primary italic tracking-tighter inline-block hover:scale-105 transition-transform duration-500">
              NS<span className="text-foreground transition-colors duration-500">.</span>
            </a>
            <p className="text-muted-foreground/80 text-base max-w-sm font-medium leading-relaxed mx-auto md:mx-0">
              Crafting premium digital experiences through <span className="text-foreground">minimalist design</span> and <span className="text-foreground font-bold italic">exceptional engineering</span>.
            </p>
          </div>

          {/* Socials & Credits Column */}
          <div className="md:col-span-4 flex flex-col items-center space-y-8">
            <div className="flex items-center space-x-8">
              {[
                { Icon: Github, href: "https://github.com/nabeelsohail321" },
                { Icon: Linkedin, href: "https://linkedin.com/in/nabeelsohail321" },
                { Icon: Instagram, href: "https://www.instagram.com/nabeelsohail321/" },
                { Icon: Twitter, href: "#home" }
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground/60 hover:text-primary transition-all duration-500 hover:scale-125 hover:-translate-y-1"
                >
                  <Icon size={22} strokeWidth={1.5} />
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-2 text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/40">
              <span>Made with</span>
              <Heart size={14} className="text-primary fill-primary animate-pulse" />
              <span>by Nabeel Sohail</span>
            </div>
          </div>

          {/* Rights Column */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end justify-center space-y-4 pt-2">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">© {currentYear} All Rights Reserved</p>
            <div className="flex space-x-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/30">
              <span className="hover:text-primary transition-colors cursor-pointer">Privacy</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Terms</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
