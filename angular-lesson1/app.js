// var app = angular.module("firstApp", []);
// app.controller("MyFirstController", function($scope){
//   $scope.name = "Severus Snape";
// })


var app = angular.module('firstApp', []);
app.controller('ExercisesController', function ($scope) {
  $scope.FavColor = 'Blue';
  $scope.secondsInACentury = 60 * 60 * 24 * 365 * 100;
  $scope.rightNow = new Date();
})
