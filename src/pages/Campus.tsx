import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { facilities } from '../data/schoolData';
import { ShieldCheck, Bus, Tv } from 'lucide-react';

interface CampusProps {
  onOpenEnquiry: () => void;
}

export const Campus: React.FC<CampusProps> = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Academic', 'Technology', 'Sports', 'Culture', 'Safety'];

  const filteredFacilities = selectedCategory === 'All'
    ? facilities
    : facilities.filter(f => f.category === selectedCategory);

  return (
    <div className="space-y-16 pb-16 font-sans">
      
      {/* HERO */}
      <section className="bg-[#124032] text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-block bg-[#eab308] text-[#124032] font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
            Saravanampatti Campus
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading">
            A Campus Built for Discovery
          </h1>
          <p className="text-emerald-100 max-w-2xl mx-auto text-base sm:text-lg">
            Spacious, green, and secure infrastructure designed to inspire academic curiosity, physical fitness, and artistic expression.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER BUTTONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Facilities Tour"
          title="Explore Our Campus Facilities"
          subtitle="Filter through our smart classrooms, science labs, athletic fields, and safety infrastructure."
        />

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#124032] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FACILITIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFacilities.map((facility) => (
            <div key={facility.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-[#124032] text-[#eab308] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    {facility.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 font-heading mb-2">{facility.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{facility.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRANSPORT & SECURITY HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="bg-emerald-50 text-[#124032] font-bold text-xs uppercase px-3 py-1 rounded-full border border-emerald-100">
                Safety First
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#124032] font-heading">
                Comprehensive Safety & Transport Fleet
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Parent peace of mind is paramount. Our school bus network covers Saravanampatti, Ganapathy, Peelamedu, Kalapatti, and central Coimbatore corridors.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-800 font-medium">
                  <Bus className="w-5 h-5 text-[#2e7d5e] shrink-0 mt-0.5" />
                  <span>GPS-enabled school buses with real-time location alerts and speed governors.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-800 font-medium">
                  <ShieldCheck className="w-5 h-5 text-[#2e7d5e] shrink-0 mt-0.5" />
                  <span>24/7 CCTV surveillance across all entry points, stairwells, and main assembly grounds.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-800 font-medium">
                  <Tv className="w-5 h-5 text-[#2e7d5e] shrink-0 mt-0.5" />
                  <span>Trained female attendants on all junior buses and restroom facilities.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80"
                alt="Greenfield Transport Buses"
                className="w-full h-80 rounded-2xl object-cover shadow-md border-2 border-emerald-100"
              />
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-[#124032] text-white rounded-3xl p-10 space-y-4">
          <h2 className="text-2xl font-bold font-heading">Would You Like a Guided Campus Tour?</h2>
          <p className="text-emerald-100 text-sm max-w-lg mx-auto">
            Book a walk-through visit with our counselor to experience our smart classrooms and sports complex in person.
          </p>
          <button
            onClick={onOpenEnquiry}
            className="bg-[#eab308] text-[#124032] font-bold px-6 py-3 rounded-xl hover:bg-[#d9a207] text-sm shadow-md transition-all cursor-pointer inline-block"
          >
            Plan Campus Visit
          </button>
        </div>
      </section>

    </div>
  );
};
