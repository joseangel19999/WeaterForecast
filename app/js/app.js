//declaramos el module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);
/*configuracion de rutas */
weatherApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/pages/home.html',
            controller: 'homeController'
        })
        .when('/forecast', {
            templateUrl: 'app/pages/forecast.html',
            controller: 'forecastController'
        })
});
/* servicios */
weatherApp.service('cityService', function() {
    this.city = "new york city"
});
/* controladores */
weatherApp.controller('mainCtr', ['$scope', function($scope) {
    $scope.nombre = "jose angel";

}]);
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    $scope.nombre = "hola home";
    $scope.city = cityService.city;
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });
}]);
weatherApp.controller('forecastController', ['$scope', 'cityService', function($scope, cityService) {
    $scope.nombre = "hola forecast";
    $scope.city = cityService.city;
}]);