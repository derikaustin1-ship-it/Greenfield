import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % items.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all cursor-pointer"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main image container */}
      <div
        className="max-w-5xl w-full flex flex-col items-center justify-center pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[75vh] overflow-hidden rounded-2xl shadow-2xl pointer-events-auto bg-black/40">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[75vh] w-auto max-w-full object-contain mx-auto transition-transform duration-300"
          />
        </div>

        {/* Caption bar */}
        <div className="mt-4 bg-white/10 backdrop-blur-md border border-white/10 px-6 py-3.5 rounded-2xl text-center max-w-xl w-full pointer-events-auto flex items-center justify-between text-white gap-4">
          <div className="text-left">
            <span className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-wider bg-[#eab308] text-[#124032] px-2.5 py-0.5 rounded-full mb-1">
              <Tag className="w-3 h-3" />
              {currentItem.category}
            </span>
            <h4 className="text-base font-semibold text-white leading-snug">{currentItem.title}</h4>
          </div>
          <span className="text-xs font-mono text-white/70 whitespace-nowrap bg-black/30 px-3 py-1 rounded-full">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      </div>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
