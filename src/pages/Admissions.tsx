import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { admissionsSteps, requiredDocs, ageGuidelines, faqsList } from '../data/schoolData';
import { CheckCircle2, ChevronDown, ChevronUp, FileText, Calendar, Send } from 'lucide-react';

export const Admissions: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    grade: 'Grade 1',
    phone: '',
    email: '',
    message: ''
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16 font-sans">
      
      {/* HERO */}
      <section className="bg-[#124032] text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-block bg-[#eab308] text-[#124032] font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
            Admissions 2026-2027
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading">
            Join the Greenfield Family
          </h1>
          <p className="text-emerald-100 max-w-2xl mx-auto text-base sm:text-lg">
            We welcome admissions from Pre-Primary through Grade 12. Learn about our simple, transparent admission steps below.
          </p>
        </div>
      </section>

      {/* ADMISSION PROCESS STEPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Simple 5-Step Process"
          title="How to Apply for Admission"
          subtitle="Our admissions desk in Saravanampatti ensures a smooth and welcoming onboarding process for parents."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {admissionsSteps.map((stepItem, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col justify-between relative">
              <div>
                <span className="text-xs font-bold text-[#eab308] bg-[#124032] px-3 py-1 rounded-full inline-block mb-3">
                  {stepItem.step}
                </span>
                <h3 className="text-base font-bold text-gray-900 font-heading mb-2">{stepItem.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{stepItem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE ADMISSION ENQUIRY FORM */}
      <section id="enquiry-form" className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-md">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <span className="bg-emerald-50 text-[#124032] font-bold text-xs uppercase px-3 py-1 rounded-full border border-emerald-100">
              Online Enquiry
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#124032] font-heading">
              Submit Admission Enquiry
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Fill out the form below and our admissions counselor will call you within 24 business hours.
            </p>
          </div>

          {formSubmitted ? (
            <div className="text-center py-10 px-4 bg-[#faf9f5] rounded-2xl border border-emerald-200">
              <div className="w-16 h-16 bg-emerald-100 text-[#124032] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enquiry Received Successfully!</h3>
              <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto">
                Thank you <strong className="text-gray-900">{formData.parentName}</strong>. We have registered your inquiry for <strong className="text-gray-900">{formData.studentName}</strong> for <strong className="text-gray-900">{formData.grade}</strong>.
              </p>
              <div className="bg-white border border-gray-200 p-4 rounded-xl text-xs text-gray-500 text-left mb-6 space-y-1">
                <p className="font-semibold text-gray-800">Portfolio Demo Notice:</p>
                <p>This is a fictional school concept demonstration website. No personal data has been transmitted across third-party servers.</p>
              </div>
              <button
                onClick={() => setFormSubmitted(false)}
                className="px-6 py-3 bg-[#124032] text-white font-bold rounded-xl hover:bg-[#1b5e4a] text-sm cursor-pointer"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Parent / Guardian Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Ramakrishnan"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#124032] focus:ring-2 focus:ring-[#124032]/20 transition-all outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Student Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Diya Anand"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#124032] focus:ring-2 focus:ring-[#124032]/20 transition-all outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Grade Applying For <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#124032] focus:ring-2 focus:ring-[#124032]/20 transition-all outline-hidden"
                  >
                    <option value="Pre-KG / Playgroup">Pre-KG / Playgroup</option>
                    <option value="LKG">LKG (Lower KG)</option>
                    <option value="UKG">UKG (Upper KG)</option>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4</option>
                    <option value="Grade 5">Grade 5</option>
                    <option value="Grade 6">Grade 6</option>
                    <option value="Grade 7">Grade 7</option>
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                    <option value="Grade 11 (Science)">Grade 11 (Science Stream)</option>
                    <option value="Grade 11 (Commerce)">Grade 11 (Commerce Stream)</option>
                    <option value="Grade 12">Grade 12</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#124032] focus:ring-2 focus:ring-[#124032]/20 transition-all outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="parent@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#124032] focus:ring-2 focus:ring-[#124032]/20 transition-all outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Message / Specific Queries (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Ask about school bus routes, fee structure, or hostel facilities..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#124032] focus:ring-2 focus:ring-[#124032]/20 transition-all outline-hidden resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#eab308] hover:bg-[#d9a207] text-[#124032] font-extrabold rounded-xl shadow-md hover:shadow-lg transition-all text-base flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-5 h-5" />
                <span>Submit Form</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* AGE GUIDELINES & REQUIRED DOCUMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Age Guidelines Table */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#124032] font-heading flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#eab308]" />
              <span>Age Guidelines (2026-2027)</span>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-gray-700 font-semibold">
                    <th className="p-3 rounded-l-lg">Grade</th>
                    <th className="p-3">Age Eligibility</th>
                    <th className="p-3 rounded-r-lg">Cut-off Criteria</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {ageGuidelines.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/60">
                      <td className="p-3 font-semibold text-gray-900">{row.grade}</td>
                      <td className="p-3 text-gray-700">{row.age}</td>
                      <td className="p-3 text-gray-500 text-xs">{row.cutoff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Required Documents */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#124032] font-heading flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#eab308]" />
              <span>Required Documents</span>
            </h3>
            <ul className="space-y-2.5">
              {requiredDocs.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#2e7d5e] shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Parents FAQ"
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about curriculum, school timings, transport, and safety."
        />

        <div className="space-y-3">
          {faqsList.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left font-bold text-gray-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <span>{faq.question}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-[#124032] shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                )}
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
