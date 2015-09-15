var app = angular.module('reddit-clone', []);
app.controller('ApplicationController', function ($scope) {
  $scope.showForm = false;
  $scope.posts = [{
    author: "Big Bird",
    title: "It's not easy being yellow",
    image: "http://www.independent.co.uk/incoming/article10237128.ece/binary/original/bigbird.jpg",
    description: "My life at Sesame Street"
  }];
  $scope.submitPost = function () {
    $scope.posts.push($scope.post);
    $scope.post = {};
  }
  $scope.toggleForm = function () {
    $scope.showForm = !$scope.showForm;
  }
})
