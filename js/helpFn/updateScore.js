

module.exports= (data) =>{
  let player1= document.querySelector('#boutContainerP1'),
      player2= document.querySelector('#boutContainerP2');
  player1.innerHTML= 'player1 : '+ data.p1
  player2.innerHTML= 'player2 : '+ data.p2
}
