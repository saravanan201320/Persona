/**
 * Created by saravana.sivakumar on 10/7/2015.
 */
angular.module('Classified', [])
    .controller('ClassifiedController', ClassifiedController)
    .factory('classifiedService', ClassifiedFactory);       //note we are creating a service with 'factory' recipe

function ClassifiedFactory($http) {
    this.$inject = ['$http'];

    return {
        getClassifiedData: getClassifiedData
    };

    function getClassifiedData () {
        return $http
            .get('../api/Items.json')
            .then(complete)
            .catch(failed);
    }

    function complete(response) {
        return response.data;
    }

    function failed(error) {
        return error.statusText;
    }
}
function ClassifiedController($scope, classifiedService, $rootScope) {
    this.$inject = ['$scope', 'classifiedService','$rootScope'];
    $scope.EditImage = "rightArrow.png";
    $scope.ClassifiedImage ="expand.png";
    $scope.ShowClassified0=false;
    $scope.ShowClassified1=false;
    $scope.ShowClassified2=false;
    $scope.ShowClassified3=false;
    $scope.ShowClassified4=false;
    $scope.itemSelected="default";
    $rootScope.loggedIn = true;

    $scope.IsEditShow=false;

    $scope.nextButton = function (img) {
        var arrowRight="rightArrow.png";
        if(img==arrowRight)
        {
            $scope.EditImage ="leftArrow.png";
            $scope.IsEditShow =true;
        }
        else
        {
            $scope.EditImage = "rightArrow.png";
            $scope.IsEditShow =false;
        }
    };
    $scope.ShowClassified = function (img,divId) {
        var expandImg="expand.png";
        var collapseImg="collapse.png";

        if(divId=="0")
        {
            if(img==expandImg ) {
                $scope.ShowClassified0 = true;
            }
            else
            {
                $scope.ShowClassified0 =false;
            }
        }

        if(divId=="1")
        {
            if(img==expandImg) {
                $scope.ShowClassified1 = true;
            }
            else
            {
                $scope.ShowClassified1 =false;
            }
        }

        if(divId=="2")
        {
            if(img==expandImg){ $scope.ShowClassified2 =true;}
            else
            {
                $scope.ShowClassified2 =false;
            }

        }

        if(divId=="3")
        {
            if(img==expandImg) {
                $scope.ShowClassified3 = true;
            }
            else
            {
                $scope.ShowClassified3 =false;
            }
        }

        if(divId=="4")
        {
            if(img==expandImg){$scope.ShowClassified4 =true;}
            else
            {
                $scope.ShowClassified4 =false;
            }

        }

    };
    $scope.setSelection = function(item) {
        alert('item'+item);
        $scope.SelectionText = item; // pull selected city using {{selected | json}}
    };
    classifiedService.getClassifiedData().then(function(data) {
        $scope.classified = data;

    });
}

function HideShow(Img) {
    var constant ="http://localhost:8080/UserInterests/images/expand.png";
    var last = Img.id.charAt(Img.id.length - 1);
    var showId="ItemsDetails"+last;
    if(Img.src==constant){
        document.getElementById(Img.id).src ="http://localhost:8080/UserInterests/img/collapse.png";
        document.getElementById(showId).style.display ="block";
    }
    else
    {
        document.getElementById(Img.id).src ="http://localhost:8080/UserInterests/img/expand.png";
        document.getElementById(showId).style.display ="none";
    }

}

function showEditDetails1(DivId) {
    var arrow="http://localhost:8080/UserInterests/img/leftArrow.png";
    var arrowRight="http://localhost:8080/UserInterests/img/rightArrow.png";
    alert('img'+DivId);
    if(DivId.src == arrowRight){
        document.getElementById(DivId.id).src =arrow;
        document.getElementById("ShowDetail").style.display ="block";
        document.getElementById("EditDetails").style.width ="27%";
        document.getElementById("Criteria").style.width ="73%";
        document.getElementById("AccentureImg").style.width ="40%";
    }
    else
    {
        document.getElementById(DivId.id).src="http://localhost:8080/UserInterests/img/rightArrow.png";
        document.getElementById("ShowDetail").style.display ="none";
        document.getElementById("EditDetails").style.width ="10%";
        document.getElementById("Criteria").style.width ="90%";
        document.getElementById("AccentureImg").style.width ="50%";
    }
}
function AddInfo() {
    document.getElementById("message").innerHTML = "Data Saved Successfully";

}
function EditInfo() {
    document.getElementById("message").innerHTML = "Data Saved Successfully";

}