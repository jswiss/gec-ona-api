angular
  .module('gec')
  .controller('NavbarController', ['$http', '$stateParams', function($http, $stateParams ) {
    
    var self = this;
    self.all = [];

    function countryDropdownGrabber() {
      $http
        .get("http://localhost:3000/")
        .then(function(response) {
          self.all = response.data;
          self.collection = [].concat(self.all);
          // console.log(self.collection);
          // console.log('Navbar data ', self.all);
          // console.log('Navbar data ', self.all.projects[0].country);
        })
    }

    countryDropdownGrabber();

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