import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes';

const branding = document.getElementById('branding-logo');
const logo = document.getElementById('refactor-logo');
const footer = document.getElementById('opening-footer');

const deck = new Reveal({
	plugins: [RevealNotes],
	hash: true,
	pdfSeparateFragments: false
});

// ensure the Euricom logo properly transforms to remain readable.
deck.on('slidechanged', event => {
	const hasLightBackground = event.currentSlide.dataset.backgroundColor === 'white';
	const isOpening = event.currentSlide.dataset.opening === 'true';

	deck.configure({ controls: !isOpening });
	if (isOpening) {
		footer.classList.remove('animate__fadeOutDown');
		logo.classList.remove('animate__fadeOut');
		branding.classList.remove('animate__fadeIn');
		footer.classList.add('animate__fadeInUp');
		logo.classList.add('animate__fadeIn');
		branding.classList.add('animate__fadeOut');
	} else {
		footer.classList.remove('animate__fadeInUp');
		logo.classList.remove('animate__fadeIn');
		branding.classList.remove('animate__fadeOut');
		footer.classList.add('animate__fadeOutDown');
		logo.classList.add('animate__fadeOut');
		branding.classList.add('animate__fadeIn');
	}

	if (hasLightBackground) {
		branding.src = 'assets/euricom-logo-light.png';
	} else {
		branding.src = 'assets/euricom-logo.png';
	}
});

deck.initialize();
