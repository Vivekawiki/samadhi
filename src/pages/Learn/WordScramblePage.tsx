import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import SanskritScrambleGame from '../../components/games/SanskritScrambleGame';
import SeminarToast from '../../components/shared/SeminarToast';

const WordScramblePage = () => {
  return (
    <PageLayout>
      <SeminarToast />
      <SanskritScrambleGame />
    </PageLayout>
  );
};

export default WordScramblePage;
