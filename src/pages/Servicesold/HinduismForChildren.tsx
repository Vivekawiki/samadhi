
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/shared/Button';
import { BookOpen, Star, Sun, Heart, Baby } from 'lucide-react';

const HinduismForChildren = () => {
  return (
    <div className="prose prose-lg max-w-none animate-fade-in">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 flex items-center justify-center gap-3">
          <Baby className="w-8 h-8 text-indian-saffron" />
          Hinduism for Children
          <Baby className="w-8 h-8 text-indian-saffron" />
        </h2>
        <div className="w-24 h-2 bg-gradient-to-r from-indian-saffron to-indian-gold mx-auto rounded-full"></div>
      </div>
      
      <div className="bg-gradient-to-r from-indian-cream to-yellow-50 p-8 rounded-2xl mb-10 shadow-sm border-2 border-indian-gold">
        <p className="text-xl leading-relaxed">
          Our Hinduism for Children program introduces young minds to Hindu concepts, 
          values, and practices in a fun, engaging, and colorful way!
        </p>
      </div>
      
      <div className="my-8 p-6 bg-yellow-50 rounded-2xl border-2 border-indian-gold shadow-sm">
        <h3 className="text-2xl font-heading font-semibold mb-4 flex items-center gap-2">
          <Star className="w-6 h-6 text-indian-gold" />
          Program Features
        </h3>
        <ul className="space-y-4">
          {[
            { text: "Age-appropriate lessons on Hindu philosophy, mythology, and values", icon: <BookOpen className="w-5 h-5 text-indian-saffron" /> },
            { text: "Interactive activities, storytelling, and creative projects", icon: <Sun className="w-5 h-5 text-indian-saffron" /> },
            { text: "Simple meditation and yoga practices suitable for children", icon: <Heart className="w-5 h-5 text-indian-saffron" /> },
            { text: "Special celebrations of Hindu festivals", icon: <Star className="w-5 h-5 text-indian-saffron" /> },
            { text: "Learning of simple bhajans (devotional songs) and mantras", icon: <BookOpen className="w-5 h-5 text-indian-saffron" /> },
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 mt-1">{item.icon}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-indian-cream to-blue-50 p-6 rounded-2xl border-2 border-indian-blue/30 shadow-sm">
          <h4 className="text-xl font-bold mb-3 text-indian-blue flex items-center gap-2">
            <Baby className="w-5 h-5" />
            Regular Classes
          </h4>
          <p className="mb-1"><span className="font-medium">Day:</span> Every Sunday</p>
          <p className="mb-1"><span className="font-medium">Time:</span> 9:00 AM - 10:30 AM</p>
          <p><span className="font-medium">Ages:</span> 5-12 years (grouped by age)</p>
        </div>
        
        <div className="bg-gradient-to-br from-indian-cream to-green-50 p-6 rounded-2xl border-2 border-indian-green/30 shadow-sm">
          <h4 className="text-xl font-bold mb-3 text-indian-green flex items-center gap-2">
            <Baby className="w-5 h-5" />
            Teen Group
          </h4>
          <p className="mb-1"><span className="font-medium">Day:</span> First and Third Saturday</p>
          <p className="mb-1"><span className="font-medium">Time:</span> 2:00 PM - 3:30 PM</p>
          <p><span className="font-medium">Ages:</span> 13-17 years</p>
        </div>
      </div>
      
      <div className="my-10 p-6 bg-gradient-to-br from-indian-cream to-purple-50 rounded-2xl border-2 border-purple-200 text-center">
        <p className="text-xl mb-4">
          In addition to our in-person classes, we offer extensive online learning resources for children and parents!
        </p>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-2xl mb-4 font-heading text-indian-saffron">
          Access our fun learning resources!
        </p>
        <Button href="/learn" size="lg" className="rounded-full px-8 py-6 text-lg bg-indian-saffron hover:bg-indian-saffron/90">
          Go to Learning Centre
        </Button>
      </div>
    </div>
  );
};

export default HinduismForChildren;
