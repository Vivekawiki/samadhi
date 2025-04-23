import React, { useState, useEffect, useCallback, useRef } from 'react';

// --- Word Data ---
// Add more words as needed!
const wordList = [
  { sanskrit: 'dharma', meaning: 'Duty, righteousness, cosmic law, inherent nature' },
  { sanskrit: 'karma', meaning: 'Action, work, deed; also the principle of cause and effect' },
  { sanskrit: 'moksha', meaning: 'Liberation, release, emancipation from the cycle of rebirth' },
  { sanskrit: 'atman', meaning: 'The individual self or soul, the true self beyond ego' },
  { sanskrit: 'brahman', meaning: 'The ultimate reality, the Absolute, the supreme cosmic spirit' },
  { sanskrit: 'yoga', meaning: 'Union (with the divine), a spiritual discipline or path' },
  { sanskrit: 'guru', meaning: 'Teacher, spiritual guide, remover of darkness' },
  { sanskrit: 'mantra', meaning: 'Sacred utterance, sound, or phrase used in meditation' },
  { sanskrit: 'puja', meaning: 'Worship, ritual offering, devotional service' },
  { sanskrit: 'shakti', meaning: 'Power, energy, the divine feminine creative power' },
  { sanskrit: 'bhakti', meaning: 'Devotion, love, surrender (especially to a deity)' },
  { sanskrit: 'jnana', meaning: 'Knowledge, wisdom, insight (especially spiritual)' },
  { sanskrit: 'samsara', meaning: 'The cycle of birth, death, and rebirth; worldly existence' },
  { sanskrit: 'ananda', meaning: 'Bliss, joy, divine happiness' },
  { sanskrit: 'om', meaning: 'Primordial sound, sacred syllable representing Brahman' },
  { sanskrit: 'veda', meaning: 'Knowledge, wisdom; refers to the ancient Hindu scriptures' },
  { sanskrit: 'seva', meaning: 'Selfless service, work performed without attachment to results' },
];

// --- Helper Function ---
const shuffleString = (str) => {
  if (!str) return '';
  const arr = str.split('');
  let shuffledArr = [...arr];

  // Ensure it's actually shuffled (especially important for short words)
  let attempts = 0;
  while (shuffledArr.join('') === str && attempts < 10) {
    for (let i = shuffledArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }
    attempts++;
  }
  // If still unshuffled after attempts (very unlikely), just reverse it
  if (shuffledArr.join('') === str) {
      return arr.reverse().join('');
  }

  return shuffledArr.join('');
};

