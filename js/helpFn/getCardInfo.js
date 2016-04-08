import postData from '../CRUD/postData'
import updateScore from './updateScore'
import calcWinner from './calculateWinner'
import showResult from './showResult'

module.exports=(event) => {
  let card= event.target,
      name= card.getElementsByClassName('name')[0].innerHTML,
      rating= card.getElementsByClassName('rating')[0].innerHTML,
      image= card.getElementsByClassName('image')[0].getAttribute('href');

      postData('http://192.168.1.2:8000/round', {name,rating,image} , (data) =>{
        let numCards = document.querySelectorAll('.card').length
        if(typeof(data) != 'number') {
          let winner = calcWinner(numCards, data.p1, data.p2)
          !winner? updateScore(data) : showResult(data.p1, data.p2, winner)
        }
        else console.log('error code '+ data)
      })
}
