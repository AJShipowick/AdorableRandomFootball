//TODO Add Cartoon touchdown animation

angular.module('adorableFootballApp', ['teamBuilderService', 'gameBuilderService'])
  .controller('footballController', function AdorableFootballController($scope, teamService, gameService) {

    //Set variables on app load
    $(document).ready(function () {
      buildGameVariables();
    });

    function buildGameVariables() {
      $scope.startGame = false;
      $scope.gameStartedStepOne = false;
      $scope.gameStartedStepTwo = false;
      $scope.myTeamBuilt = false;
      $scope.oppositionTeamBuilt = false;
    }

    $scope.buildMyTeam = function () {
      $scope.playersTeam = teamService.buildTeam("myTeam");
      $scope.gameStartedStepOne = false
      $scope.myTeamBuilt = true;
    }

    $scope.buildTheirTeam = function () {
      $scope.oppositionTeam = teamService.buildTeam("oppositionTeam");
      $scope.gameStartedStepTwo = false;
      $scope.oppositionTeamBuilt = true;
    }

    $scope.playGame = function () {
      $("#playGame").modal()
    }

    $scope.showGameResults = function(){
      alert('gameDone!');
    }

    $scope.restartGame = function () {
      buildGameVariables();
      $("#teamBattle").text("");
    }

    $scope.howToPlay = function () {
      $("#howToPlay").modal()
    }

    $scope.appStack = function () {
      $("#appStack").modal()
    }

  });