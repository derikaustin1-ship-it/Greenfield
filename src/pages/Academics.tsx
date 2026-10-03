import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { academicStages } from '../data/schoolData';
import { BookOpen, CheckCircle2, Cpu, Users, ArrowRight } from 'lucide-react';

interface AcademicsProps {
  onOpenEnquiry: () => void;
}

export const Academics: React.FC<AcademicsProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="space-y-16 pb-16 font-sans">
      
      {/* HERO */}
      <section className="bg-[#124032] text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-block bg-[#eab308] text-[#124032] font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
            Matriculation Curriculum
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading">
            Academic Excellence & Growth
          </h1>
          <p className="text-emerald-100 max-w-2xl mx-auto text-base sm:text-lg">
            Empowering students from Pre-Primary to Grade 12 with conceptual clarity, exam preparation, and practical life skills.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY & METHODOLOGY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2e7d5e] bg-emerald-50 px-3 py-1 rounded-full">
              Learning Approach
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#124032] font-heading">
              Our Educational Philosophy
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              We follow the Tamil Nadu Matriculation Curriculum framework, augmented with interactive smart classroom technologies, inquiry-based STEM activities, and regular formative feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#124032] flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-base">Conceptual Clarity</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Moving beyond rote memorization to ensure deep understanding of core scientific, mathematical and linguistic principles.</p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#124032] flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-base">Digital Integration</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Smart boards, computer laboratories, and visual animations bring complex textbook concepts to life.</p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#124032] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-base">Individual Guidance</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Small class sizes enable teachers to identify individual strengths and provide personalized learning support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED ACADEMIC STAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Curriculum Structure"
          title="Educational Stages at Greenfield"
          subtitle="Explore the tailored learning journey designed for each age group."
        />

        <div className="space-y-8">
          {academicStages.map((stage, idx) => (
            <div key={stage.id} className="bg-white rounded-3xl border border-gray-200/80 p-8 shadow-xs overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={stage.image}
                    alt={stage.stage}
                    className="w-full h-64 sm:h-80 rounded-2xl object-cover shadow-md"
                  />
                </div>

                <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="bg-[#124032] text-[#eab308] font-bold text-xs px-3 py-1 rounded-full">
                      {stage.grades}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {stage.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#124032] font-heading">{stage.stage}</h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{stage.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {stage.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                        <CheckCircle2 className="w-4 h-4 text-[#2e7d5e] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SENIOR SECONDARY STREAMS (GRADES 11 & 12) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#124032] text-white rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="bg-[#eab308] text-[#124032] font-bold text-xs uppercase px-3 py-1 rounded-full">
              Grades 11 & 12
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading">Senior Secondary Streams</h2>
            <p className="text-emerald-100 text-sm">Specialized State Board Matriculation streams to prepare for higher education entrance exams.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            <div className="bg-white/10 backdrop-blur-xs p-6 rounded-2xl border border-white/20 space-y-3">
              <h3 className="text-xl font-bold text-[#eab308] font-heading">Science Stream</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">Designed for students aiming for Engineering, Medical, Biotechnology, and Pure Sciences.</p>
              <div className="space-y-1.5 text-xs text-white">
                <p>• Group 1: Physics, Chemistry, Mathematics, Biology</p>
                <p>• Group 2: Physics, Chemistry, Mathematics, Computer Science</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs p-6 rounded-2xl border border-white/20 space-y-3">
              <h3 className="text-xl font-bold text-[#eab308] font-heading">Commerce & Humanities Stream</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">Designed for students pursuing Chartered Accountancy (CA), Business Administration, Law & Finance.</p>
              <div className="space-y-1.5 text-xs text-white">
                <p>• Group 1: Accountancy, Commerce, Economics, Business Maths</p>
                <p>• Group 2: Accountancy, Commerce, Economics, Computer Applications</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ASSESSMENT & FUTURE READINESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-gray-200/80 space-y-3">
            <h3 className="text-xl font-bold text-[#124032] font-heading">Continuous Assessment & Feedback</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We evaluate student growth through periodic unit tests, quarterly assessments, class presentations, and practical lab assignments. Detailed progress reports are shared during regular Parent-Teacher Meetings.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200/80 space-y-3">
            <h3 className="text-xl font-bold text-[#124032] font-heading">Career Counseling & Skill Building</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Senior secondary students receive expert career guidance workshops, public speaking seminars, and NEET/JEE entrance exam strategy sessions conducted by visiting educational consultants.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-white rounded-3xl border border-gray-200 p-10 space-y-4 shadow-sm">
          <h2 className="text-2xl font-bold text-[#124032] font-heading">Have Questions About Admissions & Syllabus?</h2>
          <p className="text-gray-600 text-sm max-w-lg mx-auto">Our academic coordinators are available to discuss subject streams and grade eligibility.</p>
          <button
            onClick={onOpenEnquiry}
            className="bg-[#eab308] text-[#124032] font-extrabold px-6 py-3 rounded-xl shadow-md hover:bg-[#d9a207] text-sm transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Enquire for Academics</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
