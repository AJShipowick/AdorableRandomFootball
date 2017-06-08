//TODO
//Add Cartoon touchdown animation

angular.module('adorableFootballApp', ['teamBuilderService'])
  .controller('footballController', function AdorableFootballController($scope, teamService) {

    $scope.startGame = false;
    $scope.gameStartedStepOne = false;
    $scope.gameStartedStepTwo = false;
    $scope.myTeamBuilt = false;
    $scope.oppositionTeamBuild = false;

    $scope.buildMyTeam = function () {
      $scope.playersTeam = teamService.buildTeam("myTeam");
      $scope.gameStartedStepOne = false
      $scope.myTeamBuilt = true;
    }

    $scope.buildTheirTeam = function () {
      $scope.oppositionTeam = teamService.buildTeam("oppositionTeam");
      $scope.gameStartedStepTwo = false;
      $scope.oppositionTeamBuild = true;
    }

    $scope.opponentTeam = [];

  });