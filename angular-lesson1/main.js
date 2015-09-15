var app = angular.module('myApp', []);
app.controller('MyAppController', function ($scope) {
  $scope.name = '';
  $scope.reverseName = function () {
    $scope.reversed = $scope.name.split('').reverse().join("")
  }
});
