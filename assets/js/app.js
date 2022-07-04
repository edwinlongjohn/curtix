const swiper = new Swiper('.swiper', {
    
    mousewheel: {
        invert: false,
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction:false,
        pauseOnMouseEnter:true,
      },
    // Default parameters
    slidesPerView: 2.2,
    spaceBetween: 0,

    // Optional parameters
    direction: 'horizontal',
   

    grabCursor:true,
   

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    slideToClickedSlide:true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    allowTouchMove:true,
    init:true,
    speed:1000,
    loop: true,
    longSwipes:false,
    simulateTouch:true,

});