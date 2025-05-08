import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function animateHeroSection(selector: string = '.hero-animate') {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach(el => {
    gsap.from(el, {
      opacity: 0,
      y: 100,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });
  });
}

export function animateAboutSection(selector: string = '.about-animate') {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach(el => {
    gsap.from(el, {
      opacity: 0,
      y: 250,
      duration: 2,
      ease: 'power2.in',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });
  });
}