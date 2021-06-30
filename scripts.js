const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


AOS.init({
    offset: 300,
    duration: 1000
});

function toggleMobileMenu() {
    document.querySelector('#menu').classList.toggle('active')
    document.querySelector('.mobile-bar').classList.toggle('active')
}