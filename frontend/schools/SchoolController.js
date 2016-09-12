angular
  .module('gec')
  .controller('SchoolController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
    
    $scope.schoolGrabber = $http.get("http://localhost:3000/schools/school/" + $stateParams.schoolCode)
      .then(function(res, err) {
        if (err) {
          console.log("ERROR ERROR ERROR ", err);
        } else {
        console.log("Data! ", res.data);
        return res.data;
        }
      });
  }])