// --- React Component ---
function SanskritScrambleGame() {
  // --- State ---
  const [availableWords, setAvailableWords] = useState([]);
  const [currentWordData, setCurrentWordData] = useState(null); // { sanskrit: '...', meaning: '...' }
  const [scrambledWord, setScrambledWord] = useState('');
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');
  const [isCorrect, setIsCorrect] = useState(null); // null, true, or false
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wordsCompleted, setWordsCompleted] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [totalWords] = useState(wordList.length);
  const [wordCompleted, setWordCompleted] = useState(false);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const MAX_INCORRECT_GUESSES = 3;

  const inputRef = useRef(null); // For focusing the input

  // --- Game Logic Functions ---

  const loadNextWord = useCallback(() => {
    if (availableWords.length === 0) {
      setGameOver(true);
      setMessage(`Game Over! You got ${correctAnswers} correct out of ${wordsCompleted} words completed.`);
      setCurrentWordData(null);
      setScrambledWord('');
      return;
    }

    setWordCompleted(false);
    setIncorrectGuesses(0);

    // Select and remove a random word from the available list
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    const nextWord = availableWords[randomIndex];
    const remainingWords = availableWords.filter((_, index) => index !== randomIndex);

    setCurrentWordData(nextWord);
    setScrambledWord(shuffleString(nextWord.sanskrit));
    setAvailableWords(remainingWords);
    setUserGuess('');
    setMessage('');
    setIsCorrect(null);
    setShowAnswer(false);
    setShowHint(false);
    // Words attempted is now incremented when a word is completed (in handleContinue)

    // Focus the input field for the next word
    inputRef.current?.focus();

  }, [availableWords, correctAnswers, wordsCompleted, currentWordData]); // Add currentWordData dependency

  const resetGame = useCallback(() => {
    setAvailableWords([...wordList]); // Reset the list of available words
    setCorrectAnswers(0);
    setWordsCompleted(0);
    setCurrentWordData(null); // Will be set by loadNextWord
    setScrambledWord('');
    setUserGuess('');
    setMessage('');
    setIsCorrect(null);
    setShowAnswer(false);
    setShowHint(false);
    setWordCompleted(false);
    setIncorrectGuesses(0);
    setGameOver(false);
    // Initial word load will happen in useEffect based on availableWords changing
  }, []); // No dependencies needed as it resets state directly

  // Initial game load and reset logic
  useEffect(() => {
    // If game is reset (availableWords gets populated) and no current word, load the first one.
    if (availableWords.length > 0 && !currentWordData && !gameOver) {
       // Use a slight delay to ensure state updates from resetGame are processed
      setTimeout(() => loadNextWord(), 0);
    }
  }, [availableWords, currentWordData, gameOver, loadNextWord]); // Dependencies trigger effect


  // Call resetGame on initial mount
   useEffect(() => {
       resetGame();
   }, [resetGame]); // Depend on resetGame


  const checkGuess = useCallback(() => {
    if (!userGuess || !currentWordData || showAnswer || gameOver) return;

    const guessLower = userGuess.trim().toLowerCase();
    const targetLower = currentWordData.sanskrit.toLowerCase();

    if (guessLower === targetLower) {
      setCorrectAnswers(prev => prev + 1);
      setWordsCompleted(prev => prev + 1); // Increment completed words counter
      setMessage(`Correct! "${currentWordData.sanskrit}" means: ${currentWordData.meaning}`);
      setIsCorrect(true);
      setShowAnswer(true); // Show answer/meaning after correct guess
      setShowHint(false); // Hide hint when showing answer
      setWordCompleted(true); // Mark word as completed to show continue/end options
    } else {
      // Increment incorrect guesses counter
      const newIncorrectGuesses = incorrectGuesses + 1;
      setIncorrectGuesses(newIncorrectGuesses);

      if (newIncorrectGuesses >= MAX_INCORRECT_GUESSES) {
        // After 3 incorrect guesses, show hint automatically
        setShowHint(true);
        setMessage(`That's ${MAX_INCORRECT_GUESSES} incorrect guesses. Here's a hint to help you!`);
      } else {
        setMessage(`Incorrect. Try again! (${newIncorrectGuesses}/${MAX_INCORRECT_GUESSES} guesses)`);
      }

      setIsCorrect(false);
      setUserGuess(''); // Clear input on incorrect guess
      inputRef.current?.focus(); // Re-focus input
    }
  }, [userGuess, currentWordData, showAnswer, gameOver, incorrectGuesses, MAX_INCORRECT_GUESSES]);


  const handleSkip = useCallback(() => {
    if (!currentWordData || gameOver) return;
    setWordsCompleted(prev => prev + 1); // Increment completed words counter
    setMessage(`The word was "${currentWordData.sanskrit}": ${currentWordData.meaning}`);
    setIsCorrect(false); // Mark as incorrect for styling purposes
    setShowAnswer(true);
    setShowHint(false); // Hide hint when showing answer
    setWordCompleted(true); // Mark word as completed to show continue/end options
  }, [currentWordData, gameOver, loadNextWord]);

  const handleHint = useCallback(() => {
    if (!currentWordData || gameOver || showAnswer || wordCompleted) return;
    setShowHint(true);
    // Don't automatically advance - let the player still try to guess
  }, [currentWordData, gameOver, showAnswer, wordCompleted]);

  const handleContinue = useCallback(() => {
    if (!wordCompleted) return;
    loadNextWord();
  }, [wordCompleted, loadNextWord]);

  const handleEndGame = useCallback(() => {
    if (!wordCompleted) return;
    setGameOver(true);
    setMessage(`Game ended! You got ${correctAnswers} correct out of ${wordsCompleted} words completed.`);
    setCurrentWordData(null);
    setScrambledWord('');
  }, [wordCompleted, correctAnswers, wordsCompleted]);

  const handleInputChange = (event) => {
    // Allow only letters for Sanskrit words (basic filter)
    setUserGuess(event.target.value.replace(/[^a-zA-Z]/g, ''));
    // Reset message if user starts typing after an incorrect message
    if (isCorrect === false && message) {
        setMessage('');
        setIsCorrect(null);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      checkGuess();
    }
  };

  // --- Dynamically determine message class ---
  const messageClass = isCorrect === true
    ? 'text-green-700 bg-gradient-to-r from-green-100 to-white border-green-300'
    : isCorrect === false
    ? 'text-red-700 bg-gradient-to-r from-red-100 to-white border-red-300'
    : 'text-gray-700 bg-gradient-to-r from-gray-100 to-white border-gray-300'; // Neutral or initial state


  // --- Render ---
  return (
    <div className="min-h-screen bg-gradient-to-r from-indian-cream to-white flex flex-col items-center p-4 sm:p-8 pt-6 sm:pt-10 text-center relative z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg border border-indian-saffron/30 relative bg-gradient-to-br from-spiritual-50/30 to-white">
          <h1 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-2 sm:mb-4 text-spiritual-600">Sanskrit Word Scramble</h1>
          <p className="text-base sm:text-lg text-center mb-4 sm:mb-6 text-gray-700">
            Unscramble Sanskrit words and learn their meanings.
          </p>

          {gameOver ? (
            // --- Game Over Screen ---
            <div className="text-center py-8">
              <p className={`text-xl font-semibold mb-6 p-4 rounded border shadow-sm ${messageClass}`}>
                {message}
              </p>
              <button
                onClick={resetGame}
                className="px-8 py-3 bg-indian-saffron text-white rounded-lg font-semibold hover:bg-indian-saffron/80 transition-colors shadow-md"
              >
                Play Again
              </button>
            </div>
          ) : currentWordData ? (
            // --- Active Game Screen ---
            <>
              <div className="text-right text-lg font-semibold text-spiritual-600 mb-4">
                Score: {correctAnswers} correct / {wordsCompleted} completed
              </div>

              <div className="mb-4 sm:mb-6 p-4 sm:p-6 rounded-lg border border-spiritual-200 shadow-inner bg-gradient-to-br from-spiritual-100 to-white">
                <p className="mb-3 text-sm text-spiritual-500 uppercase tracking-wider">Unscramble this word:</p>
                <p className="text-3xl sm:text-4xl font-bold text-spiritual-700 tracking-[0.15em] sm:tracking-[0.2em] uppercase select-none mb-2">
                  {scrambledWord}
                </p>
                <p className="text-xs text-spiritual-500">({currentWordData.sanskrit.length} letters)</p>
              </div>

              <div className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <input
                  ref={inputRef}
                  type="text"
                  value={userGuess}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Your guess..."
                  maxLength={currentWordData.sanskrit.length + 2} // Allow a bit extra space
                  className={`w-full sm:w-64 px-4 py-3 border-2 rounded-lg text-center text-xl focus:outline-none focus:ring-2 transition-colors duration-200 ${
                    isCorrect === true ? 'border-green-500 ring-green-300' :
                    isCorrect === false ? 'border-red-500 ring-red-300' :
                    'border-spiritual-300 focus:ring-spiritual-400'
                  }`}
                  disabled={showAnswer} // Disable input when answer is shown
                  autoFocus
                />
                <button
                  onClick={checkGuess}
                  disabled={!userGuess || showAnswer || wordCompleted}
                  className="w-full sm:w-auto px-6 py-3 bg-indian-saffron text-white rounded-lg font-semibold hover:bg-indian-saffron/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                >
                  Submit Guess
                </button>
              </div>

              {message && (
                <div className={`mt-4 mb-6 p-3 rounded border text-center shadow-sm ${messageClass}`}>
                  {message}
                </div>
              )}

              {!wordCompleted ? (
                <div className="mt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={handleHint}
                    disabled={showHint || showAnswer}
                    className="px-5 py-2 bg-spiritual-500 text-white text-sm rounded-lg font-semibold hover:bg-spiritual-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                  >
                    Show Hint
                  </button>
                  <button
                    onClick={handleSkip}
                    disabled={showAnswer}
                    className="px-5 py-2 bg-gray-500 text-white text-sm rounded-lg font-semibold hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                  >
                    Skip / Show Answer
                  </button>
                </div>
              ) : (
                <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={handleContinue}
                    className="px-6 py-3 bg-spiritual-600 text-white rounded-lg font-semibold hover:bg-spiritual-700 transition-colors shadow-md"
                  >
                    Try Another Word
                  </button>
                  <button
                    onClick={handleEndGame}
                    className="px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors shadow-md"
                  >
                    End Game
                  </button>
                </div>
              )}

              {/* Hint display */}
              {showHint && !showAnswer && (
                <div className="mt-4 p-3 border border-spiritual-200 rounded-lg text-spiritual-700 bg-gradient-to-br from-spiritual-100/90 to-white">
                  <p className="font-semibold mb-1">Hint:</p>
                  <p>{currentWordData.meaning}</p>
                </div>
              )}
            </>
          ) : (
            // --- Loading State ---
            <div className="text-center py-8 text-spiritual-600">
              Loading game...
            </div>
          )}

          {/* Om symbol decorative elements */}
          <div className="absolute top-2 right-2 text-3xl text-indian-saffron opacity-60">ॐ</div>
          <div className="absolute bottom-2 left-2 text-3xl text-indian-saffron opacity-60">ॐ</div>
        </div>
      </div>
    </div>
  );
}

export default SanskritScrambleGame;
