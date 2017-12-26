((function ($) {
    $(function(){

        var container = $('[data-person-cart-slider]');

        container.slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">' +
                '<svg class="b-icon-arrow-prev" xmlns="http://www.w3.org/2000/svg">' +
                '<use xlink:href="#arrow-prev"></use>' +
                '</svg>' +
            '</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">'  +
            '<svg class="b-icon-arrow-next" xmlns="http://www.w3.org/2000/svg">' +
                '<use xlink:href="#arrow-next"></use>' +
            '</svg>' +
            '</button>',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        });

        container.slickLightbox({
            src: 'src',
            itemSelector: '.slick-slide img',
            background: 'rgba(0,0,0,.5)',
            layouts: { closeButton: '<button type="button" class="slick-lightbox-close">' +
            '<svg class="b-icon-close" xmlns="http://www.w3.org/2000/svg">' +
            '<use xlink:href="#close"></use>' +
            '</svg>' +
            '</button>' },
            slick: {
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">' +
                '<svg class="b-icon-arrow-prev" xmlns="http://www.w3.org/2000/svg">' +
                '<use xlink:href="#arrow-prev"></use>' +
                '</svg>' +
                '</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">'  +
                '<svg class="b-icon-arrow-next" xmlns="http://www.w3.org/2000/svg">' +
                '<use xlink:href="#arrow-next"></use>' +
                '</svg>' +
                '</button>'
            }

        });
    })
})(jQuery));
