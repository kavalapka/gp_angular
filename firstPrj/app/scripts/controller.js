'use strict';

angular.module('gpApp')

    .controller('summController', ['$scope', '$stateParams', '$state', 'currencyService',
        function($scope, $stateParams, $state, currencyService) {

        console.log('arguments: ', arguments);

        currencyService.getCurrency().$promise.then(function(response){
            console.log('getCurrency Success Callback: ', response);
            $scope.rates = response.rates;
        });


        $scope.selectedCurrency = $stateParams.cu;
        $scope.firstN = parseInt($stateParams.f, 10);
        $scope.secondN = parseInt($stateParams.s, 10);


        $scope.$watchGroup(['firstN', 'secondN', 'selectedCurrency'], function(){
            console.log('Watcher works!', $scope.firstN, $scope.secondN);
            $state.go('sumApp', {cu: $scope.selectedCurrency, f: $scope.firstN, s: $scope.secondN});
            $scope.sumOfNumbers = $scope.firstN + $scope.secondN;

        });

        $scope.getConverted = function(newCurrency){
            $scope.selectedRate = $scope.rates[newCurrency];
            $scope.selectedCurrency = newCurrency;
            return (($scope.firstN + $scope.secondN)*$scope.selectedRate).toFixed(2);
        };

    }])

    .controller('funnyGame', ['$scope', function($scope){
        console.log('FUNNY');
        $scope.funny_string = "";

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
            return statement + '!';
        };

        $scope.getFunnyString = _.compose(exclaim,fency);

    }])

;