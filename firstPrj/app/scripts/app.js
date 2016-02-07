'use strict';

angular.module('angularGPApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/',
                views: {
                    templateUrl: 'index.html',
                }
            })

            .state('angularGPApp', {
                url: '/summ/:f/:s/',
                templateUrl: 'app/views/summ.html',
                controller: 'summController',
            });

        //$urlRouterProvider.otherwise('/');
        console.log($stateProvider);
        console.log($urlRouterProvider);
    })

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

    .controller('summController', ['$scope', '$stateParams', '$state', function($scope, $stateParams, $state) {
        console.log('arguments: ', arguments);
        $scope.updateUrl = function(){
            $state.go('angularGPApp', {f: $scope.firstN, s: $scope.secondN});
        };
        $scope.firstN = parseInt($stateParams.f);
        $scope.secondN = parseInt($stateParams.s);
    }])

    .controller('funnyGame', ['$scope', function($scope){
        $scope.funny_string = "";
        $scope.showRes = false;

        var fency =  function(str){
            var str1 = str.split(' ');
            var arr = [];

            for(var i = 0; i < str1.length; i++) {
                var a = str1[i][0].toUpperCase() + str1[i].slice(1);
                arr[i] = a;
            }
            return arr.join(" ");
        };

        var exclaim = function(statement){
            return statement + '!'
        };

        $scope.getFunnyString = _.compose(exclaim,fency);


}])
;