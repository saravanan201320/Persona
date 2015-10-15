/**
 * Created by saravana.sivakumar on 10/6/2015.
 */
var loginControllers = angular.module('loginControllers',["ngStorage"]);
loginControllers.controller('loginController',['$scope','$http','$location','$rootScope','$sessionStorage', function($scope,$http,$location,$rootScope,$sessionStorage){
    $rootScope.loggedIn = false;
    var emailID = $scope.userID;
    var pwd = $scope.password;
    console.log(emailID);
    console.log(pwd);


    $scope.loginSubmit = function(){
        var credentials = $http.get('http://localhost:8080/creative-backend/service/loginUser?emailId='+$scope.userID +'&password='+$scope.password);
        console.log(credentials);
        console.log(credentials.status);
        credentials
            .then(function(data) {
                console.log('Success!', data.data);
                if(data.data != 0){
                    $sessionStorage.sessionUserID = data.data;
                    $location.path("/main");
                }
                else{
                    $location.path("/SignUpComplete");
                }

            }, function(error) {
                console.log('Failure...', error);
            });
        };

}]);
