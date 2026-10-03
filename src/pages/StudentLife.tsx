import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { studentLifeActivities } from '../data/schoolData';
import { ArrowRight } from 'lucide-react';

interface StudentLifeProps {
  onOpenEnquiry: () => void;
}

export const StudentLife: React.FC<StudentLifeProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="space-y-16 pb-16 font-sans">
      
      {/* HERO */}
      <section className="bg-[#124032] text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-block bg-[#eab308] text-[#124032] font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
            Vibrant Student Life
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading">
            Beyond the Classroom
          </h1>
          <p className="text-emerald-100 max-w-2xl mx-auto text-base sm:text-lg">
            At Greenfield, we believe true education happens when children explore their passions in sports, arts, leadership, and community service.
          </p>
        </div>
      </section>

      {/* CLUBS & ACTIVITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Clubs & Co-Curriculars"
          title="Nurturing Diverse Passions"
          subtitle="Explore the active clubs and student groups operating every afternoon across campus."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentLifeActivities.map((act, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-[#124032] text-[#eab308] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {act.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">{act.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{act.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STUDENT LEADERSHIP & HOUSES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="bg-emerald-50 text-[#124032] font-bold text-xs uppercase px-3 py-1 rounded-full border border-emerald-100">
              Leadership & House System
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#124032] font-heading">
              Four Houses, One Greenfield Spirit
            </h2>
            <p className="text-gray-600 text-sm">
              All students from Grade 1 upwards are grouped into four house teams to foster camaraderie, healthy sporting competition, and leadership:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
              <h4 className="font-bold text-base font-heading">Agni (Fire) House</h4>
              <p className="text-xs text-emerald-800">Symbolizing passion, courage, and enthusiasm in sports and academics.</p>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-950 space-y-1">
              <h4 className="font-bold text-base font-heading">Aakash (Sky) House</h4>
              <p className="text-xs text-blue-800">Symbolizing vision, high aspirations, and academic perseverance.</p>
            </div>

            <div className="p-5 rounded-2xl bg-yellow-50 border border-yellow-200 text-yellow-950 space-y-1">
              <h4 className="font-bold text-base font-heading">Prithvi (Earth) House</h4>
              <p className="text-xs text-yellow-900">Symbolizing stability, grounding ethics, and environmental stewardship.</p>
            </div>

            <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 text-teal-950 space-y-1">
              <h4 className="font-bold text-base font-heading">Jal (Water) House</h4>
              <p className="text-xs text-teal-800">Symbolizing adaptability, fluid creativity, and team unity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-white rounded-3xl border border-gray-200 p-10 space-y-4 shadow-sm">
          <h2 className="text-2xl font-bold text-[#124032] font-heading">Give Your Child an Enriching School Experience</h2>
          <p className="text-gray-600 text-sm max-w-lg mx-auto">Admissions open for the upcoming academic year. Contact our team to learn more.</p>
          <button
            onClick={onOpenEnquiry}
            className="bg-[#124032] text-white font-extrabold px-6 py-3 rounded-xl shadow-md hover:bg-[#1b5e4a] text-sm transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Enquire for Admissions</span>
            <ArrowRight className="w-4 h-4 text-[#eab308]" />
          </button>
        </div>
      </section>

    </div>
  );
};
