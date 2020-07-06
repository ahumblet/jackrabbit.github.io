$(document).ready(function(){
  $('.slick-slider-container').slick({
    dots: true,
    infinite: true,
    arrows: true,
    prevArrow: '.arrow-prev',
    nextArrow: '.arrow-next',
    fade: true,
    slidesToShow: 1
  });
});