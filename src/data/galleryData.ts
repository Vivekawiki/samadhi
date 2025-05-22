// Define the structure for gallery images
export interface GalleryImage {
  id: string;
  title: string;
  description?: string;
  path: string;
  category: string;
  date?: string;
  featured?: boolean;
}

// Define the structure for gallery categories
export interface GalleryCategory {
  id: string;
  name: string;
  description?: string;
}

// Define gallery categories - only using events
export const galleryCategories: GalleryCategory[] = [
  {
    id: 'events',
    name: 'Events',
    description: 'Special functions and celebrations at the Ramakrishna Centre'
  }
];

// Define gallery images
export const galleryImages: GalleryImage[] = [
  // Events Category
  {
    id: 'event1',
    title: 'Event Image 1',
    description: 'Event at the Ramakrishna Centre',
    path: '/images/1.jpg',
    category: 'events',
    date: '2025-05-19',
    featured: true
  },
  {
    id: 'event2',
    title: 'Event Image 2',
    description: 'Event at the Ramakrishna Centre',
    path: '/images/2.jpg',
    category: 'events',
    date: '2025-05-19'
  },
  {
    id: 'event3',
    title: 'Event Image 3',
    description: 'Event at the Ramakrishna Centre',
    path: '/images/3.jpg',
    category: 'events',
    date: '2025-05-19'
  },
  {
    id: 'event4',
    title: 'Event Image 4',
    description: 'Event at the Ramakrishna Centre',
    path: '/images/4.jpg',
    category: 'events',
    date: '2025-05-19'
  },
  {
    id: 'event5',
    title: 'Event Image 5',
    description: 'Event at the Ramakrishna Centre',
    path: '/images/5.jpg',
    category: 'events',
    date: '2025-05-19'
  },
  {
    id: 'event6',
    title: 'Event Image 6',
    description: 'Event at the Ramakrishna Centre',
    path: '/images/6.jpg',
    category: 'events',
    date: '2025-05-19'
  },
  {
    id: 'event7',
    title: 'Event Image 7',
    description: 'Event at the Ramakrishna Centre',
    path: '/images/7.jpg',
    category: 'events',
    date: '2025-05-19'
  },
  {
    id: 'event8',
    title: 'Event Image 8',
    description: 'Event at the Ramakrishna Centre',
    path: '/images/8.jpg',
    category: 'events',
    date: '2025-05-19'
  },
  {
    id: 'event9',
    title: 'Event Image 9',
    description: 'Event at the Ramakrishna Centre',
    path: '/images/9.jpg',
    category: 'events',
    date: '2025-05-19'
  },
  {
    id: 'event10',
    title: 'Event Image 10',
    description: 'Event at the Ramakrishna Centre',
    path: '/images/10.jpg',
    category: 'events',
    date: '2025-05-19'
  },
];

// Helper function to get images by category
export const getImagesByCategory = (categoryId: string): GalleryImage[] => {
  return galleryImages.filter(image => image.category === categoryId);
};

// Helper function to get featured images
export const getFeaturedImages = (): GalleryImage[] => {
  return galleryImages.filter(image => image.featured);
};

// Helper function to get image by ID
export const getImageById = (imageId: string): GalleryImage | undefined => {
  return galleryImages.find(image => image.id === imageId);
};
