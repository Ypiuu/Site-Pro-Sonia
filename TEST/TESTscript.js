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
    currentIndex = index ;
    lightbox.style.display = 'flex';
    updateLightboxImage();
} ;


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


//fermer la lightbox en cliquant hors de l'image

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox && e.target !== lightboxImage) {
        closeLightbox();
    }
});










/*// MODAL 

//get the modal
let modal = document.getElementById("myModal"); 

// get the button that opens the modal
let btn = document.getElementById("myBtn"); 

// get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// when the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// when the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none"; 
}

//when the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none"; 
    }
}

*/


