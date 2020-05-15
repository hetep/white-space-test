$(document).on('ready', function () {

    $('.product-list').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

});

