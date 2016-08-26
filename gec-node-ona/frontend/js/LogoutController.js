angular
  .module("gec")
  .controller("LogoutController", ["$scope", "$location", "AuthService", 
  function($scope, $location, AuthService) {

    $scope.logout = function() {

      //calls logout() from UserService
      AuthService.logout() 
        .then(function() {
          console.log('User is logged out');
          $location.path('/login');
          console.log('User is logged out');
        });
    };
  }]);