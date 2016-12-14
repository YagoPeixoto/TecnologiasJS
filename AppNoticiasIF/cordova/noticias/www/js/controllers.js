'use strict';

var noticiaAppControllers = angular.module('noticiaAppControllers',[]);

noticiaAppControllers.controller('SplashScreenCtrl',['$scope', '$location', '$http',
	function SplashScreenCtrl($scope, $location, $http) {
			
}]);

noticiaAppControllers.controller('NoticiaCtrl',['$scope', '$location', '$http',
	function NoticiaCtrl($scope, $location, $http) {
        var url = "http://45.55.226.209/news/getAll";

        $http.get(url)
            .then(function(response) {
                $scope.noticia = response.data.data;
            });
	
}]);



