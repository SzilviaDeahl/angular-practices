var app = angular.module('posts-workshop', ['ngRoute'])

app.controller('ApplicationController', ['$scope', function($scope) {
  $scope.application= 'Hello!';
}]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/posts.html',
        controller: 'ApplicationController'
      })
  }]);
