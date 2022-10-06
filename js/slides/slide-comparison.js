  $('.comparison-slide').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
             autoplaySpeed: 2000,
            dots: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
        });