angular.module("gec", [])
  .config(GecRouter);


//UI Router, it's so pretty and elegant
function GecRouter($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: '../views/about.html',
      authenticate: false
    })

    .state('login', {
      url: '/login',
      templateUrl: './views/login.html',
      controller: "LoginController as login",
      authenticate: false
    })

    .state('main', {
      url: '/',
      templateUrl: './views/main.html',
      controller: "MainController as main",
      authenticate: false
    })

    .state('logout', {
      url: '/login',
      templateUrl: './views/login.html',
      controller: "LogoutController as logout",
      authenticate: false
    })

    .state('profile', {
      url: '/profile/:profileId',
      templateUrl: './views/profile.html',
      controller: 'ProfileController as profile',
      authenticate: true
    })

    // .state('signup', {
    //   url: '/register',
    //   templateUrl: './views/register.html',
    //   controller: "RegisterController as register",
    //   authenticate: false
    // })

    .state('country', {
      url: '/country/:countryId',
      templateUrl: './views/country.html',
      controller: "CountryController as country",
      authenticate: false
    })

    .state('projects', {
      url: '/new',
      templateUrl: './views/projects.html',
      controller: "ProjectsController as projects",
      authenticate: false
    })

    .state('project', {
      url: '/new',
      templateUrl: './views/project.html',
      controller: "ProjectController as project",
      authenticate: false
    })

    .state('admin', {
      url: '/new',
      templateUrl: './views/admin.html',
      controller: "AdminController as admin",
      authenticate: true
    });

    //Send 'em to the login page if the url is not found
    $urlRouterProvider.otherwise("/login");
};

angular.module("gec").run(function($rootScope, $state, AuthService) {
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
    if(toState.authenticate && !AuthService.isLoggedIn()) {
      //User isn't authenticated
      $state.transitionTo("login");
      event.preventDefault();
    }
  });
});

