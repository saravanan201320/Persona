/**
 * Created by saravana.sivakumar on 9/30/2015.
 */

var userControllers = angular.module('userControllers', []);

userControllers.controller('userController', ['$rootScope', '$scope', function ($rootScope, $scope) {
    //$rootScope.fName = $scope.firstname;
    //$rootScope.lName = $scope.lastname;
    //$rootScope.pwd = $scope.password;
    $rootScope.loggedIn = false;
    $scope.userClick = function(){
        $rootScope.fName = $scope.firstname;
        $rootScope.lName = $scope.lastname;
        $rootScope.pwd = $scope.password;
    }

}]);