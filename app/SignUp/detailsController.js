/**
 * Created by saravana.sivakumar on 9/30/2015.
 */
var detailsControllers = angular.module('detailsControllers', []);

detailsControllers.controller('detailsController', ['$rootScope', '$scope', function ($rootScope, $scope) {
    $rootScope.loggedIn = false;
    $scope.detailsClick = function(){
        $rootScope.mobile = $scope.mobile;
        $rootScope.email1 = $scope.email1;
        $rootScope.addressLine1 = $scope.address1;
        $rootScope.addressLine2 = $scope.address2;
        $rootScope.country = $scope.country;
        $rootScope.state1 = $scope.state1;
        $rootScope.city = $scope.city;
        $rootScope.code = $scope.code;

    }


}]);