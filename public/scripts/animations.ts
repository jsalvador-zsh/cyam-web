import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateHeroSection() {
	const elements = document.querySelectorAll(".hero-animate");

	if (!elements.length) return;

	elements.forEach((el, index) => {
		gsap.from(el, {
			opacity: 0,
			y: 50,
			duration: 0.8,
			delay: index * 0.2,
			ease: "power2.out",
			scrollTrigger: {
				trigger: el,
				start: "top 85%",
			},
		});
	});
}