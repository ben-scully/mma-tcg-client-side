import postData from '../CRUD/postData'
import updateScore from './updateScore'

module.exports=(event) => {
  let card= event.target,
      name= card.getElementsByClassName('name')[0].innerHTML,
      rating= card.getElementsByClassName('rating')[0].innerHTML,
      image= card.getElementsByClassName('image')[0].getAttribute('href');

      postData('http://192.168.1.2:8000/round', {name,rating,image} , (data) =>{
        typeof(data) != 'number'? updateScore(data) : console.log('error code '+ data);
      })
}
