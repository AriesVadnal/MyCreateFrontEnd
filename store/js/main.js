// First Slider
$(".slide-one").not(".slick-initialized").slick({
    autoplay: true,
    autopalySpeed: 3000,
    dots: true,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next"
});

// Secondary Slider
$(".slider-two").not(".slick-initialized").slick({
    prevArrow: ".site-slider-two .prev",
    nextArrow: ".site-slider-two .next",
    slidesToShow: 5,
    slidesToScroll: 1,
    autopalySpeed: 3000
});