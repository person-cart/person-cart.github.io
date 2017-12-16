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
            slidesToScroll: 1
        });
    })
})(jQuery));

