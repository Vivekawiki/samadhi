import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import SanskritScrambleGame from '../../components/games/SanskritScrambleGame';
import SocialShareButtons from '../../components/shared/SocialShareButtons';

const WordScramblePage = () => {
  return (
    <PageLayout className="no-top-padding">
      <SanskritScrambleGame
        socialShareButtons={
          <SocialShareButtons
            title="Play the Sanskrit Word Scramble Game - Ramakrishna Centre, Johannesburg"
            description="Unscramble Sanskrit words and learn their meanings in this vocabulary-building game. A fun way to become familiar with important terms in Hindu philosophy."
            path="/learn/games/word-scramble"
          />
        }
      />
    </PageLayout>
  );
};

export default WordScramblePage;
