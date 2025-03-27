
import React from 'react';
import SectionHeader from '../../components/shared/SectionHeader';

const Vedanta = () => {
  return (
    <div className="animate-fade-in">
      <SectionHeader 
        title="Vedanta Philosophy" 
        subtitle="Understanding the ancient wisdom tradition that forms the foundation of our teachings"
        alignment="left"
      />
      
      <div className="prose prose-lg max-w-none mb-12">
        <h3 className="text-2xl font-heading font-semibold mb-4">What is Vedanta?</h3>
        <p>
          Vedanta is one of the world's oldest and most profound philosophical systems, derived from the concluding portions of the Vedas, the ancient sacred texts of India. The word "Vedanta" literally means "the end of the Vedas" or "the culmination of knowledge." It represents the essence of Vedic wisdom and offers insights into the nature of reality, consciousness, and the purpose of human existence.
        </p>
        
        <div className="my-8 rounded-lg overflow-hidden shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Spiritual Nature Scene" 
            className="w-full h-auto"
          />
        </div>
        
        <h3 className="text-2xl font-heading font-semibold mb-4">Core Principles of Vedanta</h3>
        <ul>
          <li><strong>Divinity of the Soul:</strong> Vedanta teaches that the true nature of every being is divine (Atman), which is identical with the universal consciousness (Brahman).</li>
          <li><strong>Unity of Existence:</strong> All existence is an expression of one ultimate reality. The apparent diversity is a manifestation of the same underlying truth.</li>
          <li><strong>Karma and Rebirth:</strong> Our actions (karma) create impressions that influence our future experiences, potentially across multiple lifetimes.</li>
          <li><strong>Four Paths to Realization:</strong> Vedanta recognizes four main spiritual paths - Jnana Yoga (path of knowledge), Bhakti Yoga (path of devotion), Karma Yoga (path of selfless action), and Raja Yoga (path of meditation).</li>
          <li><strong>Liberation (Moksha):</strong> The ultimate goal of life is to realize one's true nature and attain liberation from the cycle of birth and death.</li>
        </ul>
        
        <h3 className="text-2xl font-heading font-semibold mb-4">Vedanta and Sri Ramakrishna</h3>
        <p>
          Sri Ramakrishna brought a renewed understanding to Vedanta through his direct spiritual experiences. He emphasized that Vedantic truths are not mere theory but can be realized through sincere spiritual practice. His unique contribution was demonstrating the harmony of all religions - that different spiritual paths lead to the same ultimate goal.
        </p>
        
        <h3 className="text-2xl font-heading font-semibold mb-4">Practical Vedanta</h3>
        <p>
          Swami Vivekananda, the foremost disciple of Sri Ramakrishna, propagated what he called "Practical Vedanta" - the application of Vedantic principles in daily life. He emphasized:
        </p>
        <ul>
          <li>Seeing the Divine in every being and serving humanity as an expression of worship</li>
          <li>Strengthening character and moral values based on spiritual understanding</li>
          <li>Working for one's own spiritual growth while contributing to the welfare of society</li>
          <li>Harmonizing reason and faith, ancient wisdom and modern knowledge</li>
        </ul>
        
        <div className="bg-gray-50 p-6 rounded-lg my-8 border-l-4 border-spiritual-500">
          <h4 className="text-xl font-heading font-semibold mb-2">Vedanta at Our Centre</h4>
          <p>
            At the Ramakrishna Centre of South Africa, Johannesburg Branch, we offer various programs to help individuals understand and practice Vedanta in their daily lives:
          </p>
          <ul>
            <li>Regular classes on Vedantic texts</li>
            <li>Meditation sessions based on Vedantic principles</li>
            <li>Spiritual retreats for deeper exploration</li>
            <li>Discussion groups that apply Vedantic wisdom to contemporary challenges</li>
          </ul>
        </div>
        
        <p>
          Vedanta offers a comprehensive framework for understanding life's deepest questions and provides practical guidance for spiritual growth. It remains as relevant today as it was thousands of years ago, offering solutions to modern problems through its timeless wisdom.
        </p>
      </div>
    </div>
  );
};

export default Vedanta;
