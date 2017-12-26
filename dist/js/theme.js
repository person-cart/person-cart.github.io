((function ($) {
    $(function(){

        var selectCity = $('[data-filter-select="city"]').selectize({
            placeholder: 'Город',
            options: [
                {value: 1, city: 'Москва'},
                {value: 2, city: 'Киев'},
                {value: 3, city: 'Берлин'},
                {value: 4, city: 'Лондон'}
            ],
            render: {
                option: function(item, escape) {
                    var caption = item.city;
                    return '<div>' +
                        '<div class="selectize-dropdown__inner">' +
                        (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
                        '</div></div>';
                }
            },

            onFocus: function () {
                this.clear();
            }
        });

        var selectSubject = $('[data-filter-select="subject"]').selectize({
            placeholder: 'Предмет',
            options: [
                {value: 1, subject: 'Физика'},
                {value: 2, subject: 'Математика'},
                {value: 3, subject: 'Язык'},
                {value: 4, subject: 'Литература'}
            ],
            render: {
                option: function(item, escape) {
                    var caption = item.subject;
                    return '<div>' +
                        '<div class="selectize-dropdown__inner">' +
                        (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
                        '</div></div>';
                }
            },

            onFocus: function () {
                this.clear();
            }
        });

        var selectLocation = $('[data-filter-select="location"]').selectize({
            placeholder: 'Район/Метро',
            options: [
                {value: 1, station: 'м. Горьковская', color: 'red'},
                {value: 2, station: 'м. Академгородок', color: 'green'},
                {value: 3, station: 'м. Святошин', color: 'green'},
                {value: 4, station: 'м. Вокзальная', color: 'red'}
            ],
            render: {
                option: function(item, escape) {
                    var label = item.color;
                    var caption = item.station;
                    return '<div>' +
                        '<div class="selectize-dropdown__inner">' +
                        '<span class="b-form-person-filter__location-mark b-form-person-filter__location-mark_'+ escape(item.color) +' "></span>' +
                        (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
                        '</div></div>';
                }
            },

            onFocus: function () {
                this.clear();
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

