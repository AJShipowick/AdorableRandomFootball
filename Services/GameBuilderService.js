//Service to build our random football game
angular.module('gameBuilderService', [])
    .service('gameService', function () {

        var myTeamScore = 0;
        var opponentTeamScore = 0;

        this.resetScores = function () {
            myTeamScore = 0;
            opponentTeamScore = 0;
        }

        //logic to randomize game events
        //1 team takes a turn
        //did they score, or was an error commited?
        //return quarter results
        this.createQuarter = function () {
            var myTeamTakesAction = this.getRandomActiom();
            var goodAction = this.getRandomActiom();

            results = {};  //Empty object
            results.action = this.getActionResults(goodAction, myTeamTakesAction);

            if (myTeamTakesAction) {
                myTeamScore += this.getUpdatedScore(goodAction, results.action);

            } else {
                opponentTeamScore += this.getUpdatedScore(goodAction, results.action);
            }

            results.score = this.formatScore();

            return results;
        }

        //Number can only be 1 or 2
        //Randomlly choose if home team takes action or not
        this.getRandomActiom = function () {
            var randomNumber = Math.floor(Math.random() * 2) + 1;
            return (randomNumber === 1);
        }

        this.getActionResults = function (goodAction, myTeamTakesAction) {
            if (goodAction) {
                var teamGoodWording = (myTeamTakesAction ? "You scored a " : "Opponenet scored a ")
                var goodAction = (this.getRandomActiom() ? "Touchdown!" : "FieldGoal!");
                return teamGoodWording + goodAction;
            } else {
                var teamBadWording = (myTeamTakesAction ? "You had a " : "Opponenet had a ");
                var badAction = (this.getRandomActiom() ? "Fumble!" : "Interception!");
                return teamBadWording + badAction;
            }
        }

        this.getUpdatedScore = function (goodAction, actiom) {
            if (goodAction) {
                if (actiom.includes("Touchdown!")) {
                    return 7;
                } else {
                    return 3;
                }
            } else {
                return 0;
            }
        }

        this.formatScore = function () {
            return myTeamScore + " - " + opponentTeamScore;
        }

        this.getMyScore = function () {
            return myTeamScore;
        }

        this.getOpponentScore = function () {
            return opponentTeamScore;
        }

    });