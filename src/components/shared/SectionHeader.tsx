
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
}

const SectionHeader = ({
  title,
  subtitle,
  alignment = 'center'
}: SectionHeaderProps) => {
  return (
    <div
      className={`mb-12 ${
        alignment === 'center' ? 'text-center' :
        alignment === 'right' ? 'text-right' : 'text-left'
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-wide">{subtitle}</p>
      )}
      <div className={`h-1 w-20 bg-spiritual-500 mt-4 ${
        alignment === 'center' ? 'mx-auto' :
        alignment === 'right' ? 'ml-auto' : ''
      }`}></div>
    </div>
  );
};

export default SectionHeader;
