import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

interface FooterProps {
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  return (
    <footer className="bg-[#124032] text-white pt-16 pb-8 border-t-4 border-[#eab308]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* TOP FOUR COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-800/60">
          
          {/* COLUMN 1: SCHOOL BRANDING */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center p-1.5 border border-white/20">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="22" r="12" fill="#EAB308" />
                  <path d="M15 65 C30 55, 48 60, 50 78 C52 60, 70 55, 85 65 L85 40 C70 30, 52 35, 50 48 C48 35, 30 30, 15 40 Z" fill="#FFFFFF" />
                  <path d="M50 20 C62 30, 60 50, 50 65 C40 50, 38 30, 50 20 Z" fill="#2E7D5E" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight font-heading">Greenfield</h3>
                <p className="text-xs text-emerald-200 uppercase font-semibold">Matriculation School</p>
              </div>
            </div>

            <p className="text-emerald-100/80 text-sm leading-relaxed">
              "Growing Minds. Building Futures." <br />
              A caring, co-educational day school in Coimbatore dedicated to academic excellence, character development, and holistic student growth.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="bg-[#eab308] hover:bg-[#d9a207] text-[#124032] font-bold px-4 py-2 rounded-xl text-xs shadow-md transition-all inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Request Admission Info</span>
              </button>
            </div>
          </div>

          {/* COLUMN 2: QUICK NAVIGATION */}
          <div>
            <h4 className="text-base font-bold text-[#eab308] mb-4 uppercase tracking-wider text-xs font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-emerald-100/90">
              <li>
                <Link to="/about" className="hover:text-[#eab308] transition-colors flex items-center gap-1.5">
                  <span className="text-[#eab308]">›</span> About Greenfield
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-[#eab308] transition-colors flex items-center gap-1.5">
                  <span className="text-[#eab308]">›</span> Academics & Curriculum
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-[#eab308] transition-colors flex items-center gap-1.5">
                  <span className="text-[#eab308]">›</span> Admissions & Process
                </Link>
              </li>
              <li>
                <Link to="/campus" className="hover:text-[#eab308] transition-colors flex items-center gap-1.5">
                  <span className="text-[#eab308]">›</span> Campus & Facilities
                </Link>
              </li>
              <li>
                <Link to="/student-life" className="hover:text-[#eab308] transition-colors flex items-center gap-1.5">
                  <span className="text-[#eab308]">›</span> Student Life & Clubs
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: HIGHLIGHTS & RESOURCES */}
          <div>
            <h4 className="text-base font-bold text-[#eab308] mb-4 uppercase tracking-wider text-xs font-heading">
              School Resources
            </h4>
            <ul className="space-y-2.5 text-sm text-emerald-100/90">
              <li>
                <Link to="/achievements" className="hover:text-[#eab308] transition-colors flex items-center gap-1.5">
                  <span className="text-[#eab308]">›</span> Achievements & Honors
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#eab308] transition-colors flex items-center gap-1.5">
                  <span className="text-[#eab308]">›</span> Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#eab308] transition-colors flex items-center gap-1.5">
                  <span className="text-[#eab308]">›</span> Contact Admissions Desk
                </Link>
              </li>
              <li>
                <span className="text-emerald-300/60 flex items-center gap-1.5">
                  <span className="text-[#eab308]">›</span> Privacy & Ethics Policy
                </span>
              </li>
              <li>
                <span className="text-emerald-300/60 flex items-center gap-1.5">
                  <span className="text-[#eab308]">›</span> Mandatory Disclosures
                </span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT & LOCATION */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-[#eab308] mb-4 uppercase tracking-wider text-xs font-heading">
              School Office
            </h4>

            <div className="text-sm text-emerald-100/90 space-y-2.5">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#eab308] shrink-0 mt-1" />
                <span>Greenfield Matriculation School, Saravanampatti, Coimbatore, Tamil Nadu 641035</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#eab308] shrink-0" />
                <a href={`tel:${schoolInfo.phone}`} className="hover:text-[#eab308] transition-colors">{schoolInfo.phone}</a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#eab308] shrink-0" />
                <a href={`mailto:${schoolInfo.email}`} className="hover:text-[#eab308] transition-colors">{schoolInfo.email}</a>
              </p>
              <p className="flex items-start gap-2.5 text-xs text-emerald-200">
                <Clock className="w-4 h-4 text-[#eab308] shrink-0 mt-0.5" />
                <span>Mon – Fri: 8:30 AM – 4:30 PM <br />Sat: 8:30 AM – 1:00 PM</span>
              </p>
            </div>

            {/* SOCIAL PLACEHOLDERS */}
            <div className="pt-2 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </span>
              <span className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </span>
              <span className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </span>
              <span className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </span>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & PORTFOLIO DISCLAIMER */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-200/80">
          <p className="text-center md:text-left">
            © 2026 Greenfield Matriculation School. All rights reserved.
          </p>

          <div className="flex items-center gap-2 bg-emerald-950/80 border border-emerald-700/50 px-4 py-2 rounded-full text-emerald-100 text-center">
            <ShieldCheck className="w-4 h-4 text-[#eab308] shrink-0" />
            <span className="font-medium">
              Portfolio Demo — Fictional School Website Concept
            </span>
          </div>

          <p className="flex items-center gap-1 text-center md:text-right text-emerald-300/70">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            <span>for Web Design Portfolio</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
