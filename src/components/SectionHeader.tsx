import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'text-left'} ${className}`}>
      {badge && (
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100/80 text-[#124032] border border-emerald-200/80 mb-3 shadow-2xs">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#124032] tracking-tight font-heading leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-16 bg-[#eab308] rounded-full mt-4 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};
