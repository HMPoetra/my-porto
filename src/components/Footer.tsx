'use client';

import { FaCode, FaGamepad } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-black border-t border-blood-red/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container utama diubah dari flex-col menjadi flex-row (di layar md ke atas) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Bagian Kiri: Copyright & Made with */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <div className="text-gray-400 font-medium">
              Made with H. MP
            </div>
            <div className="text-gray-600 text-sm">
              © {currentYear} All rights reserved.
            </div>
          </div>

          {/* Bagian Tengah: Tech Stack & Quote */}
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <FaCode className="text-neon-purple" />
              <span>Next.js, TypeScript & Tailwind CSS</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 text-sm italic">
              <FaGamepad className="text-crimson" />
              <span>Code by day, Game by night</span>
            </div>
          </div>       
        </div>
      </div>
    </footer>
  );
};

export default Footer;