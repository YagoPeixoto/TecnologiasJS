'use strict';

var anuncioAppControllers = angular.module('anuncioAppControllers',[]);

anuncioAppControllers.controller('SplashScreenCtrl',['$scope', '$location', '$http',  
	function SplashScreenCtrl($scope, $location, $http) {
			
}]);

anuncioAppControllers.controller('AnunciosCtrl',['$scope', '$location', '$http',  
	function AnunciosCtrl($scope, $location, $http) {
		//var url = "http://sistemaanuncio.herokuapp.com/anuncios";
        var url = "http://45.55.226.209/news/getAll";

        $http.get(url)
            .then(function(response) {
                $scope.anuncios = response.data.data;
            });
	
}]);



