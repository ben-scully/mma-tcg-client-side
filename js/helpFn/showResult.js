import resultTemplate from '../../views/result.jade';
import unlisten from './unlisten.js'
import showDeck from './showDeck'

module.exports = (p1Score, p2Score, winner) => {
  let resultDiv = document.getElementById('result-container')
  resultDiv.innerHTML = resultTemplate({p1Score, p2Score, winner});
  resultDiv.querySelector('.newGame2').addEventListener('click',showDeck,true);
  resultDiv.className += ' showResult';
  unlisten();
}
