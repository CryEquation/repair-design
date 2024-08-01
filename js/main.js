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
    //ВАЛИДАЦИЯ ФОРМЫ
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
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function(response) {
                    alert('Форма отправлена, мы свяжемся с вами через 10 минут');
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                },
                error: function(response) {
                    console.error('Ошибка запроса' + response);
                }
            });
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
    // создание карты
    ymaps.ready(function() {
        var myMap = new ymaps.Map('map', {
                center: [55.853890, 49.086281],
                zoom: 9
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Наш офис',
                balloonContent: 'Вход со двора'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/location.png',
                // Размеры метки.
                iconImageSize: [32, 32],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            });

        myMap.geoObjects
            .add(myPlacemark);
    });
    $('.video__play').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '465',
            width: '100%',
            videoId: 'vG2AyiNT23I',
            events: {
                'onReady': videoPlay,
            }
        });
    })

    function videoPlay(event) {
        event.target.playVideo();
    }
});