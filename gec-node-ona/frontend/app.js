angular.module('gec', ['ui.router', 'xeditable', 'infinite-scroll', 'uiGmapgoogle-maps'])
  .config(GecRouter);


//UI Router, it's so pretty and elegant
function GecRouter($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: './static/about.html',
      // authenticate: false
    })

    // .state('login', {
    //   url: '/login',
    //   templateUrl: './views/login.html',
    //   controller: "LoginController as login",
    //   // authenticate: false
    // })

    .state('home', {
      url: '/',
      resolve: {
        projects: [
          'DashProjectService', function(DashProjectService) {
            return DashProjectService.getProjects();
          }
        ]
        // schools: [
        //   'DashSchoolService', function(DashSchoolService) {
        //     return DashSchoolService.getSchools();
        //   }
        // ]
      },
      templateUrl: './dash/main.html',
      controller: "MainController as main",
      // authenticate: false
    })

    // .state('home.map', {
    //  url: '/',
    //   templateUrl: './dash/map.html',
    //   controller: "MapController as map",
    //   // authenticate: false
    // })

    // .state('logout', {
    //   url: '/login',
    //   templateUrl: './auth/login.html',
    //   controller: "LogoutController as logout",
    //   // authenticate: false
    // })

    // .state('profile', {
    //   url: '/profile/:profileId',
    //   templateUrl: './auth/profile.html',
    //   controller: 'ProfileController as profile',
    //   // authenticate: true
    // })

    // .state('signup', {
    //   url: '/register',
    //   templateUrl: './auth/register.html',
    //   controller: "RegisterController as register",
    //   authenticate: false
    // })

    .state('country', {
      url: '/country/:name',
      templateUrl: './country/country.html',
      controller: "CountryController as country",
      // authenticate: false
    })

    .state('schools', {
      url: '/schools',
      templateUrl: './schools/schools.html',
      controller: "SchoolsController as schools",
      // authenticate: false
    })

    .state('countrySchools', {
      url: '/country/:countryName/schools',
      templateUrl: './schools/countrySchools.html',
      controller: "CountrySchoolsController as countrySchools",
      // authenticate: false
    })

    .state('project', {
      url: '/country/:name/projects/:projectNumber',
      templateUrl: './project/project.html',
      controller: "ProjectController as project",
      // authenticate: false
    })

    .state('projectSchools', {
     url: '/country/:name/projects/:projectNumber/schools',
      templateUrl: './schools/projectSchools.html',
      controller: "ProjectSchoolsController as projectSchools",
      // authenticate: false
    })

    .state('school', {
      url: '/country/:name/projects/:projectNumber/schools/:schoolCode',
      templateUrl: './schools/school.html',
      controller: "SchoolController as school",
      // authenticate: false
    })

    .state('form', {
      url: '/country/:name/projects/:projectNumber/schools/:schoolCode/:form',
      templateUrl: './schools/form.html',
      controller: "FormController as form",
      // authenticate: false
    })

    .state('pupil', {
      url: '/country/:name/projects/:projectNumber/schools/:schoolCode/:pupil',
      templateUrl: './pupils/pupil.html',
      controller: "PupilController as pupil",
      // authenticate: false
    })

    .state('admin', {
      url: '/country/:name/projects/:projectNumber/admin',
      templateUrl: './admin/admin.html',
      controller: "AdminController as admin",
      // authenticate: true
    })

    .state('outcomes', {
      url: '/country/:name/projects/:projectNumber/admin/outcomes',
      templateUrl: './admin/outcomes.html',
      controller: "AdminController as admin",
      // authenticate: true
    })

    .state('milestones', {
      url: '/admin/milestones',
      templateUrl: './admin/milestones.html',
      controller: "AdminController as admin",
      // authenticate: true
    })

    //Send 'em to the login page if the url is not found
    $urlRouterProvider.otherwise("/");
};

// angular.module("gec").run(function($rootScope, $state, AuthService) {
//   $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
//     if(toState.authenticate && !AuthService.isLoggedIn()) {
//       //User isn't authenticated
//       $state.transitionTo("login");
//       event.preventDefault();
//     }
//   });
// });

