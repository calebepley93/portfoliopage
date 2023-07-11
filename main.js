let hamburgerMenu = document.querySelector('.hamburger-menu');
let overlayMenu = document.querySelector('#overlay-menu');

hamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('change');
    if (overlayMenu.classList.contains('show')) {
        overlayMenu.classList.remove('show');
        document.body.style.overflow = 'auto';
    } else {
        overlayMenu.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        if (overlayMenu.classList.contains('show')) {
            overlayMenu.classList.remove('show');
            hamburgerMenu.classList.remove('change');
        }
    }
});

let overlayMenuItems = document.querySelectorAll('.overlay-menu-item a');

overlayMenuItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); 
        let targetSection = document.querySelector(this.getAttribute('href')); 
        targetSection.scrollIntoView({behavior: "smooth"}); 

        if (overlayMenu.classList.contains('show')) {
            overlayMenu.classList.remove('show');
            hamburgerMenu.classList.remove('change');
            document.body.style.overflow = 'auto'; 
        }
    });
});

let navMenuItems = document.querySelectorAll('.nav-item a');

navMenuItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        let targetSection = document.querySelector(this.getAttribute('href')); 
        targetSection.scrollIntoView({behavior: "smooth"}); 
    });
});


let backToTopButton = document.querySelector('#back-to-top');
let aboutSection = document.querySelector('#about');


window.addEventListener('scroll', function() {
    let position = aboutSection.getBoundingClientRect();
    if (position.top < 0) { 
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});


backToTopButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    window.scrollTo({top: 0, behavior: 'smooth'}); 
});