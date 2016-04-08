module.exports = (numCards, p1Score, p2Score) => {
  var winCondition = Math.floor(numCards/2+1)
  if(p1Score < winCondition && p2Score < winCondition)
    return false
  else return p1Score > p2Score ? 1 : 2
}