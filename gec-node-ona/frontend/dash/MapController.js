angular
  .module('gec')
  .controller('MapController', ['$scope', '$interval', '$http', '$filter', function($scope, $interval, $http, $filter) {
    $scope.map = {
      center: {
        latitude: 56.162939,
        longitude: 10.203921
      },
      zoom: 8
    };
    console.log('map hit')
  }])
