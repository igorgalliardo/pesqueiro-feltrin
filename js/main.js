const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


const hamburger = document.getElementById('hamburger');
const menuMobile = document.getElementById('menuMobile');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuMobile.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.menu-mobile a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menuMobile.classList.remove('active');
    });
});
