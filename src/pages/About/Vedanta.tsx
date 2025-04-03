
import React from 'react';
import SectionHeader from '../../components/shared/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';

const Vedanta = () => {
  const corePrinciples = [
    {
      title: "Divinity of the Soul",
      description: "Vedanta teaches that the true nature of every being is divine (Atman), which is identical with the universal consciousness (Brahman)."
    },
    {
      title: "Unity of Existence",
      description: "All existence is an expression of one ultimate reality. The apparent diversity is a manifestation of the same underlying truth."
    },
    {
      title: "Karma and Rebirth",
      description: "Our actions (karma) create impressions that influence our future experiences, potentially across multiple lifetimes."
    },
    {
      title: "Four Paths to Realization",
      description: "Vedanta recognizes four main spiritual paths - Jnana Yoga (path of knowledge), Bhakti Yoga (path of devotion), Karma Yoga (path of selfless action), and Raja Yoga (path of meditation)."
    },
    {
      title: "Liberation (Moksha)",
      description: "The ultimate goal of life is to realize one's true nature and attain liberation from the cycle of birth and death."
    }
  ];

  return (
    <div className="animate-fade-in">
      <SectionHeader 
        title="Vedanta Philosophy" 
        subtitle="Understanding the ancient wisdom tradition that forms the foundation of our teachings"
        alignment="left"
      />
      
      <div className="prose prose-lg max-w-none mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-heading font-semibold mb-4">What is Vedanta?</h3>
            <p>
              Vedanta is one of the world's oldest and most profound philosophical systems, derived from the concluding portions of the Vedas, the ancient sacred texts of India. The word "Vedanta" literally means "the end of the Vedas" or "the culmination of knowledge." It represents the essence of Vedic wisdom and offers insights into the nature of reality, consciousness, and the purpose of human existence.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md h-full flex">
            <img 
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Spiritual Nature Scene" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h3 className="text-2xl font-heading font-semibold mb-6">Core Principles of Vedanta</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {corePrinciples.map((principle, index) => (
            <Card key={index} className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 h-full">
              <CardContent className="p-6">
                <h4 className="text-xl font-heading font-semibold mb-3">{principle.title}</h4>
                <p className="text-gray-700">{principle.description}</p>
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
            <CardContent className="p-6">
              <h3 className="text-2xl font-heading font-semibold mb-4">Practical Vedanta</h3>
              <p className="mb-4">
                Swami Vivekananda, the foremost disciple of Sri Ramakrishna, propagated what he called "Practical Vedanta" - the application of Vedantic principles in daily life. He emphasized:
              </p>
              <ul className="space-y-2 ml-6">
                <li>Seeing the Divine in every being and serving humanity as an expression of worship</li>
                <li>Strengthening character and moral values based on spiritual understanding</li>
                <li>Working for one's own spiritual growth while contributing to the welfare of society</li>
                <li>Harmonizing reason and faith, ancient wisdom and modern knowledge</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 mb-12">
          <CardContent className="p-6">
            <h4 className="text-xl font-heading font-semibold mb-2">Vedanta at Our Centre</h4>
            <p className="mb-4">
              At the Ramakrishna Centre of South Africa, Johannesburg Branch, we offer various programs to help individuals understand and practice Vedanta in their daily lives:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/50 p-4 rounded border border-indian-saffron/20 text-center">
                <p className="font-medium">Regular classes on Vedantic texts</p>
              </div>
              <div className="bg-white/50 p-4 rounded border border-indian-saffron/20 text-center">
                <p className="font-medium">Meditation sessions based on Vedantic principles</p>
              </div>
              <div className="bg-white/50 p-4 rounded border border-indian-saffron/20 text-center">
                <p className="font-medium">Spiritual retreats for deeper exploration</p>
              </div>
              <div className="bg-white/50 p-4 rounded border border-indian-saffron/20 text-center">
                <p className="font-medium">Discussion groups that apply Vedantic wisdom</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 p-6 rounded-lg mb-4">
          <p className="text-lg text-center italic">
            Vedanta offers a comprehensive framework for understanding life's deepest questions and provides practical guidance for spiritual growth. It remains as relevant today as it was thousands of years ago, offering solutions to modern problems through its timeless wisdom.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vedanta;
