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
            placeholder: 'Метро',
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
