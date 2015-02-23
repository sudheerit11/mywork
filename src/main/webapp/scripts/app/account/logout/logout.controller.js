'use strict';

angular.module('ecomApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
