'use strict';

angular.module('angularGPApp')

    .controller('summController', ['$scope', '$stateParams', '$state', 'currencyService',
        function($scope, $stateParams, $state, currencyService) {
        console.log('arguments: ', arguments);
        $scope.updateUrl = function(){
            $state.go('angularGPApp', {f: $scope.firstN, s: $scope.secondN});
        };
        $scope.firstN = parseInt($stateParams.f);
        $scope.secondN = parseInt($stateParams.s);

        currencyService.getCurrency().$promise.then(function(curr){
            console.log('Curr: ', curr);
            $scope.selectedCurrency = 'AUD';
            $scope.rates = curr.rates;
            $scope.onChangeCurrency('AUD');
        });

        $scope.onChangeCurrency = function(newCurrency){
            $scope.selectedRate = $scope.rates[newCurrency];
            $scope.selectedCurrency = newCurrency;
        }


        $scope.getConverted = function(){
            return (($scope.firstN + $scope.secondN)*$scope.selectedRate).toFixed(2);
        }

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