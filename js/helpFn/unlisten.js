import getCardInfo from './getCardInfo.js';

module.exports = () => {
  let eventCards= document.querySelectorAll('.playercard');
  for(var i=0; i< eventCards.length; i++){
    eventCards[i].removeEventListener('click',getCardInfo,true);
  }
}
