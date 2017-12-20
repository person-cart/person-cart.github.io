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

        $('[data-filter-select="location"]').selectize({
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
                alert(value);
            }
        });

    })
})(jQuery));
