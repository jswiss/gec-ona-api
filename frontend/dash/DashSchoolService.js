angular
  .module('gec')
  .service('DashProjectService', ['$http', function($http) {
    
    this.getSchools = function(query) {
      return $http.get('http://localhost:3000/schools')
    }

  }])