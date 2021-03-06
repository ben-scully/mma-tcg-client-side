import cardTemp from '../../views/card.jade'
import pcCardTemp from '../../views/compCard.jade'


module.exports= (cards) => {
    let p1cards= document.querySelector('#cardContainerP1'), // selete the player1's cards container
        p2cards= document.querySelector('#cardContainerP2'),
        allcardsP1= '',
        allcardsP2= '';

    cards.forEach( (card,i) => {
      allcardsP1+= cardTemp(card)
      allcardsP2+= pcCardTemp()
    })

    p1cards.innerHTML=allcardsP1;
    p2cards.innerHTML=allcardsP2;
}
