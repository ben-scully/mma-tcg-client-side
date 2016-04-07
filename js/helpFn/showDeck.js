import cardTemp from '../../view/card.jade'
import getData from '../CRUD/getData'
import scoreTemp from '../../view/score.jade'

module.exports= () =>{
  getData('http://192.168.1.2:8000/new', (data) =>{
    let cards,
        player1Cards= document.querySelector('.player1Cards'), // selete the player1's cards container
        player2Cards= document.querySelector('.player2Cards'); // selete the player2's cards container

    typeof(data) != 'number'? cards = data : console.log('error code'+ data);
    // insert the cards
    cards.forEach( (i,card) => {
      let cardEle = cardTemp( card )
        player1Cards.appendChild( cardEle )
        player2Cards.appendChild( cardTemp( {name: 'pc',rating:i+1, image:'/'} ) )
    })

    // insert the score
    [1,2].forEach((i,score) =>{
      let scoreDiv= document.querySelector('#boutContainerP'+i);

      scoreDiv.appendChild( scoreTemp({playerId:i,score:0}) )
    })
  })
}
