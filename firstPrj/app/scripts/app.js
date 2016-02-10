'use strict';

angular.module('gpApp', ['ui.router', 'ngResource'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/',
                template: '<h3> HOME </h3>',
            })

            .state('sum', {
                url: 'summ/:f/:s/',
                templateUrl: '../views/summ.html',
                controller: 'summController',
            });

        //$urlRouterProvider.otherwise('/');
        console.log($stateProvider);
        console.log($urlRouterProvider);
    })

;