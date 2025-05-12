import React, { useState, useEffect, useRef, useCallback } from 'react';

// --- Data (kept outside component for clarity) ---

const quotesDB = {
  "SRI RAMAKRISHNA": [
    "You see many stars at night in the sky but find them not when the sun rises; can you say that there are no stars in the heaven of day? So, O man, because you behold not God in the days of your ignorance, say not that there is no God.",
    "God is formless and God is with form too, and He is that which transcends both form and formlessness. He alone can say what else He is.",
    "He is born to no purpose who, having the rare privilege of being born a man, is unable to realize God in this life.",
    "God is in all men, but all men are not in God, that is the reason why they suffer.",
    "You will see God if your love for Him is as strong as the attachment of the worldly-minded person for things of the world.",
    "The darkness of centuries is dispersed as soon as a single light is brought into the room. The accumulated ignorance and misdoings of innumerable births vanish at one glance of the gracious eyes of God.",
    "Pray to Him in any way you will. He is sure to hear you, for He hears even the footfall of an ant.",
    "Man is born in this world to realize God, it is not good to forget that and divert the mind to other things.",
    "There are pearls in the sea; but you must dive again and again, until you find them. So God is in the world, but you will have to persevere to see Him.",
    "It is easy to talk religion but difficult to practice it.",
    "The sun is many times bigger than the earth but distance makes it look like a very small disc. So the Lord is infinitely great, but being too far away from Him we fail to comprehend His real greatness.",
    "Egoism is like a cloud that keeps God hidden from our sight. If by the mercy of the Guru egoism vanishes, God is seen in His full glory.",
    "Knowledge leads to unity and ignorance to diversity.",
    "As a lamp cannot burn without oil, so a man cannot live without God.",
    "The magnetic needle points always to the north, hence the sailing-vessel does not lose her course. So long as the heart of man is directed towards God, he cannot be lost in the ocean of worldliness.",
    "He alone enters the kingdom of heaven who is not a thief of his own thoughts. In other words, guilelessness and simple faith are the roads to that kingdom.",
    "Rain-water will never stand still on high ground, but will run down to the lowest level; even so the mercy of God remains in the hearts of the lowly, but drains off from those of the vain and proud.",
    "The tree laden with fruit always bends low. So if you wish to be great, be lowly and meek.",
    "There is no quality higher than forbearance, which all should cultivate. A black smith's anvil remains immovable under the countless blows of his heavy hammer, so should everyone with a firm determination endure all that is said or done by others.",
    "He who has faith has all, and he who lacks faith lacks all.",
    "A truly religious man should think that other religions also are paths leading to truth. We should always maintain an attitude of respect towards other religions.",
    "Remain always strong and steadfast in your own faith, but eschew all bigotry and intolerance.",
    "That knowledge which purifies the intellect is the true knowledge, everything else is non-knowledge.",
    "As many faiths, so many paths."
  ],
  "THE HOLY MOTHER": [
    "Everything depends upon one's mind. Nothing can be achieved without purity of mind.",
    "The less you become attached to the world, the more you will enjoy peace of mind.",
    "Many turn toward God as a result of much suffering in life. But one whose mind is offered like a flower to the Lord right from childhood is indeed blessed.",
    "If you do not pray to God, what is that to Him? It is only your misfortune.",
    "When a man sees defects in others, his own mind first gets polluted. What does he gain by finding faults in others? He only hurts himself by that.",
    "Many are known to do great work under the stress of some strong emotion. But a man's true nature is known by the manner in which he does his insignificant daily tasks.",
    "Ordinary human love results in misery. Love for God brings blessedness.",
    "Can you call him a man who is devoid of compassion? He is a veritable beast.",
    "Past sins are counteracted by meditation, japa, and spiritual thought.",
    "The mantra purifies the body. Man becomes pure by repeating the mantra of God.",
    "One suffers as a result of one's own actions. So, instead of blaming others for such sufferings, one should pray to the Lord and depending entirely on His grace, try to bear them patiently and with forbearance under all circumstances.",
    "Forbearance is a great virtue; there's no other like it.",
    "There is no treasure equal to contentment and no virtue equal to fortitude.",
    "If you do a good act, it cancels the effects of your evil deeds. If one prays, takes the Name of God and thinks of Him, the effects of evil are cancelled.",
    "He who thinks always of the Lord, which way can evil come to him?",
    "One who makes a habit of prayer will easily overcome all difficulties and remain calm and unruffled in the midst of the trials of life.",
    "God is one's very own. It is the eternal relationship. He is everyone's own. One realizes God in proportion to the intensity of one's feeling for God.",
    "The happiness of the world is transitory. The less you become attached to the world, the more you enjoy peace of mind.",
    "It is the nature of water to flow downwards, but the sun's rays lift it up towards the sky. Likewise it is the very nature of the mind to go to lower things, to objects of enjoyment, but the grace of God can make the mind go towards higher objects.",
    "The mind is everything. It is in the mind alone that one feels pure and impure. A man, first of all, must make his own mind guilty and then alone he can see another man's guilt. Does anything ever happen to another if you enumerate his faults? It only injures you.",
    "One should always recollect God and pray to Him for right understanding.",
    "As wind removes the cloud, so the Name of God destroys the cloud of worldliness.",
    "I tell you one thing-if you want peace, do not find fault with others. Rather see your own faults. Learn to make the world your own. No one is a stranger, my child; the whole world is your own.",
    "One must live carefully. Every action produces its results. It is not good to use harsh words towards others or be responsible for their suffering."
  ],
  "SWAMI VIVEKANANDA": [
    "Education is the manifestation of the perfection already in man.",
    "The training by which the current and expression of will are brought under control and become fruitful is called education.",
    "We want that education by which character is formed, strength of mind is increased, the intellect is expanded, and by which one can stand on one's own feet.",
    "What we want are western science coupled with Vedanta, brahmacharya as the guiding motto, and also sraddha and faith in one's own self.",
    "I call him a traitor who, having been educated, nursed in luxury by the heart's blood of the downtrodden millions of toiling poor, never even takes a thought for them.",
    "The very essence of education is concentration of mind.",
    "We are what our thoughts have made us; so take care of what you think.",
    "Pleasure is not the goal of man, but knowledge.",
    "Character has to be established through a thousand stumbles.",
    "Stand up, be bold, be strong. Take the whole responsibility on your own shoulders, and know that you are the creator of your own destiny.",
    "Faith, faith, faith in ourselves, faith, faith in God-this is the secret of greatness.",
    "All power is within you; you can do anything and everything. Believe in that, do not believe that you are weak. …. Stand up and express the divinity within you.",
    "Everything can be sacrificed for truth, but truth cannot be sacrificed for anything.",
    "Unselfishness is more paying, only people have not the patience to practice it.",
    "The only definition that can be given of morality is this: That which is selfish is immoral, and that which is unselfish is moral.",
    "This is the great fact: strength is life, weakness is death.",
    "Religion is not in books, nor in theories, nor in dogmas, nor in talking, not even in reasoning. It is being and becoming.",
    "Religion is the manifestation of the divinity already in man.",
    "The secret of religion lies not in theories but in practice. To be good and to do good- that is the whole of religion.",
    "Each soul is potentially divine. The goal is to manifest this divinity within by controlling nature, external and internal.",
    "Purity, patience and perseverance are the three essentials to success and above all-Love.",
    "This life is short, the vanities of the world are transient, but they alone live who live for others, the rest are more dead than alive.",
    "If a man with an ideal makes a thousand mistakes, I am sure that the man without an ideal makes fifty thousand. Therefore it is better to have an ideal.",
    "Whatever you think, that you will be. If you think yourselves weak, weak you will be; if you think yourselves strong, strong you will be.",
    "This world is the great gymnasium where we come to make ourselves strong.",
    "Whatever others think or do, lower not your standard of purity, morality and love of God.",
    "Neither money pays, nor name nor fame, nor learning; it is character that can cleave through adamantine walls of difficulties. Bear this in mind.",
    "What I want is muscles of iron and nerves of steel, inside which dwells a mind of the same material as that of which the thunderbolt is made. Strength, manhood, Kshatra Virya + Brahma Teja – this I want.",
    "Holiness is the greatest power. Everything else quails before it.",
    "I want iron wills and hearts that do not know how to quake.",
    "First build up your physique. Then only you can get control over the mind.",
    "The only test of good things is that they make us strong.",
    "This I lay down as the first essential in all I teach: anything that brings spiritual, mental, or physical weakness, touch it not with the toes of your feet.",
    "The national ideals of India are RENUNCIATION and SERVICE. Intensify her in those channels, and the rest will take care of itself.",
    "Arise, awake, and stop not till the goal is reached.",
    "India will be raised, not with the power of the flesh, but with the power of the spirit.",
    "One of the greatest lessons I have learnt in my life is to pay as much attention to the means of work as to its end."
  ]
};

