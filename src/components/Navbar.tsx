'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mencegah scroll saat menu mobile terbuka
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  if (!mounted) return null;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Tutup menu dulu

    const targetId = href.replace('#', '');
    
    // Delay sedikit agar animasi menu tertutup tidak bertabrakan dengan scroll
    setTimeout(() => {
      if (targetId === 'home' || href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }, 300);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
      isScrolled ? 'py-4' : 'py-8'
    }`}>
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="container mx-auto px-6"
      >
        <div className={`flex justify-between items-center transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-purple-100 dark:border-white/10 py-3 px-8 rounded-full max-w-5xl mx-auto shadow-lg' 
            : 'max-w-7xl mx-auto'
        }`}>
          {/* Logo */}
          <button 
            onClick={(e) => handleNavClick(e, '#home')} 
            className="text-2xl font-black italic tracking-tighter group text-gray-900 dark:text-white relative z-[1001] cursor-pointer"
          >
            H<span className="text-crimson group-hover:drop-shadow-[0_0_8px_#DC143C] transition-all">.</span>MP
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.name} 
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-colors hover:text-crimson group text-gray-700 dark:text-white/80"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-crimson transition-all duration-300 group-hover:w-1/2 group-hover:left-4"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden flex items-center relative z-[1001]">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="p-2 text-gray-900 dark:text-white hover:text-crimson transition-colors outline-none cursor-pointer bg-transparent border-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-24 left-6 right-6 overflow-hidden z-[1000]"
          >
            <div className="p-8 bg-white/95 dark:bg-black/95 backdrop-blur-2xl rounded-3xl border border-purple-100 dark:border-white/10 shadow-2xl">
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <button 
                    key={link.name} 
                    onClick={(e) => handleNavClick(e, link.href)} 
                    className="text-left text-xs font-black uppercase tracking-[0.3em] text-gray-700 dark:text-white/70 hover:text-crimson transition-colors border-b border-gray-100 dark:border-white/5 pb-4 block w-full cursor-pointer"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;