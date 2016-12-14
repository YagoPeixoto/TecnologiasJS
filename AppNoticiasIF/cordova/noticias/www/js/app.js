'use strict';

var spa = angular.module('noticiaApp', ['ngRoute', 'noticiaAppControllers']);

spa.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/splashscreen.html',
        controller: 'SplashScreenCtrl'

    })
    .when('/noticia', {
        templateUrl: 'partials/noticia.html',
        controller: 'NoticiaCtrl'

    })
    .otherwise({ redirectTo: '/'});
});