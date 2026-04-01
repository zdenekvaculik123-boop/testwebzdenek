import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  dx: number;
  dy: number;
}

const LightModeParticles = () => {
  const particles = useMemo<Particle[]>(() => {
    // Larger animated particles
    const mainColors = [
      "hsl(165 82% 51% / 0.25)",
      "hsl(270 60% 60% / 0.2)",
      "hsl(210 100% 55% / 0.2)",
      "hsl(165 82% 45% / 0.15)",
      "hsl(270 60% 55% / 0.15)",
    ];
    const main = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      color: mainColors[i % mainColors.length],
      duration: 12 + Math.random() * 20,
      delay: Math.random() * -20,
      dx: (Math.random() - 0.5) * 30,
      dy: (Math.random() - 0.5) * 30,
    }));

    // Cosmic dust – many tiny teal & purple specks
    const dustColors = [
      "hsl(165 82% 51% / 0.35)",
      "hsl(165 82% 45% / 0.3)",
      "hsl(270 60% 60% / 0.3)",
      "hsl(270 60% 55% / 0.25)",
      "hsl(165 82% 51% / 0.2)",
      "hsl(270 60% 60% / 0.2)",
    ];
    const dust = Array.from({ length: 60 }, (_, i) => ({
      id: 30 + i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2,
      color: dustColors[i % dustColors.length],
      duration: 18 + Math.random() * 25,
      delay: Math.random() * -25,
      dx: (Math.random() - 0.5) * 15,
      dy: (Math.random() - 0.5) * 15,
    }));

    return [...main, ...dust];
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
          animate={{
            x: [0, p.dx, -p.dx * 0.5, p.dx * 0.3, 0],
            y: [0, p.dy, -p.dy * 0.7, p.dy * 0.5, 0],
            opacity: [0.3, 0.8, 0.5, 0.9, 0.3],
            scale: [1, 1.3, 0.8, 1.1, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
      {/* Connection lines between some particles */}
      <svg className="absolute inset-0 w-full h-full">
        {[0, 5, 10, 15, 20].map((i) => {
          const a = particles[i];
          const b = particles[(i + 3) % particles.length];
          return (
            <motion.line
              key={`line-${i}`}
              x1={`${a.x}%`}
              y1={`${a.y}%`}
              x2={`${b.x}%`}
              y2={`${b.y}%`}
              stroke="hsl(165 82% 51% / 0.08)"
              strokeWidth={0.5}
              animate={{ opacity: [0.1, 0.4, 0.1] }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default LightModeParticles;
