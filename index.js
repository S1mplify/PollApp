
(function () {
  'use strict';

  var poll = angular.module('poll.app', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'poll.app.modal', 'poll.app.profile', 'poll.app.header']);

  poll.onLoad = function () {
    /* Overlay loading screen */
  };

  poll.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {templateUrl: 'app/directives/login.html', reloadOnSearch: false})
      .when('/pass', {templateUrl: 'app/directives/requestPassword.html', reloadOnSearch: false})
      .when('/main', {templateUrl: 'app/directives/board.html', reloadOnSearch: false})
      .when('/profile', {templateUrl: 'app/directives/profile.html', reloadOnSearch: false})
      .when('/help', {templateUrl: 'app/directives/help.html', reloadOnSearch: false})
      .when('/settings', {templateUrl: 'app/directives/settings.html', reloadOnSearch: false})
      .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(false);
  }]);

  poll.controller('pollCtrl', ['$scope', '$location', '$uibModal',
    function ($scope, $location, $uibModal) {

    $scope.loginInfo = '';
    $scope.idx = 0;
    $scope.ownerId = 1; //Testzwecke
    $scope.seeVotes = false;
    $scope.isActive = false;
    $scope.isClosed = true;
    $scope.buttons = [
      { label: 'Aktive', state: false },
      { label: 'Alt', state: false },
      { label: 'Eigene', state: false }
    ];

    $scope.user = {};

    $scope.toggle = function () {
      $('.form').animate({
        height: 'toggle',
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
      }, 'slow');
      $scope.loginInfo = '';
    };

    $scope.login = function () {

      if ( $scope.username == $scope.password ) {
        $scope.loginInfo = '';
        $location.path( '/main' );
      } else {
        $scope.loginError = 'Invalid user/pass.';
        $location.path( '/' );
      }
    };

    $scope.register = function () {
      $scope.toggle();
      $scope.loginInfo = 'Sie wurden registriert!';
    };

    $scope.loginBack = function () {
      $location.path( '/' );
    };

    $scope.logout = function () {
      /*destroy actual Login*/
      $location.path( '/' );
    };

    $scope.requestPassword = function () {
      /*session ok?*/
      if(true){
        $location.path( '/pass' );
      }else{
        $location.path( '/' );
      }
    };

    $scope.getPass = function () {
      /*WENN ES EMAIL IN DER DB gibt Erfolg*/
      if(true){
        $scope.loginInfo = 'Es wurde eine Email verschickt, dort können sie Ihr Passwort zurücksetzen';
        $location.path( '/' );
      }else{
        $scope.loginInfo = 'Es konnte kein Eintrag mit dieser E-Mailadresse gefundern werden! ' +
            'Versuchen sie es nocheinmal.';
        $location.path( '/pass' );
      }
    };

    $scope.umfrage = function () {
      /*session ok?*/
      if(true){
        $location.path( '/main' );
      }else{
        $location.path( '/' );
      }
    };

    $scope.settings = function () {
      if(true){
        $location.path( '/settings' );
      }else{
        $location.path( '/' );
      }
    };

    $scope.help = function () {
      if(true){
        $location.path( '/help' );
      }else{
        $location.path( '/' );
      }
    };

    $scope.profile = function () {
      if(true){
        $location.path( '/profile' );
      }else{
        $location.path( '/' );
      }
    };

    $scope.openModal = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/directives/modal/modal.html',
        controller: 'datepickerCtrl',
        size: 'md'
      });
    };

    $scope.openModalEdit = function(poll) {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/directives/modal/modal.html',
        controller: 'datepickerCtrl',
        scope: poll,
        size: 'md'
      });
    };

    $scope.activeFilter = function(state, idx) {
      var i;
      for(i = 0; $scope.buttons.length > i; i++){
        $scope.buttons[i].state = false;
      }
      $scope.buttons[idx].state = !state;
    };

    $scope.demoData = [
      {
        label: 'Welcher Treffpunkt?',
        ownerId: 1,
        state: 'finished',
        desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        type: 'poll',
        totalParticipants: 10,
        votedParticipants: 7,
        topics: [
          {
            label: 'Stuttgart',
            votes: 4,
            isVoted: false
          },
          {
            label: 'Frankfurt',
            votes: 3,
            isVoted: false
          },
          {
              label: 'Berlin',
              votes: 2,
              isVoted: false
          },
          {
              label: 'München',
              votes: 6,
              isVoted: true
          }
        ]
      },
      {
        label: 'Was ist euer Lieblingsessen?',
        ownerId: 2,
        state: 'active',
        desc: 'Bacon ipsum dolor sit amet doner meatball jowl short ribs, chicken prosciutto salami frankfurter. Pig drumstick turducken short ribs, brisket meatloaf ham hock shankle andouille corned beef strip steak.',
        type: 'poll',
        totalParticipants: 20,
        votedParticipants: 17,
        topics: [
          {
            label: 'Spaghetti',
            votes: 12,
            isVoted: false
          },
          {
            label: 'Maultaschen',
            votes: 5,
            isVoted: false
          }
        ]
      },
      {
        label: 'Treffpunkt für Lasertack',
        ownerId: 1,
        state: 'active',
        desc: 'Christian brothers jameson long island iced tea caju amigo glen elgin caipiroska dark and stormy. Lemon drop, lime rickey batida seagrams tinto de verano.',
        type: 'date',
        totalParticipants: 22,
        votedParticipants: 16,
        topics: [
          {
            label: new Date('2017-01-12'),
            votes: 9,
            isVoted: false
          },
          {
            label: new Date('2017-01-13'),
            votes: 7,
            isVoted: false
          }
        ]
      },
      {
        label: 'Schwimmen gehen',
        ownerId: 2,
        state: 'finished',
        desc: 'Dark and stormy. Lemon drop, lime rickey batida seagrams tinto de verano.',
        type: 'date',
        totalParticipants: 8,
        votedParticipants: 4,
        topics: [
          {
            label: new Date('2017-01-12'),
            votes: 3,
            isVoted: false
          },
          {
            label: new Date('2017-01-13'),
            votes: 5,
            isVoted: false
          },
          {
            label: new Date('2017-01-18'),
            votes: 7,
            isVoted: false
          }
        ]
      }
    ];

    $scope.formatDate = function () {

    };

    $scope.getEntry = function () {

    };

    $scope.updateData = function(idx){
      $scope.idx = idx;
    };

    $scope.toggleClass = function() {
        $scope.isActive = !$scope.isActive;
        $scope.isClosed = !$scope.isClosed;
    };

    $scope.getProcess = function (total, voted) {
      if ( voted == 0 || total == 0) {
        return 0;
      }
      return Math.round(voted / total * 100);
    };

    $scope.vote = function (topic) {
      topic.isVoted = true;
    };

    $scope.unVote = function (topic) {
      topic.isVoted = false;
    };

    $scope.showData = function (data) {

    };
    /*
    $scope.getPieChart = function () {
      var colors = [
          '#FF0', '#F0F',
          '#0FF', '#F00',
          '#00F', '#0F0',
          '#F6F', '#AF2',
          '#F51', '#3BF',
          '#93F', '#1F8',
          '#FB1', '#E78',
          '#4Fb', '#B2F',
          '#CF5', '#F68'
      ];

      $scope.data = {
        labels: [
          'Red',
          'Blue'
        ],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: [
              colors[0],
              colors[1]
            ],
            hoverBackgroundColor: [
              colors[0],
              colors[1]
            ]
          }]
      };
    };

    $scope.PieChart = new Chart(ctx,{
        type: 'pie',
        data: $scope.getPieChart(),
        options: options
    });
    */
  }]);
}());
