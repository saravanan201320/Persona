/**
 * Created by saravana.sivakumar on 9/25/2015.
 */
var signUpControllers = angular.module('signUpControllers', ['ngFileUpload']);


signUpControllers.controller('signUpController', ['$scope', '$rootScope', '$http', 'Upload', function ($scope, $rootScope, $http, Upload) {

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
    console.log($rootScope.selectedValue);


    //console.log(userObj);
    //$http.post('http://localhost:8080/creative-backend/service/saveUser?interestID='+$rootScope.selectedValue, userObj);

    $scope.uploadPic = function (file) {
        //console.log("Saravanan");
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
        $http.post('http://localhost:8080/creative-backend/service/saveUser?interestID='+$rootScope.selectedValue, userObj);

       // $http.post('http://localhost:8080/creative-backend/service/saveUser?interestID='+$rootScope.selectedValue+'&file='+file, userObj);
        Upload.upload({

            url: 'http://localhost:8080/creative-backend/service/saveUser',

            fields: {'interestID': $rootScope.selectedValue}, // additional data to send
            data: JSON.stringify({"user": userObj}),
            file: file

           // data: {file: file, 'interestID': $rootScope.selectedValue, userObj: userObj},

        }).progress(function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
        }).success(function (data, status, headers, config) {
            console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
        });
    };


}]);