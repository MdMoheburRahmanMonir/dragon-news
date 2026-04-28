import React from 'react';
import { FaEnvelope, FaFileAlt, FaGithub, FaLayerGroup } from 'react-icons/fa';

const AboutHero = () => {
  return (
    // Added py-24 and py-32 for generous top/bottom padding
    <section className="relative min-h-screen flex items-center justify-center bg-white text-slate-900 px-6 py-24 md:py-32">
      
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-50 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-indigo-50 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Niche Badge */}
        <div className="flex justify-center mb-10">
          <span className="flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 bg-slate-50/50 backdrop-blur-sm text-sm font-semibold text-slate-600 tracking-wide shadow-sm">
            <FaLayerGroup className="text-blue-600" />
            <span>Developer & Designer</span>
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1] text-slate-950">
          Crafting niche tools for <br />
          <span className="text-blue-600">modern web ecosystems.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-600 text-lg md:text-xl mb-12 leading-relaxed">
          Focused on high-performance applications built with the MERN stack and Next.js. 
          I build digital products that balance technical complexity with 
          intuitive, minimalist design.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="mailto:mdmohiburrahmanmanik@gmail.com"
            className="group flex items-center gap-3 px-10 py-4 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-slate-200 w-full sm:w-auto"
          >
            <FaEnvelope className="text-lg group-hover:rotate-12 transition-transform" />
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-10 py-4 bg-white border-2 border-slate-200 hover:border-slate-400 text-slate-900 font-bold rounded-2xl transition-all duration-300 w-full sm:w-auto"
          >
            <FaFileAlt className="text-lg group-hover:scale-110 transition-transform" />
            My Resume
          </a>
        </div>

        {/* GitHub Link */}
        <div className="mt-24 pt-8 border-t border-slate-100">
          <a 
            href="https://github.com/mdmoheburrahmanmonir" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors font-medium"
          >
            <FaGithub size={20} />
            <span className="text-xs uppercase tracking-[0.3em]">Check my open source work</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;