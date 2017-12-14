$(document).ready(function(){
  var randomNumber=Math.floor(Math.random()*101+19)

  $('#randomNumber').text(randomNumber);

  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)

  var total= 0;
  var wins= 0;
  var losses= 0;

  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

  function reset(){
    randomNumber=Math.floor(Math.random()*101+19);
    $('#randomNumber').text(randomNumber);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    total= 0;
    $('#finalTotal').text(total);
  }

  function winner(){
    alert("You Won the 2017 NBA FINALS!");
      wins++;
      $('#numberWins').text(wins);
      reset();
  }

  function loser(){
    alert("Better Luck Next Year...");
      losses++;
      $('#numberLosses').text(losses);
      reset();
}

  $('#wall').on('click', function(){
    total = total + num1;
    $('#finalTotal').text(total);

      if(total == randomNumber){
        winner();
      }
      else if (total > randomNumber){
        loser();
      }
  })
  $('#james').on('click', function(){
    total = total + num2;
    $('#finalTotal').text(total);

      if(total == randomNumber){
        winner();
      }
      else if (total > randomNumber){
        loser();
      }
  })
  $('#curry').on('click', function(){
    total = total + num3;
    $('#finalTotal').text(total);

      if(total == randomNumber){
        winner();
      }
      else if (total > randomNumber){
        loser();
      }
  })
  $('#westbrook').on('click', function(){
    total = total + num4;
    $('#finalTotal').text(total);

      if(total == randomNumber){
        winner();
      }
      else if (total > randomNumber){
        loser();
      }
  });
});
