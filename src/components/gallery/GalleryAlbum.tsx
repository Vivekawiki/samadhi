
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import PageHeader from '../../components/shared/PageHeader';
import SectionHeader from '../../components/shared/SectionHeader';
import { ArrowLeft, Image } from 'lucide-react';

// Mock data for gallery albums
const galleryData = {
  'centre-activities': {
    title: 'Centre Activities',
    subtitle: 'Photos and videos from our regular activities and events',
    albums: [
      {
        id: 'satsangs-2023',
        title: 'Satsangs 2023',
        description: 'Weekly satsangs held during 2023',
        coverImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        images: [
          'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        ]
      },
      {
        id: 'festivals-2023',
        title: 'Festivals 2023',
        description: 'Special festivals celebrated in 2023',
        coverImage: 'https://images.unsplash.com/photo-1464047736614-af63643285bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        images: [
          'https://images.unsplash.com/photo-1464047736614-af63643285bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1501162946741-4960f990fdf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        ]
      }
    ]
  },
  'swami-nischalanda': {
    title: 'Swami Nischalanda',
    subtitle: 'Photos and videos featuring Swami Nischalanda',
    albums: [
      {
        id: 'talks-2023',
        title: 'Talks 2023',
        description: 'Spiritual talks by Swami Nischalanda in 2023',
        coverImage: 'https://images.unsplash.com/photo-1519335337423-a3357c219cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        images: [
          'https://images.unsplash.com/photo-1519335337423-a3357c219cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        ]
      }
    ]
  },
  'senior-monks-visits': {
    title: 'Visits of Senior Monks',
    subtitle: 'Photos and videos from visits by senior monks',
    albums: [
      {
        id: 'visit-2023',
        title: 'Visit 2023',
        description: 'Senior monks visiting our centre in 2023',
        coverImage: 'https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        images: [
          'https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1507692812231-52e2cca3e4c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        ]
      }
    ]
  }
};

const GalleryAlbum = () => {
  const { categoryId } = useParams();
  
  // Check if category exists
  if (!categoryId || !galleryData[categoryId as keyof typeof galleryData]) {
    return (
      <PageLayout title="Gallery - Category Not Found">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-heading font-bold mb-6">Category Not Found</h1>
          <p className="text-gray-600 mb-8">The gallery category you're looking for doesn't exist.</p>
          <Link to="/gallery" className="text-spiritual-500 hover:text-spiritual-600 font-medium">
            ← Back to Gallery
          </Link>
        </div>
      </PageLayout>
    );
  }
  
  const category = galleryData[categoryId as keyof typeof galleryData];
  
  return (
    <PageLayout title={`Gallery - ${category.title}`}>
      <PageHeader 
        title={category.title} 
        subtitle={category.subtitle}
        backgroundImage="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      />
      
      <div className="container mx-auto px-4 py-12">
        <Link to="/gallery" className="inline-flex items-center text-spiritual-500 hover:text-spiritual-600 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Categories
        </Link>
        
        <SectionHeader 
          title={`${category.title} Albums`} 
          subtitle="Browse albums or click on an album to view all photos"
          alignment="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {category.albums.map((album) => (
            <Link 
              key={album.id}
              to={`/gallery/${categoryId}/${album.id}`}
              className="block group"
            >
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="h-60 overflow-hidden">
                  {album.coverImage ? (
                    <img 
                      src={album.coverImage} 
                      alt={album.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <Image className="w-16 h-16 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-2">{album.title}</h3>
                  <p className="text-gray-600">{album.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default GalleryAlbum;
