import React from 'react';
import { ShieldCheck, Lock, FileKey, Database } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-gray-200">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-block p-3 rounded-full bg-blue-50 mb-6">
            <ShieldCheck className="text-blue-600" size={32} />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-slate-900">The Trust Engine</h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
          Your data is your IP. We protect it like our own with enterprise-grade security and compliance standards.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "SOC2 Type II", sub: "Certified", icon: Lock },
            { label: "GDPR", sub: "Compliant", icon: Database },
            { label: "HIPAA", sub: "Ready", icon: FileKey },
            { label: "ISO 27001", sub: "Accredited", icon: ShieldCheck },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-white border border-gray-200 hover:border-blue-500 transition-all shadow-sm hover:shadow-md group">
              <item.icon className="mx-auto mb-4 text-gray-400 group-hover:text-blue-600 transition-colors" size={28} />
              <div className="font-bold text-xl text-slate-900">{item.label}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};