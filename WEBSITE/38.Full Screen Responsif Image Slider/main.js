const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;


const nextSlide = () => {
    // Get Current class
    const current = document.querySelector('.current');
    // Remove Current Class
    current.classList.remove('current');
    // Check for next slide
    if (current.nextElementSibling) {
    // Add Current next slide
    current.nextElementSibling.classList.add('current');
    } else {
    // Add Current to Start
    slides[0].classList.add('current');
    }
    
    setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
    // Get Current class
    const current = document.querySelector('.current');
    // Remove Current Class
    current.classList.remove('current');
    // Check for next slide
    if (current.previousElementSibling) {
    // Add Current next slide
    current.previousElementSibling.classList.add('current');
    } else {
    // Add Current to Start
    slides[slides.length - 1].classList.add('current');
    }
    
    setTimeout(() => current.classList.remove('current'));
};


// Button events
next.addEventListener('click', e => {
    nextSlide();
});

prev.addEventListener('click', e => {
    prevSlide();
});


// Button event 
next.addEventListener('click', e =>{
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e =>{
    prevSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});


// Auto Slide
if (auto) {
    // run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}























