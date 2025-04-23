import React, { useState, useEffect, useCallback, useMemo } from 'react';

// --- Constants (Static Data) ---
const WORD_LIST = [
    'peace', 'faith', 'truth', 'bliss', 'grace',
    'unity', 'light', 'divine', 'saint', 'prayer',
    'silence', 'devotion', 'mantra', 'wisdom', 'atma' // Added more 5/6 letter words
    // Consider filtering dynamically or having separate lists if length varies significantly
];
const MAX_ATTEMPTS = 6;

// --- Helper Function for Styling ---
// Moved outside component as it doesn't rely on component state directly,
// but receives necessary data as arguments.
const getLetterStyle = (guess, targetWord, attemptMade) => {
    if (!attemptMade || !guess) {
        return 'bg-white border-gray-300'; // Default empty/future guess
    }

    const letterStyles = Array(targetWord.length).fill('bg-gray-300 text-gray-800 border-gray-400'); // Default: Not in word
    const targetArray = targetWord.split('');
    const guessArray = guess.toLowerCase().split('');
    const targetLetterCounts = {};

    // Count letters in target word for accurate yellow checking
    targetArray.forEach(letter => {
        targetLetterCounts[letter] = (targetLetterCounts[letter] || 0) + 1;
    });

    // First pass: Check for correct letters in the correct position (Green)
    guessArray.forEach((letter, index) => {
        if (letter === targetArray[index]) {
            letterStyles[index] = 'bg-green-500 text-white border-green-600';
            targetLetterCounts[letter]--; // Decrement count for used green letters
        }
    });

    // Second pass: Check for correct letters in the wrong position (Yellow)
    guessArray.forEach((letter, index) => {
        // Only check if not already green and the letter exists in the target word with remaining count
        if (letterStyles[index] !== 'bg-green-500 text-white border-green-600' && targetLetterCounts[letter] > 0) {
            letterStyles[index] = 'bg-yellow-500 text-white border-yellow-600';
            targetLetterCounts[letter]--; // Decrement count for used yellow letters
        }
    });

    return letterStyles; // Return array of styles for the row
};


