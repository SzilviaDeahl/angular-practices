var app = angular.module('posts-workshop', [])

app.controller('ApplicationController', ['$scope', function($scope) {
  $scope.application= 'Hello!';
}]);
