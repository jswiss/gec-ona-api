angular
  .module('gec')
  .controller('SchoolsController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
    
    $scope.schoolsGrabber = $http.get("http://localhost:3000/schools/")
      .then(function(res, err) {
        if (err) {
          console.log("ERROR ERROR ERROR ", err);
        } else {
        console.log("Data! ", res.data);
        return res.data;
        }
      });
  }])