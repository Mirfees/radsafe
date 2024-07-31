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

   // sliders end

});