// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', '$http', function
    ($scope, $filter, $http) {

    $scope.handle = '';
    $scope.canSearch = false;

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);

    };

    $scope.characteres = 10;

    $http.get('/api')
        .success(function (result) {
            $scope.rules = result;


        })
        .error(function (data, status) {
            alert(data);

        });

}]);

