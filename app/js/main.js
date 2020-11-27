$(function(){
    $('.intro-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true
    });

    var mixer = mixitup('.products__items');
});