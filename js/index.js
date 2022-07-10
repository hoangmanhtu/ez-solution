AOS.init({
    // easing: 'ease-in-out-sine'
});
$(document).ready(function() {
    $('#banner-slide').slick({
        dots: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<div class="slick-prev"><img class="icon-prev"  src="./images/icons/prev.svg"/></div>',
        nextArrow: '<div class="slick-next"><img  class="icon-next"  src="./images/icons/next.svg"/></i></div>'
    });
    $('.about-silde').slick({
        dots: false,
        infinite: true,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        speed: 500,
        cssEase: 'linear',
        prevArrow: '<div class="slick-prev"><img class="icon-prev"  src="./images/icons/prev-about.svg"/></div>',
        nextArrow: '<div class="slick-next"><img  class="icon-next"  src="./images/icons/next-about.svg"/></i></div>'
    });
    $('.mission-slide').slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        variableWidth: true,
        autoplaySpeed: 2000,
        autoplay: true,
        cssEase: 'linear',
        prevArrow: '<div class="slick-prev"><img class="icon-prev"  src="./images/icons/prev-active.svg"/></div>',
        nextArrow: '<div class="slick-next"><img  class="icon-next"  src="./images/icons/next-active.svg"/></i></div>'
    });
});