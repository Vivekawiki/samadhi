import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SectionHeader from '../../components/shared/SectionHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HolyTrinity = () => {
  const [searchParams] = useSearchParams();
  const tabFromUrl = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabFromUrl || "sri-ramakrishna");

  return (
    <div className="animate-fade-in">
      <SectionHeader
        title="The Holy Trinity"
        subtitle="Learn about Sri Ramakrishna, Sri Sarada Devi, and Swami Vivekananda"
        alignment="left"
      />

      <div className="prose prose-lg max-w-none">
        <p className="lead mb-24 sm:mb-8">
          The Ramakrishna Movement is centered around three pivotal figures known as the "Holy Trinity": Sri Ramakrishna Paramahamsa, Holy Mother Sri Sarada Devi, and Swami Vivekananda. Their lives and teachings form the spiritual foundation of our Centre.
        </p>

        <div className="relative">
          <Tabs defaultValue={activeTab} className="w-full">
            <TabsList className="flex flex-col sm:grid w-full sm:grid-cols-3 mb-12 sm:mb-8 bg-gradient-to-br from-spiritual-50 to-white border border-spiritual-200 p-3 sm:p-1 rounded-lg sm:h-[60px] space-y-3 sm:space-y-0 sm:gap-1">
              <TabsTrigger
                value="sri-ramakrishna"
                className="block w-full px-4 py-3 text-base sm:text-lg transition-all duration-300
                  data-[state=active]:bg-gradient-to-br
                  data-[state=active]:from-indian-cream
                  data-[state=active]:to-white
                  data-[state=active]:text-spiritual-900
                  data-[state=active]:shadow-md
                  data-[state=active]:border-b-2
                  data-[state=active]:border-indian-saffron
                  hover:bg-spiritual-50
                  rounded-md
                  text-center
                  h-auto sm:h-full"
              >
                Sri Ramakrishna
              </TabsTrigger>
              <TabsTrigger
                value="sri-sarada-devi"
                className="block w-full px-4 py-3 text-base sm:text-lg transition-all duration-300
                  data-[state=active]:bg-gradient-to-br
                  data-[state=active]:from-indian-cream
                  data-[state=active]:to-white
                  data-[state=active]:text-spiritual-900
                  data-[state=active]:shadow-md
                  data-[state=active]:border-b-2
                  data-[state=active]:border-indian-saffron
                  hover:bg-spiritual-50
                  rounded-md
                  text-center
                  h-auto sm:h-full"
              >
                Sri Sarada Devi
              </TabsTrigger>
              <TabsTrigger
                value="swami-vivekananda"
                className="block w-full px-4 py-3 text-base sm:text-lg transition-all duration-300
                  data-[state=active]:bg-gradient-to-br
                  data-[state=active]:from-indian-cream
                  data-[state=active]:to-white
                  data-[state=active]:text-spiritual-900
                  data-[state=active]:shadow-md
                  data-[state=active]:border-b-2
                  data-[state=active]:border-indian-saffron
                  hover:bg-spiritual-50
                  rounded-md
                  text-center
                  h-auto sm:h-full"
              >
                Swami Vivekananda
              </TabsTrigger>
            </TabsList>

            <div className="mt-12 sm:mt-8">
              <TabsContent value="sri-ramakrishna" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="rounded-lg overflow-hidden shadow-md mb-4">
                      <img
                        src="/lovable-uploads/ff802407-da30-4efc-941c-05f69a329db7.png"
                        alt="Sri Ramakrishna"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 p-4 rounded-lg">
                      <h4 className="text-lg font-medium mb-2">Key Information</h4>
                      <ul className="space-y-2 list-none pl-0">
                        <li><strong>Born:</strong> February 18, 1836</li>
                        <li><strong>Passed Away:</strong> August 16, 1886</li>
                        <li><strong>Birthplace:</strong> Kamarpukur, Bengal, India</li>
                        <li><strong>Known As:</strong> Paramahamsa (Supreme Swan)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-heading font-semibold mb-4">Sri Ramakrishna Paramahamsa</h3>
                    <p>
                      Sri Ramakrishna Paramahamsa (1836-1886) was a mystic and saint whose spiritual experiences and teachings formed the foundation of the Ramakrishna Movement. As a priest at the Dakshineswar Kali Temple near Kolkata, he spent years in intense spiritual practice.
                    </p>

                    <h4 className="text-xl font-heading font-medium mt-6 mb-3">Spiritual Experiences</h4>
                    <p>
                      What makes Sri Ramakrishna extraordinary was his direct realization of God through multiple spiritual paths. He practiced various forms of Hinduism and also followed the spiritual disciplines of Islam and Christianity, reaching the same ultimate reality through each path. This led to his most significant teaching: "As many faiths, so many paths" - affirming the harmony of all religions.
                    </p>

                    <h4 className="text-xl font-heading font-medium mt-6 mb-3">Key Teachings</h4>
                    <ul className="space-y-2 ml-0 pl-0">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-3 flex-shrink-0"></span>
                        <span>The harmony of all religions - different spiritual paths lead to the same ultimate goal</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-3 flex-shrink-0"></span>
                        <span>God can be realized through sincere spiritual practice</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-3 flex-shrink-0"></span>
                        <span>The Divine exists in all beings</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-3 flex-shrink-0"></span>
                        <span>Renunciation of worldly attachments for spiritual advancement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-3 flex-shrink-0"></span>
                        <span>The importance of devotion and love in spiritual life</span>
                      </li>
                    </ul>

                    <h4 className="text-xl font-heading font-medium mt-6 mb-3">Legacy</h4>
                    <p>
                      Sri Ramakrishna attracted numerous disciples who were inspired by his spiritual realizations and teachings. His most prominent disciple, Swami Vivekananda, later spread his master's message throughout India and the Western world. Sri Ramakrishna's life demonstrated that religious harmony is not just a theoretical ideal but a practical spiritual truth that can be realized through direct experience.
                    </p>

                    <div className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 p-6 rounded-lg my-6">
                      <h4 className="text-xl font-heading font-semibold mb-2">Famous Saying</h4>
                      <blockquote className="italic text-gray-700">
                        "As many faiths, so many paths."
                      </blockquote>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="sri-sarada-devi" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="rounded-lg overflow-hidden shadow-md mb-4">
                      <img
                        src="/lovable-uploads/6103c45d-7ef6-40da-a95e-d5695cd3526d.png"
                        alt="Sri Sarada Devi"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 p-4 rounded-lg">
                      <h4 className="text-lg font-medium mb-2">Key Information</h4>
                      <ul className="space-y-2 list-none pl-0">
                        <li><strong>Born:</strong> December 22, 1853</li>
                        <li><strong>Passed Away:</strong> July 20, 1920</li>
                        <li><strong>Birthplace:</strong> Jayrambati, Bengal, India</li>
                        <li><strong>Known As:</strong> Holy Mother</li>
                      </ul>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-heading font-semibold mb-4">Sri Sarada Devi - The Holy Mother</h3>
                    <p>
                      Sri Sarada Devi (1853-1920), known reverently as Holy Mother, was the spiritual consort of Sri Ramakrishna. Despite being married at the age of five in accordance with the customs of the time, theirs was a spiritual relationship based on mutual respect and shared divine purpose.
                    </p>

                    <h4 className="text-xl font-heading font-medium mt-6 mb-3">Life and Character</h4>
                    <p>
                      Holy Mother's life exemplified the ideal of spiritual motherhood. After Sri Ramakrishna's passing, she became a spiritual guide to his disciples and countless devotees. Living a simple life, she embodied the virtues of unconditional love, patience, forgiveness, and selfless service. She accepted all who came to her, regardless of their background or past actions, treating everyone as her own child.
                    </p>

                    <h4 className="text-xl font-heading font-medium mt-6 mb-3">Key Teachings</h4>
                    <ul className="space-y-2 ml-0 pl-0">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-3 flex-shrink-0"></span>
                        <span>Universal motherhood - seeing and serving all as one's own children</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-3 flex-shrink-0"></span>
                        <span>The importance of spiritual practice in daily life</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-3 flex-shrink-0"></span>
                        <span>Patience and perseverance on the spiritual path</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-3 flex-shrink-0"></span>
                        <span>The power of selfless love and service</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-3 flex-shrink-0"></span>
                        <span>The dignity and spiritual equality of women</span>
                      </li>
                    </ul>

                    <h4 className="text-xl font-heading font-medium mt-6 mb-3">Legacy</h4>
                    <p>
                      Holy Mother's life represents the practical application of spiritual ideals. She demonstrated how divine consciousness can be expressed through the roles and relationships of everyday life. Her universal motherhood continues to inspire spiritual seekers worldwide, showing that profound spirituality can coexist with ordinary human activities and responsibilities.
                    </p>

                    <div className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 p-6 rounded-lg my-6">
                      <h4 className="text-xl font-heading font-semibold mb-2">Famous Saying</h4>
                      <blockquote className="italic text-gray-700">
                        "If you want peace, my child, don't look into anybody's faults. Look into your own faults. Learn to make the world your own. No one is a stranger, my child; the whole world is your own."
                      </blockquote>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="swami-vivekananda" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="rounded-lg overflow-hidden shadow-md mb-4">
                      <img
                        src="/lovable-uploads/0ee38c83-a4f6-4d5b-8142-1c66e6c7ff04.png"
                        alt="Swami Vivekananda"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 p-4 rounded-lg">
                      <h4 className="text-lg font-medium mb-2">Key Information</h4>
                      <ul className="space-y-2 list-none pl-0">
                        <li><strong>Born:</strong> January 12, 1863</li>
                        <li><strong>Passed Away:</strong> July 4, 1902</li>
                        <li><strong>Birthplace:</strong> Kolkata, India</li>
                        <li><strong>Birth Name:</strong> Narendranath Datta</li>
                      </ul>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-heading font-semibold mb-4">Swami Vivekananda</h3>
                    <p>
                      Swami Vivekananda (1863-1902) was the chief disciple of Sri Ramakrishna and the founder of the Ramakrishna Math and Ramakrishna Mission. Born Narendranath Datta in Kolkata, he was drawn to Sri Ramakrishna's spiritual wisdom while maintaining his questioning intellect and commitment to social service.
                    </p>

                    <h4 className="text-xl font-heading font-medium mt-6 mb-3">Life and Work</h4>
                    <p>
                      After Sri Ramakrishna's passing, Swami Vivekananda traveled extensively throughout India, witnessing firsthand the suffering of the masses. He later represented Hinduism at the World's Parliament of Religions in Chicago in 1893, where his powerful address began with "Sisters and Brothers of America," earning him a standing ovation. This marked the beginning of his influential work in the West, introducing Vedanta philosophy and yoga to a global audience.
                    </p>

                    <h4 className="text-xl font-heading font-medium mt-6 mb-3">Key Teachings</h4>
                    <ul className="space-y-2 ml-0 pl-0">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-3 flex-shrink-0"></span>
                        <span>Practical Vedanta - applying spiritual principles to daily life</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-3 flex-shrink-0"></span>
                        <span>Service to humanity as worship of the Divine</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-3 flex-shrink-0"></span>
                        <span>The strength and self-reliance of the individual soul</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-3 flex-shrink-0"></span>
                        <span>The harmony of religion and science</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-3 flex-shrink-0"></span>
                        <span>The importance of character building and education</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-3 flex-shrink-0"></span>
                        <span>The revival of India through spiritual awakening and social reform</span>
                      </li>
                    </ul>

                    <h4 className="text-xl font-heading font-medium mt-6 mb-3">Legacy</h4>
                    <p>
                      Swami Vivekananda's impact extends far beyond religious circles. He is credited with introducing Eastern spiritual concepts to the West, inspiring national awakening in India, and establishing organizations dedicated to both spiritual practice and humanitarian service. His emphasis on strength, self-reliance, and service continues to inspire millions worldwide.
                    </p>

                    <div className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 p-6 rounded-lg my-6">
                      <h4 className="text-xl font-heading font-semibold mb-2">Famous Saying</h4>
                      <blockquote className="italic text-gray-700">
                        "Arise, awake, and stop not until the goal is reached."
                      </blockquote>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HolyTrinity;
