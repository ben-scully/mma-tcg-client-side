import getCardInfo from './getCardInfo'

module.exports= () =>{
    // bind click event to player's card
    let eventCards= document.querySelectorAll('.card');
    for(var i=0; i< eventCards.length; i++){
      eventCards[i].addEventListener('click',getCardInfo,true);
    }
}
