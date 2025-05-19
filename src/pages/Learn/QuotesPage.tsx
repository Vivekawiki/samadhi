import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import WisdomWordsGame from '../../components/games/WisdomWordsGame';
import SocialShareButtons from '../../components/shared/SocialShareButtons';

const QuotesPage = () => {
  return (
    <PageLayout className="no-top-padding">
      <WisdomWordsGame
        socialShareButtons={
          <SocialShareButtons
            title="Play the Wisdom Quotes Game - Ramakrishna Centre, Johannesburg"
            description="Rearrange words to form wisdom sayings from great spiritual teachers. Test your knowledge of quotes from Sri Ramakrishna, Sri Sarada Devi, and Swami Vivekananda."
            path="/learn/games/quotes"
          />
        }
      />
    </PageLayout>
  );
};

export default QuotesPage;
