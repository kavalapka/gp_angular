'use strict';

angular.module('angularGPApp', [])
    .controller('summController',['$scope', function($scope){

        $scope.firstN = "";
        $scope.secondN = "";

        $scope.getSumm = function() {
            var arr = [$scope.firstN, $scope.secondN];
            var summ = _.reduce(arr, function(memo, num){return memo + num});
            return summ;
        }


    }]);
;