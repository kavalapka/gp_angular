'use strict';

angular.module('gpApp', ['ui.router', 'ngResource'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/',
                template: ''
            })

            .state('sumApp', {
                url: '/summ/:f/:s/',
                templateUrl: 'views/summ.html',
                controller: 'summController'
            });

        $urlRouterProvider.otherwise('/');
        //console.log($stateProvider);
        //console.log($urlRouterProvider);
    })

;