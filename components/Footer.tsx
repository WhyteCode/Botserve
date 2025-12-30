import React from 'react';
import { Github, Twitter, Linkedin, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 text-slate-900 pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 mb-20">
          
          {/* CTA / Form Side */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Ready to Scale?</h2>
            <p className="text-slate-600 mb-8">
              Start your journey with BotServe. Tell us about your data needs.
            </p>
            
            <form className="space-y-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-500 mb-1">Work Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none transition-all placeholder:text-gray-400"
                  placeholder="engineer@company.com"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-500 mb-1">Industry</label>
                  <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none transition-all text-slate-800">
                    <option>Autonomous Vehicles</option>
                    <option>Healthcare / MedTech</option>
                    <option>Robotics</option>
                    <option>FinTech</option>
                    <option>Retail / E-commerce</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-500 mb-1">Dataset Size</label>
                  <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none transition-all text-slate-800">
                    <option>&lt; 10k items</option>
                    <option>10k - 100k items</option>
                    <option>100k - 1M items</option>
                    <option>1M+ items</option>
                  </select>
                </div>
              </div>

              <button className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors flex justify-center items-center gap-2 mt-4 shadow-lg">
                Get Started <Send size={18} />
              </button>
            </form>
          </div>

          {/* Links Side */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-slate-900">Platform</h4>
                <ul className="space-y-2 text-slate-600">
                  <li><a href="#" className="hover:text-black transition-colors">Data Labeling</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Synthetic Gen</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Model Evaluation</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">API Docs</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-slate-900">Company</h4>
                <ul className="space-y-2 text-slate-600">
                  <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Security</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
               <div className="flex gap-4 mb-4">
                 <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-500 hover:text-black hover:border-black transition-all shadow-sm"><Twitter size={20} /></a>
                 <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-500 hover:text-black hover:border-black transition-all shadow-sm"><Linkedin size={20} /></a>
                 <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-500 hover:text-black hover:border-black transition-all shadow-sm"><Github size={20} /></a>
               </div>
               <p className="text-slate-500 text-sm">© 2024 BotServe Inc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};