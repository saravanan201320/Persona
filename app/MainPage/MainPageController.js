/**
 * Created by saravana.sivakumar on 10/9/2015.
 */
var mainPageControllers = angular.module('mainPageControllers', ["ngStorage", "angular.filter",'angularUtils.directives.dirPagination','ngFileUpload','ui.bootstrap','ngMap']);
mainPageControllers.controller('mainPageController', ['$scope', '$http', '$location', '$rootScope', '$sessionStorage','$route','Upload', function ($scope, $http, $location, $rootScope, $sessionStorage,$route,Upload) {
    $rootScope.loggedIn = true;
    $scope.subCategorys = [];

    var userName = $http.get('http://localhost:8080/creative-backend/service/userName?userID=' + $sessionStorage.sessionUserID);
    console.log(userName);
    userName
        .then(function (data) {
            console.log('Success!', data.data);
            $scope.fullName = data.data;
        }
        , function (error) {
            console.log('Failure...', error);
        });

    $scope.modal = function(){
        $scope.modalStyle = "display: block;"
    }

    var userInterest = $http.get('http://localhost:8080/creative-backend/service/userInterests?userID=' + $sessionStorage.sessionUserID);
    console.log(userInterest);
    //$rootScope.userInterestData = userInterest;

    userInterest
        .then(function (data) {
            console.log('Success!', data.data);
            $rootScope.interestData = data.data;

            for (var i = 0; i < data.data.length; i++) {
                var userInterests = data.data[i].category;
                console.log(userInterests);
                if (userInterests == "Photography") {
                    $scope.glyphiconName0 = "glyphicon-camera";
                }
                else if (userInterests == "Music") {
                    $scope.glyphiconName1 = "glyphicon-music";
                }
                else if (userInterests == "Cooking") {
                    $scope.glyphiconName2 = "glyphicon-cutlery";
                }
            }

            $scope.userInterests = data.data;
            console.log($scope.userInterests);
            console.log($scope.userInterests);


        }
        , function (error) {
            console.log('Failure...', error);
        });
    $scope.category = function (selectedItem) {
        //console.log($rootScope.interestData);

        $scope.subCategorys = [];

        $scope.categoryName = selectedItem.category;
        console.log($scope.categoryName);
        var j = 0;

        for (var i = 0; i < $rootScope.interestData.length; i++) {
            var categName = $rootScope.interestData[i].category;

            if (categName == $scope.categoryName) {


                $scope.subCategorys[j] = $rootScope.interestData[i].subCategory;
                console.log($scope.subCategorys[j]);
                j++;
            }
            if (categName != $scope.categoryName) {
                var j = 0;
            }


        }


    }

    $scope.subCategory = function (selectedSubItem) {

        $scope.subCategotyName = selectedSubItem;
    }
    $scope.file =[];
    $scope.postAd = function (files) {
        console.log("----->"+files);
        for(var i=0; i<files.length;i++){
            Upload.upload({
                url: 'http://localhost:8080/creative-backend/service/attachmentFile',
                file:files[i]
            });
        }
        //$scope.file.push(files) ;
        //console.log($scope.file);
        //
                Upload.upload({
                    url: 'http://localhost:8080/creative-backend/service/postAd',
                    fields: {
                        'Category': $scope.categoryName,
                        'Sub_Category': $scope.subCategotyName,
                        'userName': $scope.fullName,
                        'userId': $sessionStorage.sessionUserID,
                        'description': $scope.description

                    }

                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                }).success(function (data, status, headers, config) {
                    console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
                });


       //var postAdObj = {
       //    userId: $sessionStorage.sessionUserID,
       //    description: $scope.description,
       //    image: "image"
       //};
       // console.log(postAdObj);
       // var postAd = $http.post('http://localhost:8080/creative-backend/service/postAd?Category='+$scope.categoryName+'&Sub_Category='+$scope.subCategotyName+'&userName='+$scope.fullName, postAdObj);
       // $location.path('/main');
       // $route.reload();
       // $route.reload();
    };

    var postedAd = $http.get('http://localhost:8080/creative-backend/service/postedAd');
    postedAd
        .then(function (data) {
            console.log('Success!', data.data);
           $scope.newsFeedPosts = data.data;


        }
        , function (error) {
            console.log('Failure...', error);
        });

    var userDetails = $http.get('http://localhost:8080/creative-backend/service/userDetails');
    userDetails
        .then(function (data) {
            console.log('Success! User Details', data.data);

            $scope.userDetails = data.data;
            console.log("$scope.userDetails"+$scope.userDetails)
        }
        , function (error) {
            console.log('Failure...', error);
        });


    $scope.interestPage = function(selectedItem){
        console.log(selectedItem);
        $rootScope.selectedInterests = selectedItem;
        $location.path("/interestPage");
    };

    $scope.uploadPic = function (file) {
        console.log($sessionStorage.sessionUserID);
        Upload.upload({
            url: 'http://localhost:8080/creative-backend/service/uploadImage',
            fields: {'userID': $sessionStorage.sessionUserID}, // additional data to send
            file: file
        }).progress(function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
        }).success(function (data, status, headers, config) {
            console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
        });
    };

    var getImage = $http.get('http://localhost:8080/creative-backend/service/getProfileImage?userID='+$sessionStorage.sessionUserID);

    getImage
        .then(function (data) {
            console.log('------->Success!', data.data);
                $scope.profilePic = data.data[0];

            console.log($scope.profilePic);

        }
        , function (error) {
            console.log('Failure...', error);
        });

    $scope.viewMap = function(addressLine1,addressLine2,city){
        console.log(addressLine1,addressLine2,city);

        var getMapData = $http.get('http://maps.google.com/maps/api/geocode/json?address='+addressLine1+addressLine2+city)
        getMapData
            .then(function (data) {
                console.log('------->Success!', data.data.results[0].geometry.location.lat);
                console.log(data.data.results[0].geometry.location.lng)
                $scope.addressLatitude = data.data.results[0].geometry.location.lat;
                $scope.addressLongitude = data.data.results[0].geometry.location.lng;
                //$scope.profilePic = data.data[0];

                //console.log($scope.profilePic);

            }
            , function (error) {
                console.log('Failure...', error);
            });

    }
    $scope.toggleBounce = function() {
        if (this.getAnimation() != null) {
            this.setAnimation(null);
        } else {
            this.setAnimation(google.maps.Animation.BOUNCE);
        }
    }


}]);