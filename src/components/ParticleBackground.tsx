
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>(0);

  // Initialize particles
  const initParticles = (width: number, height: number) => {
    particles.current = [];
    const particleCount = Math.min(width, height) / 10; // Responsive particle count

    for (let i = 0; i < particleCount; i++) {
      particles.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: `rgba(99, 102, 241, ${Math.random() * 0.3 + 0.1})`, // Light purple with varying opacity
      });
    }
  };

  // Handle mouse movement
  const handleMouseMove = (e: MouseEvent) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    mousePosition.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  // Animation loop
  const animate = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.current.forEach((particle) => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Mouse interaction - particles are gently attracted to the mouse position
      const dx = mousePosition.current.x - particle.x;
      const dy = mousePosition.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        particle.speedX += dx * 0.0005;
        particle.speedY += dy * 0.0005;
      }

      // Limit speed
      const maxSpeed = 1;
      const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
      if (speed > maxSpeed) {
        particle.speedX = (particle.speedX / speed) * maxSpeed;
        particle.speedY = (particle.speedY / speed) * maxSpeed;
      }

      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
    });

    // Draw connections between nearby particles
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.1)';
    ctx.lineWidth = 0.5;
    for (let i = 0; i < particles.current.length; i++) {
      for (let j = i + 1; j < particles.current.length; j++) {
        const dx = particles.current[i].x - particles.current[j].x;
        const dy = particles.current[i].y - particles.current[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(particles.current[i].x, particles.current[i].y);
          ctx.lineTo(particles.current[j].x, particles.current[j].y);
          ctx.stroke();
        }
      }
    }

    animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        initParticles(canvas.width, canvas.height);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Initial setup
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    initParticles(canvas.width, canvas.height);
    animationFrameId.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};
