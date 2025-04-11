import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

// Define all name options for guessing
const nameOptions = [
  { id: 1, name: 'Sri Ramakrishna' },
  { id: 2, name: 'Sri Sarada Devi' },
  { id: 3, name: 'Swami Vivekananda' },
  { id: 4, name: 'Belur Math' },
  { id: 5, name: 'Dakshineswar Temple' },
  { id: 6, name: 'Cossipore Garden House' },
  { id: 7, name: 'Centre Logo' },
  { id: 8, name: 'Nutrition Programme' },
  { id: 9, name: 'Food Distribution' },
  { id: 10, name: 'Food Relief' }
];

// Define image options with only the three pictures from /public/pics
const imageFiles = [
  { filename: 'Sri Ramakrishna', src: '/pics/Sri Ramakrishna.png', correctId: 1 },
  { filename: 'Sri Sarada Devi', src: '/pics/Sri Sarada Devi.png', correctId: 2 },
  { filename: 'Swami Vivekananda', src: '/pics/Swami Vivekananda.png', correctId: 3 }
];

function GuessThePictureGame() {
  // State hooks for the game
  const [nameOptionsList] = useState(nameOptions); // All possible name options for guessing
  const [currentImage, setCurrentImage] = useState(imageFiles[0]); // Default to first image, will be randomized in startGame
  const [correctAnswerId, setCorrectAnswerId] = useState(imageFiles[0].correctId); // Default to first image's correctId
  const [revealedSquares, setRevealedSquares] = useState<{x: number, y: number}[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timeTaken, setTimeTaken] = useState(0);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  // Refs for intervals to manage them correctly
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const revealIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const feedbackTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Constants for the grid
  const gridSize = 10;
  const totalSquares = gridSize * gridSize;

  // Function to start/reset the game
  const startGame = useCallback(() => {
    // Clear any existing intervals/timeouts
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    if (revealIntervalRef.current) clearInterval(revealIntervalRef.current);
    if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);

    // Select a random image from the three available images
    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    const selectedImage = imageFiles[randomIndex];
    
    // Set the current image and its correct answer ID
    setCurrentImage(selectedImage);
    setCorrectAnswerId(selectedImage.correctId);

    // Reset game state
    setRevealedSquares([]);
    setGameOver(false);
    setTimeTaken(0);
    setFeedbackMessage('');
    setStartTime(Date.now()); // Set start time to trigger effects
  }, []);

  // Effect to handle the timer (updates every second)
  useEffect(() => {
    if (gameOver || !startTime) {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      return;
    }

    // Clear previous timer before setting a new one
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);

    timerIntervalRef.current = setInterval(() => {
      setTimeTaken(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    // Cleanup function for this effect
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [gameOver, startTime]);

  // Effect to handle revealing squares (every 1 second)
  useEffect(() => {
    // Clear any previous interval when effect re-runs or cleans up
    if (revealIntervalRef.current) clearInterval(revealIntervalRef.current);

    // Only start a new interval if the game is active
    if (!gameOver && startTime) {
      revealIntervalRef.current = setInterval(() => {
        setRevealedSquares(currentSquares => {
          // If already full, don't add more squares
          if (currentSquares.length >= totalSquares) {
            if (revealIntervalRef.current) clearInterval(revealIntervalRef.current);
            return currentSquares;
          }
          
          // Find a new square that hasn't been revealed yet
          for (let attempts = 0; attempts < 100; attempts++) {
            const x = Math.floor(Math.random() * gridSize);
            const y = Math.floor(Math.random() * gridSize);
            
            // Check if this square is already revealed
            if (!currentSquares.some(s => s.x === x && s.y === y)) {
              return [...currentSquares, { x, y }];
            }
          }
          
          // If we couldn't find a new square after 100 attempts, just return the current squares
          return currentSquares;
        });
      }, 1000);
    }

    // Cleanup function
    return () => {
      if (revealIntervalRef.current) clearInterval(revealIntervalRef.current);
    };
  }, [gameOver, startTime, totalSquares, gridSize]);

  // Effect to start the game on component mount
  useEffect(() => {
    startGame();
    
    // Cleanup on component unmount
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      if (revealIntervalRef.current) clearInterval(revealIntervalRef.current);
      if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);
    };
  }, [startGame]);

  // Function to handle player's guess
  const handleGuess = (id: number) => {
    if (gameOver) return;

    // Clear previous feedback timeout if guess is made quickly again
    if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);

    const currentTimeTaken = Math.floor((Date.now() - (startTime || 0)) / 1000);
    setTimeTaken(currentTimeTaken); // Update time immediately on guess

    // Find the name of the correct option
    const correctOption = nameOptionsList.find(option => option.id === correctAnswerId);

    if (id === correctAnswerId) {
      setGameOver(true);
      setFeedbackMessage(
        `Correct! You identified "${correctOption?.name}" in ${currentTimeTaken} seconds!`
      );
      
      // Reveal all remaining squares instantly on correct guess
      const allSquares = [];
      for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
          allSquares.push({ x, y });
        }
      }
      setRevealedSquares(allSquares);
    } else {
      setFeedbackMessage('Incorrect, try again!');
      
      // Clear the incorrect feedback message after 2 seconds
      feedbackTimeoutRef.current = setTimeout(() => {
        setFeedbackMessage(prevMessage => 
          prevMessage === 'Incorrect, try again!' ? '' : prevMessage
        );
      }, 2000);
    }
  };

  // Function to reset the game (calls startGame)
  const resetGame = () => {
    startGame();
  };

  // Render the component
  return (
    <div className="min-h-screen bg-gradient-to-br from-indian-cream to-white py-12 flex flex-col items-center p-8 text-center relative z-10">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-indian-saffron mb-6">
        Guess the Picture
      </h1>
      <p className="text-base md:text-lg text-gray-600 max-w-xl md:max-w-2xl mb-4">
        Identify the spiritual image as it reveals itself every second. How
        quickly can you guess?
      </p>

      {currentImage && (
        <div className="relative w-64 h-64 md:w-96 md:h-96 mb-6 md:mb-8 border border-indian-saffron rounded-lg overflow-hidden pop-shadow-card">
          <img
            src={currentImage.src}
            alt="Guess the Picture (Hidden)"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay Grid */}
          <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
            {Array.from({ length: gridSize }).map((_, y) => (
              <React.Fragment key={y}>
                {Array.from({ length: gridSize }).map((_, x) => {
                  const isRevealed = revealedSquares.some(
                    (s) => s.x === x && s.y === y
                  );
                  return (
                    <div
                      key={`${x}-${y}`}
                      className={`w-full h-full bg-gray-800 border border-gray-900/20 transition-opacity duration-300 ${
                        isRevealed ? 'opacity-0' : 'opacity-100'
                      }`}
                      style={{ transitionDelay: `${Math.random() * 0.2}s` }}
                    ></div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      <p className="text-xl text-spiritual-600 mb-4 md:mb-6">
        Time: {timeTaken} seconds
      </p>

      {feedbackMessage && (
        <p className={`text-lg md:text-xl font-semibold mb-4 md:mb-6 ${gameOver && feedbackMessage.startsWith('Correct') ? 'text-green-600' : 'text-red-600'}`}>
          {feedbackMessage}
        </p>
      )}

      {!gameOver && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 mb-8 md:mb-12 max-w-4xl w-full px-4">
          {nameOptionsList.map((option) => (
            <button
              key={option.id}
              onClick={() => handleGuess(option.id)}
              disabled={gameOver}
              className="bg-gradient-to-br from-indian-cream to-white text-indian-saffron px-3 py-2 md:px-4 md:py-2 rounded-lg font-semibold border border-indian-saffron hover:bg-indian-saffron/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed pop-shadow-card"
            >
              {option.name}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
        {gameOver && (
          <button
            onClick={resetGame}
            className="bg-indian-saffron text-white px-6 py-3 rounded-full font-semibold hover:bg-indian-saffron/90 transition-all duration-300"
          >
            Play Again
          </button>
        )}
        <Link
          to="/learn/games"
          className="bg-spiritual-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-spiritual-500 transition-all duration-300"
        >
          Back to Games
        </Link>
      </div>
    </div>
  );
}

export default GuessThePictureGame;
