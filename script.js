const firstSec = document.querySelector('.first')
const secondSec = document.querySelector('.second')
const thirdSec = document.querySelector('.third')
const fourthSec = document.querySelector('.fourth')
const firstBtn = document.querySelector('.firstBtn')
const secondBtn = document.querySelector('.secondBtn')
const thirdBtn = document.querySelector('.thirdBtn')
const fourthBtn = document.querySelector('.fourthBtn')
const hr = document.querySelector('hr')

firstBtn.addEventListener('click', () => {
    firstSec.style.display = 'block'
    secondSec.style.display = 'none'
    thirdSec.style.display = 'none'
    fourthSec.style.display = 'none'
    hr.style.transform = 'translateX(0)'
})
secondBtn.addEventListener('click', () => {
    firstSec.style.display = 'none'
    secondSec.style.display = 'block'
    thirdSec.style.display = 'none'
    fourthSec.style.display = 'none'
    hr.style.transform = 'translateX(25vw)'
})
thirdBtn.addEventListener('click', () => {
    firstSec.style.display = 'none'
    secondSec.style.display = 'none'
    thirdSec.style.display = 'block'
    fourthSec.style.display = 'none'
    hr.style.transform = 'translateX(50vw)'
})
fourthBtn.addEventListener('click', () => {
    firstSec.style.display = 'none'
    secondSec.style.display = 'none'
    thirdSec.style.display = 'none'
    fourthSec.style.display = 'block'
    hr.style.transform = 'translateX(75vw)'
})

// gallery
// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
    document.querySelector('.burger').style.display = 'none';
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.querySelector('.burger').style.display = 'block';
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    // var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    // captionText.innerHTML = dots[slideIndex - 1].alt;
}