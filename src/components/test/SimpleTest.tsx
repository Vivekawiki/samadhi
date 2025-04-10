import React, { useState } from 'react';

const SimpleTest = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="flex justify-center items-center py-10">
      <div 
        className={`w-32 h-32 flex items-center justify-center text-white font-bold transition-all duration-500 ${
          isHovered ? 'bg-yellow-500 scale-110 rotate-12' : 'bg-blue-500'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Hover Me
      </div>
    </div>
  );
};

export default SimpleTest;
