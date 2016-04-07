

module.exports= (data) =>{
  let player1= document.querySelector('.player1'),
      player2= document.querySelector('.player2');
  player1.innerHTML= data.player1
  player2.innerHTML= data.player2
}
