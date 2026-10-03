import React from 'react';
import { Award, Users, GraduationCap, Activity, BookOpen, HeartHandshake, Compass, ShieldCheck, Sparkles, Quote } from 'lucide-react';

// Map icon string names to Lucide Icon components safely
export const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Award': return Award;
    case 'Users': return Users;
    case 'GraduationCap': return GraduationCap;
    case 'Activity': return Activity;
    case 'BookOpen': return BookOpen;
    case 'HeartHandshake': return HeartHandshake;
    case 'Compass': return Compass;
    case 'ShieldCheck': return ShieldCheck;
    case 'Sparkles': return Sparkles;
    default: return Sparkles;
  }
};

// QUICK TRUST STAT CARD
interface StatCardProps {
  value: string;
  label: string;
  subtext: string;
  icon: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, subtext, icon }) => {
  const IconComponent = getIconComponent(icon);
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-5 group">
      <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#124032] flex items-center justify-center shrink-0 group-hover:bg-[#124032] group-hover:text-white transition-colors duration-300 shadow-2xs">
        <IconComponent className="w-7 h-7" />
      </div>
      <div>
        <div className="text-2xl sm:text-3xl font-black text-[#124032] font-heading tracking-tight">
          {value}
        </div>
        <div className="text-sm font-bold text-gray-800 leading-snug">
          {label}
        </div>
        <div className="text-xs text-gray-500 mt-0.5">
          {subtext}
        </div>
      </div>
    </div>
  );
};

// FEATURE CARD (Why Choose Us)
interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  highlight: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, highlight }) => {
  const IconComponent = getIconComponent(icon);
  return (
    <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#124032] flex items-center justify-center group-hover:bg-[#124032] group-hover:text-[#eab308] transition-colors duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-bold text-[#124032] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
            {highlight}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#124032] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

// TESTIMONIAL CARD
interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  location: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, location }) => {
  return (
    <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative">
      <Quote className="w-8 h-8 text-emerald-200 absolute top-6 right-6" />
      <div className="relative z-10">
        <div className="flex items-center gap-1 text-[#eab308] mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-base">★</span>
          ))}
        </div>
        <p className="text-gray-700 text-sm italic leading-relaxed mb-6">
          "{quote}"
        </p>
      </div>
      <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#124032] text-white font-bold text-sm flex items-center justify-center">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="text-sm font-bold text-gray-900">{name}</h4>
          <p className="text-xs text-gray-500">{role} • {location}</p>
        </div>
      </div>
    </div>
  );
};
