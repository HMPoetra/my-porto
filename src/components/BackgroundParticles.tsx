'use client';
import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

const BackgroundParticles = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Menggunakan useMemo agar partikel tidak di-render ulang terus menerus (lebih ringan)
  const elements = useMemo(() => {
    // 1. Partikel Melayang (Benda Langit/Nebula)
    const stars = Array.from({ length: 15 }).map((_, i) => ({
      id: `star-${i}`,
      type: 'star',
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      color: i % 2 === 0 ? '#DC143C' : '#6a0dad',
    }));

    // 2. Digital Rain (Hujan Kode/Matrix Style Ringan)
    const codeDrops = Array.from({ length: 12 }).map((_, i) => ({
      id: `code-${i}`,
      type: 'code',
      x: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 5 + 5,
      char: ['0', '1', '<', '>', '/', '{', '}'][Math.floor(Math.random() * 7)],
    }));

    return { stars, codeDrops };
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Layer 1: Nebula Stars */}
      {elements.stars.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.color,
            boxShadow: `0 0 20px ${p.color}`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Layer 2: Falling Code (Hujan Digital Ringan) */}
      {elements.codeDrops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute font-mono text-[10px] font-bold text-crimson/20"
          style={{ left: `${drop.x}%`, top: '-5%' }}
          animate={{
            y: ['0vh', '110vh'],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            delay: drop.delay,
            ease: "linear",
          }}
        >
          {drop.char}
        </motion.div>
      ))}

      {/* Layer 3: Shooting Star (Animasi sporadis) */}
      <motion.div
        className="absolute h-[1px] w-[60px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
        initial={{ rotate: -35, x: '-10%', y: '20%' }}
        animate={{
          x: ['0vw', '110vw'],
          y: ['20vh', '80vh'],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 8,
          ease: "easeIn",
        }}
      />
    </div>
  );
};

export default BackgroundParticles;