
(function () {
    'use strict';

    angular.module('poll.app.header', ['ui.bootstrap'])
        .directive('header', [ function () {
            return {
                restrict: 'E',
                replace: true,
                controller: 'pollCtrl',
                scope: {
                    scope: '='
                },
                templateUrl: 'app/directives/header/header.html'
            }
        }]);
}());