angular
  .module('gec')
  .controller('FeedController', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
    
    var self = this;
    self.all = [];
    // var all = self.all.results;

      function FeedGrabber() {
      $http
        .get("https://itunes.apple.com/search?term=hip+hop&country=us")
        .then(function(response) {
          self.all = response.data;
          console.log(self.all);

          $scope.data = self.all.results.slice(0,5);
          console.log($scope.data);
          $scope.getMoreData = function() {
            $scope.data = self.all.results.slice(0, $scope.data.length + 5);
            console.log('hitting it')
          }
        })
    }
    FeedGrabber();

  }])
