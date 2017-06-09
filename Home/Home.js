//Entry point module for app

angular.module('adorableFootballApp', ['teamBuilderService', 'gameBuilderService'])
  .controller('footballController', function AdorableFootballController($scope, teamService, gameService) {

    $scope.totalWins = 0;
    $scope.totalLosses = 0;

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
      $scope.quarter1Results = [];
      $scope.quarter2Results = [];
      $scope.quarter3Results = [];
      $scope.quarter4Results = [];
      $scope.myTeamScore = 0;
      $scope.opponentTeamScore = 0;
      $scope.gameOver = false;
      $scope.weWon;
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

    //Start the game and show game results
    $scope.playGame = function () {
      $("#playGame").modal()
      gameService.resetScores();

      //build results 1 second at a time to give impression game is being played
      setTimeout(function () {
        $scope.quarter1Results = gameService.createQuarter();
        $scope.$apply();
      }, 1000);

      setTimeout(function () {
        $scope.quarter2Results = gameService.createQuarter();
        $scope.$apply();
      }, 2000);

      setTimeout(function () {
        $scope.quarter3Results = gameService.createQuarter();
        $scope.$apply();
      }, 3000);

      setTimeout(function () {
        $scope.quarter4Results = gameService.createQuarter();
        $scope.$apply();
      }, 4000);

      setTimeout(function () {
        $scope.finalResults = "Home team: " + gameService.getMyScore() + " Away team: " + gameService.getOpponentScore();
        $scope.gameOver = true;
        $scope.myTeamScore = gameService.getMyScore();
        $scope.opponentTeamScore = gameService.getOpponentScore();

        $scope.weWon = (gameService.getMyScore() > gameService.getOpponentScore() ? true : false);

        if ($scope.weWon) {
          $scope.totalWins++;
        } else {
          $scope.totalLosses++;
        }

        $scope.$apply();
      }, 4500);
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