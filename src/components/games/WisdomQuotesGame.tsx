import React, { useState, useEffect } from 'react';
import { ArrowLeft, RefreshCw, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define the quotes for the game
const QUOTES = [
  {
    id: 1,
    text: "As many faiths, so many paths.",
    author: "Sri Ramakrishna",
    hint: "Known for his direct spiritual experiences through multiple religious paths."
  },
  {
    id: 2,
    text: "Arise, awake, and stop not until the goal is reached.",
    author: "Swami Vivekananda",
    hint: "Chief disciple of Sri Ramakrishna who represented Hinduism at the Parliament of World's Religions in 1893."
  },
  {
    id: 3,
    text: "If you want peace, my child, don't look into anybody's faults. Look into your own faults.",
    author: "Sri Sarada Devi",
    hint: "Known as Holy Mother, she was the spiritual consort of Sri Ramakrishna."
  },
  {
    id: 4,
    text: "The world is the great gymnasium where we come to make ourselves strong.",
    author: "Swami Vivekananda",
    hint: "Founder of the Ramakrishna Math and Mission who brought Vedanta to the West."
  },
  {
    id: 5,
    text: "God is in all men, but all men are not in God; that is why we suffer.",
    author: "Sri Ramakrishna",
    hint: "Mystic who spent years in intense spiritual practice at Dakshineswar Kali Temple."
  },
  {
    id: 6,
    text: "Learn to make the world your own. No one is a stranger, my child; the whole world is your own.",
    author: "Sri Sarada Devi",
    hint: "Embodied the ideal of spiritual motherhood and universal love."
  },
  {
    id: 7,
    text: "In a conflict between the heart and the brain, follow your heart.",
    author: "Swami Vivekananda",
    hint: "Emphasized strength, self-reliance, and service to humanity."
  },
  {
    id: 8,
    text: "The mind is like a drunken monkey that has been stung by a scorpion.",
    author: "Sri Ramakrishna",
    hint: "Used simple analogies to explain complex spiritual concepts."
  },
  {
    id: 9,
    text: "I am the mother of the wicked, as I am the mother of the virtuous. Never fear.",
    author: "Sri Sarada Devi",
    hint: "Known for her unconditional love and acceptance of all who came to her."
  },
  {
    id: 10,
    text: "You have to grow from the inside out. None can teach you, none can make you spiritual. There is no other teacher but your own soul.",
    author: "Swami Vivekananda",
    hint: "Advocated for the potential divinity of every soul."
  }
];

// Define the authors for the game
const AUTHORS = [
  "Sri Ramakrishna",
  "Sri Sarada Devi",
  "Swami Vivekananda"
];

const WisdomQuotesGame: React.FC = () => {
  // State for the game
  const [gameQuotes, setGameQuotes] = useState<typeof QUOTES>([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  // Initialize the game
  useEffect(() => {
    startNewGame();
  }, []);

  // Start a new game
  const startNewGame = () => {
    // Shuffle the quotes and take the first 5
    const shuffledQuotes = [...QUOTES].sort(() => Math.random() - 0.5).slice(0, 5);
    setGameQuotes(shuffledQuotes);
    setCurrentQuoteIndex(0);
    setSelectedAuthor('');
    setResult(null);
    setScore(0);
    setShowHint(false);
    setGameOver(false);
  };

  // Get the current quote
  const currentQuote = gameQuotes[currentQuoteIndex];

  // Handle author selection
  const handleAuthorSelect = (author: string) => {
    if (result !== null) return; // Prevent multiple selections
    
    setSelectedAuthor(author);
    const isCorrect = author === currentQuote?.author;
    setResult(isCorrect ? 'correct' : 'incorrect');
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    // Move to next quote after a delay
    setTimeout(() => {
      if (currentQuoteIndex < gameQuotes.length - 1) {
        setCurrentQuoteIndex(currentQuoteIndex + 1);
        setSelectedAuthor('');
        setResult(null);
        setShowHint(false);
      } else {
        setGameOver(true);
      }
    }, 2000);
  };

  // Toggle hint visibility
  const toggleHint = () => {
    setShowHint(!showHint);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indian-cream to-white p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
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
          <h1 className="text-2xl font-bold text-center mb-2">Wisdom Quotes</h1>
          <p className="text-center text-gray-600 mb-4">
            Match the quote with the spiritual figure who said it
          </p>
          
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-medium">Score: {score}/{gameQuotes.length}</div>
            <div className="text-sm text-gray-600">
              Quote {currentQuoteIndex + 1} of {gameQuotes.length}
            </div>
          </div>

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
                <li>Read the quote and select who you think said it.</li>
                <li>If you're not sure, you can use a hint.</li>
                <li>Try to match as many quotes correctly as possible.</li>
                <li>Your final score will be shown at the end of the game.</li>
              </ul>
            </div>
          )}

          {gameOver ? (
            <div className="text-center p-8">
              <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
              <p className="text-xl mb-6">Your final score: {score}/{gameQuotes.length}</p>
              <button
                onClick={startNewGame}
                className="bg-spiritual-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-spiritual-700 transition-colors"
              >
                Play Again
              </button>
            </div>
          ) : currentQuote ? (
            <>
              <div className="bg-gradient-to-r from-indian-cream to-white p-6 rounded-lg mb-6 border border-indian-saffron/30">
                <p className="text-lg italic mb-4">"{currentQuote.text}"</p>
                
                <div className="flex justify-between items-center">
                  <button
                    onClick={toggleHint}
                    className="text-spiritual-600 hover:text-spiritual-700 text-sm underline"
                  >
                    {showHint ? 'Hide Hint' : 'Show Hint'}
                  </button>
                  
                  {result && (
                    <div className={`flex items-center ${result === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
                      {result === 'correct' ? (
                        <>
                          <Check className="w-5 h-5 mr-1" />
                          <span>Correct!</span>
                        </>
                      ) : (
                        <>
                          <X className="w-5 h-5 mr-1" />
                          <span>Incorrect! It was {currentQuote.author}</span>
                        </>
                      )}
                    </div>
                  )}
                </div>
                
                {showHint && (
                  <div className="mt-4 p-3 bg-spiritual-50 rounded-md text-sm">
                    <p><strong>Hint:</strong> {currentQuote.hint}</p>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {AUTHORS.map(author => (
                  <button
                    key={author}
                    onClick={() => handleAuthorSelect(author)}
                    disabled={result !== null}
                    className={`p-4 rounded-lg text-left font-medium transition-colors ${
                      selectedAuthor === author
                        ? result === 'correct'
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : 'bg-white border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {author}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <p className="text-center">Loading quotes...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WisdomQuotesGame;
