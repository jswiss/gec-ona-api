angular
  .module('gec')
  .controller('CountrySchoolsController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
    
    $scope.CountrySchoolsGrabber = $http.get("http://localhost:3000/schools/country/" + $stateParams.countryName)
      .then(function(res, err) {
        if (err) {
          console.log("ERROR ERROR ERROR ", err);
        } else {
        console.log("Data! ", res.data);
        return res.data;
        }
      });
  }])