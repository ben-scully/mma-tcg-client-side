import getData from '../CRUD/getData'
import generateCards from './generateCards'
import generateScores from './generateScore'
import bindClickToCards from './bindClickToCards'

module.exports= (callback) =>{
  //document.querySelector('#results-container').className='';  // hide the result div
  //document.querySelector('.newGame').className='newGame hidden'; // hide the new game button
  getData('http://192.168.1.2:8000/new', (data) =>{
    typeof(data) != 'number'? generateCards(data) : console.log(data) ;
    generateScores()
    bindClickToCards()
  })
}
