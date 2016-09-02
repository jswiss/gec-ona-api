angular
  .module('gec')
  .service('DashProjectService', ['$http', function($http) {
    
    this.getProjects = function(query) {
      return $http.get('http://localhost:3000/')
    }
  }])