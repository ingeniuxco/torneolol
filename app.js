angular.module('torneoApp', [])
  .controller('TeamController', function($scope, $http) {

     $http.get('univallelol.json').success(function(data) {
         $scope.equipos = data;
     });

  });