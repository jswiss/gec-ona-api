angular
  .module('gec')
  .controller('ProjectSchoolsController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
    
    var self = this;
    self.all = [];

    function ProjectSchoolsGrabber() {
      $http
        .get("http://localhost:3000/schools/project/" + $stateParams.projectNumber)
        .then(function(response) {
          self.all = response.data.projectSchools;
          self.collection = [].concat(self.all);
          console.log(self.collection);
          console.log(self.all);
          $scope.projectName = self.all[0].projectName;
          console.log($scope.projectName);
        })
    }

    ProjectSchoolsGrabber();

    // $scope.ProjectSchoolsGrabber = $http.get("http://localhost:3000/schools/project/" + $stateParams.projectNumber)
    //   .then(function(res, err) {
    //     if (err) {
    //       console.log("ERROR ERROR ERROR ", err);
    //     } else {
    //     console.log("Data! ", res.data);
    //     return res.data;
    //     }
    //   });
  }])