/**
 * Created by yago on 20/10/16.
 */
var firstApp = angular.module('firstApp', []);

firstApp.controller('firstCtrl', function ($scope) {
    $scope.title = 'Hello World!';
});