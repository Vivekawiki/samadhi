
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/shared/Button';

const HinduismForChildren = () => {
  return (
    <div className="prose prose-lg max-w-none animate-fade-in">
      <h2 className="text-3xl font-heading font-semibold mb-6">Hinduism for Children</h2>
      
      <p>
        Our Hinduism for Children program is designed to introduce children to the basic concepts, 
        values, and practices of Hinduism in an engaging and age-appropriate manner.
      </p>
      
      <div className="my-8 p-6 bg-spiritual-50 rounded-lg border-l-4 border-spiritual-500">
        <h3 className="text-xl font-heading font-semibold mb-4">Program Features</h3>
        <ul>
          <li>Age-appropriate lessons on Hindu philosophy, mythology, and values</li>
          <li>Interactive activities, storytelling, and creative projects</li>
          <li>Simple meditation and yoga practices suitable for children</li>
          <li>Special celebrations of Hindu festivals</li>
          <li>Learning of simple bhajans (devotional songs) and mantras</li>
        </ul>
      </div>
      
      <h3 className="text-2xl font-heading font-semibold mt-8 mb-4">Class Schedule</h3>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h4 className="font-bold mb-2">Regular Classes</h4>
        <p>Day: Every Sunday</p>
        <p>Time: 9:00 AM - 10:30 AM</p>
        <p>Ages: 5-12 years (grouped by age)</p>
        
        <h4 className="font-bold mt-4 mb-2">Teen Group</h4>
        <p>Day: First and Third Saturday of each month</p>
        <p>Time: 2:00 PM - 3:30 PM</p>
        <p>Ages: 13-17 years</p>
      </div>
      
      <p>
        In addition to our in-person classes, we offer extensive online learning resources for children and parents.
      </p>
      
      <div className="mt-8 text-center">
        <p className="text-xl mb-4">
          Access our comprehensive online learning resources
        </p>
        <Button href="/learn" size="lg">
          Go to Learning Centre
        </Button>
      </div>
    </div>
  );
};

export default HinduismForChildren;
