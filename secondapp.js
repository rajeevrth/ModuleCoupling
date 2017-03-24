var second_app = angular.module('secondapp', ['firstapp']);

second_app.controller('secondappController', function ($scope, firstappService) {
    firstappService.name();
});
