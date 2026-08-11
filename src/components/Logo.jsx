import React from 'react';

export default function Logo({ size = 'md', variant = 'light' }) {
  const sizeClasses = {
    sm: 'h-10',
    md: 'h-12 sm:h-14',
    lg: 'h-16 sm:h-20',
    xl: 'h-20 sm:h-24',
  };

  return (
    <div className="flex items-center gap-3 group">
      <img
        src="/logo.svg"
        alt="ECOSAN Engenharia & Consultoria Logo"
        decoding="async"
        fetchPriority="high"
        className={`${sizeClasses[size] || 'h-16'} w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-lg`}
      />
    </div>
  );
}
