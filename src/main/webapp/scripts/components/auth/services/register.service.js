'use strict';

angular.module('ecomApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


