$('.advantages__slider-list').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true,
    asNavFor: '.advantages__slider-nav-list'
});
$('.advantages__slider-nav-list').slick({
    arrows: false,
    slidesToShow: 3,
    asNavFor: '.advantages__slider-list',
    dots: false,     
    focusOnSelect: true
});