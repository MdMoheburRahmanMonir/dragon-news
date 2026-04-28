import React from 'react';
import { FaShieldAlt, FaLock, FaUserShield, FaRegFileAlt } from 'react-icons/fa';

const PrivacyPolicy = () => {
  const lastUpdated = "April 28, 2026";

  return (
    <section className="relative min-h-screen bg-white text-slate-900 px-6 py-24 md:py-32">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-slate-50 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="border-b border-slate-100 pb-12 mb-16">
          <div className="flex items-center gap-3 text-blue-600 mb-6">
            <FaShieldAlt size={32} />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Legal Documents</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-500 font-medium">
            Last Updated: <span className="text-slate-900">{lastUpdated}</span>
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-16">
          
          {/* 01. Introduction */}
          <section className="group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <FaRegFileAlt />
              </div>
              <h2 className="text-2xl font-bold">01. Introduction</h2>
            </div>
            <p className="text-slate-600 leading-relaxed pl-14">
              Your privacy is of paramount importance. This policy outlines how your data is collected, 
              used, and protected within our niche digital ecosystem. By using this application, 
              you agree to the practices described herein.
            </p>
          </section>

          {/* 02. Information Collection */}
          <section className="group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <FaUserShield />
              </div>
              <h2 className="text-2xl font-bold">02. Data Collection</h2>
            </div>
            <p className="text-slate-600 leading-relaxed pl-14 mb-4">
              We collect information that helps us provide a better user experience. This includes:
            </p>
            <ul className="list-none pl-14 space-y-3 text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Account details (Email, Name) via Better Auth.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Usage patterns and performance metrics.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Technical logs for security and debugging.
              </li>
            </ul>
          </section>

          {/* 03. Data Security */}
          <section className="group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <FaLock />
              </div>
              <h2 className="text-2xl font-bold">03. Security Standards</h2>
            </div>
            <p className="text-slate-600 leading-relaxed pl-14">
              We utilize industry-standard encryption and secure database management practices (MongoDB) 
              to ensure your personal information is protected against unauthorized access or disclosure.
            </p>
          </section>

          {/* 04. Contact Section */}
          <div className="mt-24 p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center">
            <h3 className="text-xl font-bold mb-4">Questions about your data?</h3>
            <p className="text-slate-500 mb-8 max-w-lg mx-auto">
              If you have any concerns regarding this policy or wish to request data deletion, 
              please reach out directly.
            </p>
            <a 
              href="mailto:mdmohiburrahmanmanik@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-950 text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-slate-200"
            >
              Contact Privacy Officer
            </a>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-20 text-center text-slate-400 text-xs tracking-widest uppercase">
          © 2026 Md Mohibur Rahman Manik • All Rights Reserved
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;