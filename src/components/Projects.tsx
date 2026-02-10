'use client';

import { motion, Variants } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Portofolio',
      description: 'Website Portofolia, berisikan informasi tentang data pribadi, skills, dan project.',
      tags: ['Next.js', 'TypeScript', 'tailwind'],
      image: '/projects/porto.png',
      github: 'https://github.com/HMPoetra/my-porto',
      demo: 'https://my-porto-gamma-self.vercel.app/',
    },
    {
      title: 'Chartify',
      description: 'Website dashboard untuk visualisasi data penjualan dengan grafik interaktif.',
      tags: ['Next.js', 'Tailwind', 'MongoDB'],
      image: '/projects/chartify.png',
      github: 'https://github.com/HMPoetra/hartify',
    },
    {
      title: 'UI Toko Sepatu',
      description: 'Aplikasi manajemen tugas dengan fitur drag & drop dan deadline reminder.',
      tags: ['HTML', 'CSS'],
      image: '/projects/toko_sepatu.png',
      github: 'https://github.com/HMPoetra/Toko_Sepatu',
    },
    {
      title: 'Project Mendatang',
      description: 'Project rahasia yang sedang dikembangkan menggunakan teknologi modern.',
      tags: ['Next.js', 'TypeScript', 'supabase', 'tailwind', 'framer-motion', 'prisma'],
      image: '',
      github: 'https://github.com/HMPoetra/Toko_Sepatu',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className="p-6 flex flex-col h-full transition-shadow duration-300 bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] hover:shadow-2xl hover:shadow-[#dc143c]/10 relative overflow-hidden"
    >
      {/* Thumbnail Frame */}
      <div className="relative w-full aspect-video bg-white/5 rounded-xl mb-6 flex items-center justify-center border border-white/5 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-[#dc143c]/10 to-purple-600/10 opacity-50 transition-opacity group-hover:opacity-80"></div>

        {project.image && (project.image.includes('/') || project.image.includes('.')) ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="text-center z-10">
            <p className="text-[#dc143c] font-black italic tracking-widest text-[10px] uppercase opacity-80">Mission Pending</p>
            <p className="text-white/20 font-black text-2xl uppercase italic leading-none">Coming Soon</p>
          </div>
        )}
      </div>

      {/* Content Area - Rata Kiri */}
      <div className="flex flex-col flex-grow w-full text-left">
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight italic uppercase">
          {project.title}
        </h3>
        <p className="text-gray-400 text-xs leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Tags - Rata Kiri */}
        <div className="flex flex-wrap justify-start gap-1.5 mb-8">
          {project.tags.map((tag, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="px-2.5 py-1 bg-black border border-white/10 rounded text-[9px] text-gray-400 font-mono uppercase tracking-wider"
            >
              #{tag}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons - Tetap di bawah */}
        <div className="flex gap-3 mt-auto w-full">
          {project.github && (
            <motion.a
              whileTap={{ scale: 0.95 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all flex-1 text-[10px] font-bold uppercase tracking-widest text-white"
            >
              <FaGithub size={14} /> Code
            </motion.a>
          )}
          {project.demo && project.demo !== '#' && (
            <motion.a
              whileTap={{ scale: 0.95 }}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#dc143c] rounded-xl hover:shadow-[0_0_20px_rgba(220,20,60,0.4)] transition-all flex-1 text-[10px] font-bold uppercase tracking-widest text-white"
            >
              <FaExternalLinkAlt size={12} /> Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-24 flex items-center justify-center min-h-screen bg-[#000000] text-white">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-4 uppercase">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dc143c] to-purple-500 underline decoration-[#dc143c]/30">Missions</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1.5 bg-[#dc143c] mx-auto"
          ></motion.div>
        </motion.div>

        {/* Project Grid - justify-center agar card yang jumlahnya sedikit tetap di tengah */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {projects.map((project, index) => (
            <div key={index} className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[400px]">
              <ProjectCard project={project} />
            </div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-20 text-center flex flex-col items-center gap-6"
        >
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-4"
          >
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#dc143c]"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#dc143c]/80">
              More Projects Coming Soon
            </span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#dc143c]"></span>
          </motion.div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/HMPoetra?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all hover:border-[#dc143c]"
          >
            <div className="absolute inset-0 bg-[#dc143c] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative z-10 text-xs font-black uppercase tracking-[0.2em] group-hover:text-white">
              Explore All Repositories
            </span>
            <FaGithub className="relative z-10 text-xl group-hover:text-white transition-colors" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;