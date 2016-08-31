angular.module('gec', ['ui.router'])
  .config(GecRouter);


//UI Router, it's so pretty and elegant
function GecRouter($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: '../views/about.html',
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
      templateUrl: './views/main.html',
      controller: "MainController as main",
      // authenticate: false
    })

    .state('home.map', {
     url: '/',
      templateUrl: './views/map.html',
      controller: "MapController as map",
      // authenticate: false
    })

    .state('schools', {
     url: '/schools',
      templateUrl: './views/schools.html',
      controller: "SchoolsController as schools",
      // authenticate: false
    })

    .state('schools.school', {
      url: '/schools/:schoolCode',
      templateUrl: './views/school.html',
      controller: "SchoolController as school",
      // authenticate: false
    })

    // .state('logout', {
    //   url: '/login',
    //   templateUrl: './views/login.html',
    //   controller: "LogoutController as logout",
    //   // authenticate: false
    // })

    // .state('profile', {
    //   url: '/profile/:profileId',
    //   templateUrl: './views/profile.html',
    //   controller: 'ProfileController as profile',
    //   // authenticate: true
    // })

    // .state('signup', {
    //   url: '/register',
    //   templateUrl: './views/register.html',
    //   controller: "RegisterController as register",
    //   authenticate: false
    // })

    .state('country', {
      url: '/country/:id',
      templateUrl: './views/country.html',
      controller: "CountryController as country",
      // authenticate: false
    })

    .state('project', {
      url: '/country/:name/projects/:projectNumber',
      templateUrl: './views/project.html',
      controller: "ProjectController as project",
      // authenticate: false
    })

    .state('admin', {
      url: '/admin',
      templateUrl: './views/admin.html',
      controller: "AdminController as admin",
      // authenticate: true
    })

    .state('outcomes', {
      url: '/admin/outcomes',
      templateUrl: './views/outcomes.html',
      controller: "AdminController as admin",
      // authenticate: true
    })

    .state('milestones', {
      url: '/admin/milestones',
      templateUrl: './views/milestones.html',
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

