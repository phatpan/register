var params = [
    "$http",
    "REGISTER",
    RegisterService
];
APP.service("RegisterService", params);

function RegisterService($http, REGISTER) {
    "use strict";

    this.listUsers = function() {
        return $http.get(REGISTER.LIST_USERS);
    };
}