var creativeApp = angular.module('creativeApp',
    ['ngRoute','interestControllers','interestServices','userControllers','detailsControllers','loginControllers','forgotPwdControllers','mainPageControllers','angularUtils.directives.dirPagination']);

// configure our routes
creativeApp.config(function($routeProvider) {
  $routeProvider
      .when('/signup', {
        templateUrl : 'SignUp/user.html',
        controller  : 'userController'
      })

      .when('/login', {
        templateUrl : 'pages/login.html',
        controller  : 'loginController'
      })
    // route for the home page
      .when('/user', {
        templateUrl : 'SignUp/user.html',
        controller  : 'userController'
      })

    // route for the about page
      .when('/details', {
        templateUrl : 'SignUp/details.html',
        controller  : 'detailsController'
      })

    // route for the contact page
      .when('/interests', {
        templateUrl : 'SignUp/interests.html',
        controller  : 'interestController'
      })

      .when('/SignUpComplete', {
          templateUrl : 'SignUp/SignUpComplete.html'
          //controller  : 'SignUpCompleteController'
      })

      .when('/forgotPwd', {
          templateUrl : 'Login/ForgotPassword.html',
          controller  : 'forgotPwdController'
      })

      .when('/main', {
          templateUrl : 'MainPage/MainPage.html',
          controller  : 'mainPageController'
      })

      .when('/', {
        templateUrl : 'Login/Login.html',
        controller  : 'loginController'
      })

  .otherwise({
        redirectTo: '/',
        templateUrl: 'Login/Login.html',
        controller  : 'loginController'
      });
});

// create the controller and inject Angular's $scope
creativeApp.controller('mainController', function($scope,$rootScope) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
    $rootScope.loggedIn = false;
});

//creativeApp.controller('userController', function($scope,$rootScope) {
//    // create a message to display in our view
//    $scope.userClick = function(){
//        $rootScope.fName = $scope.firstname;
//        $rootScope.lName = $scope.lastname;
//        $rootScope.pwd = $scope.password;
//    }
//});

creativeApp.controller('NavbarController', function($scope,$rootScope) {
  $scope.message = 'Look! I am an about page.';
    $scope.isCollapsed = false;
});

creativeApp.controller('contactController', function($scope) {
  $scope.message = 'Contact us! JK. This is just a demo.';
});

creativeApp.controller('signupController', function($scope) {
  $scope.message = 'SIGNUP PAGE';
});

