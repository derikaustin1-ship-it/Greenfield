import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { galleryImages } from '../data/schoolData';
import { LightboxModal } from '../components/LightboxModal';
import { Maximize2 } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Campus', 'Classrooms', 'Sports', 'Events', 'Arts', 'Student Life'];

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <div className="space-y-16 pb-16 font-sans">
      
      {/* HERO */}
      <section className="bg-[#124032] text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-block bg-[#eab308] text-[#124032] font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
            Campus Visuals
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading">
            School Photo Gallery
          </h1>
          <p className="text-emerald-100 max-w-2xl mx-auto text-base sm:text-lg">
            A visual showcase of daily classroom learning, annual sports events, science fairs, and vibrant student activities.
          </p>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Moments at Greenfield"
          title="Browse Gallery Photos"
          subtitle="Click on any image to view in high-resolution lightbox."
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

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-lg transition-all group cursor-pointer relative"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Hover overlay icon */}
                <div className="absolute inset-0 bg-[#124032]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>

                <span className="absolute top-3 left-3 bg-[#124032] text-[#eab308] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                  {item.category}
                </span>
              </div>

              <div className="p-4">
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#124032] transition-colors leading-snug">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <LightboxModal
        items={filteredImages}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

    </div>
  );
};
