//script pour la lightbox//

//sélection des éléments

const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

//fonction pour ouvrir la lightbox

const openLightbox = (index) => {
    currentIndex = index;
    lightbox.style.display = 'flex';
    updateLightboxImage();
};


//fonction pour mettre à jour l'image de la lb

const updateLightboxImage = () => {
    lightboxImage.src = galleryImages[currentIndex].src;
    lightboxImage.alt = galleryImages[currentIndex].alt;
};

//fonction pour fermer la lightbox

const closeLightbox = () => {
    lightbox.style.display = 'none';
};


//fonction pour aller à l'image précédente

const showPrevImage = () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
};

//fonction pour aller à l'image suivante

const showNextImage = () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateLightboxImage();
};

//événement pour chaque image de la galerie

galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));

});


//événement des boutons

closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);
//ajouter ici des évent qui trigger les fonctions mais avec du swipe ?


//fermer la lightbox en cliquant hors de l'image

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox && e.target !== lightboxImage) {
        closeLightbox();
    }
});


 



lightboxImage.addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;

}, false);

lightboxImage.addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
   
    handleGesture();
}, false);

const handleGesture = () => {
    if (touchendX < touchstartX) {
        showPrevImage;
    }

    if (touchendX > touchstartX) {
        showNextImage;
    }
 
    }
    
   





//projet script pour afficher 10 images à la fois
//
//compter le nmbr d'images et numéro (index?)
//déterminer la moitié
//
//
//
//
//
//

//script pour le menu en vue mobile



function openCloseMenu() {

    var navigation = document.getElementById('navigation');


    if (navigation.style.display === 'none' || navigation.style.display === '') {
        navigation.style.display = 'block';



    }
    else {


        navigation.style.display = 'none';



    }

}




