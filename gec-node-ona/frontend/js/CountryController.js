angular
  .module('gec')
  .controller('CountryController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
    //Ajax call to retrieve country state
    $scope.countryGrabber = $http.get("http:localhost:3000/country/" + $stateParams.id)
      .then(function(res) {
        return res.data;
      })
  }])