'use strict';

var spa = angular.module('anuncioApp', ['ngRoute', 'anuncioAppControllers']);

spa.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/splashscreen.html',
        controller: 'SplashScreenCtrl'

    })
    .when('/anuncios', {
        templateUrl: 'partials/anuncios.html',
        controller: 'AnunciosCtrl'

    })
    .otherwise({ redirectTo: '/'});
});