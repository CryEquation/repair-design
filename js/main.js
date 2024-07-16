/*
document.addEventListener("DOMContentLoaded", function(event) {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]')
    const closeBtn = document.querySelector('.modal__close')
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    }
    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);
    });

    closeBtn.addEventListener('click', switchModal)
}); 
*/
$(document).ready(function() {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal'),
        closeBtn = $('.modal__close');

    modalBtn.on('click', function() {
        modal.toggleClass('modal--visible')
    });
    closeBtn.on('click', function() {
        modal.toggleClass('modal--visible')
    });

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,


        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    new WOW().init();


});