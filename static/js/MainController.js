/* *****************************************************************************
*  Main Controller
* *****************************************************************************/
const MainController = function($rootScope, $scope, $http) {
    console.log('MainController');

    const conversations = getData();

    $scope.addNewConversation = function() {
        $scope.conversations.push({
            editorText: 'Write some text...',
            aiText: ''
        });
    }

    if (isSet(conversations)) {
        $scope.conversations = conversations;
    } else {
        $scope.conversations = [];
        $scope.addNewConversation();
    }

    $scope.closeConversation = function($index) {
        $scope.conversations.splice($index, 1);
    }

    $scope.$watch('conversations', function(newValue, oldValue) {
        //console.log('change', newValue);
        launchSaveData($scope.conversations);
    }, true);
}
