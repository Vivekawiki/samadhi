import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import PageHeader from '../../components/shared/PageHeader';
import { ArrowLeft } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '../ui/carousel';
import { AspectRatio } from '../ui/aspect-ratio';

// Reusing the mock data from GalleryAlbum component
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
          'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        ]
      },
      {
        id: 'festivals-2023',
        title: 'Festivals 2023',
        description: 'Special festivals celebrated in 2023',
        coverImage: 'https://images.unsplash.com/photo-1464047736614-af63643285bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        images: [
          'https://images.unsplash.com/photo-1464047736614-af63643285bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1501162946741-4960f990fdf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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
          'https://images.unsplash.com/photo-1519335337423-a3357c219cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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
          'https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1507692812231-52e2cca3e4c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        ]
      }
    ]
  }
};

const GalleryPhotoGrid = () => {
  const { categoryId, albumId } = useParams();
  
  // Check if category and album exist
  if (!categoryId || 
      !albumId || 
      !galleryData[categoryId as keyof typeof galleryData] || 
      !galleryData[categoryId as keyof typeof galleryData].albums.find(a => a.id === albumId)) {
    return (
      <PageLayout title="Gallery - Album Not Found">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-heading font-bold mb-6">Album Not Found</h1>
          <p className="text-gray-600 mb-8">The gallery album you're looking for doesn't exist.</p>
          <Link to="/gallery" className="text-spiritual-500 hover:text-spiritual-600 font-medium">
            ← Back to Gallery
          </Link>
        </div>
      </PageLayout>
    );
  }
  
  const category = galleryData[categoryId as keyof typeof galleryData];
  const album = category.albums.find(a => a.id === albumId)!;
  
  return (
    <PageLayout title={`Gallery - ${album.title}`}>
      <PageHeader 
        title={album.title} 
        subtitle={album.description}
        backgroundImage={album.coverImage}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to={`/gallery/${categoryId}`} className="inline-flex items-center text-spiritual-500 hover:text-spiritual-600">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {category.title}
          </Link>
        </div>
        
        {/* Carousel for larger screens */}
        <div className="hidden md:block max-w-5xl mx-auto px-8">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {album.images.map((image, index) => (
                <CarouselItem key={index} className="pl-4">
                  <AspectRatio ratio={16 / 9}>
                    <img 
                      src={image} 
                      alt={`${album.title} - Photo ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </div>
        
        {/* Grid for all screen sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {album.images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <img 
                src={image} 
                alt={`${album.title} - Photo ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default GalleryPhotoGrid;
