/* *****************************************************************************
*  Init Angular App
* *****************************************************************************/
window.ANGULAR_APP = (function(angular) {
    'use strict';
    console.log('Init Angular Js App');

    const app = angular.module('ngGrammarGenieAI', []);
    app.controller('MainController', MainController);

    return app;

})(window.angular);
