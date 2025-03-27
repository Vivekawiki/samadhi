
import React from 'react';
import PageLayout from '../../components/layout/PageLayout';

const Satsangs = () => {
  return (
    <div className="prose prose-lg max-w-none animate-fade-in">
      <h2 className="text-3xl font-heading font-semibold mb-6">Satsangs & Spiritual Gatherings</h2>
      
      <p>
        Regular satsangs (spiritual gatherings) are held at the Ramakrishna Centre to provide opportunities for 
        spiritual growth through meditation, prayers, and discourses on Vedantic teachings.
      </p>
      
      <h3 className="text-2xl font-heading font-semibold mt-8 mb-4">Regular Schedule</h3>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h4 className="font-bold mb-2">Sunday Satsang</h4>
        <p>Time: 9:00 AM - 11:00 AM</p>
        <p>Format: Meditation, Bhajans (Devotional Songs), and Discourse</p>
        
        <h4 className="font-bold mt-4 mb-2">Thursday Evening Meditation</h4>
        <p>Time: 7:00 PM - 8:00 PM</p>
        <p>Format: Guided Meditation and Short Reading</p>
        
        <h4 className="font-bold mt-4 mb-2">Saturday Study Group</h4>
        <p>Time: 3:00 PM - 4:30 PM</p>
        <p>Format: Reading and Discussion of Spiritual Texts</p>
      </div>
      
      <p>
        All are welcome to attend these gatherings, regardless of religious background or affiliation. 
        No prior experience with meditation or Vedanta is necessary.
      </p>
    </div>
  );
};

export default Satsangs;
