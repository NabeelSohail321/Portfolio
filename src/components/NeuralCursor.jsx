import React, { useEffect, useRef, useState } from "react";

const NeuralCursor = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -100, y: -100, lastX: -100, lastY: -100, speed: 0 });
    const particles = useRef([]);
    const animationFrameId = useRef(null);
    const [isActive, setIsActive] = useState(true);

    // Configuration
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 12 : 35;
    const CONNECT_DISTANCE = isMobile ? 80 : 150;
    const REPEL_RADIUS = isMobile ? 50 : 100;
    const REPEL_STRENGTH = 0.5;
    const IDLE_FLOAT_STRENGTH = 0.2;
    const FRICTION = 0.95;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Particle Class
        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * window.innerWidth;
                this.y = Math.random() * window.innerHeight;
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
                this.baseX = this.x;
                this.baseY = this.y;
                this.size = Math.random() * 1.5 + 0.5;
                this.opacity = Math.random() * 0.4 + 0.4;
            }

            update(mouse) {
                // Friction
                this.vx *= FRICTION;
                this.vy *= FRICTION;

                // Interaction with mouse
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < REPEL_RADIUS) {
                    const force = (REPEL_RADIUS - dist) / REPEL_RADIUS;
                    this.vx += (dx / dist) * force * REPEL_STRENGTH + (Math.random() - 0.5) * mouse.speed * 0.1;
                    this.vy += (dy / dist) * force * REPEL_STRENGTH + (Math.random() - 0.5) * mouse.speed * 0.1;
                }

                // Idle floating when mouse is slow or far
                if (mouse.speed < 1 || dist > REPEL_RADIUS * 2) {
                    this.vx += (Math.random() - 0.5) * IDLE_FLOAT_STRENGTH;
                    this.vy += (Math.random() - 0.5) * IDLE_FLOAT_STRENGTH;
                }

                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
                ctx.fill();
            }
        }

        // Initialize particles
        particles.current = Array.from({ length: PARTICLE_COUNT }, () => new Particle());

        const draw = () => {
            if (!isActive) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const mouse = mouseRef.current;

            // Update and draw particles
            particles.current.forEach((p, i) => {
                p.update(mouse);
                p.draw();

                // Dynamic connection distance: larger when slow/idle
                const currentConnectDist = CONNECT_DISTANCE * (1 + Math.max(0, 1 - mouse.speed / 10) * 0.5);

                // Connect particles
                for (let j = i + 1; j < particles.current.length; j++) {
                    const p2 = particles.current[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < currentConnectDist) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        // Increased alpha for better visibility
                        const alpha = (1 - dist / currentConnectDist) * 0.3;
                        ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }

                // Connect to mouse
                const dxm = p.x - mouse.x;
                const dym = p.y - mouse.y;
                const distm = Math.sqrt(dxm * dxm + dym * dym);
                if (distm < currentConnectDist * 1.5) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    // Significantly increased alpha for mouse connection
                    const alpha = (1 - distm / (currentConnectDist * 1.5)) * 0.5;
                    ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            });

            // Draw central cursor point for visibility
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = "#6366f1";
            ctx.fill();
            // Add glow to the center
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 12, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(99, 102, 241, 0.3)";
            ctx.fill();

            // Update mouse speed
            mouse.speed *= 0.9; // Decay speed

            animationFrameId.current = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e) => {
            const mouse = mouseRef.current;
            const dx = e.clientX - mouse.lastX;
            const dy = e.clientY - mouse.lastY;
            mouse.speed = Math.sqrt(dx * dx + dy * dy);
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.lastX = e.clientX;
            mouse.lastY = e.clientY;
        };

        const handleVisibilityChange = () => {
            setIsActive(!document.hidden);
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        resize();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            cancelAnimationFrame(animationFrameId.current);
        };
    }, [isActive, PARTICLE_COUNT, CONNECT_DISTANCE, REPEL_RADIUS, isMobile]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[9999] opacity-100"
            style={{ mixBlendMode: 'normal' }}
        />
    );
};

export default NeuralCursor;
