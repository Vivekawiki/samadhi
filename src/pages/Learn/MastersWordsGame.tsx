import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import MastersWordsGame from '../../components/games/MastersWordsGame';
import SeminarToast from '../../components/shared/SeminarToast';

const MastersWordsGamePage = () => {
  return (
    <PageLayout>
      <SeminarToast />
      <MastersWordsGame />
    </PageLayout>
  );
};

export default MastersWordsGamePage;
