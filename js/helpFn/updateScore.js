

module.exports= (data) =>{
  let player1= document.querySelector('#boutScoreP1'),
      player2= document.querySelector('#boutScoreP2');
  player1.querySelector('.boutNumber').innerHTML= data.p1
  player2.querySelector('.boutNumber').innerHTML= data.p2
}
