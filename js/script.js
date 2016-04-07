import showDeck from './helpFn/showDeck'


document.addEventListener("DOMContentLoaded", function(event) {
  showDeck();
  document.querySelectorAll('.card').addEventListener('click',getCardInfo,false);
});
