import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Scan, BoxSelect, Tag } from 'lucide-react';

export const DataLabelingSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform opacity and scale based on scroll
  const boxScale = useTransform(scrollYProgress, [0.1, 0.4], [1.5, 1]);
  const boxOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  
  // Text parallax
  const textY = useTransform(scrollYProgress, [0.1, 0.6], [50, -50]);

  return (
    <section ref={containerRef} className="relative py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Content Side */}
        <motion.div style={{ y: textY }} className="relative z-10">
          <div className="mb-6 flex items-center gap-2 text-blue-600 font-mono text-sm uppercase tracking-widest">
            <Scan size={16} />
            <span className="font-semibold">Pixel Perfect Accuracy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-slate-900">
            Human-in-the-Loop <br />
            <span className="text-slate-400">Precision.</span>
          </h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Your models are only as good as your ground truth. We provide 99.9% accuracy at global scale through our proprietary labeling infrastructure.
          </p>

          <ul className="space-y-4">
            {[
              { icon: BoxSelect, text: "Computer Vision (2D/3D Annotation)" },
              { icon: Tag, text: "NLP & Semantic Tagging" },
              { icon: Scan, text: "LiDAR & Sensor Fusion" },
            ].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-blue-500 bg-white shadow-sm transition-colors"
              >
                <div className="p-2 bg-blue-50 rounded text-blue-600">
                  <item.icon size={20} />
                </div>
                <span className="font-medium text-slate-800">{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Visual Side: The "Zoom" Labeling Effect */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white group">
          {/* Background Image - Clear Urban Traffic Scene */}
          <img 
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80" 
            alt="Urban Traffic Data Labeling" 
            className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700"
          />

          {/* Grid Overlay - subtle dark grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          {/* Animated Bounding Boxes */}
          
          {/* Box 1: Main Car (Center/Bottom) */}
          <motion.div
            style={{ scale: boxScale, opacity: boxOpacity }}
            className="absolute bottom-[10%] left-[25%] w-[25%] h-[20%] border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)] bg-blue-500/10"
          >
            <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs font-bold px-2 py-1 flex items-center gap-1">
              <span>Vehicle</span>
              <span className="bg-white/20 px-1 rounded text-[10px]">99%</span>
            </div>
            {/* Corner Markers */}
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-white" />
            <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-white" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-white" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-white" />
          </motion.div>

          {/* Box 2: Building/Background Structure (Top Right) */}
          <motion.div
            style={{ scale: boxScale, opacity: boxOpacity }}
            transition={{ delay: 0.2 }}
            className="absolute top-[20%] right-[10%] w-[15%] h-[40%] border-2 border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)] bg-yellow-500/10"
          >
             <div className="absolute -top-6 left-0 bg-yellow-500 text-black text-xs font-bold px-2 py-1">Infrastructure</div>
          </motion.div>

          {/* Box 3: Distant Traffic (Middle) */}
          <motion.div
            style={{ scale: boxScale, opacity: boxOpacity }}
            transition={{ delay: 0.4 }}
            className="absolute top-[45%] left-[45%] w-[8%] h-[6%] border-2 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)] bg-red-500/10"
          >
             <div className="absolute -top-6 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1">Vehicle</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};