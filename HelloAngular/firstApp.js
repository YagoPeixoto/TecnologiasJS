/**
 * Created by yago on 20/10/16.
 */
var firstApp = angular.module('firstApp', []);

firstApp.controller('firstCtrl', function ($scope) { //controler para instrução
    $scope.title = 'Hello World!';
});