'use strict';

angular.module('gpApp')

    .service('currencyService', ['$resource', function($resource) {
        var baseURL = 'http://api.fixer.io/latest';

        this.getCurrency = function() {
            return $resource(baseURL).get();
        };
    }])

;
