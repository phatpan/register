(function() {
    APP.controller('RegisterController', RegisterController);

    RegisterController.$inject = ['RegisterService'];

    function RegisterController(RegisterService) {
        var ctrl = this;
        ctrl.init = init;

        function init() {
            RegisterService.listUsers()
                .then(listUsersSuccess);
        }

        function listUsersSuccess(response) {
            ctrl.dataUsers = response.data.Result;
        }
    }

})();