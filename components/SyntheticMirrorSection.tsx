import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeftRight, Sparkles } from 'lucide-react';

export const SyntheticMirrorSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const sliderPosition = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);
  
  return (
    <section ref={sectionRef} className="relative min-h-[150vh] bg-white">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Header Content */}
        <div className="absolute top-10 left-0 right-0 z-30 text-center px-6 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-600 backdrop-blur-md"
          >
            <Sparkles size={14} />
            <span>Generative AI Pipeline</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900">Solve the Data Scarcity Problem</h2>
          <p className="text-slate-500">Generate infinite edge-cases. Zero privacy risk.</p>
        </div>

        {/* The Mirror Container */}
        <div className="relative w-full max-w-6xl mx-auto h-[60vh] md:h-[70vh] border border-gray-200 rounded-3xl overflow-hidden mt-20 shadow-2xl">
          
          {/* Layer 1: "Real Data" (Noisy/Sparse) */}
          <div className="absolute inset-0 bg-gray-100">
             <img 
              src="https://picsum.photos/seed/noisy/1200/800?blur=4" 
              alt="Noisy Data" 
              className="w-full h-full object-cover filter grayscale opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-4xl font-bold text-black/20 uppercase tracking-[1em]">NOISY</h3>
            </div>
          </div>

          {/* Layer 2: "Synthetic Data" (Clean/Annotated) - Clipped by Scroll */}
          <motion.div 
            style={{ width: sliderPosition }}
            className="absolute inset-y-0 left-0 bg-white overflow-hidden border-r-4 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.3)] z-20"
          >
            <div className="absolute inset-0 w-[max(100vw,1200px)] h-full"> {/* Inner container to keep image fixed relative to frame */}
              <img 
                src="https://picsum.photos/seed/noisy/1200/800" 
                alt="Clean Data" 
                className="w-full h-full object-cover filter saturate-100" 
              />
              <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay" />
              
              {/* Synthetic Overlay Annotations */}
              <div className="absolute top-1/4 left-1/4 p-2 border border-purple-500 bg-purple-500/80 text-xs text-white shadow-lg">
                Generated Object #1024
              </div>
               <div className="absolute bottom-1/3 right-1/4 p-2 border border-purple-500 bg-purple-500/80 text-xs text-white shadow-lg">
                Edge Case: Low Light
              </div>

               <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-4xl font-bold text-white uppercase tracking-[1em] drop-shadow-md">SYNTHETIC</h3>
              </div>
            </div>
          </motion.div>

          {/* Slider Handle Visual */}
          <motion.div 
            style={{ left: sliderPosition }}
            className="absolute top-0 bottom-0 w-0 z-30 flex items-center justify-center -ml-6" // Center the handle
          >
            <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-xl border-4 border-white">
              <ArrowLeftRight size={20} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};