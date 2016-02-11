'use strict';

angular.module('gpApp')

    .service('currencyService', ['$resource', 'baseURL', function($resource, baseURL) {
        var baseURL = 'http://api.fixer.io/latest'
        this.getCurrency = function() {
            return $resource(baseURL).get();
        };
    }])

;
