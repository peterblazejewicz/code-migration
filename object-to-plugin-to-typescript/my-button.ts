import * as JQueryStatic from 'jquery';

var MyButton = (($ : JQueryStatic, undefined) => {

    const NAME : string = 'mybutton';
    const NAMESPACE : string = 'mynamespace';
    const DATA_KEY : string = `${NAMESPACE}.${NAME}`;
    const JQUERY_NO_CONFLICT : Function = $.fn[NAME];
    const DISABLED : string = 'disabled';
    const CLICK_EVENT : string = 'click';

    class MyButton {
        private _oldText : string = '';
        constructor(private readonly element : HTMLElement) {
            this.init();
        }

        private init() {
            $(this.element)
                .off(CLICK_EVENT)
                .on(CLICK_EVENT, this.handleClick.bind(this));
        }

        private set text(value : string) {
            $(this.element).text(value);
        }

        private get text() {
            return $(this.element).text();
        }

        private handleClick(event : Event) {
            this._oldText = this.text;
            this.text = 'Loading ...';
            this.enabled = false;
            setTimeout(() => {
                this.text = this._oldText;
                this.enabled = true;
            }, 2000);
        }

        set enabled(value : boolean) {
            $(this.element).prop(`${DISABLED}`, !value);
        }

        get enabled() {
            return $(this.element).is(`:${DISABLED}`);
        }

        static _jQueryInterface(config) {
            return (this as any).each(function () {
                const $element = $(this);
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
    $.fn[NAME].noConflict = () => {
        $.fn[NAME] = JQUERY_NO_CONFLICT
        return MyButton._jQueryInterface
    };

    return MyButton;
})(jQuery);
