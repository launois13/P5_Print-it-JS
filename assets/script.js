// Définition des slides
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

//Sélection des éléments du DOM
const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot'); // Sélectionne tous les points

let currentIndex = 0;

// Mise à jour des "dots"
function updateDots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); // Ajoute la classe pour le point actuel
        } else {
            dot.classList.remove('dot_selected'); // Suppression de la classe pour les autres points
        }
    });
}

// Mise à jour du carrousel
function updateCarousel(index, direction) {
	// Gestion des index pour le défilement infini
        if (currentIndex === -1 && direction === 'left') {
        currentIndex = slides.length - 1;
    	} else if (currentIndex === slides.length && direction === 'right') {
        currentIndex = 0;
    }

    // Mise à jour image et texte
    const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
    bannerImg.src = imagePath;
    bannerImg.alt = `Slide ${currentIndex + 1}`;

    const tagLine = slides[currentIndex].tagLine;
    document.querySelector('p').innerHTML = tagLine;

    // Affichage dans la console du navigateur pour le débogage
    console.log(`Clic sur la flèche ${direction}`);
}

// Gestionnaire d'événement clic flèche gauche
arrowLeft.addEventListener('click', function () {
    currentIndex = (currentIndex - 1);
    updateCarousel(currentIndex, 'left');
    updateDots(currentIndex); // Mise à jour des "dots""
});

// Gestionnaire d'événement clic flèche droite
arrowRight.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) ;
    updateCarousel(currentIndex, 'right');
    updateDots(currentIndex); // Mise à jour des "dots""
});


// Affiche la première diapositive au chargement de la page
updateCarousel(currentIndex, 'démarrage');
updateDots(currentIndex); // Mise à jour des "dots" pour la première diapositive
