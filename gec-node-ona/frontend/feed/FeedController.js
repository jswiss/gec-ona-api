angular
  .module('gec')
  .controller('FeedController', ['$scope', '$http', function($scope, $http) {
    
    var self = this;
    self.all = [];

    function FeedGrabber() {
      $http
        .get("http://api.dronestre.am/data")
        .then(function(response) {
          self.all = response.data;
          self.collection = [].concat(self.all);
          // console.log(self.collection);
          console.log(self.all);
          // console.log($scope);
        })
    }

    FeedGrabber();


  }])