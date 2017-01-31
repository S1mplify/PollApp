+function(angular) {
  var app = angular.module('poll.app.modal', ['ui.bootstrap']);
  
  app.controller('datepickerCtrl', ['$scope', '$rootScope', '$uibModalInstance', /*'pollProvider',*/
  function($scope, $rootScope, $uibModalInstance/*, pollProvider -> macht Probleme */) {

      $scope.poll = {};
      $scope.format = 'dd-MMMM-yyyy';
      $scope.poll.types = ["Datum", "Allgemein"];
      $scope.poll.answer = [""];
      $scope.poll.dates = [{date:'01-05-2001'}, {date:'05-05-2014'}, {date:'10-11-2008'}];

      $scope.disabled = function(date, mode) {
          return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
      };

      $scope.open = function($event) {
          $event.preventDefault();
          $event.stopPropagation();
      };

      $scope.dateOptions = {
          formatYear: 'yy',
          startingDay: 1
      };

      $scope.openCalendar = function($event,dt) {
          $event.preventDefault();
          $event.stopPropagation();
          dt.opened = true;
          $scope.startOpened = !$scope.startOpened;
      };
      //$scope.date = [""];

      $scope.addNewAnswerPoll = function () {
          $scope.poll.answer.push("")
      };

      $scope.addNewAnswerDate = function () {
          $scope.poll.dates.push({date: "", opened: false});
          //$scope.date.push("");
      };

      $scope.changeType = function (typ) {
          $scope.poll.type = typ;
          $scope.poll.answer = [""];
          $scope.poll.dates = [{date:'01-05-2001'}, {date:'05-05-2014'}, {date:'10-11-2008'}];
          if(typ == "Allgemein"){
            $scope.active = true;
          } else{
            $scope.active = false;
          }
          //$scope.date.push("");
      };

      $scope.cancel = function () {
          $uibModalInstance.close();
      };

      $scope.save = function () {
        /* userId -> OWNERID, kommt vom Login später aus der Datenbank*/
        $scope.userId = 1;
        console.info($scope.poll);
        //pollProvider.savePoll($scope.poll, $scope.userId);
      };

  }]);

}(window.angular);