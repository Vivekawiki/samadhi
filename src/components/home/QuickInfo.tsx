import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../shared/Button';
import './quickinfo.css';

const QuickInfo = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indian-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* New Ashram Project Banner */}
        <div className="bg-gradient-to-r from-spiritual-50 to-white rounded-lg p-8 md:p-12 border border-spiritual-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-semibold text-spiritual-800 tracking-tight">New Ashram Project</h3>
              <p className="text-gray-700 leading-relaxed tracking-wide">
                The Johannesburg Centre conducts a wide-range of welfare work and is developing a fixed premises to expand on this. The sole purpose of this development is to serve and uplift society and to promote spirituality and tranquility, where devotees can find God in themselves and around them.
              </p>
              <div className="pt-2">
                <Button href="/new-ashram-project" variant="primary">
                  Support Our Project
                </Button>
              </div>
            </div>

            <div className="h-[250px] ashram-image-container pop-shadow-brown" style={{ marginBottom: '20px' }}>
              <img
                src="/pics/nad.jpg"
                alt="New Ashram Project"
                className="ashram-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickInfo;
