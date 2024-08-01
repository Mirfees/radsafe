document.addEventListener('DOMContentLoaded', function () {
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
    });

   // sliders end

});