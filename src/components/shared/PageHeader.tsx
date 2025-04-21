import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
  return (
    <div className="relative w-full min-h-[40vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-black/50 z-10"></div>
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundSize: 'cover',
          objectFit: 'cover', // Ensures proper scaling
        }}
      ></div>
      
      {/* Text Content */}
      <div className="relative z-20 text-center px-4 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
