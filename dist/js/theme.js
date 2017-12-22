((function ($) {
    $(function(){

        $('[data-filter-select="default"]').selectize({
            valueField: 'id',
            labelField: 'name',
            searchField: ['name'],
            render: {
                option: function(item, escape) {
                    var label = item.name;
                    var caption = item.description;
                    return '<div>' +
                            '<span class="selectize-dropdown__inner">' + escape(label) + '</span>' +
                        '</div>';
                }
            }
        });

        var textHandler = function(name) {
            return function() {
                if(name == 'focus'){
                    jQuery("#test3 + .selectize-control").find("input:text").prop({"placeholder": ""});
                }
            };
        };

        var selectLocation = $('[data-filter-select="location"]').selectize({
            options: [
                {id: 1, station: 'м. Горьковская', color: 'red'},
                {id: 2, station: 'м. Академгородок', color: 'green'},
                {id: 3, station: 'м. Святошин', color: 'green'},
                {id: 4, station: 'м. Вокзальная', color: 'red'}
            ],
            render: {
                option: function(item, escape) {
                    var label = item.color || item.station;
                    var caption = item.color ? item.station : null;
                    return '<div>' +
                        '<div class="selectize-dropdown__inner">' +
                        '<span class="b-form-person-filter__location-mark b-form-person-filter__location-mark_'+ escape(item.color) +' "></span>' +
                        (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
                        '</div></div>';
                }
            },

            onChange: function(value) {
            },

            onFocus: textHandler('focus')
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
    })
})(jQuery));

