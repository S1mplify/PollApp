+function(angular) {
  var app = angular.module('poll.app.modal', ['ui.bootstrap']);
  
  app.controller('datepickerCtrl', ['$scope', '$rootScope', '$uibModalInstance', '$log', 
  function($scope, $rootScope, $uibModalInstance, $log) {
    $scope.startDate = new Date();
    $scope.endDate = new Date();
    $scope.startOpened = false;
    $scope.endOpened = false;

    $scope.save = function () {
      alert($scope.startDate + " " + $scope.endDate);
    };

    $scope.toggleStartCalendar = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.startOpened = !$scope.startOpened;
    };

    $scope.toggleEndCalendar = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.endOpened = !$scope.endOpened;
    };

    $scope.cancel = function () {
      $uibModalInstance.close();
    }; 

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.adjustEndDate =  function() {
      if ($scope.endDate < $scope.startDate) {
        $log("Adjusting end date to " + $scope.startDate);
        $scope.endDate = $scope.startDate;
      }
    };

    $scope.adjustStartDate = function() {
      if ($scope.startDate > $scope.endDate) {
        $log("Adjusting start date to " + $scope.endDate);
        $scope.startDate = $scope.endDate;
      }
    };

  }]);

}(window.angular);