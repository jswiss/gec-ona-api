angular
  .module('gec')
  .controller('FeedController', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
    
    var self = this;
    self.all = [];
    self.all.limit = 5;

      function FeedGrabber() {
      $http
        .get("https://itunes.apple.com/search?term=hip+hop&country=us")
        .then(function(response) {
          self.all = response.data;
          console.log(self);
          // console.log($scope);

        })
    }
    FeedGrabber();

    $scope.loadMore = function() {
      var incremented = self.all.limit + 5;
      console.log('load')
      self.limit = incremented > self.all.results.length ? self.all.results.length : incremented;
    }





  }])