const difficultyLevels = [
  { name: "Easy", scrambleMethod: "words", timerBonus: 1.5 },
  { name: "Medium", scrambleMethod: "phrases", timerBonus: 1.0 },
  { name: "Hard", scrambleMethod: "complex", timerBonus: 0.5 }
];

// Filter quotes by word count for different difficulty levels
const filterQuotesByDifficulty = (quotes, difficulty) => {
  return quotes.filter(quote => {
    const wordCount = quote.split(/\s+/).length;

    if (difficulty === "Easy") {
      return wordCount <= 20;
    } else if (difficulty === "Medium") {
      return wordCount > 20 && wordCount <= 30;
    } else { // Hard
      return wordCount > 30;
    }
  });
};

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

    const allQuotes = quotesDB[currentAuthor];
    // Filter quotes based on difficulty level
    const filteredQuotes = filterQuotesByDifficulty(allQuotes, difficulty.name);

    // If no quotes match the difficulty criteria, use all quotes
    const quotesToUse = filteredQuotes.length > 0 ? filteredQuotes : allQuotes;

    const selectedQuote = quotesToUse[Math.floor(Math.random() * quotesToUse.length)];

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

      <div className="min-h-screen bg-gradient-to-r from-indian-cream to-white flex flex-col items-center p-4 sm:p-8 pt-6 sm:pt-10 text-center relative z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg border border-indian-saffron/30 relative bg-gradient-to-br from-spiritual-50/30 to-white">
            <h1 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-2 sm:mb-4 text-spiritual-600">Wisdom Quotes</h1>
            <p className="text-base sm:text-lg text-center mb-4 sm:mb-6 text-gray-700">Rearrange the words to form wisdom sayings from great spiritual teachers.</p>

            {/* Game controls */}
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <label htmlFor="teacher-select" className="block text-sm font-medium mb-1 text-spiritual-600">Select Teacher:</label>
                <select
                  id="teacher-select"
                  className="w-full sm:w-auto p-2 border border-spiritual-200 rounded-md bg-gradient-to-r from-spiritual-50 to-white text-spiritual-800"
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
                  className="w-full sm:w-auto p-2 border border-spiritual-200 rounded-md bg-gradient-to-r from-spiritual-50 to-white text-spiritual-800"
                  value={difficulty.name} // Use name as value for simplicity
                  onChange={(e) => {
                      const selectedLevel = difficultyLevels.find(level => level.name === e.target.value);
                      setDifficulty(selectedLevel || difficultyLevels[0]); // Fallback to default
                  }}
                  disabled={gameActive}
                >
                  {difficultyLevels.map(level => {
                    const quoteCount = filterQuotesByDifficulty(quotesDB[currentAuthor], level.name).length;
                    return (
                      <option key={level.name} value={level.name}>
                        {level.name} ({quoteCount} quotes)
                      </option>
                    );
                  })}
                </select>
                <div className="text-xs text-gray-500 mt-1">
                  Easy: up to 20 words | Medium: 21-30 words | Hard: 31+ words
                </div>
              </div>

              <div className="flex items-end w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto py-2 px-4 bg-indian-saffron text-white rounded-md hover:bg-indian-saffron/80 transition-colors disabled:opacity-50 shadow-md"
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
                  <div className="mt-4 p-4 rounded-lg border border-spiritual-200 bg-gradient-to-br from-spiritual-100/90 to-white shadow-sm">
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
                  className={`min-h-24 p-4 mb-4 border-2 border-dashed rounded-lg flex flex-wrap gap-2 bg-gradient-to-br from-spiritual-50/50 to-white shadow-inner ${showIncorrectFeedback ? 'border-red-300 bg-gradient-to-br from-red-50/50 to-white' : 'border-spiritual-300'}`}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, arrangedWords.length, 'arranged')} // Drop in empty space adds to end
                >
                  {arrangedWords.map((word, index) => (
                    <div
                      key={`arranged-${index}-${word}`} // Make key more robust
                      data-word-index={index} // For precise drop detection
                      className="p-2 bg-gradient-to-r from-spiritual-100 to-white rounded cursor-move shadow-sm hover:shadow-md transition-shadow border border-spiritual-200 text-spiritual-800 touchable"
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
                  className="p-4 border border-spiritual-200 rounded-lg flex flex-wrap gap-2 bg-gradient-to-br from-spiritual-50/30 to-white min-h-[4rem] shadow-sm" // Ensure minimum height
                   onDragOver={handleDragOver}
                   onDrop={(e) => handleDrop(e, jumbledWords.length, 'jumbled')} // Drop only adds to end here
                >
                  {jumbledWords.map((word, index) => (
                    <div
                      key={`jumbled-${index}-${word}`} // Make key more robust
                       data-word-index={index} // For potential future use
                      className="p-2 bg-gradient-to-r from-spiritual-50 to-white rounded cursor-move shadow-sm hover:shadow-md transition-shadow border border-spiritual-100 text-spiritual-700 touchable"
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
                      className="py-2 px-4 bg-spiritual-600 text-white rounded-md hover:bg-spiritual-700 transition-colors shadow-md"
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
                    <div key={key} className="p-3 bg-gradient-to-r from-spiritual-50 to-white rounded border border-spiritual-200 shadow-sm">
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
