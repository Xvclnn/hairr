let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal({
    distance: '64px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.intro-text', { delay: 200, origin: 'top' });
sr.reveal('.intro-picture', { delay: 450, origin: 'top' });
sr.reveal('.scroll-down', { delay: 500, origin: 'right' });