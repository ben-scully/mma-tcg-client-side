import postData from '../CRUD/postData'
import updateScore from './updateScore'

module.exports=(event) => {
  let card= event.target,
      name= card.querySelector('.name').innerHTML,
      id= card.querySelector('.id').innerHTML,
      image= card.querySelector('img').getAttribute('href');
      postData( {name,id,image} , (data) =>{
        typeof(data) != 'number'? updateScore(data) : console.log('error code '+ data);
      })
}
