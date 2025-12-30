import React from 'react';
import { ThreeHero } from './ThreeHero';
import { ArrowDown, Cpu, Network } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* 3D Background */}
      <ThreeHero />

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-600 text-xs font-mono uppercase tracking-widest backdrop-blur-md">
            <Cpu size={12} />
            Next Gen Data Infrastructure
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 mb-6"
        >
          The Foundation of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Intelligent Models
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Precision Labeling. Synthetic Scaling. Data Science Mastery.
          We build the ground truth for the world's most advanced AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="px-8 py-4 bg-black hover:bg-slate-800 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group">
            <Network size={20} className="group-hover:rotate-12 transition-transform" />
            Explore the Data Factory
          </button>
          <button className="px-8 py-4 bg-transparent border border-gray-300 hover:border-black text-slate-900 rounded-lg transition-all duration-300 font-medium">
            View Documentation
          </button>
        </motion.div>
      </div>

      {/* Floating Nodes (Decorative parallax elements - subtle) */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-50 delay-700" />

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};