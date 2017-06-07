//TODO
//Add Cartoon touchdown animation



(function () {

//document.getElementById("header").innerHTML;

//$("#Team1").hide();
//$("#Team2").hide();
//$(".gameInfo").hide();



//alert(Math.random());

function getRandomPlayer(playersName){
   return "https://api.adorable.io/avatars/150/" + playersName +".png";
}

document.getElementById('Player1').src=getRandomPlayer(Math.random());
document.getElementById('Player4').src=getRandomPlayer(Math.random());
document.getElementById('Player7').src=getRandomPlayer(Math.random());
document.getElementById('Player8').src=getRandomPlayer(Math.random());



$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data.results[0].name.first);
    console.log(data.results[0].name.last);
  }
});



})();