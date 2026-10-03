import React, { useState } from 'react';
import { X, CheckCircle, Send, Phone, Mail, User, BookOpen } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

interface QuickEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickEnquiryModal: React.FC<QuickEnquiryModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    grade: 'Grade 1',
    phone: '',
    email: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      parentName: '',
      studentName: '',
      grade: 'Grade 1',
      phone: '',
      email: '',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-[#124032] text-white p-5 flex items-center justify-between relative">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#eab308] bg-[#124032]/80 px-2.5 py-0.5 rounded-full border border-[#eab308]/30">
              Admissions 2026-2027
            </span>
            <h3 id="modal-title" className="text-xl font-bold mt-1 text-white">Admissions Enquiry</h3>
            <p className="text-xs text-emerald-100/90 mt-0.5">Greenfield Matriculation School • Saravanampatti</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-8 px-4">
              <div className="w-16 h-16 bg-emerald-100 text-[#124032] rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Enquiry Submitted!</h4>
              <p className="text-sm text-gray-600 mb-4 max-w-md mx-auto">
                Thank you <strong className="text-gray-800">{formData.parentName || 'Parent'}</strong> for your interest in Greenfield Matriculation School for <strong className="text-gray-800">{formData.studentName || 'your child'}</strong> ({formData.grade}).
              </p>
              <div className="bg-[#faf9f5] border border-emerald-200/60 rounded-xl p-4 text-xs text-gray-600 text-left mb-6 space-y-1.5">
                <p className="font-semibold text-[#124032]">Demo Note:</p>
                <p>This is a portfolio website demo. In a live deployment, your enquiry details will be sent directly to the admissions desk at <span className="font-medium text-gray-800">{schoolInfo.email}</span>.</p>
              </div>
              <button
                onClick={handleReset}
                className="w-full py-3 bg-[#124032] text-white rounded-xl font-semibold hover:bg-[#1b5e4a] transition-all shadow-md cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Parent / Guardian Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#124032] focus:ring-2 focus:ring-[#124032]/20 transition-all outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Student Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Ramesh"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#124032] focus:ring-2 focus:ring-[#124032]/20 transition-all outline-hidden"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Grade Applying For <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <BookOpen className="w-4 h-4 text-gray-400 absolute left-3 top-3 pointer-events-none" />
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#124032] focus:ring-2 focus:ring-[#124032]/20 transition-all outline-hidden appearance-none"
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
                      <option value="Grade 11 (Science Stream)">Grade 11 (Science)</option>
                      <option value="Grade 11 (Commerce Stream)">Grade 11 (Commerce)</option>
                      <option value="Grade 12">Grade 12</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#124032] focus:ring-2 focus:ring-[#124032]/20 transition-all outline-hidden"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="parent@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#124032] focus:ring-2 focus:ring-[#124032]/20 transition-all outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Questions or Comments (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us any specific requirements, transport queries, etc."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#124032] focus:ring-2 focus:ring-[#124032]/20 transition-all outline-hidden resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#eab308] hover:bg-[#d9a207] text-[#124032] font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-base"
                >
                  <Send className="w-4 h-4" />
                  Submit Admission Enquiry
                </button>
                <p className="text-[11px] text-gray-400 text-center mt-2">
                  🔒 We respect your privacy. No spam. Demo contact details only.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
