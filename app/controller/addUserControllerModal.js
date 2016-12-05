(function() {
    APP.controller('AddUserControllerModal', AddUserControllerModal);

    AddUserControllerModal.$inject = ['$scope', '$uibModalInstance'];

    function AddUserControllerModal($scope, $uibModalInstance) {
        $scope.close = function() {
            $uibModalInstance.dismiss();
        };

        $scope.ok = function() {
            var saveData = {
                firstName: $scope.firstName,
                lastName: $scope.lastName,
                email: $scope.email
            };

            $uibModalInstance.close(saveData);
        };
    }

})();