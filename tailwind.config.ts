import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blood-red': '#8B0000',
        'crimson': '#DC143C',
        'dark-purple': '#4B0082',
        'neon-purple': '#6A0DAD',
        'deep-black': '#0A0A0A',
        'charcoal': '#1A1A1A',
      },
      backgroundImage: {
        'gradient-gaming': 'linear-gradient(135deg, #8B0000 0%, #4B0082 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
      },
      boxShadow: {
        'neon-red': '0 0 20px rgba(220, 20, 60, 0.5)',
        'neon-purple': '0 0 20px rgba(106, 13, 173, 0.5)',
        'glow': '0 0 30px rgba(139, 0, 0, 0.6)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(220, 20, 60, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(220, 20, 60, 0.8), 0 0 30px rgba(106, 13, 173, 0.5)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;