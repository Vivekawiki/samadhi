import React, { useState, useEffect } from 'react';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define the word list for the game
const WORD_LIST = [
  'KARMA', 'DHARMA', 'MOKSHA', 'ATMAN', 'BRAHMAN', 'VEDAS', 'MANTRA', 'PRANA', 
  'YOGA', 'ASANA', 'CHAKRA', 'BHAKTI', 'JNANA', 'GITA', 'GURU', 'SAMSARA',
  'MAYA', 'AHIMSA', 'SATYA', 'DEVI', 'SHIVA', 'VISHNU', 'SHAKTI', 'PUJA'
];

// Define the maximum number of attempts
const MAX_ATTEMPTS = 6;

const SpiritualWordleGame: React.FC = () => {
  // State for the game
  const [targetWord, setTargetWord] = useState('');
  const [attempts, setAttempts] = useState<string[]>([]);
  const [currentAttempt, setCurrentAttempt] = useState('');
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [message, setMessage] = useState('');
  const [showInstructions, setShowInstructions] = useState(false);

  // Initialize the game
  useEffect(() => {
    startNewGame();
  }, []);

  // Start a new game
  const startNewGame = () => {
    const randomIndex = Math.floor(Math.random() * WORD_LIST.length);
    setTargetWord(WORD_LIST[randomIndex]);
    setAttempts([]);
    setCurrentAttempt('');
    setGameStatus('playing');
    setMessage('');
  };

  // Handle keyboard input
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (gameStatus !== 'playing') return;

    if (e.key === 'Enter') {
      submitAttempt();
    } else if (e.key === 'Backspace') {
      setCurrentAttempt(prev => prev.slice(0, -1));
    } else if (/^[A-Za-z]$/.test(e.key) && currentAttempt.length < targetWord.length) {
      setCurrentAttempt(prev => prev + e.key.toUpperCase());
    }
  };

  // Handle virtual keyboard input
  const handleVirtualKeyPress = (key: string) => {
    if (gameStatus !== 'playing') return;

    if (key === 'Enter') {
      submitAttempt();
    } else if (key === 'Backspace') {
      setCurrentAttempt(prev => prev.slice(0, -1));
    } else if (/^[A-Z]$/.test(key) && currentAttempt.length < targetWord.length) {
      setCurrentAttempt(prev => prev + key);
    }
  };

  // Submit the current attempt
  const submitAttempt = () => {
    if (currentAttempt.length !== targetWord.length) {
      setMessage(`Word must be ${targetWord.length} letters long`);
      setTimeout(() => setMessage(''), 2000);
      return;
    }

    if (!WORD_LIST.includes(currentAttempt)) {
      setMessage('Not in word list');
      setTimeout(() => setMessage(''), 2000);
      return;
    }

    const newAttempts = [...attempts, currentAttempt];
    setAttempts(newAttempts);
    setCurrentAttempt('');

    if (currentAttempt === targetWord) {
      setGameStatus('won');
      setMessage(`Congratulations! You found the word in ${newAttempts.length} ${newAttempts.length === 1 ? 'try' : 'tries'}`);
    } else if (newAttempts.length >= MAX_ATTEMPTS) {
      setGameStatus('lost');
      setMessage(`Game over! The word was ${targetWord}`);
    }
  };

  // Get the status of a letter in an attempt
  const getLetterStatus = (letter: string, index: number, attempt: string) => {
    if (letter === targetWord[index]) {
      return 'correct'; // Correct letter in correct position
    } else if (targetWord.includes(letter)) {
      return 'present'; // Correct letter in wrong position
    } else {
      return 'absent'; // Letter not in the word
    }
  };

  // Render the keyboard
  const renderKeyboard = () => {
    const rows = [
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace']
    ];

    // Get all used letters and their statuses
    const letterStatuses: Record<string, string> = {};
    attempts.forEach(attempt => {
      attempt.split('').forEach((letter, index) => {
        const status = getLetterStatus(letter, index, attempt);
        // Only upgrade status (absent -> present -> correct)
        if (letterStatuses[letter] === 'correct') {
          return;
        } else if (letterStatuses[letter] === 'present' && status !== 'correct') {
          return;
        }
        letterStatuses[letter] = status;
      });
    });

    return (
      <div className="mt-6">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center mb-2">
            {row.map((key) => {
              let buttonClass = "mx-1 text-sm font-medium rounded px-3 py-4 min-w-[40px]";
              
              if (key === 'Enter' || key === 'Backspace') {
                buttonClass += " px-2 text-xs";
              }
              
              if (key !== 'Enter' && key !== 'Backspace' && letterStatuses[key]) {
                if (letterStatuses[key] === 'correct') {
                  buttonClass += " bg-green-500 text-white";
                } else if (letterStatuses[key] === 'present') {
                  buttonClass += " bg-yellow-500 text-white";
                } else {
                  buttonClass += " bg-gray-500 text-white";
                }
              } else {
                buttonClass += " bg-gray-200 text-gray-800";
              }
              
              return (
                <button
                  key={key}
                  className={buttonClass}
                  onClick={() => handleVirtualKeyPress(key)}
                >
                  {key === 'Backspace' ? '←' : key}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-indian-cream to-white p-4 md:p-8"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Link to="/learn/games" className="flex items-center text-spiritual-600 hover:text-spiritual-700">
            <ArrowLeft className="w-5 h-5 mr-1" />
            <span>Back to Games</span>
          </Link>
          <button 
            onClick={startNewGame}
            className="flex items-center text-spiritual-600 hover:text-spiritual-700"
          >
            <RefreshCw className="w-5 h-5 mr-1" />
            <span>New Game</span>
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-2xl font-bold text-center mb-2">Spiritual Wordle</h1>
          <p className="text-center text-gray-600 mb-4">
            Guess the {targetWord.length}-letter spiritual term
          </p>
          
          {message && (
            <div className={`text-center p-2 mb-4 rounded ${
              gameStatus === 'won' ? 'bg-green-100 text-green-800' : 
              gameStatus === 'lost' ? 'bg-red-100 text-red-800' : 
              'bg-blue-100 text-blue-800'
            }`}>
              {message}
            </div>
          )}

          <button 
            onClick={() => setShowInstructions(!showInstructions)}
            className="text-spiritual-600 hover:text-spiritual-700 text-sm mb-4 underline"
          >
            {showInstructions ? 'Hide Instructions' : 'Show Instructions'}
          </button>

          {showInstructions && (
            <div className="bg-gray-50 p-4 rounded-md mb-4 text-sm">
              <h3 className="font-bold mb-2">How to Play:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Guess the spiritual term in {MAX_ATTEMPTS} tries or less.</li>
                <li>Each guess must be a valid {targetWord.length}-letter word from our spiritual word list.</li>
                <li>After each guess, the color of the tiles will change to show how close your guess was.</li>
                <li>Green: Correct letter in correct position</li>
                <li>Yellow: Correct letter in wrong position</li>
                <li>Gray: Letter not in the word</li>
              </ul>
            </div>
          )}

          <div className="grid grid-cols-5 gap-2 mb-4">
            {Array.from({ length: MAX_ATTEMPTS }).map((_, attemptIndex) => {
              const attempt = attempts[attemptIndex] || '';
              return Array.from({ length: targetWord.length }).map((_, letterIndex) => {
                const letter = attempt[letterIndex] || '';
                let tileClass = "w-full aspect-square flex items-center justify-center text-xl font-bold rounded border-2";
                
                if (letter) {
                  const status = getLetterStatus(letter, letterIndex, attempt);
                  if (status === 'correct') {
                    tileClass += " bg-green-500 text-white border-green-600";
                  } else if (status === 'present') {
                    tileClass += " bg-yellow-500 text-white border-yellow-600";
                  } else {
                    tileClass += " bg-gray-500 text-white border-gray-600";
                  }
                } else {
                  tileClass += " bg-white border-gray-300";
                }
                
                return (
                  <div key={`${attemptIndex}-${letterIndex}`} className={tileClass}>
                    {letter}
                  </div>
                );
              });
            }).flat()}
          </div>

          {gameStatus === 'playing' && (
            <div className="flex mb-4">
              {Array.from({ length: targetWord.length }).map((_, index) => {
                const letter = currentAttempt[index] || '';
                return (
                  <div 
                    key={index} 
                    className="w-full aspect-square flex items-center justify-center text-xl font-bold rounded border-2 border-spiritual-400 bg-white mr-2 last:mr-0"
                  >
                    {letter}
                  </div>
                );
              })}
            </div>
          )}

          {renderKeyboard()}
        </div>
      </div>
    </div>
  );
};

export default SpiritualWordleGame;
