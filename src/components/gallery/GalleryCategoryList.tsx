
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../shared/SectionHeader';
import { Image } from 'lucide-react';

// Gallery categories as specified in the requirements
const galleryCategories = [
  {
    id: 'centre-activities',
    title: 'Centre Activities',
    description: 'Photos and videos from our regular activities and events',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'swami-nischalanda',
    title: 'Swami Nischalanda',
    description: 'Photos and videos featuring Swami Nischalanda',
    image: 'https://images.unsplash.com/photo-1519335337423-a3357c219cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'senior-monks-visits',
    title: 'Visits of Senior Monks',
    description: 'Photos and videos from visits by senior monks',
    image: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  }
];

const GalleryCategoryList = () => {
  return (
    <div>
      <SectionHeader 
        title="Gallery Categories" 
        subtitle="Browse our collection of photos and videos"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {galleryCategories.map((category) => (
          <Link 
            key={category.id}
            to={`/gallery/${category.id}`}
            className="block group"
          >
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-60 overflow-hidden">
                {category.image ? (
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <Image className="w-16 h-16 text-gray-400" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GalleryCategoryList;
