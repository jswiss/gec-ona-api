angular
  .module('gec')
  .controller('ProjectController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
    
    $scope.projectGrabber = $http.get("http://localhost:3000/projects/" + $stateParams.projectNumber)
      .then(function(res, err) {
        if (err) {
          console.log("ERROR ERROR ERROR ", err);
        } else {
        console.log("Data! ", res.data);
        return res.data;
        }
      });

    //do stuff with project data here

  }])