import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import MastersWordsGame from '../../components/games/MastersWordsGame';
import SocialShareButtons from '../../components/shared/SocialShareButtons';

const MastersWordsGamePage = () => {
  return (
    <PageLayout className="no-top-padding">
      <MastersWordsGame
        socialShareButtons={
          <SocialShareButtons
            title="Play the Word Master Game - Ramakrishna Centre, Johannesburg"
            description="A Wordle-like game where you guess English words spoken by Sri Ramakrishna. Test your vocabulary and learn about Sri Ramakrishna's teachings."
            path="/learn/games/wordle"
          />
        }
      />
    </PageLayout>
  );
};

export default MastersWordsGamePage;
