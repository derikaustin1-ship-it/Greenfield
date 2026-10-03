import React, { useState } from 'react';
import { schoolInfo } from '../data/schoolData';
import { MapPin, Phone, Clock, Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });

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
            Contact Admissions & Office
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading">
            Get in Touch with Greenfield
          </h1>
          <p className="text-emerald-100 max-w-2xl mx-auto text-base sm:text-lg">
            We are here to assist with your questions regarding admissions, school campus tours, transport, and curriculum.
          </p>
        </div>
      </section>

      {/* CONTACT INFO CARDS & FORM GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT COLUMN: CONTACT DETAILS CARDS */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#124032] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base font-heading mb-1">School Address</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Greenfield Matriculation School <br />
                  Saravanampatti, Coimbatore, <br />
                  Tamil Nadu 641035, India
                </p>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#124032] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base font-heading mb-1">Phone & Email</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Phone: <a href={`tel:${schoolInfo.phone}`} className="font-semibold text-[#124032] hover:underline">{schoolInfo.phone}</a> <br />
                  Email: <a href={`mailto:${schoolInfo.email}`} className="font-semibold text-[#124032] hover:underline">{schoolInfo.email}</a>
                </p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#124032] flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base font-heading mb-1">Admissions Office Hours</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Monday – Friday: {schoolInfo.officeHours.weekdays} <br />
                  Saturday: {schoolInfo.officeHours.saturday} <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Interactive Map Visual Placeholder */}
            <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-xs">
              <div className="bg-emerald-950/5 rounded-xl h-52 flex flex-col items-center justify-center p-6 text-center border border-dashed border-emerald-900/20 relative overflow-hidden">
                <div className="w-10 h-10 rounded-full bg-[#124032] text-[#eab308] flex items-center justify-center mb-2 shadow-md">
                  <MapPin className="w-5 h-5 animate-bounce" />
                </div>
                <h4 className="font-bold text-gray-900 text-sm font-heading">Saravanampatti Campus Map</h4>
                <p className="text-xs text-gray-500 mt-1 max-w-xs">Located near IT Park Corridor, Saravanampatti Main Road, Coimbatore.</p>
                <span className="mt-3 text-[10px] font-mono text-[#124032] bg-white px-2.5 py-1 rounded-md border border-gray-200">
                  Interactive Map Placeholder
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-extrabold text-[#124032] font-heading mb-2">Send Us a Message</h2>
              <p className="text-xs sm:text-sm text-gray-600 mb-6">
                Have a question or request? Fill out the form and our staff will respond promptly.
              </p>

              {formSubmitted ? (
                <div className="text-center py-10 px-4 bg-[#faf9f5] rounded-2xl border border-emerald-200">
                  <div className="w-14 h-14 bg-emerald-100 text-[#124032] rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4">
                    Thank you <strong className="text-gray-900">{formData.name}</strong>. Your message regarding <em>"{formData.subject}"</em> has been received.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-5 py-2.5 bg-[#124032] text-white font-bold rounded-xl text-xs hover:bg-[#1b5e4a] cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Meena Sundaram"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#124032] outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="meena@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#124032] outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#124032] outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Subject *</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#124032] outline-hidden"
                      >
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Admissions Inquiry">Admissions Inquiry</option>
                        <option value="Campus Tour Booking">Campus Tour Booking</option>
                        <option value="Bus Transport Route">Bus Transport Route</option>
                        <option value="Fee Structure Query">Fee Structure Query</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Your Message *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Type your message or enquiry here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#124032] outline-hidden resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#eab308] hover:bg-[#d9a207] text-[#124032] font-extrabold rounded-xl shadow-md transition-all text-base flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
