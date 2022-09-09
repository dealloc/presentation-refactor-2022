import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes';

const branding = document.getElementById('branding-logo');
const deck = new Reveal({
	plugins: [RevealNotes],
	hash: true,
	pdfSeparateFragments: false
});

// ensure the Euricom logo properly transforms to remain readable.
deck.on('slidechanged', event => {
	const hasLightBackground = event.currentSlide.dataset.backgroundColor === 'white';

	if (hasLightBackground) {
		branding.src = 'assets/euricom-logo-light.png';
	} else {
		branding.src = 'assets/euricom-logo.png';
	}
});

deck.initialize();
