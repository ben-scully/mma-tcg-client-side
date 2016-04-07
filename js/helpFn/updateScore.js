

module.exports= (data) =>{
  let player1= document.querySelector('#boutContainerP1'),
      player2= document.querySelector('#boutContainerP2');
  player1.innerHTML= data.playerOne
  player2.innerHTML= data.playerTwo
}
