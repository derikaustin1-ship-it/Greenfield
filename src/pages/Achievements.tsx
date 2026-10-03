import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { achievementsList } from '../data/schoolData';

interface AchievementsProps {
  onOpenEnquiry: () => void;
}

export const Achievements: React.FC<AchievementsProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="space-y-16 pb-16 font-sans">
      
      {/* HERO */}
      <section className="bg-[#124032] text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-block bg-[#eab308] text-[#124032] font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
            Excellence & Recognition
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading">
            Celebrating Student Achievements
          </h1>
          <p className="text-emerald-100 max-w-2xl mx-auto text-base sm:text-lg">
            Highlighting generic fictional milestones in Matriculation state board examinations, athletic tournaments, and regional competitions.
          </p>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#124032] font-heading">100%</p>
              <p className="text-xs text-gray-600 font-semibold">Board Exam Pass Rate</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#124032] font-heading">45%+</p>
              <p className="text-xs text-gray-600 font-semibold">Distinction Scores</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#124032] font-heading">30+</p>
              <p className="text-xs text-gray-600 font-semibold">District Sports Trophies</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#124032] font-heading">15+</p>
              <p className="text-xs text-gray-600 font-semibold">Science & Innovation Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED ACHIEVEMENTS CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Milestones"
          title="Recent Awards & Honors"
          subtitle="Explore notable achievements across academics, athletic leagues, and cultural fests."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsList.map((item, idx) => (
            <div key={idx} className="bg-white p-7 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#124032] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    {item.category}
                  </span>
                  <span className="text-xs font-bold text-[#eab308] bg-yellow-50 px-2.5 py-1 rounded-full border border-yellow-200">
                    {item.metric}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-heading mb-1">{item.title}</h3>
                <p className="text-xs text-gray-400 font-mono mb-3">{item.year}</p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-[#124032] text-white rounded-3xl p-10 space-y-4">
          <h2 className="text-2xl font-bold font-heading">Help Your Child Achieve Their Highest Potential</h2>
          <p className="text-emerald-100 text-sm max-w-lg mx-auto">Discover how Greenfield's supportive teachers empower every student to excel.</p>
          <button
            onClick={onOpenEnquiry}
            className="bg-[#eab308] text-[#124032] font-bold px-6 py-3 rounded-xl hover:bg-[#d9a207] text-sm shadow-md transition-all cursor-pointer inline-block"
          >
            Admissions Enquiry
          </button>
        </div>
      </section>

    </div>
  );
};
