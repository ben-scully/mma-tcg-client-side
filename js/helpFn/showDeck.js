import cardTemp from '../../views/card.jade'
import getData from '../CRUD/getData'
import scoreTemp from '../../views/score.jade'
import getCardInfo from './getCardInfo'

module.exports= (callback) =>{
  getData('http://192.168.1.2:8000/new', (data) =>{
    let cards,
        player1Cards= document.querySelector('#cardContainerP1') // selete the player1's cards container
        // player2Cards= document.querySelector('#cardContainerP2'); // selete the player2's cards container
        //console.log( player1Cards.innerHTML='<h1>hello</h1>' )
        var allcards=''
    typeof(data) != 'number'? cards = data : console.log('error code'+ data);
    // insert the cards
    cards.forEach( (card,i) => {
       card.cardId= Date.now()
      allcards+= cardTemp(card)

        //player1Cards.appendChild( cardEle )
        //player2Cards.appendChild( cardTemp( {name: 'pc',rating:i+1, image:'/'} ) )
    })
    player1Cards.innerHTML=allcards;

    // insert the score
    [1,2].forEach((score,i) =>{
      let id='#boutContainerP'+(i+1).toString();
      console.log(id);
      let scoreDiv= document.querySelector(id);

      scoreDiv.innerHTML= scoreTemp({playerId:i,score:0})
    })

    // bind click event to player's card
    let eventCards= document.querySelectorAll('.card');
    for(var i=0; i< eventCards.length; i++){
      eventCards[i].addEventListener('click',getCardInfo,true);
    }
/*    document.querySelectorAll('.card').forEach( (ele) => {
      console.log(ele)
      ele.addEventListener('click',getCardInfo,true)
    });*/
  })
}
