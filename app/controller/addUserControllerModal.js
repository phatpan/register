(function() {
    APP.controller('AddUserControllerModal', AddUserControllerModal);

    AddUserControllerModal.$inject = ['$scope', '$uibModalInstance'];

    function AddUserControllerModal($scope, $uibModalInstance) {
        $scope.close = function() {
            $uibModalInstance.close();
        };
    }

})();