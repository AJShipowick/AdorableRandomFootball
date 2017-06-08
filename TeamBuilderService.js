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
                $("#Player1").attr("src", this.getRandomPlayer(Math.random()));
                $('#Player2').attr("src", this.getRandomPlayer(Math.random()));
                $('#Player3').attr("src", this.getRandomPlayer(Math.random()));
                $('#Player4').attr("src", this.getRandomPlayer(Math.random()));
                $('#Quarterback').attr("src", this.getRandomPlayer(Math.random()));
            } else {
                $("#Player5").attr("src", this.getRandomPlayer(Math.random()));
                $('#Player6').attr("src", this.getRandomPlayer(Math.random()));
                $('#Player7').attr("src", this.getRandomPlayer(Math.random()));
                $('#Player8').attr("src", this.getRandomPlayer(Math.random()));
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
            return "https://api.adorable.io/avatars/150/" + name + ".png";
        }
    });