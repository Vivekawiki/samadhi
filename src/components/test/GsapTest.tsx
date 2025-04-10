import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const GsapTest = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (boxRef.current) {
      // Simple animation to verify GSAP is working
      gsap.to(boxRef.current, {
        rotation: 360,
        backgroundColor: '#F1A912',
        duration: 2,
        repeat: -1,
        yoyo: true
      });
    }
  }, []);
  
  return (
    <div className="flex justify-center items-center py-10">
      <div 
        ref={boxRef}
        className="w-32 h-32 bg-blue-500 flex items-center justify-center text-white font-bold"
      >
        GSAP Test
      </div>
    </div>
  );
};

export default GsapTest;
