'use client';
import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FaCode, FaGamepad, FaTimes, FaCoffee } from 'react-icons/fa';

const Hero = () => {
  const [isGamingPopupOpen, setIsGamingPopupOpen] = useState(false);
  const [isSawerOpen, setIsSawerOpen] = useState(false);

  const scrollToProjects = () => {
    const projectSection = document.getElementById('projects');
    if (projectSection) projectSection.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24
      },
    },
  };

  const skills = [
    { icon: <FaCode />, label: "WebDev", color: "text-blue-400" },
    { icon: <FaGamepad />, label: "Gamer", color: "text-crimson" },
  ];

  const favoriteGames = [
    {
      name: 'Valorant',
      rank: 'Bronze 3',
      logo: '/game/valorant.png',
      color: 'text-red-500'
    },
    {
      name: 'FiveM',
      rank: '/game/kitarp.png',
      logo: '/game/fivem.png',
      color: 'text-orange-500'
    },
    {
      name: 'Heartopia',
      rank: 'DG Master 19',
      logo: '/game/heartopia.png',
      color: 'text-pink-400'
    },
  ];

  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center py-12 overflow-hidden bg-[#000000]">
      {/* Background Decor */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[120px] -z-10 animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] -z-10 animate-[pulse_8s_ease-in-out_infinite]" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* FRAME PROFILE */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-12 gap-10 items-center !p-8 md:!p-12 border border-white/10 rounded-[2.5rem] backdrop-blur-3xl w-full bg-[#0a0a0a]/80 shadow-[0_0_50px_-12px_rgba(220,20,60,0.15)]"
        >
          {/* --- LEFT SIDE: CONTENT --- */}
          <div className="md:col-span-7 space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-5xl font-black italic mb-2 uppercase tracking-tighter leading-none">
                WHO AM <span className="text-gradient">I?</span>
              </h2>
              <h1 className="font-bold tracking-tight uppercase text-2xl md:text-4xl text-white/90 break-words leading-tight">
                Hapsoro Mahendra Poetra
              </h1>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-black/40 p-3 rounded-xl border border-white/10 inline-block w-full max-w-lg"
            >
              <p className="text-crimson font-mono font-bold text-[10px] md:text-xs overflow-x-auto whitespace-nowrap scrollbar-hide">
                <span className="text-gray-500 mr-2">{`>`}</span>
                {`System.out.println("Web Developer Here!");`}
              </p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
              HI Selamat datang di dunia saya, saya Hapsoro Mahendra Poetra dari Bogor, Indonesia. <br />
              Saya adalah mahasiswa aktif D3 Teknik Informatika di Universitas Logistik dan Bisnis Internasional. Dengan keahlian dan semangat dalam pembuatan Website, Aplikasi, dan Manajemen Proyek.
            </motion.p>

            <motion.div variants={itemVariants} className="inline-block p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-1">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/80">Status: Available</span>
              </div>
              <p className="text-[10px] text-gray-500 leading-tight">Ready for Internship / Web Projects.</p>
            </motion.div>

            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-crimson/30 transition-all group cursor-default"
                  >
                    <span className={`text-xl ${skill.color} group-hover:scale-110 transition-transform`}>{skill.icon}</span>
                    <span className="font-bold text-[11px] uppercase tracking-widest text-white">{skill.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(220, 20, 60, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToProjects}
                  className="px-8 py-3 bg-crimson rounded-full font-black text-[10px] uppercase tracking-[0.2em] text-white transition-all shadow-lg shadow-crimson/20"
                >
                  View Projects
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsGamingPopupOpen(true)}
                  className="px-8 py-3 bg-white/5 border border-white/10 rounded-full font-black text-[10px] uppercase tracking-[0.2em] text-white transition-all"
                >
                  <FaGamepad className="inline mr-2" /> Gaming Stats
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(220,20,60,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSawerOpen(true)}
                  className="px-8 py-3 bg-white/5 border border-white/10 rounded-full font-black text-[10px] uppercase tracking-[0.2em] text-white transition-all flex items-center"
                >
                  <FaCoffee className="inline mr-2 text-yellow-500" /> Sawer
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* --- RIGHT SIDE: IMAGE --- */}
          <motion.div variants={itemVariants} className="md:col-span-5 flex justify-center items-center relative mt-8 md:mt-0">
            <motion.div
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.2}
              whileDrag={{ scale: 0.9, rotate: 5, cursor: "grabbing" }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden border border-white/10 bg-black/20 shadow-2xl z-20 cursor-grab group"
            >
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover pointer-events-none grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute w-64 h-64 md:w-80 md:h-80 bg-red-600/20 blur-[100px] rounded-full -z-10"
            />
          </motion.div>
        </motion.div>

        {/* Quote Section */}
        <motion.div variants={itemVariants} className="mt-12 md:mt-16 flex justify-center z-20">
          <div className="px-6 py-3 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/[0.05] hover:border-crimson/20 transition-all duration-500 group">
            <p className="text-[10px] md:text-[11px] text-gray-400 italic tracking-widest text-center uppercase">
              "Berfikir <span className="text-crimson font-black group-hover:drop-shadow-[0_0_8px_#DC143C]">Besar</span> Lalu <span className="text-crimson font-black group-hover:drop-shadow-[0_0_8px_#DC143C]">Bertindak</span>"
            </p>
          </div>
        </motion.div>
      </div>

      {/* POPUP MODAL GAMING */}
      <AnimatePresence>
        {isGamingPopupOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsGamingPopupOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-crimson via-purple-600 to-crimson rounded-[2.1rem] blur-md opacity-20 animate-pulse" />
              <div className="relative glass-container !bg-black/95 !border-white/10 !p-8 rounded-[2rem]">
                <button
                  onClick={() => setIsGamingPopupOpen(false)}
                  className="absolute top-4 right-4 text-white/40 hover:text-white transition-all text-xl"
                >
                  <FaTimes />
                </button>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-black italic uppercase tracking-widest text-gradient">
                    SYSTEM <span className="text-white">STATS</span>
                  </h3>
                  <div className="h-0.5 w-16 bg-crimson mx-auto mt-2 shadow-[0_0_10px_#DC143C]" />
                </div>

                <div className="space-y-4">
                  {favoriteGames.map((game, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                      className="group flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-crimson/30 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-black/40 p-1 flex items-center justify-center border border-white/5">
                          <img
                            src={game.logo}
                            alt={game.name}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                            onError={(e: any) => { e.target.src = "https://via.placeholder.com/40?text=🎮" }}
                          />
                        </div>
                        <span className="text-xs font-bold text-white uppercase tracking-widest">
                          {game.name}
                        </span>
                      </div>

                      <div className="flex items-center">
                        {game.rank.startsWith('/') ? (
                          <div className="h-8 w-auto px-2 py-1 bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                            <img
                              src={game.rank}
                              alt="Rank Icon"
                              className="h-full w-full object-contain"
                            />
                          </div>
                        ) : (
                          <span className={`text-[9px] font-mono font-black bg-white/5 px-3 py-1 rounded-full border border-white/10 ${game.color} shadow-[0_0_5px_rgba(0,0,0,0.5)]`}>
                            {game.rank}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 flex justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                    <span className="text-[9px] font-bold text-gray-500 uppercase">System: Online</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* POPUP MODAL SAWER */}
      <AnimatePresence>
        {isSawerOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSawerOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-sm"
            >
              <div className="absolute inset-0 bg-yellow-500/20 rounded-[2.1rem] blur-md opacity-20 animate-pulse" />
              <div className="relative glass-container !bg-black/95 !border-white/10 !p-8 rounded-[2rem]">
                <button
                  onClick={() => setIsSawerOpen(false)}
                  className="absolute top-4 right-4 text-white/40 hover:text-white transition-all text-xl"
                >
                  <FaTimes />
                </button>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black italic uppercase tracking-widest text-yellow-500">
                    SUPPORT <span className="text-white">ME</span>
                  </h3>
                  <p className="text-[10px] text-gray-500 font-bold tracking-widest mt-1 uppercase">Dukungan anda sangat berarti!</p>
                  <div className="h-0.5 w-12 bg-yellow-500 mx-auto mt-2 shadow-[0_0_10px_#EAB308]" />
                </div>

                {/* AREA GAMBAR QRIS */}
                <div className="bg-white rounded-2xl p-4 shadow-2xl relative overflow-hidden group">
                  <img 
                    src="/qris.png" 
                    alt="QRIS Donasi" 
                    className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105"
                    onError={(e: any) => { e.target.src = "https://via.placeholder.com/400?text=QRIS+PHOTO" }}
                  />
                  <div className="absolute inset-0 border-2 border-black/5 rounded-2xl pointer-events-none" />
                </div>

                <div className="mt-6 space-y-3">
                  <div className="py-2 px-4 bg-white/5 border border-white/10 rounded-xl text-center">
                    <p className="text-[10px] text-gray-400 font-mono tracking-tighter">
                      Scan QR di atas menggunakan OVO, Dana, GoPay, atau m-Banking
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce" />
                    <span className="text-[9px] font-bold text-yellow-500/80 uppercase">Waiting for transaction...</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;