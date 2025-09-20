let dayNight = document.querySelector('.dayNight');
let banner = document.querySelector('.banner');

dayNight.addEventListener('click', () => {
    banner.classList.toggle('night');
});

let typingEffect = new Typed('#text', {
    strings: [
        '<b><i>Full Stack Developer.</i></b>',
        '<b><i>Designer.</i></b>',
        '<b><i>Creator.</i></b>'
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    contentType: 'html' // allow HTML tags inside strings
});