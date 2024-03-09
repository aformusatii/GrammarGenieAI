ANGULAR_APP.component('settingsModal', {
    templateUrl: 'js/components/settings-modal/settings-modal.html',
    bindings: {
        controller: '='
    },
    controller: function($element, $http, $scope) {
        const $this = this;

        this.$onInit=function() {
            const $modalElement = $element.find('.modal');
            const $modal = new bootstrap.Modal($modalElement);

            if ($this.controller) {
                const modalController = $this.controller;

                modalController.show = function() {
                    $modal.show();
                };
            }
        }
    }
});