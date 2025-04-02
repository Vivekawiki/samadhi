
// Define the navigation data structure
export interface NavItem {
  name: string;
  href: string;
  dropdown?: NavItem[];
}

export const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '/about',
    dropdown: [
      { name: 'Our Centre', href: '/about/our-centre' },
      { name: 'Vedanta', href: '/about/vedanta' },
      { name: 'The Holy Trinity', href: '/about/holy-trinity' },
      { name: 'Presence in South Africa', href: '/about/presence-in-sa' },
    ]
  },
  { 
    name: 'Services', 
    href: '/services',
    dropdown: [
      { name: 'Satsangs & Spiritual Gatherings', href: '/services/satsangs' },
      { name: 'Hinduism for Children', href: '/services/hinduism-for-children' },
      { name: 'Special Functions & Festivals', href: '/services/special-functions' },
      { name: 'Community Outreach', href: '/services/community-outreach' },
    ]
  },
  { name: 'Gallery', href: '/gallery' },
  { name: 'New Ashram Project', href: '/new-ashram-project' },
  { 
    name: 'Learn', 
    href: '/learn',
    dropdown: [
      { name: 'Topics', href: '/learn/topics/core-concepts' },
      { name: 'Mantras', href: '/learn/mantras' },
      { name: 'Lessons', href: '/learn/lessons' },
    ]
  },
  { name: 'Donate', href: '/donate' },
  { name: 'Contact', href: '/contact' },
];
