import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Grid properties
    const gridSize = 50;
    let time = 0;

    // Binary code particles
    const binaryChars = ['0', '1'];
    const particles: Array<{
      x: number;
      y: number;
      char: string;
      opacity: number;
      speed: number;
    }> = [];

    // Initialize binary particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        char: binaryChars[Math.floor(Math.random() * binaryChars.length)],
        opacity: Math.random() * 0.5 + 0.2,
        speed: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Draw animated grid
      ctx.strokeStyle = `rgba(0, 255, 0, ${0.1 + Math.sin(time) * 0.05})`;
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        const opacity = 0.1 + Math.sin(time + x * 0.01) * 0.05;
        ctx.strokeStyle = `rgba(0, 255, 0, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        const opacity = 0.1 + Math.sin(time + y * 0.01) * 0.05;
        ctx.strokeStyle = `rgba(0, 255, 0, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw and animate binary particles
      ctx.font = '12px monospace';
      particles.forEach((particle) => {
        ctx.fillStyle = `rgba(255, 255, 0, ${particle.opacity})`;
        ctx.fillText(particle.char, particle.x, particle.y);

        particle.y += particle.speed;
        particle.opacity = 0.2 + Math.sin(time + particle.x * 0.01) * 0.3;

        if (particle.y > canvas.height) {
          particle.y = -20;
          particle.x = Math.random() * canvas.width;
          particle.char = binaryChars[Math.floor(Math.random() * binaryChars.length)];
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: '#000000' }}
    />
  );
}