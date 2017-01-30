
(function () {
  'use strict';

  var poll = angular.module('poll.app', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'poll.app.modal', 'poll.app.profile', 'poll.app.header']);

  poll.onLoad = function () {
    /* Overlay loading screen */
  };

  poll.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {templateUrl: 'app/directives/login.html', reloadOnSearch: false})
      .when('/main', {templateUrl: 'app/directives/board.html', reloadOnSearch: false})
      .when('/profile', {templateUrl: 'app/directives/board.html', reloadOnSearch: false})
      .when('/help', {templateUrl: 'app/directives/board.html', reloadOnSearch: false})
      .when('/settings', {templateUrl: 'app/directives/board.html', reloadOnSearch: false})
      .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(false);
  }]);

  poll.controller('pollCtrl', ['$scope', '$location', '$uibModal',
    function ($scope, $location, $uibModal) {

    $scope.loginInfo = "";

    $scope.toggle = function () {
      $('.form').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: "toggle"
      }, "slow");
      $scope.loginInfo = "";
    };

    $scope.login = function () {
      if ( $scope.username == $scope.password ) {
        $location.path( "/main" );
      } else {
        $scope.loginError = "Invalid user/pass.";
        $location.path( "/" );
      }
    };

    $scope.register = function () {
      $scope.toggle();
      $scope.loginInfo = "Sie wurden registriert!";
    };

    $scope.dashboard = function () {
      /*session ok?*/
      if(true){
        $location.path( "/main" );
      }else{
        $location.path( "/" );
      }
    };

    $scope.settings = function () {
      if(true){
        $location.path( "/main" );
      }else{
        $location.path( "/" );
      }
    };

    $scope.help = function () {
      if(true){
        $location.path( "/main" );
      }else{
        $location.path( "/" );
      }
    };

    $scope.profile = function () {
      if(true){
        $location.path( "/main" );
      }else{
        $location.path( "/" );
      }
    };


    $scope.openModal = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: "app/directives/modal/modal.html",
        controller: 'datepickerCtrl',
        size: 'md'
      });
    };

    $scope.demoData = [
      {
        label: "Welcher Treffpunkt?",
        ownerId: 1,
        state: "finished",
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        type: "poll",
        totalParticipants: 10,
        votedParticipants: 7,
        topics: [
          {
            label: "Stuttgart",
            votes: 4
          },
          {
            label: "Frankfurt",
            votes: 3
          }
        ]
      },
      {
        label: "Was ist euer Lieblingsessen?",
        ownerId: 1,
        state: "active",
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        type: 'poll',
        totalParticipants: 20,
        votedParticipants: 17,
        topics: [
          {
            label: "Spaghetti",
            votes: 12
          },
          {
            label: "Maultaschen",
            votes: 5
          }
        ]
      },
      {
        label: "Treffpunkt für Lasertack",
        ownerId: 1,
        state: "active",
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        type: 'doodle',
        totalParticipants: 22,
        votedParticipants: 16,
        topics: [
          {
            label: "2017/1/12",
            votes: 9
          },
          {
            label: "2017/1/13",
            votes: 7
          }
        ]
      }
    ];

    $scope.getProcess = function (total, voted) {
      if ( voted == 0 || total == 0) {
        return 0;
      }
      return Math.round(voted / total * 100);
    };

    $scope.showData = function (data) {

    };





    $scope.data= ["one", "two", "three"];

    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.inlineOptions = {
    customClass: getDayClass,
      minDate: new Date(),
      showWeeks: true
    };

    $scope.dateOptions = {
      dateDisabled: disabled,
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };

    function disabled(data) {
    }

    $scope.open = function() {
      $scope.popup.opened = true;
    };

    $scope.setDate = function(year, month, day) {
      $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[2];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup = {
        opened: false
    };

    function getDayClass(data) {
      var date = data.date,
          mode = data.mode;
      if (mode === 'day') {
        var dayToCheck = new Date(date).setHours(0,0,0,0);

        for (var i = 0; i < $scope.events.length; i++) {
          var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

          if (dayToCheck === currentDay) {
              return $scope.events[i].status;
          }
        }
      }
      return '';
    }
  }]);
}());
