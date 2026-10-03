import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, CheckCircle2, Calendar, Sparkles, MapPin } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { StatCard, FeatureCard, TestimonialCard } from '../components/Cards';
import {
  quickStats,
  whyChooseUs,
  academicStages,
  facilities,
  studentLifeActivities,
  achievementsList,
  parentTestimonials,
  newsUpdates,
} from '../data/schoolData';

interface HomeProps {
  onOpenEnquiry: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="space-y-16 lg:space-y-24 pb-12 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#faf9f5] pt-6 pb-12 lg:pt-10 lg:pb-16 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-100/90 border border-emerald-200/80 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#124032]">
              <Sparkles className="w-4 h-4 text-[#eab308]" />
              <span>Pre-Primary to Grade 12 • Co-Educational • Day School</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#124032] tracking-tight font-heading leading-[1.15]">
              Growing Minds. <br />
              <span className="text-[#2e7d5e]">Building Futures.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
              At Greenfield Matriculation School, we create a supportive learning environment where every child is encouraged to explore, learn, grow and discover their true potential.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenEnquiry}
                className="bg-[#eab308] hover:bg-[#d9a207] text-[#124032] font-extrabold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-base flex items-center gap-2 cursor-pointer"
              >
                <span>Admissions Enquiry</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <Link
                to="/about"
                className="bg-white hover:bg-gray-50 text-[#124032] font-bold px-6 py-3.5 rounded-xl border border-gray-300 shadow-2xs hover:shadow-xs transition-all text-base flex items-center gap-2"
              >
                <span>Explore Our School</span>
              </Link>
            </div>

            {/* Key Quick Bullet Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-gray-200/80 text-xs sm:text-sm text-gray-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2e7d5e] shrink-0" />
                <span>Matriculation Board</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2e7d5e] shrink-0" />
                <span>Smart Classrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2e7d5e] shrink-0" />
                <span>Saravanampatti, Cbe</span>
              </div>
            </div>

          </div>

          {/* Right Column: High Quality School Image Banner */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gray-100 group">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80"
                alt="Greenfield Matriculation School Students & Classroom"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="bg-[#eab308] text-[#124032] font-bold text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-md mb-2 inline-block">
                    Coimbatore Campus
                  </span>
                  <h3 className="text-lg font-bold text-white font-heading">Empowering Every Student</h3>
                  <p className="text-xs text-gray-200">Safe, vibrant & caring learning environment</p>
                </div>
              </div>
            </div>

            {/* Decorative Accent Background Box */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#124032]/10 rounded-2xl -z-10" />
          </div>

        </div>
      </section>

      {/* 2. QUICK TRUST BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, idx) => (
              <StatCard key={idx} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. WELCOME SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-emerald-100">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                  alt="Principal and Students Greenfield School"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#124032] text-white p-4 rounded-xl shadow-md hidden sm:block max-w-xs">
                <p className="text-xs font-semibold text-[#eab308]">Principal's Vision</p>
                <p className="text-xs text-emerald-100 font-italic mt-0.5">"Education is not just about marks, but building character, confidence & empathy."</p>
              </div>
            </div>

            {/* Right Message Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block px-3 py-1 bg-emerald-50 text-[#124032] rounded-full text-xs font-bold uppercase tracking-wider">
                Welcome to Greenfield
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#124032] font-heading leading-snug">
                A Place to Learn, Grow and Belong
              </h2>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                On behalf of the entire Greenfield faculty, I warmly welcome you to our school family. At Greenfield Matriculation School, Saravanampatti, we believe that childhood is a precious journey of discovery.
              </p>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Our curriculum balances strong academic fundamentals with character development, creative arts, and physical well-being. We give every child individual attention so they can build confidence, curiosity, responsibility, and deep respect for values.
              </p>

              {/* Core Attributes */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  'Strong Academic Foundation',
                  'Individual Mentorship',
                  'Character & Ethics',
                  'Confidence & Leadership'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800">
                    <span className="w-2 h-2 rounded-full bg-[#eab308]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-[#124032] text-white font-bold px-5 py-3 rounded-xl hover:bg-[#1b5e4a] transition-all text-sm shadow-xs"
                >
                  <span>Discover Our Approach</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY GREENFIELD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Why Families Choose Greenfield"
          title="Nurturing Excellence in Every Child"
          subtitle="Discover what makes Greenfield Matriculation School the trusted choice for parents across Coimbatore."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </section>

      {/* 5. ACADEMICS STAGES */}
      <section className="bg-emerald-950/5 py-16 px-4 sm:px-6 rounded-3xl max-w-7xl mx-auto border border-emerald-900/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Academic Stages"
            title="Learning That Builds Confidence"
            subtitle="From foundational play-based learning to rigorous state board preparation, explore our progressive academic journey."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {academicStages.map((stage) => (
              <div key={stage.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={stage.image}
                      alt={stage.stage}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-[#eab308] text-[#124032] font-bold text-xs px-3 py-1 rounded-full shadow-xs">
                      {stage.grades}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-[#2e7d5e] uppercase tracking-wider">
                      {stage.tag}
                    </span>
                    <h3 className="text-xl font-bold text-[#124032] mt-1 mb-2 font-heading">
                      {stage.stage}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {stage.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {stage.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2e7d5e] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/academics"
                    className="w-full py-2.5 bg-gray-50 hover:bg-[#124032] hover:text-white text-[#124032] font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 border border-gray-200"
                  >
                    <span>View Curriculum Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/academics"
              className="inline-flex items-center gap-2 bg-[#124032] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#1b5e4a] transition-all text-sm shadow-md"
            >
              <span>Explore Full Academics Program</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CAMPUS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Campus & Infrastructure"
          title="A Campus Designed for Young Minds"
          subtitle="Explore our modern, safe, and student-friendly facilities in Saravanampatti."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.slice(0, 4).map((facility) => (
            <div key={facility.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-md transition-all group">
              <div className="h-44 overflow-hidden relative">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-0.5 rounded-md">
                  {facility.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-gray-900 font-heading mb-1">{facility.name}</h3>
                <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/campus"
            className="inline-flex items-center gap-2 bg-white text-[#124032] font-bold px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 transition-all text-sm shadow-2xs"
          >
            <span>Explore Our Full Campus Facilities</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 7. STUDENT LIFE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Student Life"
          title="Learning Happens Beyond the Classroom"
          subtitle="From inter-school sports leagues to science clubs and cultural fests, discover our vibrant co-curricular activities."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentLifeActivities.map((act, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden relative">
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">{act.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{act.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/student-life"
            className="inline-flex items-center gap-2 bg-[#124032] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#1b5e4a] transition-all text-sm shadow-xs"
          >
            <span>View All Clubs & Activities</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 8. ACHIEVEMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Student Achievements"
          title="Celebrating Every Achievement"
          subtitle="A look at our generic fictional milestones in academic examinations, district sports, and creative arts."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsList.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-[#124032] bg-emerald-50 px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                  <span className="text-xs font-semibold text-[#eab308] bg-yellow-50 px-2.5 py-1 rounded-full border border-yellow-200/60">
                    {item.metric}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 font-heading mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 mb-3 font-mono">{item.year}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. PARENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Parent Testimonials"
          title="What Parents Say"
          subtitle="Read real feedback from parents whose children attend Greenfield Matriculation School."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {parentTestimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>
      </section>

      {/* 10. ADMISSIONS CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#124032] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2e7d5e]/20 rounded-full blur-3xl -z-0 pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-block bg-[#eab308] text-[#124032] font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
              Admissions Open 2026-2027
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
              Take the First Step Toward Your Child's Future
            </h2>

            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Interested in joining Greenfield Matriculation School? Our admissions counselors are ready to answer your questions, walk you through our campus, and assist with registration.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenEnquiry}
                className="bg-[#eab308] hover:bg-[#d9a207] text-[#124032] font-extrabold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-base flex items-center gap-2 cursor-pointer"
              >
                <span>Admission Enquiry</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-xl border border-white/20 transition-all text-base"
              >
                Contact School Office
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. NEWS & UPDATES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="School Updates"
          title="What's Happening at Greenfield"
          subtitle="Stay updated with our recent campus events, sports meets, and academic activities."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsUpdates.map((news) => (
            <div key={news.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#124032] text-[11px] font-bold px-2.5 py-0.5 rounded-md">
                    {news.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-500 flex items-center gap-1 mb-2 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-[#eab308]" />
                    <span>{news.date}</span>
                  </p>
                  <h3 className="text-base font-bold text-gray-900 font-heading mb-2 group-hover:text-[#124032] transition-colors leading-snug">
                    {news.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {news.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenEnquiry}
                  className="text-xs font-bold text-[#124032] hover:text-[#1b5e4a] flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Event Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. FINAL VISIT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-gray-200/80 p-8 sm:p-10 shadow-sm text-center max-w-4xl mx-auto">
          <div className="w-14 h-14 bg-emerald-50 text-[#124032] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-7 h-7" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#124032] font-heading mb-2">
            Come Visit Greenfield
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-xl mx-auto">
            See our classrooms, meet our educators and experience our warm learning environment in Saravanampatti, Coimbatore.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenEnquiry}
              className="bg-[#124032] hover:bg-[#1b5e4a] text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm cursor-pointer"
            >
              Plan a Visit
            </button>
            <Link
              to="/contact"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-6 py-3.5 rounded-xl transition-all text-sm"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
