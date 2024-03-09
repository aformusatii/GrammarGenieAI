ANGULAR_APP.directive('pasteText', function () {
    return {
        restrict: "A",
        link: function (scope, elm) {

            const element = elm[0];

            $(element).on('paste', function(e) {
                e.preventDefault();
                let text = '';
                if (e.clipboardData || e.originalEvent.clipboardData) {
                    text = (e.originalEvent || e).clipboardData.getData('text/plain');
                } else if (window.clipboardData) {
                    text = window.clipboardData.getData('Text');
                }

                if (document.queryCommandSupported('insertText')) {
                    document.execCommand('insertText', false, text);
                } else {
                    document.execCommand('paste', false, text);
                }
            });
        }
    };
});