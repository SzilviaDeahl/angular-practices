var app = angular.module('posts-workshop', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/posts.html',
        controller: 'ApplicationController'
      })
  }]);

app.controller('ApplicationController', ['$scope', function($scope) {
  $scope.application= 'Hello!';
}]);

app.factory('PostsService', function ($http) {
  return {
    all: function() {
      return $http.get('/api/posts').then(function (response) {
        return response.data;
      })
    }
  }
})
