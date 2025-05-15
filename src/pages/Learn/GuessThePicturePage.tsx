import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import GuessThePictureGame from '../../components/games/GuessThePictureGame';
import SeminarToast from '../../components/shared/SeminarToast';
import SocialShareButtons from '../../components/shared/SocialShareButtons';

const GuessThePicturePage = () => {
  return (
    <PageLayout title="Guess the Picture Game" className="no-top-padding">
      <SeminarToast />
      <GuessThePictureGame
        socialShareButtons={
          <SocialShareButtons
            title="Play the Guess the Picture Game - Ramakrishna Centre, Johannesburg"
            description="Test your knowledge by identifying important figures in the Ramakrishna tradition from their pictures in this fun and educational game."
            path="/learn/games/guess-picture"
          />
        }
      />
    </PageLayout>
  );
};

export default GuessThePicturePage;
