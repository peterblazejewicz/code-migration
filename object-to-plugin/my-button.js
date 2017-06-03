var myButton = {
    init: function ($el) {
        $el
            .off('click')
            .on('click', function () {
                myButton.handleClick($el);
            });
    },
    handleClick: function ($el) {
        $el.prop('disabled', true);
        var oldText = $el.text();
        $el.text('Loading ...');
        var timeout = setTimeout(function () {
            $el.text(oldText);
            $el.prop('disabled', false);
        }, 2000);
    }
}
$(function () {
    myButton.init($('#my-button'));
})
