'use strict';

angular.module('angularGPApp')

    .constant("baseURL", "http://api.fixer.io/latest")

    .service('currencyService', ['$resource', 'baseURL', function($resource, baseURL) {

        this.getCurrency = function() {
            return $resource(baseURL).get();
        };
    }])

;