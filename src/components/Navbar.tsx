import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, Sparkles } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

interface NavbarProps {
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Campus', path: '/campus' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full font-sans">
      {/* TOP ANNOUNCEMENT & CONTACT BAR */}
      <div className="bg-[#124032] text-white text-xs py-2 px-4 border-b border-emerald-800/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left contact items */}
          <div className="flex flex-wrap items-center gap-4 text-emerald-100">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#eab308]" />
              <a href={`tel:${schoolInfo.phone}`}>{schoolInfo.phone}</a>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#eab308]" />
              <a href={`mailto:${schoolInfo.email}`}>{schoolInfo.email}</a>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-emerald-200">
              <MapPin className="w-3.5 h-3.5 text-[#eab308]" />
              <span>Saravanampatti, Coimbatore</span>
            </span>
          </div>

          {/* Right badge */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-[#eab308] text-[#124032] font-semibold text-[11px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              Portfolio Demo — Fictional School
            </span>
          </div>
        </div>
      </div>

      {/* MAIN DESKTOP & MOBILE STICKY NAVIGATION */}
      <nav className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-2.5' : 'py-4'} border-b border-gray-100`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* BRAND LOGO */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-hidden">
            {/* Custom Emblem SVG: Leaf + Book + Sun */}
            <div className="w-11 h-11 bg-[#124032] rounded-xl flex items-center justify-center p-2 shadow-md group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Sun Element */}
                <circle cx="50" cy="22" r="12" fill="#EAB308" />
                {/* Open Book Pages */}
                <path d="M15 65 C30 55, 48 60, 50 78 C52 60, 70 55, 85 65 L85 40 C70 30, 52 35, 50 48 C48 35, 30 30, 15 40 Z" fill="#FFFFFF" />
                {/* Leaf Accent */}
                <path d="M50 20 C62 30, 60 50, 50 65 C40 50, 38 30, 50 20 Z" fill="#2E7D5E" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#124032] font-heading leading-tight group-hover:text-[#1b5e4a] transition-colors">
                Greenfield
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-gray-600 tracking-wider uppercase">
                Matriculation School
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-[#124032] bg-emerald-50/80 font-semibold border-b-2 border-[#124032]'
                      : 'text-gray-700 hover:text-[#124032] hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* RIGHT ACTION BUTTON (DESKTOP) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="bg-[#eab308] hover:bg-[#d9a207] text-[#124032] font-bold px-5 py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all text-sm flex items-center gap-2 cursor-pointer"
            >
              <span>Enquire Now</span>
            </button>
          </div>

          {/* MOBILE HAMBURGER TOGGLE */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenEnquiry}
              className="bg-[#eab308] text-[#124032] font-bold px-3 py-1.5 rounded-lg text-xs"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* MOBILE SLIDE-OUT DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'text-[#124032] bg-emerald-50 font-bold border-l-4 border-[#124032]'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#124032]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 bg-[#124032] text-white font-bold rounded-xl text-center shadow-md hover:bg-[#1b5e4a] cursor-pointer"
              >
                Admissions Enquiry
              </button>

              <div className="text-xs text-gray-500 space-y-1 pt-2">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#124032]" />
                  <span>{schoolInfo.phone}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#124032]" />
                  <span>{schoolInfo.email}</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
