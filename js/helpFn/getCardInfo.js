import postData from '../CRUD/postData'
import updateScore from './updateScore'

module.exports=(event) => {
  let card= event.target,
      name= card.querySelector('h4').innerHTML,
      rating= card.querySelector('h6').innerHTML,
      image= card.querySelector('img').getAttribute('href');
      postData('http://192.168.1.2:8000/round', {name,rating,image} , (data) =>{
        typeof(data) != 'number'? updateScore(data) : console.log('error code '+ data);
      })
}
