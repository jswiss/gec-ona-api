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

    .state('login', {
      url: '/login',
      templateUrl: './views/login.html',
      controller: "LoginController as login",
      // authenticate: false
    })

    .state('home', {
      url: '/',
      templateUrl: './views/main.html',
      controller: "MainController as main",
      // authenticate: false
    })

    .state('home.schools', {
     url: '/schools',
      templateUrl: './views/schools.html',
      controller: "SchoolsController as schools",
      // authenticate: false
    })

    .state('home.schools.school', {
      url: '/schools/:schoolId',
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

    .state('home.country', {
      url: '/country/:countryId',
      templateUrl: './views/country.html',
      controller: "CountryController as country",
      // authenticate: false
    })

    .state('home.country.schools', {
     url: 'country/:countryID/schools',
      templateUrl: './views/schools.html',
      controller: "SchoolsController as schools",
      // authenticate: false
    })

    .state('home.country.schools.school', {
      url: '/country/:countryIDschools/:schoolId',
      templateUrl: './views/school.html',
      controller: "SchoolController as school",
      // authenticate: false
    })

    .state('home.country.project', {
      url: '/:countryId/:projectId',
      templateUrl: './views/project.html',
      controller: "ProjectController as project",
      // authenticate: false
    })

    .state('home.country.project.schools', {
      url: '/:countryId/:projectId/schools',
      templateUrl: './views/schools.html',
      controller: "SchoolsController as schools",
      // authenticate: false
    })

    .state('home.country.project.schools.school', {
      url: ':countryId/:projectId/schools/:schoolId',
      templateUrl: './views/school.html',
      controller: "SchoolController as school",
      // authenticate: false
    })

    .state('home.country.project.admin', {
      url: '/:countryId/:projectId/admin',
      templateUrl: './views/admin.html',
      controller: "AdminController as admin",
      // authenticate: true
    });

    //Send 'em to the login page if the url is not found
    $urlRouterProvider.otherwise("/login");
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

