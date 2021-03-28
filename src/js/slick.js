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
$('.gard-block__first-slider').slick({
    infinite: true,
    speed: 300,
    arrows: true,
    dots: false,
    slidesToShow: 1,
});
$('.map-block__slider').slick({
    infinite: true,
    speed: 300,
    arrows: true,
    dots: false,
    slidesToShow: 1,
});
$('.problem__wrap').slick({
    infinite: true,
    speed: 300,
    arrows: true,
    dots: false,
    slidesToShow: 1,
});
$('.gard-block__slider-list').slick({
    centerMode: true,
    centerPadding: '60px',
    arrows: false,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });

  
// $('.risk__list').slick({
//     dots: false,
//     autoplaySpeed: 2000,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     cssEase: 'linear'
//   });