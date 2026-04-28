import React from 'react';
import { FaTerminal, FaBriefcase, FaEnvelope, FaFileDownload, FaCodeBranch } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiMongodb, SiTailwindcss } from 'react-icons/si';

const CareerPage = () => {
  return (
    <section className="relative min-h-screen bg-white text-slate-900 px-6 py-24 md:py-32 overflow-hidden">
      
      {/* Subtle Grid Background for a "Technical" feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-bold mb-6">
            <FaTerminal size={14} />
            <span>Open for Collaboration</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-950 mb-6 tracking-tight">
            Building the future <br />
            <span className="text-blue-600">one commit at a time.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl leading-relaxed">
            I specialize in the MERN stack and Next.js ecosystem. Currently looking for 
            opportunities where I can solve complex problems with clean, scalable code.
          </p>
        </div>

        {/* Feature Grid: What I Bring to the Table */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { 
              icon: <SiNextdotjs />, 
              title: "Frontend Mastery", 
              desc: "Building SEO-optimized, blazing fast interfaces with Next.js and Tailwind." 
            },
            { 
              icon: <SiMongodb />, 
              title: "Full Stack Depth", 
              desc: "Designing robust database schemas and secure APIs with Node & Express." 
            },
            { 
              icon: <FaCodeBranch />, 
              title: "Scalable Logic", 
              desc: "Writing maintainable, modular code that grows with your business needs." 
            },
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
              <div className="text-3xl text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Action Section */}
        <div className="flex flex-col items-center border-t border-slate-100 pt-20">
          <h2 className="text-3xl font-bold mb-8">Ready to start a project?</h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full">
            <a
              href="mailto:mdmohiburrahmanmanik@gmail.com"
              className="group flex items-center justify-center gap-3 px-10 py-4 bg-slate-950 hover:bg-blue-600 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-slate-200 w-full sm:w-auto"
            >
              <FaEnvelope className="text-lg group-hover:-translate-y-1 transition-transform" />
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              download
              className="group flex items-center justify-center gap-3 px-10 py-4 bg-white border-2 border-slate-200 hover:border-slate-400 text-slate-900 font-bold rounded-2xl transition-all duration-300 w-full sm:w-auto"
            >
              <FaFileDownload className="text-lg group-hover:translate-y-1 transition-transform" />
              Download CV
            </a>
          </div>
          
          <p className="mt-10 text-slate-400 text-sm flex items-center gap-2">
            <FaBriefcase /> Available for Freelance & Full-time Roles
          </p>
        </div>

      </div>
    </section>
  );
};

export default CareerPage;