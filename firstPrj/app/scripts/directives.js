/**
 * Created by k_zenchyk on 2/7/16.
 */
'use strict';

angular.module('angularGPApp')

    .directive('ktSum', function() {
        /*let getSumm = function($scope) {
            var arr = [$scope.firstN, $scope.secondN];
            var summ = _.reduce(arr, function(memo, num) {
                return memo + num
            });
            return summ;
        }; */
        return {
            restrict: 'E',
            scope: { sum: '@sum'},
            template: "<input value='{{sum}}' readonly/>"

        };
    })

;