/**
 * Created by stgro on 30.01.2017.
 */
(function () {
    'use strict';

    angular.module('poll.app.header', ['ui.bootstrap'])
        .directive('header', [ function () {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                },
                templateUrl: 'app/directives/header/header.html'
            };
        }]);
}());