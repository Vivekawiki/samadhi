import React from 'react';
import SectionHeader from '../../components/shared/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';

const Vedanta = () => {
  const corePrinciples = [
    {
      title: "Oneness of Reality (Brahman)",
      description: "The ultimate reality is one, indivisible, pure existence-consciousness-bliss called Brahman."
    },
    {
      title: "Divinity of the Soul (Atman)",
      description: "Every individual soul is inherently divine, eternal, and potentially perfect."
    },
    {
      title: "Identity of Atman and Brahman",
      description: "The individual soul (Atman) is, in its essential nature, identical with the ultimate reality (Brahman)."
    },
    {
      title: "Unity of Existence",
      description: "All beings and the entire universe are interconnected manifestations of that one underlying reality."
    },
    {
      title: "Harmony of Religions",
      description: "Different religions are valid paths leading diverse individuals towards the same ultimate truth or God-realization."
    },
    {
      title: "Goal of Life is Liberation (Moksha)",
      description: "The primary purpose of human life is to realize and manifest this inherent divinity, achieving freedom (Moksha)."
    },
    {
      title: "Paths to Realization (Yogas)",
      description: "This can be achieved through one or more of the following paths: selfless work (Karma Yoga), devotion (Bhakti Yoga), psychic control (Raja Yoga), or discrimination (Jnana Yoga)."
    },
    {
      title: "Service as Worship (Practical Vedanta)",
      description: "Serving humanity, seeing the divine within all beings, is a practical means of worship and realizing God."
    }
  ];

  return (
    <div className="animate-fade-in">
      <SectionHeader
        title="Vedanta Philosophy"
        subtitle="Understanding the philosophy behind our approach to service and life"
        alignment="left"
      />

      <div className="prose prose-lg max-w-none mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 p-6 rounded-lg shadow-sm h-[96%]">
            <h3 className="text-2xl font-heading font-semibold mb-4">What is Vedanta?</h3>
            <p className="mb-4">
              The ideology of the Centre consists of the eternal principles of Vedanta as lived and experienced by Sri Ramakrishna and expounded by Swami Vivekananda.
            </p>
            <h4 className="text-lg font-heading font-semibold mb-2">This Ideology Has Three Characteristics:</h4>
            <ol className="list-decimal pl-5 mb-4 space-y-1">
              <li>It is modern in the sense that the ancient principles of Vedanta are expressed in the current context</li>
              <li>It is universal, that is, it is meant for the whole of humanity</li>
              <li>It is practical in the sense that its principles can be applied to solve the problems of day-to-day life</li>
            </ol>
            <h4 className="text-lg font-heading font-semibold mb-2">The Two Main Principles of Vedanta Philosophy Are:</h4>
            <ol className="list-decimal pl-5 space-y-1">
              <li>God-realisation is the ultimate goal of life</li>
              <li>Each soul is potentially divine</li>
            </ol>
          </div>

          <div className="rounded-lg overflow-hidden shadow-xl border-[3px] border-indian-saffron/30 transition-transform duration-300 hover:scale-[1.02] h-[95%] w-[95%] mx-auto">
            <img
              src="/pics/vedanta.jpeg"
              alt="Vedanta Philosophy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h3 className="text-2xl font-heading font-semibold mb-6">Core Principles of Vedanta</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {corePrinciples.map((principle, index) => (
            <Card key={index} className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 h-full relative">
              <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-indian-saffron text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-heading font-semibold mb-3 text-center">{principle.title}</h4>
                <p className="text-gray-700 text-justify">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 h-full">
            <CardContent className="p-6">
              <h3 className="text-2xl font-heading font-semibold mb-4">Vedanta and Sri Ramakrishna</h3>
              <p>
                Sri Ramakrishna brought a renewed understanding to Vedanta through his direct spiritual experiences. He emphasized that Vedantic truths are not mere theory but can be realized through sincere spiritual practice. His unique contribution was demonstrating the harmony of all religions - that different spiritual paths lead to the same ultimate goal.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 h-full">
            <CardContent className="p-6 pl-4">
              <h3 className="text-2xl font-heading font-semibold mb-4">Practical Vedanta</h3>
              <p className="mb-4">
                Swami Vivekananda, the foremost disciple of Sri Ramakrishna, propagated what he called "Practical Vedanta" - the application of Vedantic principles in daily life. He emphasized:
              </p>
              <ul className="space-y-2 ml-0 pl-0">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-3 flex-shrink-0"></span>
                  <span>Seeing the Divine in every being and serving humanity as an expression of worship</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-3 flex-shrink-0"></span>
                  <span>Strengthening character and moral values based on spiritual understanding</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-3 flex-shrink-0"></span>
                  <span>Working for one's own spiritual growth while contributing to the welfare of society</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-3 flex-shrink-0"></span>
                  <span>Harmonizing reason and faith, ancient wisdom and modern knowledge</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Vedanta;
