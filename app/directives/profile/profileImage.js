(function () {
  'use strict';

  angular.module('poll.app.profile', ['ui.bootstrap'])
      .directive('profilePicture', [ function () {
        return {
          restrict: 'E',
          replace: true,
          scope: {
            user: '=user'
          },
          template: '<div class="profile-image" tooltip-placement="left" uib-tooltip="{{user.name}}" style="background-image:url({{url}})"></div>',
          link: function ($scope) {
            var user = $scope.user;
            if (user && user.name && user.id) {
              try {
                var name = user.name.replace(' ', '%20');
                $scope.url = api.ix.UserUtils.buildUserImageUrl(parseInt(user.id), name);
              } catch (ex) {
                console.error(ex);
              }
            }
          }
        };
      }]);
}());