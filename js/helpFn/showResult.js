import resultTemplate from '../../views/result.jade';

module.exports = (p1Score, p2Score, winner) => {
  let resultDiv = document.createElement(resultTemplate({p1Score, p2Score, winner}));
  resultDiv.className += showResult;
  document.body.appendChild(resultDiv);
}