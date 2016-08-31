angular
  .module('gec')
  .controller('ProjectSchoolsController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
    
    $scope.ProjectSchoolsGrabber = $http.get("http://localhost:3000/schools/project/" + $stateParams.projectNumber)
      .then(function(res, err) {
        if (err) {
          console.log("ERROR ERROR ERROR ", err);
        } else {
        console.log("Data! ", res.data);
        return res.data;
        }
      });
  }])