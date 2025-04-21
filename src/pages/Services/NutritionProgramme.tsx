import React from 'react';
import { Heart, Calendar, MapPin, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';

const NutritionProgramme = () => {
  // All nutrition programme images
  const nutritionImages = [
    {
      id: 'march2025',
      title: 'March Distribution',
      path: '/images/nutrition/march2025.jpg'
    },
    {
      id: 'feb2025',
      title: 'February Distribution',
      path: '/images/nutrition/feb2025.jpg'
    },
    {
      id: 'jan2025',
      title: 'January Distribution',
      path: '/images/nutrition/jan2025.jpg'
    },
    {
      id: 'december2024',
      title: 'December Distribution',
      path: '/images/nutrition/december2024.jpg'
    },
    {
      id: 'november2024',
      title: 'November Distribution',
      path: '/images/nutrition/november2024.jpg'
    },
    {
      id: 'october1',
      title: 'October Distribution',
      path: '/images/nutrition/october1.jpg'
    },
    {
      id: 'october2',
      title: 'October Distribution',
      path: '/images/nutrition/october2.jpg'
    },
    {
      id: 'september2024',
      title: 'September Distribution',
      path: '/images/nutrition/september2024.jpg'
    },
    {
      id: 'august2024',
      title: 'August Distribution',
      path: '/images/nutrition/august2024.jpg'
    }
  ];

  // State for carousel scrolling
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const carouselRef = React.useRef<HTMLDivElement>(null);

  // Reset scroll position to beginning when component mounts
  React.useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
      setScrollPosition(0);
    }
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setScrollPosition(Math.max(0, scrollPosition - 300));
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setScrollPosition(scrollPosition + 300);
    }
  };

  return (
    <PageLayout title="Nutrition Programme and Community Outreach">
      <div className="min-h-screen w-full bg-gradient-to-br from-indian-cream to-white">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto overflow-visible">
              <div className="inline-block p-6 rounded-lg bg-gradient-to-br from-indian-cream to-white border border-indian-saffron shadow-lg transform transition-all duration-500 hover:shadow-xl hover:scale-[1.01] text-center w-full mb-8">
                <h1 className="text-3xl font-heading font-bold mb-4 text-black flex items-center justify-center gap-2">
                  <Heart className="w-8 h-8 text-indian-saffron" />
                  Nutrition Programme and Community Outreach
                </h1>

                <p className="text-gray-700 mt-4">
                  The Ramakrishna Centre is committed to serving the community through various outreach programs,
                  following Swami Vivekananda's guiding principle that "Service to man is worship of God."
                </p>
              </div>

              <div className="my-12 bg-gradient-to-br from-indian-cream to-white rounded-lg p-6 shadow-sm border border-indian-saffron/20 max-w-full lg:max-w-[115%] mx-auto overflow-visible" style={{ width: '115%', marginLeft: '-7.5%', marginRight: '-7.5%' }}>
                <h3 className="text-2xl font-heading font-semibold mb-6 text-center">Nutrition Programme Activities</h3>

                <div className="relative">
                  {/* Container for carousel and buttons */}
                  <div className="relative mx-auto w-[900px]">
                    {/* Left scroll button */}
                    <button
                      onClick={scrollLeft}
                      className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-md"
                      aria-label="Scroll left"
                    >
                      <ChevronLeft className="h-6 w-6 text-indian-saffron" />
                    </button>

                    {/* Image carousel */}
                    <div
                      ref={carouselRef}
                      className="flex overflow-x-hidden gap-[45px] py-4 scroll-smooth justify-start"
                    >
                      {nutritionImages.slice(0, 9).map((image) => (
                        <div
                          key={image.id}
                          className="flex-shrink-0 w-[270px] h-[400px] bg-gradient-to-br from-indian-cream to-white rounded-lg overflow-hidden shadow-sm border border-indian-saffron/30 hover:shadow-md transition-all hover:scale-[1.02] duration-300"
                        >
                          <Link to={`/services/nutrition-programme/image/${image.id}`} className="block h-full">
                            <div className="h-[320px] overflow-hidden bg-gradient-to-br from-indian-cream to-white border-b border-indian-saffron/30 flex items-center justify-center p-2">
                              <img
                                src={image.path}
                                alt={image.title}
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 rounded-lg"
                              />
                            </div>
                            <div className="p-3 text-center">
                              <h4 className="text-sm font-medium text-indian-maroon truncate">{image.title}</h4>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>

                    {/* Right scroll button */}
                    <button
                      onClick={scrollRight}
                      className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-md"
                      aria-label="Scroll right"
                    >
                      <ChevronRight className="h-6 w-6 text-indian-saffron" />
                    </button>
                  </div>
                </div>


              </div>

              <div className="bg-gradient-to-br from-indian-cream to-white rounded-lg shadow-sm border border-indian-saffron/20 my-8">
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-4 text-spiritual-600 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-indian-saffron" />
                    Children's Value Classes
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Beyond our regular Hinduism for Children program, we offer special value-based education classes
                    in schools and community centers. These classes focus on universal values like truth, compassion,
                    and respect, presented in an interfaith, inclusive manner.
                  </p>
                  <h4 className="font-bold mt-4 mb-2 text-spiritual-600">Program Details</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Weekly classes in partner schools",
                      "Holiday programs during school breaks",
                      "Special workshops for teachers and parents",
                      "Distribution of educational materials"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-spiritual-400"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="bg-gradient-to-br from-indian-cream to-white rounded-lg overflow-hidden shadow-sm border border-indian-saffron/20 hover:shadow-md transition-all hover:scale-[1.02] duration-300">
                  <div className="p-4">
                    <h3 className="text-xl font-heading font-semibold mb-4 text-spiritual-600">
                      Women Empowerment Programme (WEP)
                    </h3>
                    <p className="text-gray-700 mb-4">
                      The WEP supports women in developing skills for financial independence and personal growth.
                      Through workshops, training sessions, and mentoring, we help women become self-reliant and confident.
                    </p>
                    <h4 className="font-bold mt-4 mb-2 text-spiritual-600">Activities</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-spiritual-400"></span>
                        Vocational training in various crafts and skills
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-spiritual-400"></span>
                        Financial literacy and entrepreneurship workshops
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-spiritual-400"></span>
                        Health and wellness education
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-spiritual-400"></span>
                        Support groups and counseling services
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indian-cream to-white rounded-lg border-l-4 border-spiritual-500 p-6">
                  <h3 className="text-xl font-heading font-semibold mb-4 text-spiritual-600 flex items-center gap-2">
                    <Users className="w-5 h-5 text-indian-saffron" />
                    Get Involved
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our community outreach programs rely on the generous support of volunteers and donors.
                    If you would like to contribute your time, skills, or resources to any of these initiatives,
                    please contact our Community Service Coordinator.
                  </p>
                  <p className="italic text-gray-600 border-l-2 border-spiritual-300 pl-4">
                    "The best way to find yourself is to lose yourself in the service of others." - Mahatma Gandhi
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="bg-gradient-to-br from-indian-cream to-white p-6 rounded-lg shadow-sm border border-indian-saffron/30">
                  <h3 className="text-xl font-heading font-semibold mb-4 text-indian-blue flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-indian-saffron" />
                    Programme Schedule
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indian-saffron"></span>
                      Daily Meals: 12:00 PM - 2:00 PM
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indian-saffron"></span>
                      Food Parcel Distribution: Every Saturday
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indian-saffron"></span>
                      School Feeding: During School Terms
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-indian-cream to-white p-6 rounded-lg shadow-sm border border-indian-saffron/30">
                  <h3 className="text-xl font-heading font-semibold mb-4 text-indian-blue flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-indian-saffron" />
                    Locations
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indian-saffron"></span>
                      Main Centre Kitchen
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indian-saffron"></span>
                      Mobile Distribution Points
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indian-saffron"></span>
                      Partner Schools
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indian-cream to-white p-8 rounded-lg border border-indian-saffron/30 shadow-sm">
                <h3 className="text-xl font-heading font-semibold mb-6 text-indian-blue flex items-center gap-2">
                  <Users className="w-6 h-6 text-indian-saffron" />
                  How to Help
                </h3>
                <p className="text-gray-700 mb-6">
                  You can support our Nutrition Programme through:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-indian-cream to-white p-4 rounded-lg border border-indian-saffron/30">
                    <h4 className="font-semibold mb-2 text-indian-maroon">Volunteer</h4>
                    <p className="text-sm text-gray-700">Join us in food preparation and distribution</p>
                  </div>
                  <div className="bg-gradient-to-br from-indian-cream to-white p-4 rounded-lg border border-indian-saffron/30">
                    <h4 className="font-semibold mb-2 text-indian-maroon">Donate</h4>
                    <p className="text-sm text-gray-700">Contribute food items or funds</p>
                  </div>
                  <div className="bg-gradient-to-br from-indian-cream to-white p-4 rounded-lg border border-indian-saffron/30">
                    <h4 className="font-semibold mb-2 text-indian-maroon">Spread Awareness</h4>
                    <p className="text-sm text-gray-700">Help us reach more people in need</p>
                  </div>
                  <div className="bg-gradient-to-br from-indian-cream to-white p-4 rounded-lg border border-indian-saffron/30">
                    <h4 className="font-semibold mb-2 text-indian-maroon">Partner With Us</h4>
                    <p className="text-sm text-gray-700">Join as a business or organization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NutritionProgramme;


