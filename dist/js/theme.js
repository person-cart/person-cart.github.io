((function ($) {
    $(function(){
        $('[data-filter-select]').selectize({
            valueField: 'id',
            labelField: 'name',
            searchField: ['name'],
            render: {
                option: function(item, escape) {
                    var label = item.name;
                    var caption = item.description;
                    return '<div>' +
                            '<span class="ss">' + escape(label) + '</span>' +
                        '</div>';
                }
            }
        });
    })
})(jQuery));

((function ($) {
    $(function(){
        $('[data-person-cart-slider]').slick({
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
            '</button>'
        });
    })
})(jQuery));

