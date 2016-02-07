'use strict';

angular.module('angularGPApp', ['ui.router', 'ngResource'])
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

;