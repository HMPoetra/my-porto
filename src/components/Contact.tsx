'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
  FaChevronUp,
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Logika untuk menampilkan tombol saat scroll melebihi 400px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi pengiriman pesan
    setTimeout(() => {
      alert(`Terima kasih ${formData.name}! Pesan berhasil terkirim.`);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  // Variabel animasi dengan tipe data Variants agar lulus build TypeScript
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const socialLinks = [
    { Icon: FaGithub, href: 'https://github.com/HMPoetra', label: 'GitHub' },
    { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/hapsoro-mahendra-poetra-086100235/', label: 'LinkedIn' },
    { Icon: FaInstagram, href: 'https://www.instagram.com/hapsoro._/', label: 'Instagram' },
  ];

  return (
    <section id="contact" className="relative py-16 flex flex-col items-center justify-center min-h-[90vh] space-y-12 bg-black">
      
      {/* Tombol Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1, backgroundColor: '#DC143C' }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[99] p-4 bg-white/10 border border-white/20 text-white rounded-full shadow-2xl backdrop-blur-lg hover:shadow-crimson/40 transition-shadow group"
            aria-label="Back to Top"
          >
            <FaChevronUp className="text-xl group-hover:animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.div 
        className="container max-w-5xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter mb-2 uppercase text-white">
            CONNECT <span className="text-red-600">HUB</span>
          </h2>
          <motion.div 
            className="w-16 h-1 bg-red-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          ></motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="!p-6 md:!p-10 border-t-2 border-t-red-600/50 shadow-2xl bg-white/5 backdrop-blur-md rounded-2xl"
        >
          <div className="grid md:grid-cols-5 gap-10">
            {/* Info Kontak */}
            <div className="md:col-span-2 space-y-8">
              <motion.div variants={itemVariants}>
                <h3 className="text-sm font-black text-white mb-4 tracking-widest uppercase opacity-80 italic">Contact Info</h3>
                <div className="space-y-3">
                  {[
                    { 
                      icon: SiGmail, 
                      val: 'hapsoromahendrap@gmail.com', 
                      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=hapsoromahendrap@gmail.com' 
                    },
                    { icon: FaMapMarkerAlt, val: 'Bandung, Indonesia', link: '#' },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.a 
                        key={i} 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-xs group cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-red-600 group-hover:bg-red-600/10 transition-all duration-300">
                          <Icon className="text-red-600 text-sm" />
                        </div>
                        <span className="text-gray-400 group-hover:text-white transition-colors">{item.val}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-sm font-black text-white mb-4 tracking-widest uppercase opacity-80 italic">Socials</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, i) => {
                    const Icon = social.Icon;
                    return (
                      <motion.a 
                        key={i} 
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="p-3 bg-white/5 border border-white/10 rounded-xl text-white hover:text-red-600 transition-all"
                        whileHover={{ y: -5, scale: 1.1, borderColor: "rgba(220,20,60,1)" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon className="text-lg" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Form Kontak */}
            <motion.div className="md:col-span-3" variants={itemVariants}>
              <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
                {[
                  { name: 'name', placeholder: 'Full Name', type: 'text', col: 'col-span-2 md:col-span-1' },
                  { name: 'email', placeholder: 'Email Address', type: 'email', col: 'col-span-2 md:col-span-1' },
                  { name: 'subject', placeholder: 'Subject', type: 'text', col: 'col-span-2' },
                ].map((input, i) => (
                  <motion.input
                    key={i}
                    whileFocus={{ scale: 1.01, borderColor: "rgba(220,20,60,0.5)" }}
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                    value={(formData as any)[input.name]}
                    onChange={handleChange}
                    required
                    className={`${input.col} px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:border-red-600 outline-none transition-all placeholder:text-gray-600`}
                  />
                ))}
                
                <motion.textarea
                  whileFocus={{ scale: 1.01, borderColor: "rgba(220,20,60,0.5)" }}
                  name="message"
                  placeholder="Your Message..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="col-span-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:border-red-600 outline-none transition-all resize-none placeholder:text-gray-600"
                ></motion.textarea>
                
                <motion.button
                  whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0px 0px 20px rgba(220,20,60,0.4)" } : undefined}
                  whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
                  type="submit"
                  disabled={isSubmitting}
                  className="col-span-2 mt-2 py-3 bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2 overflow-hidden relative"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Transmitting...</span>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;