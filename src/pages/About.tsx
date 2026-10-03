import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { coreValues } from '../data/schoolData';
import { Target, Eye } from 'lucide-react';

interface AboutProps {
  onOpenEnquiry: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="space-y-16 pb-16 font-sans">
      
      {/* HERO BANNER */}
      <section className="bg-[#124032] text-white py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-block bg-[#eab308] text-[#124032] font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
            About Greenfield
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading">
            Nurturing Young Minds Since 2004
          </h1>
          <p className="text-emerald-100 max-w-2xl mx-auto text-base sm:text-lg">
            Greenfield Matriculation School is a co-educational day school in Saravanampatti, Coimbatore, built on principles of academic excellence, care, and character.
          </p>
        </div>
      </section>

      {/* OUR STORY & FOUNDATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3 py-1 bg-emerald-50 text-[#124032] rounded-full text-xs font-bold uppercase tracking-wider">
              Our Journey
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#124032] font-heading leading-tight">
              Rooted in Coimbatore, Focused on the Future
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Established in 2004 in Saravanampatti, Greenfield Matriculation School was founded with a singular vision: to create a warm, approachable educational space where children receive top-tier academic training without losing their natural curiosity and joy.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Over the past two decades, Greenfield has grown into a vibrant learning community housing over 1,500 students from Pre-Primary through Grade 12. We take immense pride in our state board results, sports honors, and above all, the respectful and confident citizens our alumni become.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <p className="text-2xl font-bold text-[#124032]">20+ Years</p>
                <p className="text-xs text-gray-500">Educational Heritage</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <p className="text-2xl font-bold text-[#124032]">100% Pass</p>
                <p className="text-xs text-gray-500">Board Exam Record</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80"
                alt="Greenfield Campus Entrance"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-white py-16 px-4 sm:px-6 border-y border-gray-200/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* VISION CARD */}
          <div className="bg-[#faf9f5] p-8 rounded-3xl border border-emerald-900/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#124032] text-[#eab308] flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#124032] font-heading">Our Vision</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              To nurture confident, compassionate, and ethically grounded lifelong learners who positively impact their families, communities, and society.
            </p>
          </div>

          {/* MISSION CARD */}
          <div className="bg-[#faf9f5] p-8 rounded-3xl border border-emerald-900/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#124032] text-[#eab308] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#124032] font-heading">Our Mission</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              To provide a holistic, student-centric Matriculation education combining academic rigor, critical thinking, sports, and cultural enrichment in a safe, supportive campus environment.
            </p>
          </div>

        </div>
      </section>

      {/* OUR VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Core Values"
          title="The Pillars of Greenfield Education"
          subtitle="Six core values guide our everyday interaction, teaching methodology, and school policies."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, idx) => (
            <div key={idx} className="bg-white p-7 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#124032] font-bold flex items-center justify-center mb-4">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-heading mb-2">{value.name}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRINCIPAL'S DETAILED MESSAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-gray-200/80 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 text-center">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                alt="Principal Greenfield School"
                className="w-48 h-48 sm:w-60 sm:h-60 rounded-full object-cover mx-auto shadow-md border-4 border-[#124032]"
              />
              <h3 className="text-xl font-bold text-[#124032] mt-4 font-heading">Dr. S. Meenakshi</h3>
              <p className="text-xs font-semibold text-[#2e7d5e]">Principal, Greenfield School</p>
              <p className="text-xs text-gray-500 mt-0.5">M.Sc., M.Ed., Ph.D.</p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#eab308] bg-[#124032] px-3 py-1 rounded-full">
                Principal's Message
              </span>
              <h2 className="text-2xl font-bold text-[#124032] font-heading">
                "Building Confident Learners for Life"
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Dear Parents & Students, <br /><br />
                Welcome to Greenfield Matriculation School. Choosing the right school for your child is one of the most significant decisions you will make as a parent. At Greenfield, we treat that trust with utmost reverence.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Our approach blends academic discipline with emotional safety. We encourage children to ask questions, solve problems collaboratively, and embrace challenges with optimism. Whether in a science experiment, a sports match, or a musical recital, every moment at Greenfield is an opportunity for personal growth.
              </p>
              <div className="pt-4 flex items-center justify-between border-t border-gray-100">
                <button
                  onClick={onOpenEnquiry}
                  className="bg-[#124032] text-white font-bold px-5 py-2.5 rounded-xl hover:bg-[#1b5e4a] text-xs transition-all cursor-pointer"
                >
                  Schedule a Principal Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-[#124032] text-white rounded-3xl p-10 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">Ready to Experience Greenfield?</h2>
          <p className="text-emerald-100 text-sm max-w-xl mx-auto">
            Book a guided campus tour to visit our smart classrooms, science labs, and sports grounds in Saravanampatti.
          </p>
          <button
            onClick={onOpenEnquiry}
            className="bg-[#eab308] text-[#124032] font-bold px-6 py-3 rounded-xl hover:bg-[#d9a207] text-sm shadow-md transition-all cursor-pointer inline-block"
          >
            Schedule Campus Visit
          </button>
        </div>
      </section>

    </div>
  );
};
