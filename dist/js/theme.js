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

/* ----------------------------
 CustomValidation prototype
 - Keeps track of the list of invalidity messages for this input
 - Keeps track of what validity checks need to be performed for this input
 - Performs the validity checks and sends feedback to the front end
 ---------------------------- */

function CustomValidation(input) {
    this.invalidities = [];
    this.validityChecks = [];

    //add reference to the input node
    this.inputNode = input;

    //trigger method to attach the listener
    this.registerListener();
}

CustomValidation.prototype = {
    addInvalidity: function(message) {
        this.invalidities.push(message);
    },
    getInvalidities: function() {
        return this.invalidities.join('. \n');
    },
    checkValidity: function(input) {
        for ( var i = 0; i < this.validityChecks.length; i++ ) {

            var isInvalid = this.validityChecks[i].isInvalid(input);
            if (isInvalid) {
                this.addInvalidity(this.validityChecks[i].invalidityMessage);
            }

            var requirementElement = this.validityChecks[i].element;

            if (requirementElement) {
                if (isInvalid) {
                    requirementElement.classList.add('invalid');
                    requirementElement.classList.remove('valid');
                } else {
                    requirementElement.classList.remove('invalid');
                    requirementElement.classList.add('valid');
                }

            } // end if requirementElement
        } // end for
    },
    checkInput: function() { // checkInput now encapsulated

        this.inputNode.CustomValidation.invalidities = [];
        this.checkValidity(this.inputNode);

        if ( this.inputNode.CustomValidation.invalidities.length === 0 && this.inputNode.value !== '' ) {
            this.inputNode.setCustomValidity('');
        } else {
            var message = this.inputNode.CustomValidation.getInvalidities();
            this.inputNode.setCustomValidity(message);
        }
    },
    registerListener: function() { //register the listener here

        var CustomValidation = this;

        this.inputNode.addEventListener('keyup', function() {
            CustomValidation.checkInput();
        });
    }
};


((function ($) {
    $(function(){

        /* ----------------------------
         Validity Checks
         The arrays of validity checks for each input
         Comprised of three things
         1. isInvalid() - the function to determine if the input fulfills a particular requirement
         2. invalidityMessage - the error message to display if the field is invalid
         3. element - The element that states the requirement
         ---------------------------- */

        var personNameContainer = document.querySelector('#person-name-container .b-person-popup-form__error-requirements');

        var usernameValidityChecks = [
            {
                isInvalid: function(input) {
                    return input.value.length < 3;
                },
                invalidityMessage: 'Имя должно содержать не менее 3 символов',
                element: personNameContainer.querySelector('li:nth-child(1)')
            },
            {
                isInvalid: function(input) {
                    return !input.value.match(/^[A-Za-z0-9]+$/);

                },
                invalidityMessage: 'Имя может сожержать только латинские буквы и цифры',
                element: personNameContainer.querySelector('li:nth-child(2)')
            }
        ];


        var userPhoneValidityChecks = [
            {
                isInvalid: function(input) {
                    return !input.value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
                },
                invalidityMessage: 'Введите правильный формат напрмер 8 (926) 123-45-67',
                element: document.querySelector('#person-phone-container .b-person-popup-form__error-requirements li:nth-child(1)')
            }
        ];


        /* ----------------------------
         Setup CustomValidation
         Setup the CustomValidation prototype for each input
         Also sets which array of validity checks to use for that input
         ---------------------------- */

        var usernameInput = document.getElementById('person-name');
        usernameInput.CustomValidation = new CustomValidation(usernameInput);
        usernameInput.CustomValidation.validityChecks = usernameValidityChecks;

        var userPhoneInput = document.getElementById('person-phone');

        userPhoneInput.CustomValidation = new CustomValidation(userPhoneInput);
        userPhoneInput.CustomValidation.validityChecks = userPhoneValidityChecks;

        /* ----------------------------
         Event Listeners
         ---------------------------- */

        var submit = document.querySelector('#person-submit');
        var form = document.getElementById('person-feedback');

        var inputs = form.querySelectorAll('input:not([type="submit"])');

        function validate() {
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].CustomValidation.checkInput();
            }
        }

        submit.addEventListener('click', validate);
        form.addEventListener('submit', validate);

    })
})(jQuery));




