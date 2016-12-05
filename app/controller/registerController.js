(function() {
    APP.controller('RegisterController', RegisterController);

    RegisterController.$inject = ['RegisterService', '$uibModal'];

    function RegisterController(RegisterService, $uibModal) {
        var ctrl = this;
        ctrl.init = init;
        ctrl.addUser = addUser;

        function init() {
            RegisterService.listUsers()
                .then(listUsersSuccess);
        }

        function listUsersSuccess(response) {
            ctrl.dataUsers = response.data.Result;
        }

        function addUser() {
            $uibModal.open({
                animation: true,
                templateUrl: 'addUserModalContent.html',
                controller: 'AddUserControllerModal',
                backdrop: "static",
                size: "md",
            }).result.then(function() {

            });
        }
    }

})();