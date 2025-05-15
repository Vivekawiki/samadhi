import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import GuessThePictureGame from '../../components/games/GuessThePictureGame';
import SeminarToast from '../../components/shared/SeminarToast';

const GuessThePicturePage = () => {
  return (
    <PageLayout title="Guess the Picture Game">
      <SeminarToast />
      <GuessThePictureGame />
    </PageLayout>
  );
};

export default GuessThePicturePage;
