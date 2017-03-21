var second_app = angular.module('secondapp', ['first_app']);

second_app.controller('secondappController', function ($scope, firstappService) {
    firstappService.name();
});