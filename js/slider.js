$(document).ready(function() {
    $('.slider__wrapper').slick({
        dots: true,
        slidesToShow: 1,
        variableWidth: true,
        variableHeight: true,
        responsive: [{
                breakpoint: 1119,
                settings: {
                    variableWidth: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    variableWidth: false,
                    dots: false,
                    arrows: false,
                    variableHeight: true,
                    slidesToShow: 1,
                }

            }
        ]
    });
});