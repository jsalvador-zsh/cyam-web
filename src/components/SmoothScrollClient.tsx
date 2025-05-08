import { useEffect } from "react";
import { initSmoothScroll } from "../scripts/smooth-scroll";
import { animateHeroSection, animateAboutSection } from "../scripts/animations";

export default function SmoothScrollClient() {
	useEffect(() => {
		initSmoothScroll();
		animateHeroSection();
		animateAboutSection();
	}, []);

	return null;
}
