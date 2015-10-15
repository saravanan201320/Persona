/**
 * Created by saravana.sivakumar on 10/6/2015.
 */
var forgotPwdControllers = angular.module('forgotPwdControllers',[]);
forgotPwdControllers.controller('forgotPwdController', ['$scope','$http','$rootScope', function($scope,$http,$rootScope){
    $rootScope.loggedIn = false;
    $scope.forgotClick = function(){
        var getPassword = $http.get('http://localhost:8080/creative-backend/service/getPassword?emailId='+$scope.emailID);
        //$scope.returnPassword = getPassword;

        console.log(getPassword);
        getPassword
            .then(function(data) {
                $scope.pwdData = data.data;
                console.log($scope.pwdData);
            });
    }
}]);