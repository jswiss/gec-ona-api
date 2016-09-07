angular
  .module('gec')
  .controller('FeedController', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
    
    var self = this;
    self.all = [];
    // var all = self.all.results;

      function FeedGrabber() {
      $http
        .get("https://itunes.apple.com/search?term=hip+hop&country=us", {cache: true})
        .then(function(response) {
          self.all = response.data;
          console.log(self.all);

          var sorted = self.all.results.sort(function(a,b) {
            return b.artistId - a.artistId
          });

          console.log('sorted: ', sorted)

          // $scope.data = self.all.results.slice(0,5);
          $scope.data = sorted.slice(0,5);
          console.log($scope.data);
          $scope.getMoreData = function() {
            // $scope.data = self.all.results.slice(0, $scope.data.length + 5);
            $scope.data = sorted.slice(0, $scope.data.length + 5);
            console.log('hitting it')
          }
        })
    }
    FeedGrabber();

  }])
