angular
  .module('gec')
  .controller('ProjectController', ['$scope', '$http', function($scope, $http) {
    
    $scope.projectGrabber = $http.get("http://localhost:3000/country/:id/project/" + $stateParams.id)
      .then(function(res, err) {
        if (err) {
          console.log("ERROR ERROR ERROR ", err);
        } else {
        console.log("Data! ", res.data);
        return res.data;
        }
      });

    //do stuff with country data here

  }])