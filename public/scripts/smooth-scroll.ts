import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export const initSmoothScroll = () => {
	const lenis = new Lenis({
		lerp: 0.1, // suavizado
		smoothWheel: true
	});

	function raf(time: number) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);

	// Vincular ScrollTrigger con Lenis
	lenis.on('scroll', ScrollTrigger.update);
};
