/**
 * Created by saravana.sivakumar on 10/16/2015.
 */
var interestPageControllers = angular.module('interestPageControllers', ["ngStorage", "angular.filter",'angularUtils.directives.dirPagination']);
interestPageControllers.controller('interestPageController', ['$scope', '$http', '$location', '$rootScope', '$sessionStorage','$route', function ($scope, $http, $location, $rootScope, $sessionStorage,$route) {
    $scope.selectedInterest = $rootScope.selectedInterests;
    $scope.userInterestPages = [];
    //$scope.selectedInterest = "Photography";
    $scope.userInterestPages = $rootScope.interestData;
    console.log($scope.userInterestPages);

    $scope.membersList = function (selectedInterest) {
        var memberList = $http.get('http://localhost:8080/creative-backend/service/memberList?category='+selectedInterest);
        memberList
            .then(function (data) {
                console.log('Success!', data.data);
                $scope.userLists = data.data;
            }
            , function (error) {
                console.log('Failure...', error);
            });
    };

    var postedAd = $http.get('http://localhost:8080/creative-backend/service/postedAd');
    postedAd
        .then(function (data) {
            console.log('Success!', data.data);
            $scope.newsFeedPostForInterests = data.data;
        }
        , function (error) {
            console.log('Failure...', error);
        });

    $scope.selection=[];

    // toggle selection for a given employee by name

    $scope.toggleSelection = function toggleSelection(employeeName) {
        var idx = $scope.selection.indexOf(employeeName);
        if (idx > -1) {
            $scope.selection.splice(idx, 1);
        }
        else {
            $scope.selection.push(employeeName);
        }
    };

    $scope.applyFilter =function(){
        $scope.applyFilters = $scope.selection;
        console.log($scope.applyFilters);
    };
    }]);
