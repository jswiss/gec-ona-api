// 'DashSchoolService', 'schools'
// DashSchoolService, schools


angular
  .module('gec')
  .controller('MainController', ['$state', '$scope', 'DashProjectService', 'projects',
    function($state, $scope, DashProjectService, projects) {
      
      this.projects = projects.data;

      // this.schools  = schools.data;

      // console.log('projects!', this.projects)
      // console.log('schools! ', this.schools)


  }])