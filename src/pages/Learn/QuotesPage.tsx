import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import WisdomWordsGame from '../../components/games/WisdomWordsGame';
import SeminarToast from '../../components/shared/SeminarToast';

const QuotesPage = () => {
  return (
    <PageLayout>
      <SeminarToast />
      <WisdomWordsGame />
    </PageLayout>
  );
};

export default QuotesPage;
