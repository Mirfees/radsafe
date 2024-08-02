document.addEventListener('DOMContentLoaded', function () {
    // burger-menu begin
    let burgerMenu = document.getElementById('burger-menu');
    let overlay = document.querySelector('.header-menu');
    burgerMenu.addEventListener('click',function(){
        this.classList.toggle("close");
        overlay.classList.toggle("overlay");
    });
    // burger-menu end

    // fancybox begin
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });
    //fancybox end

   // sliders begin

    const safetySlider = new Swiper('.safety__slider', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 3,
        spaceBetween: 20,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1
            },

            762: {
                slidesPerView: 2
            },

            992: {
                slidesPerView: 3
            }
        }
    });

    const pageInnerSlider = new Swiper('.page-inner__slider', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 20,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const sameServicesSlider = new Swiper('.same-services__slider', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 4,
        spaceBetween: 20,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1
            },

            768: {
                slidesPerView: 2
            },

            992: {
                slidesPerView: 3
            },

            1200: {
                slidesPerView: 4
            }
        }
    });

   // sliders end

});