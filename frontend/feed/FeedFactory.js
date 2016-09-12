//Feed constructor function to encapsulate HTTP and pagination logic

angular
  .module('gec')
  .factory('Feed', ['$http', function($http) {
    
    var Feed = function() {
      this.items   = [];
      this.busy  = false;

      console.log(this.items);
    };

    Feed.prototype.loadMore = function() {
      if (this.busy) return;
      this.busy = true;

      var url = "https://itunes.apple.com/search?term=hip+hop&country=us";
      $http.jsonp(url).success(function(data) {
        var items = data.results;
        console.log(data.results)
        console.log(items);
        for (var i = 0; i < items.length; i++) {
          this.items.push(items[i].data);
        }
        this.busy = false;
      }.bind(this));
    };
    return Feed;

  }])