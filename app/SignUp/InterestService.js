/**
 * Created by saravana.sivakumar on 9/25/2015.
 */
var interestServices = angular.module('interestServices', ['ngResource']);


interestServices.factory('StudentsService', ['$resource',

    function ($resource) {

        return $resource('http://localhost:8080/creative-backend/service/:call', {}, {

            interests: {method: 'GET',params:{call:'interests'},  isArray: true}

            //student:{method:'GET',params:{call:'Interest'},isArray:false}

        });

    }]);