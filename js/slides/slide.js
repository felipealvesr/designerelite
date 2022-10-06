$('.slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
     autoplaySpeed: 5000,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }

        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }

        }

    ]
});