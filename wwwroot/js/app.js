// MODULE
var app = angular.module('app', ['ngRoute', 'ngResource']);

//ROUTERS
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
});

//services
app.service('cityService', function() {
    this.city = 'Miami';


});

//CONTROLLERS
app.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    $scope.city = cityService.city;

    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });

}]);

app.controller('forecastController', ['$scope', 'cityService', '$resource', function($scope, cityService, $resource) {
    $scope.city = cityService.city;

    console.log('forecast controller...');

    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?APPID=0afb96bf269942c845a71de88cbf817a";
    $scope.weatherAPI = $resource(apiUrl, 
        { callback: "JSON_CALLBACK" }, 
        { get:{ method: "JSONP" }}
    );

    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city });
    console.log($scope.weatherResult);
    $scope.jsonresult = angular.fromJson($scope.weatherResult);

}]);

//FILTERS
app.filter('farenheit', function() {
    return function(input) {
      input = input || '';
      return Math.round((1.8 * (input - 273 )) + 32);
    };
});

//DIRECTIVES

app.directive('weatherDisplay', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/weather-display.html',
        replace: true,
        scope: {
            weather: "="
        }
    }

});