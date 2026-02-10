"use client";

import { motion, Variants } from 'framer-motion';
import {
  FaJs, FaNodeJs, FaPython, FaGitAlt, FaDatabase,
  FaHtml5, FaCss3Alt, FaLaravel, FaBootstrap, FaReact, FaPhp,
  FaWindows, FaCode
} from 'react-icons/fa';
import {
  SiTypescript, SiTailwindcss, SiNextdotjs,
  SiFlutter, SiDart, SiMysql
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { DiVisualstudio } from 'react-icons/di';
import { TbBrandCSharp } from 'react-icons/tb';

interface Skill {
  name: string;
  icon: React.ElementType; // Menggunakan ElementType lebih tepat untuk komponen ikon
  color: string;
}

const Skills = () => {
  const frontendSkills: Skill[] = [
    { name: 'React.js', icon: FaReact, color: 'text-cyan-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-400' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-600' },
    { name: 'Flutter Web', icon: SiFlutter, color: 'text-blue-300' },
    { name: 'Dart', icon: SiDart, color: 'text-blue-600' },
  ];

  const backendSkills: Skill[] = [
    { name: 'PHP', icon: FaPhp, color: 'text-blue-400' },
    { name: 'Laravel', icon: FaLaravel, color: 'text-red-600' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Python', icon: FaPython, color: 'text-blue-500' },
    { name: 'C#', icon: TbBrandCSharp || FaCode, color: 'text-purple-500' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
  ];

  const toolsSkills: Skill[] = [
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
    { name: 'VSC', icon: VscVscode, color: 'text-blue-400' },
    { name: 'Visual Studio', icon: DiVisualstudio, color: 'text-purple-500' },
    { name: 'Windows', icon: FaWindows, color: 'text-blue-500' },
    { name: 'Database', icon: FaDatabase, color: 'text-red-500' },
  ];

  // Menambahkan tipe Variants untuk memperbaiki error build
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  const SkillCard = ({ skill }: { skill: Skill }) => {
    const Icon = skill.icon;
    return (
      <motion.div
        whileHover={{ y: -3, backgroundColor: "#1a1a1a" }}
        className="flex flex-col items-center justify-center p-3 rounded-xl border border-white/10 bg-[#0f0f0f] aspect-square transition-all duration-300 group min-w-[85px] md:min-w-[105px]"
      >
        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="text-2xl md:text-3xl mb-2">
          <Icon className={`${skill.color} transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]`} />
        </motion.div>
        <span className="text-gray-400 text-[9px] md:text-[10px] font-bold tracking-tight uppercase text-center group-hover:text-white transition-colors">
          {skill.name}
        </span>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-16 flex items-center justify-center min-h-screen bg-[#000000]">      <motion.div
      className="container max-w-6xl mx-auto px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-4 inline-block relative text-white">
          TECH <span className="text-gradient underline decoration-crimson/30">STACK</span>
        </h2>
        <div className="flex items-center justify-center gap-4 mt-1">
          <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-crimson" />
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em]">Arsenal & Tools</p>
          <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-crimson" />
        </div>
      </motion.div>

      <div className="flex flex-col gap-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <h3 className="text-[10px] font-black text-blue-500 mb-6 tracking-[0.2em] uppercase italic px-4 py-1 border-b border-blue-500/30">
              Frontend Engine
            </h3>
            <div className="flex flex-wrap justify-center gap-3 w-full">
              {frontendSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <h3 className="text-[10px] font-black text-green-500 mb-6 tracking-[0.2em] uppercase italic px-4 py-1 border-b border-green-500/30">
              Backend Core
            </h3>
            <div className="flex flex-wrap justify-center gap-3 w-full">
              {backendSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="flex flex-col items-center">
          <h3 className="text-[10px] font-black text-crimson mb-6 tracking-[0.2em] uppercase italic px-4 py-1 border-b border-crimson/30">
            Utilities & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3 w-full max-w-2xl">
            {toolsSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
    </section>
  );
};

export default Skills;