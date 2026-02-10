'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // Default false agar tidak muncul di awal
  const [statusText, setStatusText] = useState('INITIALIZING...');

  const phrases = [
    "REBOOTING SYSTEM...",
    "RE-STABILIZING ASSETS...",
    "RELOADING NEBULA...",
    "SYNCING DATA...",
    "RESTORE COMPLETE"
  ];

  useEffect(() => {
    // Cek apakah halaman di-refresh
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
    const isRefresh = navigation && navigation.type === 'reload';

    if (isRefresh) {
      setIsLoading(true);

      // Simulasi loading progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setIsLoading(false), 500);
            return 100;
          }
          return prev + Math.floor(Math.random() * 15) + 5;
        });
      }, 150);

      const textInterval = setInterval(() => {
        setStatusText(phrases[Math.floor(Math.random() * phrases.length)]);
      }, 600);

      return () => {
        clearInterval(interval);
        clearInterval(textInterval);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
          data-loading="true"
        >
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: 'linear-gradient(#DC143C 1px, transparent 1px), linear-gradient(90deg, #6a0dad 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          <div className="relative w-72 md:w-96">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-4xl font-black italic tracking-tighter text-white mb-8 text-center"
            >
              H<span className="text-crimson">.</span>MP
            </motion.div>

            <div className="flex justify-between items-end mb-2">
              <motion.span 
                key={statusText}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[10px] font-mono text-crimson tracking-[0.3em] font-bold"
              >
                {statusText}
              </motion.span>
              <span className="text-[10px] font-mono text-white/50">{progress}%</span>
            </div>

            <div className="h-[2px] w-full bg-white/10 overflow-hidden relative">
              <motion.div
                className="h-full bg-crimson"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-4 text-[8px] text-center text-gray-600 uppercase tracking-widest">
              System Reboot Detected - Restoring Session
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;