import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import GuessThePictureGame from '../../components/games/GuessThePictureGame';

const GuessThePicturePage = () => {
  return (
    <PageLayout>
      <GuessThePictureGame />
    </PageLayout>
  );
};

export default GuessThePicturePage;
