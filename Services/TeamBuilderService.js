//Service to help build teams (names and pictures)

angular.module('teamBuilderService', [])
    .service('teamService', function () {

        var buildingMyTeam = false;

        //Handles build team method for player and opposition teams
        this.buildTeam = function (team) {
            this.buildTeamName(team);
            this.buildTeamPictures(team);
        }

        this.buildTeamName = function (team) {
            buildingMyTeam = (team === "myTeam" ? true : false);
            this.getRandomName()
        }

        this.buildTeamPictures = function (team) {
            if (buildingMyTeam) {
                $("#player1").attr("src", this.getRandomPlayer(Math.random()));
                $('#player2').attr("src", this.getRandomPlayer(Math.random()));
                $('#player3').attr("src", this.getRandomPlayer(Math.random()));
                $('#player4').attr("src", this.getRandomPlayer(Math.random()));
                $('#quarterback').attr("src", this.getRandomPlayer(Math.random()));
            } else {
                $("#player5").attr("src", this.getRandomPlayer(Math.random()));
                $('#player6').attr("src", this.getRandomPlayer(Math.random()));
                $('#player7').attr("src", this.getRandomPlayer(Math.random()));
                $('#player8').attr("src", this.getRandomPlayer(Math.random()));
            }
        }

        this.getRandomName = function () {
            $.ajax({
                url: 'https://randomuser.me/api/',
                dataType: 'json',
                success: function (data) {
                    if (buildingMyTeam) {
                        $("#teamBattle").text(data.results[0].login.username + " (" + data.results[0].location.state + ") " + "  vs.  ");
                    } else {
                        $("#teamBattle").text($("#teamBattle").text() + data.results[0].login.username + " (" + data.results[0].location.state + ") ");
                    }
                }
            });
        }

        this.getRandomPlayer = function (name) {
            return "https://api.adorable.io/avatars/" + name + ".png";
        }
    });