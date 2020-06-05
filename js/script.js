// burger

const barsBtn = document.querySelector('.fa-bars');
const timesBtn = document.querySelector('.fa-times');
const nav = document.querySelector('nav');
const upBtn = document.querySelector('.up')

const openNav = () => {
    barsBtn.style.display = 'none';
    timesBtn.style.display = 'block';
    nav.style.transform = 'translateY(500px)'
}
barsBtn.addEventListener('click', openNav)

const closeNav = () => {
    barsBtn.style.display = 'block';
    timesBtn.style.display = 'none';
    nav.style.transform = 'translateY(0)'
}

timesBtn.addEventListener('click', closeNav)


// scetion opaticy

const aboutSection = document.querySelector('.about');
const servicesSection = document.querySelector('.services');
const gallerySection = document.querySelector('.gallery');
let aboutX;

const visability = () => {
    if (window.scrollY < 220) {
        aboutSection.style.opacity = '0';
        servicesSection.style.opacity = '0';
        gallerySection.style.opacity = '0';
        upBtn.style.opacity = '0';
    }
    if (window.scrollY > 350) {
        aboutSection.style.opacity = '1'
    }
    if (window.scrollY > aboutSection.offsetTop) {
        servicesSection.style.opacity = '1'
    }
    if (window.scrollY > (servicesSection.offsetTop + (.6 * servicesSection.offsetHeight))) {
        gallerySection.style.opacity = '1'
    }
    if (window.scrollY > 400) {
        upBtn.style.opacity = '1'
    }
}
aboutX = document.querySelector('.gallery').offsetTop;

document.addEventListener('scroll', visability);

window.onload = (event) => {
    document.querySelector('header').style.opacity = '1';
    nav.style.opacity = '1';
}

// go to top

const goToTop = () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}
upBtn.addEventListener('click', goToTop);

// go to sections

const aboutBtn = document.querySelector('.aboutLi')
const aboutHeight = document.querySelector('.about').offsetTop
const servicesBtn = document.querySelector('.servicesLi')
const servicesHeight = document.querySelector('.services').offsetTop
const galleryBtn = document.querySelector('.galleryLi')
const galleryHeight = document.querySelector('.gallery').offsetTop
const contactBtn = document.querySelector('.contacLi')
const contactHeight = document.querySelector('footer').offsetTop;

aboutBtn.addEventListener('click', () => {
    window.scroll({
        top: aboutHeight,
        behavior: 'smooth'
    });
    closeNav();
})
servicesBtn.addEventListener('click', () => {
    window.scroll({
        top: servicesHeight,
        behavior: 'smooth'
    });
    closeNav();
})
galleryBtn.addEventListener('click', () => {
    window.scroll({
        top: galleryHeight,
        behavior: 'smooth'
    });
    closeNav();
})
contactBtn.addEventListener('click', () => {
    window.scroll({
        top: contactHeight,
        behavior: 'smooth'
    });
    closeNav();
})
// map
// function initMap() {
//     // The location of Uluru
//     var uluru = {
//         lat: -25.344,
//         lng: 131.036
//     };
//     // The map, centered at Uluru
//     var map = new google.maps.Map(
//         document.getElementById('map'), {
//             zoom: 4,
//             center: uluru
//         });
//     // The marker, positioned at Uluru
//     var marker = new google.maps.Marker({
//         position: uluru,
//         map: map
//     });
// }