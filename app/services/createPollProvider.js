(function () {
    "use strict";

    angular.module('poll.app')
        .factory('myJson', ['$scope', function ($scope){
            $scope.addPoll = function (pollObj, id) {
                var deferred;
                deferred = $q.defer();
                php.exec("func_call_create_Poll", {
                        obj: pollObj,
                        owner: id
                    }, function (data) {
                        /* If success get back the hole Object for new Poll */
                        deferred.resolve(data);
                    },
                    function (err) {
                        deferred.reject(err);
                    }
                );
                return deferred.promise;
            };

            $scope.editPoll = function (pollObj, id) {
                var deferred;
                deferred = $q.defer();
                php.exec("func_call_edit_Poll", {
                        obj: pollObj,
                        owner: id
                    }, function (data) {
                        /* If success get back the hole Object for Update */
                        deferred.resolve(data);
                    },
                    function (err) {
                        deferred.reject(err);
                    }
                );
                return deferred.promise;
            }
        }])
})();