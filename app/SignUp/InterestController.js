/**
 * Created by saravana.sivakumar on 9/25/2015.
 */
var interestControllers = angular.module('interestControllers',[]);



interestControllers.controller('interestController', ['$scope','StudentsService','$rootScope','$http', function($scope,StudentsService,$rootScope,$http)

{
    $scope.students=StudentsService.interests();
    $rootScope.loggedIn = false;
    console.log($rootScope.fName);
    console.log($rootScope.lName);
    console.log($rootScope.pwd);
    console.log($rootScope.mobile);
    console.log($rootScope.email1);
    console.log($rootScope.addressLine1);
    console.log($rootScope.addressLine2);
    console.log($rootScope.country);
    console.log($rootScope.state1);
    console.log($rootScope.city);
    console.log($rootScope.code);
    $scope.selection=[];
    $rootScope.selection = [];

    $scope.toggleSelection = function toggleSelection(interestID) {
        var idx = $scope.selection.indexOf(interestID);
        if (idx > -1) {
            $scope.selection.splice(idx, 1);
        }
        else {
            $rootScope.selection = $scope.selection.push(interestID);
        }
    };


$scope.interestsClick =function(){
    $rootScope.selectedValue = $scope.selection;
    console.log($rootScope.selectedValue);
}

    $scope.submitClick = function(){
        $rootScope.selectedValue = $scope.selection;
        console.log($rootScope.selectedValue);
        var userObj =
            {
                fName: $rootScope.fName,
                lName: $rootScope.lName,
                password: $rootScope.pwd,
                userDetails: {
                    emailId: $rootScope.email1,
                    contactNum: $rootScope.mobile,
                    dob: "1990-12-02",
                    addressLine1: $rootScope.addressLine1,
                    addressLine2: $rootScope.addressLine2,
                    city: $rootScope.city,
                    state: $rootScope.state1,
                    country: $rootScope.country,
                    zipCode: $rootScope.code

                }
            };

        console.log(userObj);
        $http.post('http://localhost:8080/creative-backend/service/saveUser?interestID='+$rootScope.selectedValue, userObj);

    }
}]);