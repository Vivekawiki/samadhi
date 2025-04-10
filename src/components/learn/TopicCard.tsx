
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import gsap from 'gsap';

interface TopicCardProps {
  id: string;
  title: string;
  description: string;
  link: string;
  isChildThemed?: boolean;
}

const TopicCard: React.FC<TopicCardProps> = ({
  id,
  title,
  description,
  link,
  isChildThemed = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const starRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      // Create hover animation
      const tl = gsap.timeline({ paused: true });

      tl.to(cardRef.current, {
        y: -5,
        boxShadow: '0 10px 25px rgba(241, 169, 18, 0.15)',
        duration: 0.3,
        ease: 'power2.out'
      });

      if (starRef.current && isChildThemed) {
        tl.to(starRef.current, {
          rotate: 360,
          scale: 1.2,
          duration: 0.5,
          ease: 'back.out(1.7)'
        }, '<');
      }

      // Add event listeners
      cardRef.current.addEventListener('mouseenter', () => tl.play());
      cardRef.current.addEventListener('mouseleave', () => tl.reverse());

      return () => {
        if (cardRef.current) {
          cardRef.current.removeEventListener('mouseenter', () => tl.play());
          cardRef.current.removeEventListener('mouseleave', () => tl.reverse());
        }
      };
    }
  }, [isChildThemed]);
  if (isChildThemed) {
    return (
      <Link
        key={id}
        to={link}
        className="block group"
      >
        <div
          ref={cardRef}
          className="h-full p-6 border-2 border-spiritual-200 rounded-2xl shadow-sm transition-all duration-300 bg-gradient-to-br from-spiritual-50 to-white"
        >
          <div className="flex items-center gap-2 mb-2">
            <Star
              ref={starRef}
              className="w-5 h-5 text-spiritual-500 transition-colors"
            />
            <h4 className="text-xl font-heading font-semibold transition-colors">
              {title}
            </h4>
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      key={id}
      to={link}
      className="block group"
    >
      <div
        ref={cardRef}
        className="h-full p-6 border border-gray-100 rounded-lg shadow-sm transition-all duration-300 bg-white"
      >
        <h4 className="text-xl font-heading font-semibold mb-2 transition-colors">
          {title}
        </h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default TopicCard;
