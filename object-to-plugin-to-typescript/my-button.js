var MyButton = (function ($, undefined) {
    var NAME = 'mybutton';
    var NAMESPACE = 'mynamespace';
    var DATA_KEY = NAMESPACE + "." + NAME;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var DISABLED = 'disabled';
    var CLICK_EVENT = 'click';
    var MyButton = (function () {
        function MyButton(element) {
            this.element = element;
            this._oldText = '';
            this.init();
        }
        MyButton.prototype.init = function () {
            $(this.element)
                .off(CLICK_EVENT)
                .on(CLICK_EVENT, this.handleClick.bind(this));
        };
        Object.defineProperty(MyButton.prototype, "text", {
            get: function () {
                return $(this.element).text();
            },
            set: function (value) {
                $(this.element).text(value);
            },
            enumerable: true,
            configurable: true
        });
        MyButton.prototype.handleClick = function (event) {
            var _this = this;
            this._oldText = this.text;
            this.text = 'Loading ...';
            this.enabled = false;
            setTimeout(function () {
                _this.text = _this._oldText;
                _this.enabled = true;
            }, 2000);
        };
        Object.defineProperty(MyButton.prototype, "enabled", {
            get: function () {
                return $(this.element).is(":" + DISABLED);
            },
            set: function (value) {
                $(this.element).prop("" + DISABLED, !value);
            },
            enumerable: true,
            configurable: true
        });
        MyButton._jQueryInterface = function (config) {
            return this.each(function () {
                var $element = $(this);
                var data = $element.data(DATA_KEY);
                if (!data) {
                    data = new MyButton(this);
                    $element.data(DATA_KEY, data);
                }
            });
        };
        return MyButton;
    }());
    $.fn[NAME] = MyButton._jQueryInterface;
    $.fn[NAME].Constructor = MyButton;
    $.fn[NAME].noConflict = function () {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return MyButton._jQueryInterface;
    };
    return MyButton;
})(jQuery);
$(function () {
    $('#my-button').mybutton();
});
//# sourceMappingURL=my-button.js.map