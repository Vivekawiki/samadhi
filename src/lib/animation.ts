import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Animated border effect for cards
export const animateBorder = (element: HTMLElement, color: string = '#F1A912') => {
  const tl = gsap.timeline({ paused: true });

  tl.to(element, {
    boxShadow: `0 0 0 2px ${color}`,
    duration: 0.3
  });

  element.addEventListener('mouseenter', () => tl.play());
  element.addEventListener('mouseleave', () => tl.reverse());

  return tl;
};

// Scroll-triggered animations
export const createScrollAnimation = (
  selector: string,
  animation: gsap.TweenVars = {},
  triggerOptions: ScrollTrigger.Vars = {}
) => {
  return gsap.from(selector, {
    scrollTrigger: {
      trigger: selector,
      start: 'top 80%',
      ...triggerOptions
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    ...animation
  });
};

// Page transition animation
export const pageTransition = (element: HTMLElement) => {
  gsap.from(element, {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: 'power2.out'
  });
};

// Staggered animation for multiple elements
export const staggerElements = (
  elements: string | HTMLElement[],
  staggerAmount: number = 0.1,
  animation: gsap.TweenVars = {}
) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: staggerAmount,
    ease: 'power2.out',
    ...animation
  });
};

// Hover scale effect
export const hoverScale = (element: HTMLElement, scale: number = 1.05) => {
  const tl = gsap.timeline({ paused: true });

  tl.to(element, {
    scale: scale,
    duration: 0.3,
    ease: 'power2.out'
  });

  element.addEventListener('mouseenter', () => tl.play());
  element.addEventListener('mouseleave', () => tl.reverse());

  return tl;
};

// Text reveal animation
export const textReveal = (element: HTMLElement) => {
  const text = element.textContent;
  element.textContent = '';

  const chars = text.split('');
  chars.forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.opacity = '0';
    span.style.display = 'inline-block';
    element.appendChild(span);
  });

  const spans = element.querySelectorAll('span');

  gsap.to(spans, {
    opacity: 1,
    duration: 0.05,
    stagger: 0.03,
    ease: 'power2.out'
  });
};

// Animated background gradient
export const animateGradient = (element: HTMLElement) => {
  const tl = gsap.timeline({ repeat: -1, yoyo: true });

  tl.to(element, {
    backgroundPosition: '100% 0%',
    duration: 10,
    ease: 'sine.inOut'
  });

  return tl;
};
