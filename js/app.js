// Declare my module

var mapsApp = angular.module('mapsApp', ['ngRoute', 'ngResource', 'leaflet-directive']);

// Routes
mapsApp.config(function ($routeProvider) {
    $routeProvider
    
        .when('/', {
            templateUrl: 'menus/mainmap.htm',
            controller: 'mainController'
        })

        .when('/left', {
            templateUrl: 'menus/left.htm',
            controller: 'leftController'
        })

        .when('/right', {
            templateUrl: 'menus/right.htm',
            controller: 'rightController'
        })
});


// Services
mapsApp.service('barTypeService', function () {
    this.barType = "Irish Pub";
    
});

// Controllers
mapsApp.controller('mainController', ['$scope', 'barTypeService', function ($scope, barTypeService) {
    $scope.barType = barTypeService.barType;
}]);

mapsApp.controller('leftController', ['$scope', 'barTypeService', function ($scope, barTypeService) {
    $scope.barType = barTypeService.barType;
    
    $scope.$watch('barType', function () {
        barTypeService.barType = $scope.barType;
    });
}]);

mapsApp.controller('rightController', ['$scope', function ($scope) {
    
}]);