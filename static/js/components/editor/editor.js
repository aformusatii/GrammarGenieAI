ANGULAR_APP.component('editor', {
    templateUrl: 'js/components/editor/editor.html',
    bindings: {
        type: '@',
        editorModel: '=',
        inputModel: '=',
        ngClose: '&'
    },
    controller: function($element, $scope, $http) {
        const $this = this;

        this.$onInit = function() {
            const isUserText = ($this.type === 'user');
            $scope.isUserText = isUserText;
        }

        $scope.generationInProgress = false;

        $scope.generate = function() {
            const userText = $this.inputModel;
            callAIForTextCorrection($http, $scope, $this, userText);
        }

        $scope.copy = function() {
            copyToClipboard($this.editorModel);
        }

        $scope.paste = function() {
            console.log('$element.find(\'.editor-text\')', $element.find('.editor-text'));
            pasteFromClipboard($element.find('.editor-text'));
        }

        $scope.close = function() {
            if (isSet($this.ngClose)) {
                $this.ngClose();
            }
        }

        this.$onDestroy = function() {
            console.log('editor: Destroy');
        };
    }
});

const callAIForTextCorrection = function($http, $scope, $this, userText) {
    $scope.generationInProgress = true;

    $http({
        method: 'POST',
        url: 'text/correction',
        data: {
            userText: userText
        }
    }).then(function successCallback(response) {
        $this.editorModel = response.data.responseText;
        $scope.generationInProgress = false;

    }, function errorCallback(response) {
        $this.editorModel = JSON.stringify(response, null, 2);
        $scope.generationInProgress = false;
    });
}