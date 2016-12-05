var URL = "http://localhost:8080/api/";
var APP = angular.module('APP', [])
    .constant('REGISTER', {
        "LIST_USERS": URL + "getAllusers",
    });