angular
  .module('gec')
  .controller('FeedController', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
    
    var self = this;
    self.all = [];

      function FeedGrabber() {
      $http
        .get("https://itunes.apple.com/search?term=hip+hop&country=us")
        .then(function(response) {
          self.all = response.data;
          self.collection = [].concat(self.all);
          // console.log(self.collection);
          // console.log(self.all);
          // console.log($scope);
        })
    }
    FeedGrabber();


  }])