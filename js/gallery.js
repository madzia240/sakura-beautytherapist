const nav = document.querySelector('nav');
const upBtn = document.querySelector('.up')


const gallerySection = document.querySelector('.gallery');


const visability = () => {
    if (window.scrollY < 220) {
        upBtn.style.opacity = '0';
    }
    if (window.scrollY > 400) {
        upBtn.style.opacity = '1'
    }
}


document.addEventListener('scroll', visability);

window.onload = (event) => {
    document.querySelector('header').style.opacity = '1';
    gallerySection.style.opacity = '1';
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

//img growing

const imgArr = [...document.querySelectorAll('.gallery div')]
const modal = document.querySelector('.modal')
let grow = false;

function growImg() {
    if (grow == false) {
        modal.classList.toggle('active');
        modal.innerHTML = this.innerHTML;
        grow = true;
    } else if (grow == true) {
        modal.classList.toggle('active');
        modal.innerHTML = '';
        grow = false;
    }
}
imgArr.forEach(img => img.addEventListener('click', growImg))