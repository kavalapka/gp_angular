angular.module('angularGPApp', [])
    .controller('summController',['$scope', function($scope){

        $scope.summing = { firstN: "", secondN: ""};
        $scope.getSumm = function() {
            return $scope.summing.firstN + $scope.summing.secondN;
        }


    }]);


;