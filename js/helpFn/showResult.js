import resultTemplate from '../../views/result.jade';
import unlisten from './unlisten.js'

module.exports = (p1Score, p2Score, winner) => {
  let resultDiv = document.createElement('div')
  resultDiv.innerHTML = resultTemplate({p1Score, p2Score, winner});
  resultDiv.className += 'showResult';
  document.body.appendChild(resultDiv);
  unlisten();
}
