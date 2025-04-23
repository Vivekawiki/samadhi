import React, { useState, useEffect, useRef, useCallback } from 'react';

// --- Data (kept outside component for clarity) ---

const quotesDB = {
  "Sri Ramakrishna": [
    "Truth is one; only it is called by different names.",
    "The winds of grace are always blowing, but you have to raise the sail.",
    "As many faiths, so many paths.",
    "Different people call on God by different names, but it is one and the same God."
  ],
  "Sri Sarada Devi": [
    "If you want peace, do not find fault with others.",
    "The mind is everything. It is in the mind alone that one feels pure and impure.",
    "Learn to make the whole world your own. No one is a stranger, my child.",
    "As you think, so you become."
  ],
  "Swami Vivekananda": [
    "Arise, awake, and stop not till the goal is reached.",
    "We are what our thoughts have made us.",
    "All power is within you; you can do anything and everything.",
    "The greatest religion is to be true to your own nature."
  ]
};

const difficultyLevels = [
  { name: "Easy", scrambleMethod: "words", timerBonus: 1.5 },
  { name: "Medium", scrambleMethod: "phrases", timerBonus: 1.0 },
  { name: "Hard", scrambleMethod: "complex", timerBonus: 0.5 }
];

// --- React Component ---

function WisdomWordsGame() {
  // --- State ---
  const [difficulty, setDifficulty] = useState(difficultyLevels[0]);
  const [currentAuthor, setCurrentAuthor] = useState(Object.keys(quotesDB)[0]);
  const [originalQuote, setOriginalQuote] = useState("");
  const [jumbledWords, setJumbledWords] = useState([]);
  const [arrangedWords, setArrangedWords] = useState([]);
  const [gameActive, setGameActive] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [timer, setTimer] = useState(0);
  const [bestTimes, setBestTimes] = useState({}); // Consider persisting this with localStorage
  const [showIncorrectFeedback, setShowIncorrectFeedback] = useState(false);

  // --- Refs ---
  const timerIntervalRef = useRef(null);
  const feedbackTimeoutRef = useRef(null);
  const touchDataRef = useRef(null); // To store touch drag info
  const draggedItemRef = useRef(null); // To store drag info (index, source)
  const arrangedAreaRef = useRef(null);
  const jumbledAreaRef = useRef(null);

  // --- Helper Functions ---

  // Shuffle an array (Fisher-Yates algorithm)
  const shuffleArray = useCallback((array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  // Scramble quote based on difficulty
  const scrambleQuote = useCallback((quote, method) => {
    const words = quote.split(' ');
    if (method === "words") {
      return shuffleArray(words);
    } else if (method === "phrases") {
      const phrases = [];
      for (let i = 0; i < words.length; i += 2) {
        if (i + 1 < words.length) {
          phrases.push(words[i] + ' ' + words[i + 1]);
        } else {
          phrases.push(words[i]);
        }
      }
      return shuffleArray(phrases);
    } else { // complex
      const phrases = [];
      let currentPhrase = [];
      words.forEach((word, index) => {
        currentPhrase.push(word);
        if (currentPhrase.join(' ').length > 8 || Math.random() > 0.7 || index === words.length - 1) {
          phrases.push(currentPhrase.join(' '));
          currentPhrase = [];
        }
      });
      return shuffleArray(phrases);
    }
  }, [shuffleArray]);

  // Clear timer interval
  const clearTimer = useCallback(() => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  }, []);

  // Clear feedback timeout
  const clearFeedbackTimeout = useCallback(() => {
    if (feedbackTimeoutRef.current) {
      clearTimeout(feedbackTimeoutRef.current);
      feedbackTimeoutRef.current = null;
    }
  }, []);

  // --- Game Logic Functions ---

  const startGame = useCallback(() => {
    clearFeedbackTimeout();
    setShowIncorrectFeedback(false);

    const quotes = quotesDB[currentAuthor];
    const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];

    setOriginalQuote(selectedQuote);
    setJumbledWords(scrambleQuote(selectedQuote, difficulty.scrambleMethod));
    setArrangedWords([]);
    setGameComplete(false);
    setTimer(0);
    setGameActive(true); // Start timer via useEffect

  }, [currentAuthor, difficulty, scrambleQuote, clearFeedbackTimeout]);

  const completeGame = useCallback(() => {
    setGameActive(false); // Stops timer via useEffect
    setGameComplete(true);
    setShowIncorrectFeedback(false);
    clearFeedbackTimeout();

    const gameKey = `${currentAuthor}-${difficulty.name}`;
    setBestTimes(prevTimes => {
        const currentBest = prevTimes[gameKey] || Infinity;
        return {
            ...prevTimes,
            [gameKey]: Math.min(currentBest, timer)
        };
    });
  }, [currentAuthor, difficulty, timer, clearFeedbackTimeout]);

  const checkArrangement = useCallback(() => {
    if (jumbledWords.length === 0) {
      const reconstructedQuote = arrangedWords.join(' ');
      if (reconstructedQuote === originalQuote) {
        completeGame();
      } else {
        setShowIncorrectFeedback(true);
        clearFeedbackTimeout();
        feedbackTimeoutRef.current = setTimeout(() => {
          setShowIncorrectFeedback(false);
        }, 3000);
      }
    }
  }, [jumbledWords, arrangedWords, originalQuote, completeGame, clearFeedbackTimeout]);


  // --- Drag and Drop / Touch Logic ---

  const moveWord = useCallback((sourceIndex, source, targetIndex, target) => {
      let updatedJumbled = [...jumbledWords];
      let updatedArranged = [...arrangedWords];
      let movedItem;

      setShowIncorrectFeedback(false);
      clearFeedbackTimeout();

      // Remove from source
      if (source === 'jumbled') {
          [movedItem] = updatedJumbled.splice(sourceIndex, 1);
      } else { // source === 'arranged'
          [movedItem] = updatedArranged.splice(sourceIndex, 1);
      }

      // Add to target
      if (target === 'arranged') {
          updatedArranged.splice(targetIndex, 0, movedItem);
      } else { // target === 'jumbled'
          // Always add to the end of jumbled for simplicity on drop
          updatedJumbled.push(movedItem);
          // Or uncomment below to allow dropping at specific index (less common need)
          // updatedJumbled.splice(targetIndex, 0, movedItem);
      }

      setJumbledWords(updatedJumbled);
      setArrangedWords(updatedArranged);

      // Check completion immediately if moving the last word to arranged
      if (target === 'arranged' && updatedJumbled.length === 0 && !gameComplete) {
         // Delay check slightly to allow state update cycle to potentially complete
         setTimeout(() => checkArrangement(), 0);
      }

  }, [arrangedWords, jumbledWords, gameComplete, checkArrangement, clearFeedbackTimeout]);


  // Desktop Drag Handlers
  const handleDragStart = useCallback((e, index, source) => {
      draggedItemRef.current = { index, source };
      // Optional: Improve visual feedback
      // e.dataTransfer.effectAllowed = 'move';
      // e.target.style.opacity = '0.5';
       e.dataTransfer.setData('text/plain', ''); // Necessary for Firefox
  }, []);

  const handleDragOver = useCallback((e) => {
      e.preventDefault(); // Necessary to allow dropping
      // Optional: Add visual feedback for drop zone
      // e.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDrop = useCallback((e, targetIndex, target) => {
    e.preventDefault();
    if (!draggedItemRef.current) return;

    const { index: sourceIndex, source } = draggedItemRef.current;

    // Determine the precise target index if dropping within the arranged area
    let preciseTargetIndex = targetIndex;
    if (target === 'arranged') {
        // Find the element being dropped onto or nearest to
        const dropTargetElement = e.target.closest('[data-word-index]');
        if (dropTargetElement) {
             preciseTargetIndex = parseInt(dropTargetElement.getAttribute('data-word-index'), 10);
             // Decide if insert before or after based on drop coordinates relative to the element's center
             const rect = dropTargetElement.getBoundingClientRect();
             const isAfter = e.clientY > rect.top + rect.height / 2;
             if (isAfter) preciseTargetIndex += 1;
        } else {
            // If dropped in empty space, use the provided targetIndex (end of list)
            preciseTargetIndex = arrangedWords.length;
        }
    }


    // Prevent dropping onto itself in the same list
    if (source === target && sourceIndex === preciseTargetIndex) {
         draggedItemRef.current = null;
         return;
    }
    // Adjust target index if moving within the same list (arranged)
    if (source === 'arranged' && target === 'arranged' && sourceIndex < preciseTargetIndex) {
        preciseTargetIndex--;
    }


    moveWord(sourceIndex, source, preciseTargetIndex, target);
    draggedItemRef.current = null;
    // Optional: Reset visual feedback
    // e.target.style.opacity = '1';
  }, [moveWord, arrangedWords.length]); // Added arrangedWords.length dependency


  // Touch Handlers
  const handleTouchStart = useCallback((e, index, source) => {
    // e.preventDefault(); // Prevent default only if needed, can interfere with scrolling
    const touch = e.touches[0];
    const element = e.target;
    touchDataRef.current = {
      index,
      source,
      startX: touch.clientX,
      startY: touch.clientY,
      element: element,
      elementRect: element.getBoundingClientRect(),
      isDragging: false,
      scrollStartX: window.scrollX,
      scrollStartY: window.scrollY,
    };
     // Add dragging class immediately for visual feedback
    element.classList.add('dragging');
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!touchDataRef.current) return;

    const touch = e.touches[0];
    const { startX, startY, element, elementRect, scrollStartX, scrollStartY } = touchDataRef.current;
    const deltaX = touch.clientX - startX;
    const deltaY = touch.clientY - startY;

    // Only start "dragging" visual state after moving a small threshold
    if (!touchDataRef.current.isDragging && (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5)) {
        touchDataRef.current.isDragging = true;
        element.style.position = 'fixed'; // Take element out of flow
        element.style.zIndex = '1000'; // Ensure it's on top
        element.style.width = `${elementRect.width}px`; // Maintain original width
        element.style.height = `${elementRect.height}px`; // Maintain original height
        element.style.pointerEvents = 'none'; // Prevent element from interfering with elementFromPoint
    }


    if (touchDataRef.current.isDragging) {
       e.preventDefault(); // Prevent scrolling *while* dragging
        // Update position based on initial touch point relative to viewport + drag delta
        const currentX = elementRect.left - scrollStartX + deltaX;
        const currentY = elementRect.top - scrollStartY + deltaY;
        element.style.left = `${currentX}px`;
        element.style.top = `${currentY}px`;
        // element.style.transform = `translate(${deltaX}px, ${deltaY}px)`; // Alternative positioning
    }
  }, []);

  const handleTouchEnd = useCallback((e) => {
     if (!touchDataRef.current) return;

     const { index: sourceIndex, source, element, isDragging } = touchDataRef.current;
     element.classList.remove('dragging'); // Remove dragging class

     if (isDragging) {
         element.style.pointerEvents = ''; // Restore pointer events
         element.style.position = ''; // Reset position
         element.style.zIndex = '';
         element.style.width = '';
         element.style.height = '';
         element.style.left = '';
         element.style.top = '';
         // element.style.transform = '';

         const touch = e.changedTouches[0];
         element.style.display = 'none'; // Temporarily hide to get element underneath
         const dropTargetElement = document.elementFromPoint(touch.clientX, touch.clientY);
         element.style.display = ''; // Restore display

         let dropZone = null; // 'arranged' or 'jumbled'
         let dropIndex = 0; // Index within the drop zone

         const arrangedArea = arrangedAreaRef.current;
         const jumbledArea = jumbledAreaRef.current;


         if (arrangedArea && arrangedArea.contains(dropTargetElement)) {
             dropZone = 'arranged';
             // Find the specific word element it was dropped near/on in arranged area
             const targetWord = dropTargetElement.closest('[data-word-index]');
             if (targetWord) {
                  dropIndex = parseInt(targetWord.getAttribute('data-word-index'), 10);
                  const rect = targetWord.getBoundingClientRect();
                  const isAfter = touch.clientY > rect.top + rect.height / 2;
                  if (isAfter) dropIndex += 1;
             } else {
                 // Dropped in empty space within arranged area
                 dropIndex = arrangedWords.length;
             }
         } else if (jumbledArea && jumbledArea.contains(dropTargetElement)) {
             dropZone = 'jumbled';
             // Dropping in jumbled always adds to the end for simplicity
             dropIndex = jumbledWords.length;
         }

         if (dropZone) {
             // Prevent dropping onto itself in the same list (redundant if handled in moveWord)
             // if (source === dropZone && sourceIndex === dropIndex) {
             //    touchDataRef.current = null;
             //    return;
             // }

             // Adjust target index if moving within the same list (arranged)
             if (source === 'arranged' && dropZone === 'arranged' && sourceIndex < dropIndex) {
                  dropIndex--;
             }
             moveWord(sourceIndex, source, dropIndex, dropZone);
         }
     } else {
        // If not dragging (just a tap), reset styles if any were partially applied
        element.style.position = '';
        element.style.zIndex = '';
        element.style.width = '';
        element.style.height = '';
        element.style.left = '';
        element.style.top = '';
        element.style.pointerEvents = '';
     }

     touchDataRef.current = null; // Clear touch data
  }, [moveWord, arrangedWords.length, jumbledWords.length]); // Added dependencies

  // --- Effects ---

  // Timer effect
  useEffect(() => {
    if (gameActive) {
      timerIntervalRef.current = setInterval(() => {
        setTimer(prevTime => prevTime + 0.1);
      }, 100);
    } else {
      clearTimer();
    }
    // Cleanup function
    return () => clearTimer();
  }, [gameActive, clearTimer]); // Re-run when gameActive changes


  // Cleanup timeouts on unmount
  useEffect(() => {
    // Return the cleanup function
    return () => {
      clearTimer();
      clearFeedbackTimeout();
    };
  }, [clearTimer, clearFeedbackTimeout]); // Include clear functions in dependency array


  // --- Render ---
  return (
    <>
      {/* Inline styles for touch dragging - less ideal but works for single file */}
      <style>{`
        .min-h-24 { min-height: 6rem; }
        .touchable {
          touch-action: none; /* Prevent default browser touch actions like scroll */
          user-select: none;
          -webkit-user-select: none;
          -webkit-touch-callout: none;
        }
         .dragging {
          opacity: 0.7;
          cursor: grabbing;
          /* Fixed position styling is applied dynamically in handleTouchMove */
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-indian-cream to-white flex flex-col items-center p-4 sm:p-8 pt-12 sm:pt-16 text-center relative z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg bg-white border border-indian-saffron/30 relative">
            <h1 className="text-3xl font-heading font-bold text-center mb-6 text-spiritual-600">Wisdom Words</h1>
            <p className="text-lg text-center mb-6 text-gray-700">Rearrange the words to form wisdom sayings from great spiritual teachers.</p>

            {/* Game controls */}
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <label htmlFor="teacher-select" className="block text-sm font-medium mb-1 text-spiritual-600">Select Teacher:</label>
                <select
                  id="teacher-select"
                  className="w-full sm:w-auto p-2 border border-spiritual-200 rounded-md bg-spiritual-50 text-spiritual-800"
                  value={currentAuthor}
                  onChange={(e) => setCurrentAuthor(e.target.value)}
                  disabled={gameActive}
                >
                  {Object.keys(quotesDB).map(author => (
                    <option key={author} value={author}>{author}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="difficulty-select" className="block text-sm font-medium mb-1 text-spiritual-600">Difficulty:</label>
                <select
                  id="difficulty-select"
                  className="w-full sm:w-auto p-2 border border-spiritual-200 rounded-md bg-spiritual-50 text-spiritual-800"
                  value={difficulty.name} // Use name as value for simplicity
                  onChange={(e) => {
                      const selectedLevel = difficultyLevels.find(level => level.name === e.target.value);
                      setDifficulty(selectedLevel || difficultyLevels[0]); // Fallback to default
                  }}
                  disabled={gameActive}
                >
                  {difficultyLevels.map(level => (
                    <option key={level.name} value={level.name}>{level.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-end w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto py-2 px-4 bg-indian-saffron text-white rounded-md hover:bg-indian-saffron/80 transition-colors disabled:opacity-50"
                  onClick={startGame}
                  disabled={gameActive}
                >
                  {gameComplete ? "Play Again" : "Start Game"}
                </button>
              </div>
            </div>

            {/* Timer display */}
            {(gameActive || gameComplete) && (
              <div className="mb-6 text-center">
                <div className="text-xl font-mono text-spiritual-800">
                  Time: <span className={gameComplete ? 'text-green-700 font-bold' : ''}>
                    {timer.toFixed(1)}s
                  </span>
                </div>

                {gameComplete && (
                  <div className="mt-2 text-green-700 font-bold text-xl">
                    Great! You've arranged the quote correctly!
                  </div>
                )}

                {/* Incorrect arrangement feedback */}
                {showIncorrectFeedback && (
                  <div className="mt-2 text-red-600 font-bold">
                    That doesn't seem right. Try rearranging the words.
                  </div>
                )}

                {/* Show the original quote after completion */}
                {gameComplete && (
                  <div className="mt-4 p-4 bg-spiritual-50 rounded-lg border border-spiritual-200">
                    <p className="italic">"{originalQuote}"</p>
                    <p className="mt-2 font-semibold text-spiritual-600">— {currentAuthor}</p>
                  </div>
                )}
              </div>
            )}

            {/* Game board */}
            {(gameActive || gameComplete) && (
              <div>
                {/* Arranged words area */}
                <div
                  ref={arrangedAreaRef}
                  className={`min-h-24 p-4 mb-4 border-2 border-dashed border-spiritual-300 rounded-lg flex flex-wrap gap-2 bg-white bg-opacity-70 ${showIncorrectFeedback ? 'border-red-300 bg-red-50 bg-opacity-30' : ''}`}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, arrangedWords.length, 'arranged')} // Drop in empty space adds to end
                >
                  {arrangedWords.map((word, index) => (
                    <div
                      key={`arranged-${index}-${word}`} // Make key more robust
                      data-word-index={index} // For precise drop detection
                      className="p-2 bg-spiritual-100 rounded cursor-move shadow-sm hover:shadow-md transition-shadow border border-spiritual-200 text-spiritual-800 touchable"
                      draggable="true"
                      onDragStart={(e) => handleDragStart(e, index, 'arranged')}
                      onDragOver={handleDragOver} // Allow dropping onto other words
                      onDrop={(e) => handleDrop(e, index, 'arranged')} // Drop onto specific word
                      onTouchStart={(e) => handleTouchStart(e, index, 'arranged')}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                      // onTouchCancel={handleTouchEnd} // Handle cancellation like end
                    >
                      {word}
                    </div>
                  ))}
                  {arrangedWords.length === 0 && (
                    <div className="text-spiritual-400 w-full text-center py-2 pointer-events-none"> {/* Prevent interfering with drop */}
                      Drag words here to arrange the quote
                    </div>
                  )}
                </div>

                {/* Jumbled words */}
                <div
                  ref={jumbledAreaRef}
                  className="p-4 border border-spiritual-200 rounded-lg flex flex-wrap gap-2 bg-white bg-opacity-70 min-h-[4rem]" // Ensure minimum height
                   onDragOver={handleDragOver}
                   onDrop={(e) => handleDrop(e, jumbledWords.length, 'jumbled')} // Drop only adds to end here
                >
                  {jumbledWords.map((word, index) => (
                    <div
                      key={`jumbled-${index}-${word}`} // Make key more robust
                       data-word-index={index} // For potential future use
                      className="p-2 bg-spiritual-50 rounded cursor-move shadow-sm hover:shadow-md transition-shadow border border-spiritual-100 text-spiritual-700 touchable"
                      draggable="true"
                      onDragStart={(e) => handleDragStart(e, index, 'jumbled')}
                      onTouchStart={(e) => handleTouchStart(e, index, 'jumbled')}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                      // onTouchCancel={handleTouchEnd}
                    >
                      {word}
                    </div>
                  ))}
                  {jumbledWords.length === 0 && !gameComplete && gameActive && (
                    <div className="text-spiritual-400 w-full text-center py-2 pointer-events-none">
                      All words have been arranged. Check your answer!
                    </div>
                  )}
                   {jumbledWords.length === 0 && gameComplete && (
                    <div className="text-spiritual-400 w-full text-center py-2 pointer-events-none">
                      Quote Completed!
                    </div>
                  )}
                </div>

                {/* Check button when all words are arranged but not confirmed correct */}
                {jumbledWords.length === 0 && !gameComplete && gameActive && (
                  <div className="mt-4 text-center">
                    <button
                      className="py-2 px-4 bg-spiritual-600 text-white rounded-md hover:bg-spiritual-700 transition-colors"
                      onClick={checkArrangement}
                    >
                      Check My Answer
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Best times display */}
            {Object.keys(bestTimes).length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-heading font-bold mb-2 text-spiritual-600">Best Times:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(bestTimes).map(([key, time]) => (
                    <div key={key} className="p-3 bg-spiritual-50 rounded border border-spiritual-200">
                      <div className="font-medium text-spiritual-700">{key.split('-')[0]} ({key.split('-')[1]})</div>
                      <div className="text-green-700">{time.toFixed(1)}s</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Om symbol decorative elements */}
            <div className="absolute top-2 right-2 text-3xl text-indian-saffron opacity-60">ॐ</div>
            <div className="absolute bottom-2 left-2 text-3xl text-indian-saffron opacity-60">ॐ</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WisdomWordsGame;
