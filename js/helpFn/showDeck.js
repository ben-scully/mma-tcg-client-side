import cardTemp from '../../views/card.jade'
import getData from '../CRUD/getData'
import scoreTemp from '../../views/score.jade'
import getCardInfo from './getCardInfo'

module.exports= (callback) =>{
  getData('http://192.168.1.2:8000/new', (data) =>{
    let cards,
        p1cards= document.querySelector('#cardContainerP1'), // selete the player1's cards container
        p2cards= document.querySelector('#cardContainerP2'),
        allcardsP1= '',
        allcardsP2= '' ;

    typeof(data) != 'number'? cards = data : console.log(data) ;

    // insert the cards
    cards.forEach( (card,i) => {
      allcardsP1+= cardTemp(card)
      allcardsP2+= "<div class='computerCard'>Computer Card</div>"
    })

    p1cards.innerHTML=allcardsP1;
    p2cards.innerHTML=allcardsP2;

    // insert the score
    [1,2].forEach((id) =>{
      let divid='#boutContainerP'+id;
      let scoreDiv= document.querySelector(divid);

      scoreDiv.innerHTML= scoreTemp({playerId:id,score:0})
    })

    // bind click event to player's card
    let eventCards= document.querySelectorAll('.card');
    for(var i=0; i< eventCards.length; i++){
      eventCards[i].addEventListener('click',getCardInfo,true);
    }

  })
}
