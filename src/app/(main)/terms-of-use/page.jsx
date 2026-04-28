import React from 'react';
import { FaGavel, FaBan, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const TermsOfUse = () => {
  const lastUpdated = "April 28, 2026";

  return (
    <section className="relative min-h-screen bg-white text-slate-900 px-6 py-24 md:py-32">
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="border-b border-slate-100 pb-12 mb-16">
          <div className="flex items-center gap-3 text-blue-600 mb-6">
            <FaGavel size={32} />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Rules of Engagement</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 tracking-tight">
            Terms of Use
          </h1>
          <p className="text-slate-500 font-medium">
            Effective Date: <span className="text-slate-900">{lastUpdated}</span>
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-16">
          
          {/* 01. Acceptance of Terms */}
          <section className="group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <FaCheckCircle />
              </div>
              <h2 className="text-2xl font-bold">01. Acceptance</h2>
            </div>
            <p className="text-slate-600 leading-relaxed pl-14">
              By accessing and using this application, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms of Use. If you do not 
              agree, please discontinue use of our niche services immediately.
            </p>
          </section>

          {/* 02. User Responsibilities */}
          <section className="group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <FaGavel />
              </div>
              <h2 className="text-2xl font-bold">02. Proper Conduct</h2>
            </div>
            <p className="text-slate-600 leading-relaxed pl-14 mb-4">
              As a user of this platform, you agree to:
            </p>
            <ul className="list-none pl-14 space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                Provide accurate information when creating an account via Better Auth.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                Maintain the security of your password and identification.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                Use the tools provided for their intended legal and ethical purposes.
              </li>
            </ul>
          </section>

          {/* 03. Prohibited Actions */}
          <section className="group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-900 group-hover:bg-red-500 group-hover:text-white transition-colors">
                <FaBan />
              </div>
              <h2 className="text-2xl font-bold">03. Restrictions</h2>
            </div>
            <p className="text-slate-600 leading-relaxed pl-14">
              You are strictly prohibited from attempting to reverse-engineer the source code, 
              bypassing security features, or using automated scripts to interact with 
              our services without prior written consent.
            </p>
          </section>

          {/* 04. Limitation of Liability */}
          <section className="group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-900 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <FaExclamationTriangle />
              </div>
              <h2 className="text-2xl font-bold">04. Liability</h2>
            </div>
            <p className="text-slate-600 leading-relaxed pl-14">
              The services are provided "as is." We are not liable for any damages 
              resulting from service interruptions or your inability to use the software 
              correctly. We reserve the right to modify services at any time.
            </p>
          </section>

          {/* 05. Contact Section */}
          <div className="mt-24 p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center">
            <h3 className="text-xl font-bold mb-4">Questions about these Terms?</h3>
            <p className="text-slate-500 mb-8 max-w-lg mx-auto">
              If you need clarification on any of these points or wish to discuss 
              licensing, please get in touch.
            </p>
            <a 
              href="mailto:mdmohiburrahmanmanik@gmail.com"
              className="inline-flex items-center gap-2 px-10 py-4 bg-slate-950 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-200"
            >
              Contact Legal Support
            </a>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-20 text-center text-slate-400 text-xs tracking-widest uppercase">
          Document Reference: MDM-TOU-2026
        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;