// --- React Component ---
function MastersWordsGame() {
    // --- State ---
    const [targetWord, setTargetWord] = useState('');
    const [wordLength, setWordLength] = useState(0); // Store length explicitly
    const [guesses, setGuesses] = useState(() => Array(MAX_ATTEMPTS).fill(''));
    const [currentGuess, setCurrentGuess] = useState('');
    const [attempt, setAttempt] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [message, setMessage] = useState('');
    // Pre-calculate styles for performance? Memoize if grid rendering becomes slow.
    // const [letterStylesGrid, setLetterStylesGrid] = useState(() => Array(MAX_ATTEMPTS).fill([]));

    // --- Initialize Game ---
    const initializeGame = useCallback(() => {
        const newWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)].toLowerCase();
        setTargetWord(newWord);
        setWordLength(newWord.length); // Set word length based on the chosen word
        setGuesses(Array(MAX_ATTEMPTS).fill(''));
        setCurrentGuess('');
        setAttempt(0);
        setGameOver(false);
        setMessage('');
        // setLetterStylesGrid(Array(MAX_ATTEMPTS).fill([])); // Reset styles
        console.log('Game initialized/reset - New Target Word:', newWord);
    }, []); // Empty dependency array means this function itself doesn't change

    // Run initializeGame once on component mount
    useEffect(() => {
        initializeGame();
    }, [initializeGame]); // Depend on initializeGame


    // --- Computed Styles (Memoized) ---
    // Calculate styles for the entire grid, only recalculating when guesses or attempt changes.
    const letterStylesGrid = useMemo(() => {
        return guesses.map((guess, rowIndex) => {
            const attemptMade = rowIndex < attempt;
            return getLetterStyle(guess, targetWord, attemptMade);
        });
    }, [guesses, targetWord, attempt]);


    // --- Event Handlers ---
    const handleInputChange = (event) => {
        // Allow only letters and limit length
        const value = event.target.value.replace(/[^a-zA-Z]/g, '').toLowerCase();
        if (value.length <= wordLength) {
            setCurrentGuess(value);
        }
    };

    const submitGuess = useCallback(() => {
        if (gameOver || attempt >= MAX_ATTEMPTS) return;

        const guess = currentGuess.trim().toLowerCase();

        if (guess.length !== wordLength) {
            setMessage(`Please enter a ${wordLength}-letter word!`);
            return;
        }

        // Optional: Check if the word is in a valid dictionary if you have one
        // if (!VALID_WORDS.includes(guess)) {
        //     setMessage("Not a valid word!");
        //     return;
        // }

        // Update guesses immutably
        const newGuesses = [...guesses];
        newGuesses[attempt] = guess;
        setGuesses(newGuesses);

        const newAttempt = attempt + 1;
        setAttempt(newAttempt);

        // Check for win/loss
        if (guess === targetWord) {
            setGameOver(true);
            setMessage("Congratulations! You've found the Master's word!");
        } else if (newAttempt === MAX_ATTEMPTS) {
            setGameOver(true);
            setMessage(`Game Over! The word was "${targetWord.toUpperCase()}".`);
        } else {
            setMessage(''); // Clear previous messages
        }

        setCurrentGuess(''); // Clear input field

    }, [currentGuess, wordLength, gameOver, attempt, guesses, targetWord]); // Dependencies for useCallback

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            submitGuess();
        }
    };

    // --- Render ---
    return (
        <div className="min-h-screen bg-gradient-to-br from-indian-cream to-white flex flex-col items-center p-4 sm:p-8 pt-12 sm:pt-16 text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-spiritual-600 mb-4 sm:mb-6">Spiritual Wordle</h1>

            {wordLength > 0 && ( // Only render instructions etc. once word is loaded
                <>
                    <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mb-4">
                        Guess the {wordLength}-letter spiritual word. You have {MAX_ATTEMPTS} attempts to find the hidden word!
                    </p>
                    <div className="bg-white p-4 rounded-lg shadow-md border border-indian-saffron/30 w-full max-w-md sm:max-w-2xl mb-6 sm:mb-8">
                        <h3 className="text-lg sm:text-xl font-heading font-semibold text-spiritual-600 mb-2">How to Play</h3>
                        <ul className="text-left text-sm sm:text-base text-gray-600 list-disc pl-5 sm:pl-6 space-y-1">
                            <li>Type a {wordLength}-letter word and press Enter.</li>
                            <li><span className="inline-block w-4 h-4 bg-green-500 mr-1 border border-green-600 rounded align-middle"></span> = Correct letter, right spot.</li>
                            <li><span className="inline-block w-4 h-4 bg-yellow-500 mr-1 border border-yellow-600 rounded align-middle"></span> = Correct letter, wrong spot.</li>
                            <li><span className="inline-block w-4 h-4 bg-gray-300 mr-1 border border-gray-400 rounded align-middle"></span> = Letter not in the word.</li>
                        </ul>
                    </div>

                    {/* Guess Grid */}
                    <div className="mb-6 sm:mb-8">
                        {guesses.map((_, row) => (
                            <div key={`row-${row}`} className="flex justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                                {[...Array(wordLength)].map((_, col) => {
                                     const style = letterStylesGrid[row]?.[col] ?? 'bg-white border-gray-300'; // Fallback style
                                     const letter = guesses[row]?.[col] ?? '';
                                     return (
                                        <div
                                            key={`col-${row}-${col}`}
                                            className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-2xl font-bold uppercase border-2 rounded transition-colors duration-300 ${style}`}
                                        >
                                            {letter}
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    {!gameOver && (
                        <div className="mb-6 sm:mb-8 flex flex-col items-center gap-3 sm:gap-4">
                            <input
                                type="text"
                                value={currentGuess}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                maxLength={wordLength}
                                placeholder={`Enter ${wordLength}-letter guess`}
                                className="w-60 sm:w-72 p-2 sm:p-3 border-2 border-spiritual-600 rounded text-center text-xl sm:text-2xl uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-spiritual-500"
                                disabled={gameOver || attempt >= MAX_ATTEMPTS}
                                autoFocus // Focus input on load/reset
                            />
                            <button
                                onClick={submitGuess}
                                disabled={gameOver || attempt >= MAX_ATTEMPTS || currentGuess.length !== wordLength}
                                className="bg-indian-saffron text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-indian-saffron/80 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Enter Guess
                            </button>
                        </div>
                    )}

                    {/* Message Area */}
                    {message && (
                        <div className="text-xl sm:text-2xl text-spiritual-600 font-semibold mb-6 sm:mb-8 px-4 min-h-[3rem] flex items-center justify-center">
                           <p>{message}</p>
                        </div>
                    )}

                    {/* Control Buttons */}
                    <div className="space-x-4 mt-4">
                         {gameOver && (
                            <button
                                onClick={initializeGame} // Use initializeGame for reset
                                className="bg-indian-saffron text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-indian-saffron/80 transition-colors duration-300"
                            >
                                Play Again
                            </button>
                         )}
                        {/* Replace NuxtLink with a standard anchor or React Router Link if applicable */}
                        <a
                            href="/learn/games" // Correct path to games page
                            className="bg-gray-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300"
                        >
                            Back to Games
                        </a>
                    </div>
                </>
            )}
            {wordLength === 0 && (
                <p className="text-lg text-gray-600">Loading game...</p> // Loading indicator
            )}
        </div>
    );
}

export default MastersWordsGame;
