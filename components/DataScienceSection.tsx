import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Activity, GitMerge, BrainCircuit } from 'lucide-react';

const CodeSnippet = `
import botserve as bs

# Initialize the Data Engine
engine = bs.DataEngine(api_key="bs_live_...")

# Load raw dataset
dataset = engine.load_dataset("autonomous_driving_v4")

# Apply synthetic augmentation pipeline
augmented_set = dataset.augment(
    strategy="edge_cases",
    multiplier=10,
    modalities=["lidar", "camera"]
)

# Train optimize model architecture
model = bs.AutoML.train(
    data=augmented_set,
    target_metric="map_score",
    optimize_for="inference_latency"
)

# Deploy to edge
deployment = model.deploy(target="nvidia_jetson_orin")
print(f"Model deployed. Accuracy: {deployment.accuracy}%")
`;

export const DataScienceSection: React.FC = () => {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Floating Background Elements (Math) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {[
          "f(x) = Σ (w_i * x_i) + b",
          "∇L(θ)",
          "P(A|B) = P(B|A)P(A) / P(B)",
          "σ(z) = 1 / (1 + e^-z)",
          "ReLU(x) = max(0, x)",
          "E = mc^2"
        ].map((formula, i) => (
          <motion.div
            key={i}
            className="absolute text-slate-200 font-serif italic text-2xl md:text-4xl font-bold"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              y: [0, -50, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {formula}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Services Copy */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 text-green-600 mb-4">
              <BrainCircuit size={20} />
              <span className="font-mono text-sm uppercase">The Brain</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slate-900">From Raw Data to <br/><span className="text-green-600">Deployed Intelligence.</span></h2>
            
            <div className="space-y-8">
              {[
                { 
                  icon: GitMerge, 
                  title: "Model Architecture Optimization", 
                  desc: "Neural Architecture Search (NAS) to find the most efficient backbone for your specific constraints." 
                },
                { 
                  icon: Activity, 
                  title: "Predictive Analytics", 
                  desc: "Turn your data into foresight. We build pipelines that predict failures before they happen." 
                },
                { 
                  icon: Terminal, 
                  title: "Automated MLOps", 
                  desc: "Continuous integration for your models. Drift detection and automatic retraining built-in." 
                }
              ].map((service, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="mt-1 w-12 h-12 shrink-0 bg-white border border-gray-200 rounded-xl flex items-center justify-center group-hover:border-green-500 shadow-sm transition-colors">
                    <service.icon className="text-gray-400 group-hover:text-green-600 transition-colors" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Code Terminal */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-[#1e1e1e] rounded-xl border border-gray-800 shadow-2xl overflow-hidden font-mono text-sm">
              {/* Terminal Header */}
              <div className="px-4 py-3 bg-[#252526] border-b border-[#333] flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-4 text-gray-500 text-xs">botserve_api_demo.py</div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 overflow-x-auto">
                <pre className="text-gray-300 leading-relaxed">
                  <code>
                    {CodeSnippet.split('\n').map((line, i) => (
                      <div key={i} className="table-row">
                        <span className="table-cell text-gray-600 select-none pr-4 text-right w-8">{i + 1}</span>
                        <span className="table-cell">
                          {line.replace(/(import|from|def|class|return)/g, '<span class="text-purple-400">$1</span>')
                               .replace(/(".*?")/g, '<span class="text-green-400">$1</span>')
                               .replace(/(#.*)/g, '<span class="text-gray-500 italic">$1</span>')
                               .replace(/(bs\.[A-Za-z0-9_]+)/g, '<span class="text-blue-400">$1</span>')
                               .split(/<span class=".*?">.*?<\/span>/).map((part, index, array) => {
                                  return part; 
                                })
                          }
                          <span dangerouslySetInnerHTML={{ __html: line
                            .replace(/import /g, '<span class="text-purple-400">import </span>')
                            .replace(/from /g, '<span class="text-purple-400">from </span>')
                            .replace(/# .*/g, match => `<span class="text-gray-500 italic">${match}</span>`)
                            .replace(/".*?"/g, match => `<span class="text-green-400">${match}</span>`)
                            .replace(/bs\./g, '<span class="text-blue-400">bs.</span>')
                          }} />
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
                <motion.div 
                  animate={{ opacity: [0, 1, 0] }} 
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-4 bg-green-400 inline-block ml-1 align-middle"
                />
              </div>
            </div>
            
            <div className="mt-6 flex justify-between items-center text-gray-400 text-xs font-mono">
              <div>Python 3.11.4</div>
              <div>Connected to BotServe Cloud (us-east-1)</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};