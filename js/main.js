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

    $('.modal__form').validate({
        errorClass: "invalid",
        rules: {
            userName: {
                required: true,
                minlength: 2
            },
            userPhone: "required",
            userEmail: {
                required: true,
                email: true
            }
        },
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Нужно больше 2 символов"
            },
            userPhone: "Телефон обязательно",
            userEmail: {
                required: "Обязательно укажите email",
                email: "Введите в формате name@domain.com"
            }
        }
    });
    $('.modal__control').validate({
        errorClass: "invalid",
        rules: {
            userName: {
                required: true,
                minlength: 2
            },
            userPhone: "required",
        },
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Нужно больше 2 символов"
            },
            userPhone: "Телефон обязательно",
        }
    });
    $('.modal__footer').validate({
        errorClass: "invalid",
        rules: {
            userName: {
                required: true,
                minlength: 2
            },
            userQuestion: {
                required: true,
                minlength: 5
            },
            userPhone: "required",
            userEmail: {
                required: true,
            }
        },
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Нужно больше 2 символов"
            },
            userPhone: "Телефон обязательно",
            userQuestion: {
                required: "Вопрос обязателен",
                minlength: "Нужно больше 5 символов"
            },
        }
    });
    $('[type=tel]').mask('+7(000)000-00-00', { placeholder: "+7(___) ___-__-__" });
});