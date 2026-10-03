import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, BookOpen } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 font-sans">
      <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm text-center max-w-lg w-full space-y-6">
        
        {/* Friendly 404 Compass Emblem */}
        <div className="w-20 h-20 bg-emerald-50 text-[#124032] rounded-3xl flex items-center justify-center mx-auto shadow-inner border border-emerald-100">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <span className="bg-[#eab308] text-[#124032] font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
            Error 404
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#124032] font-heading leading-tight pt-2">
            Looks Like You've Taken a Wrong Turn
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            The page you're looking for doesn't seem to be here.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 bg-[#124032] hover:bg-[#1b5e4a] text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            to="/admissions"
            className="w-full sm:w-auto px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explore Admissions</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
