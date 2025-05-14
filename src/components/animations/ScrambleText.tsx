import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

interface ScrambleTextProps {
  text: string;
  className?: string;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to generate different scrambled versions of the text
  const getScrambledVersion = (originalText: string) => {
    // For "SCRAMBLE", use one of several predefined scrambles
    if (originalText.toUpperCase() === "SCRAMBLE") {
      const scrambledVersions = [
        "CRAMBLES", // S moved to the end
        "SCRAMBEL", // L and E swapped
        "LEBMARCS", // Completely reversed
        "RAMBLESC", // First letter moved to the end
        "CSAMBLER", // Letters mixed up
        "BLESCRMA"  // Split and reversed
      ];

      // Get a random version, but ensure it's different from the last one
      const lastVersion = containerRef.current?.dataset.lastScramble || "";
      let newVersion;
      do {
        newVersion = scrambledVersions[Math.floor(Math.random() * scrambledVersions.length)];
      } while (newVersion === lastVersion && scrambledVersions.length > 1);

      // Store the selected version for next time
      if (containerRef.current) {
        containerRef.current.dataset.lastScramble = newVersion;
      }

      return newVersion;
    }

    // For other words, create a more randomized scramble
    const chars = originalText.split('');

    // Ensure we get a different arrangement
    let scrambled;
    do {
      // Shuffle the array using Fisher-Yates algorithm
      const shuffled = [...chars];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      scrambled = shuffled.join('');
    } while (scrambled === originalText);

    return scrambled;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any existing content
    containerRef.current.innerHTML = '';

    // Get the scrambled version
    const scrambledText = getScrambledVersion(text);

    // Create letter elements for the scrambled version
    const letterElements: HTMLSpanElement[] = [];

    scrambledText.split('').forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.display = 'inline-block';
      span.style.position = 'relative';
      span.style.margin = '0 1px';
      span.dataset.letter = letter;

      // Add to container and store reference
      containerRef.current?.appendChild(span);
      letterElements.push(span);
    });

    // Set initial styles
    gsap.set(letterElements, {
      position: 'relative',
      transformOrigin: 'center center',
      color: 'rgba(241, 169, 18, 1)'
    });

    // Function to animate the unscrambling process
    const animateUnscramble = () => {
      const timeline = gsap.timeline({ delay: 1 });

      // Get the original and scrambled letters
      const originalLetters = text.split('');
      const scrambledLetters = [...scrambledText.split('')]; // Create a copy we can modify

      // Add a small delay at the beginning to let users see the scrambled word
      timeline.to({}, { duration: 0.5 });

      // Process each position in the word one by one
      for (let position = 0; position < originalLetters.length; position++) {
        const correctLetter = originalLetters[position];
        const currentLetter = scrambledLetters[position];

        // If the letter is already correct, skip to the next position
        if (correctLetter === currentLetter) {
          // Briefly highlight the correct letter
          timeline.to(letterElements[position], {
            scale: 1.2,
            color: '#22c55e', // Green color
            duration: 0.3,
            yoyo: true,
            repeat: 1
          });
          continue;
        }

        // 1. Highlight the current position
        timeline.to(letterElements[position], {
          scale: 1.2,
          backgroundColor: 'rgba(241, 169, 18, 0.2)',
          borderRadius: '4px',
          duration: 0.4
        });

        // 3. Find where the correct letter is in the scrambled text
        const correctLetterIndex = scrambledLetters.indexOf(correctLetter);

        // 4. Highlight the letter that should be in this position
        timeline.to(letterElements[correctLetterIndex], {
          scale: 1.2,
          color: '#F1A912',
          fontWeight: 'bold',
          duration: 0.4
        });

        // Add a small pause before the swap
        timeline.to({}, { duration: 0.2 });

        // 6. Animate the swap
        // First, store the positions of both letters
        const pos1 = {
          x: letterElements[position].offsetLeft,
          y: letterElements[position].offsetTop
        };

        const pos2 = {
          x: letterElements[correctLetterIndex].offsetLeft,
          y: letterElements[correctLetterIndex].offsetTop
        };

        // Animate the first letter moving to the second position
        timeline.to(letterElements[position], {
          x: pos2.x - pos1.x,
          y: -15, // Arc up
          duration: 0.5,
          ease: 'power1.out'
        });

        // Animate the second letter moving to the first position
        timeline.to(letterElements[correctLetterIndex], {
          x: pos1.x - pos2.x,
          y: -15, // Arc up
          duration: 0.5,
          ease: 'power1.out'
        }, '-=0.5'); // Start at the same time

        // Complete the arc for both letters
        timeline.to(letterElements[position], {
          y: 0,
          duration: 0.3,
          ease: 'bounce.out'
        });

        timeline.to(letterElements[correctLetterIndex], {
          y: 0,
          duration: 0.3,
          ease: 'bounce.out'
        }, '-=0.3'); // Start at the same time

        // 7. Update the scrambled letters array to reflect the swap
        [scrambledLetters[position], scrambledLetters[correctLetterIndex]] =
          [scrambledLetters[correctLetterIndex], scrambledLetters[position]];

        // 8. Update the actual DOM elements
        timeline.call(() => {
          // Swap the text content
          const temp = letterElements[position].textContent;
          letterElements[position].textContent = letterElements[correctLetterIndex].textContent;
          letterElements[correctLetterIndex].textContent = temp;

          // Reset the transforms
          gsap.set([letterElements[position], letterElements[correctLetterIndex]], {
            x: 0,
            y: 0,
            scale: 1,
            backgroundColor: 'transparent',
            color: 'rgba(241, 169, 18, 1)'
          });
        });

        // Add a small pause between positions
        timeline.to({}, { duration: 0.5 });
      }

      // Add a small pause before resetting
      timeline.to({}, { duration: 0.3 });

      // Reset positions with correct order to ensure everything is clean
      timeline.call(() => {
        // Clear container
        if (containerRef.current) {
          containerRef.current.innerHTML = '';

          // Recreate in correct order
          text.split('').forEach(letter => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.display = 'inline-block';
            span.style.margin = '0 1px';
            span.style.color = 'rgba(241, 169, 18, 1)';
            containerRef.current?.appendChild(span);
          });
        }
      });

      // Celebrate the correct word
      timeline.to(containerRef.current?.querySelectorAll('span'), {
        scale: 1.1,
        stagger: 0.05,
        duration: 0.3,
        ease: 'back.out(2)',
        yoyo: true,
        repeat: 1
      });

      return timeline;
    };

    // Create the main timeline that runs once and then pauses on the correct word
    const mainTimeline = gsap.timeline({
      repeat: 0, // Only run once
      onComplete: () => {
        // After completing the animation, show the correct word permanently
        if (containerRef.current) {
          // Ensure the word is displayed correctly
          containerRef.current.innerHTML = '';

          // Create elements for the correct word
          text.split('').forEach(letter => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.display = 'inline-block';
            span.style.margin = '0 1px';
            span.style.color = 'rgba(241, 169, 18, 1)';
            containerRef.current?.appendChild(span);
          });

          // Optional: Add a subtle hover effect to indicate it's still interactive
          const letterElements = containerRef.current.querySelectorAll('span');

          containerRef.current.addEventListener('mouseenter', () => {
            gsap.to(letterElements, {
              stagger: 0.05,
              y: -2,
              duration: 0.3,
              ease: 'power2.out'
            });
          });

          containerRef.current.addEventListener('mouseleave', () => {
            gsap.to(letterElements, {
              y: 0,
              duration: 0.3,
              ease: 'power2.out'
            });
          });
        }
      }
    });

    // Add the initial animation
    mainTimeline.add(animateUnscramble());

    return () => {
      // Clean up animation when component unmounts
      mainTimeline.kill();
    };
  }, [text]);

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {text}
    </div>
  );
};

export default ScrambleText;
