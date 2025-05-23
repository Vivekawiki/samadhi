import React, { useState, useEffect, useCallback, useRef, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface GuessThePictureGameProps {
  socialShareButtons?: ReactNode;
}

// Define all name options for guessing
const nameOptions = [
  { id: 1, name: 'Sri Ramakrishna' },
  { id: 2, name: 'Sri Sarada Devi' },
  { id: 3, name: 'Swami Vivekananda' },
  { id: 11, name: 'Swami Brahmananda' },
  { id: 12, name: 'Swami Shivananda' },
  { id: 13, name: 'Swami Akhandananda' },
  { id: 14, name: 'Swami Vijnanananda' }
];

// Define image options with pictures from /public/pics
const imageFiles = [
  { filename: 'Sri Ramakrishna', src: '/pics/Sri Ramakrishna.png', correctId: 1 },
  { filename: 'Sri Sarada Devi', src: '/pics/Sri Sarada Devi.png', correctId: 2 },
  { filename: 'Swami Vivekananda', src: '/pics/Swami Vivekananda.png', correctId: 3 },
  { filename: 'Swami Brahmananda', src: '/pics/Swami Brahmananda.png', correctId: 11 },
  { filename: 'Swami Shivananda', src: '/pics/Swami Shivananda.png', correctId: 12 },
  { filename: 'Swami Akhandananda', src: '/pics/Swami Akhandananda.png', correctId: 13 },
  { filename: 'Swami Vijnanananda', src: '/pics/Swami Vijnanananda.png', correctId: 14 }
];

function GuessThePictureGame({ socialShareButtons }: GuessThePictureGameProps) {
  // State hooks for the game
  const [nameOptionsList] = useState(nameOptions); // All possible name options for guessing
  const [currentImage, setCurrentImage] = useState(imageFiles[0]); // Default to first image, will be randomized in startGame
  const [correctAnswerId, setCorrectAnswerId] = useState(imageFiles[0].correctId); // Default to first image's correctId
  const [revealedSquares, setRevealedSquares] = useState<{x: number, y: number}[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timeTaken, setTimeTaken] = useState(0);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [imagePosition, setImagePosition] = useState({ x: '50%', y: '50%' });
  const [useContainMode, setUseContainMode] = useState(false);

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
    setImagePosition({ x: '50%', y: '50%' });
    setUseContainMode(false);
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
    <div className="min-h-screen bg-gradient-to-br from-indian-cream to-white py-8 sm:py-12 flex flex-col items-center p-4 sm:p-8 text-center relative z-10">
      <div className="w-full max-w-4xl mx-auto mb-4 px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-indian-saffron mb-2 text-center">
          Guess the Picture
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl md:max-w-2xl mx-auto text-center mb-3">
          Identify the spiritual image as it reveals itself every second. How
          quickly can you guess?
        </p>
        {socialShareButtons && (
          <div className="flex justify-center mt-3 mb-1">
            {socialShareButtons}
          </div>
        )}
      </div>

      {currentImage && (
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mb-6 md:mb-8 border border-indian-saffron rounded-lg overflow-hidden pop-shadow-card mx-auto">
          <img
            src={currentImage.src}
            alt="Guess the Picture (Hidden)"
            className={`absolute inset-0 w-full h-full ${useContainMode ? 'object-contain bg-white' : 'object-cover'}`}
            style={{ objectPosition: `${imagePosition.x} ${imagePosition.y}` }}
            onLoad={(e) => {
              // Adjust image position based on its dimensions and filename
              const img = e.target as HTMLImageElement;
              const imgRatio = img.naturalWidth / img.naturalHeight;

              // Special handling for Sri Ramakrishna's image
              if (currentImage.filename === 'Sri Ramakrishna') {
                // Custom styling for Sri Ramakrishna to maintain height but reduce width
                setUseContainMode(false); // Use cover mode
                // Apply custom styling directly to the image element
                img.style.objectFit = 'cover';
                img.style.width = '80%'; // Reduce width to 80% of container
                img.style.height = '100%'; // Maintain full height
                img.style.left = '10%'; // Center the image horizontally
                img.style.right = 'auto';
                setImagePosition({ x: '50%', y: '50%' });
              } else {
                setUseContainMode(false);
                // Reset custom styling
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.left = '0';
                img.style.right = '0';

                // For portrait images (taller than wide), focus more on the face area
                if (imgRatio < 1) {
                  setImagePosition({ x: '50%', y: '35%' });
                } else {
                  setImagePosition({ x: '50%', y: '50%' });
                }
              }
            }}
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
        <div className="mb-8 md:mb-12 max-w-2xl mx-auto w-full px-2 sm:px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {nameOptionsList.slice(0, 4).map((option) => (
              <button
                key={option.id}
                onClick={() => handleGuess(option.id)}
                disabled={gameOver}
                className="bg-gradient-to-br from-indian-cream to-white text-indian-saffron px-2 py-2 md:px-4 md:py-2 rounded-lg font-semibold border border-indian-saffron hover:bg-indian-saffron/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed pop-shadow-card text-sm sm:text-base w-full"
              >
                {option.name}
              </button>
            ))}
          </div>

          {nameOptionsList.length > 4 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-2 md:mt-4">
              {nameOptionsList.slice(4).map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleGuess(option.id)}
                  disabled={gameOver}
                  className="bg-gradient-to-br from-indian-cream to-white text-indian-saffron px-2 py-2 md:px-4 md:py-2 rounded-lg font-semibold border border-indian-saffron hover:bg-indian-saffron/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed pop-shadow-card text-sm sm:text-base w-full"
                >
                  {option.name}
                </button>
              ))}
            </div>
          )}
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
