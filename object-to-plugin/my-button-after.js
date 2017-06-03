

let MyButton = (($) => {
    const NAME = 'mybutton';
    const NAMESPACE = 'mynamespace';
    const DATA_KEY = `${NAMESPACE}.${NAME}`;
    const JQUERY_NO_CONFLICT = $.fn[NAME];
    const DISABLED = 'disabled'
    class MyButton {
        constructor(element) {
            this._element = element;
            this._init();
            this._oldText = '';
        }

        disable() {
            $(this._element).prop(DISABLED, true);
        }

        enable() {
            $(this._element).prop(DISABLED, false);
        }

        set text(value) {
            $(this._element).text(value);
        }

        get text () {
            return $(this._element).text();
        }

        _init() {
            $(this._element).on('click', this._handleClick.bind(this));
        }

        _handleClick(event) {
            this.disable();
            this._oldText = this.text;
            this.text = 'Loading';
            setTimeout(function() {
                this.text = this._oldText;
                this.enable();
            }.bind(this), 2000);
        }

        static _jQueryInterface(config) {
            return this.each(function () {
                const $element = $(this)
                let data = $element.data(DATA_KEY);
                if (!data) {
                    data = new MyButton(this);
                    $element.data(DATA_KEY, data);
                }
            });
        }
    }
    $.fn[NAME] = MyButton._jQueryInterface;
    $.fn[NAME].Constructor = MyButton;
    $.fn[NAME].noConflict = function () {
        $.fn[NAME] = JQUERY_NO_CONFLICT
        return MyButton._jQueryInterface
    }
    return MyButton;
})(jQuery);
/* 
    legacy layer
*/

var myButton = {
    init: function($el) {
        $el.mybutton();   
    },
    handleClick : function ($el) {
        // no-op
    }
}
$(function () {
    // plugin as: $('#my-button').mybutton();
    myButton.init($('#my-button'));
});
