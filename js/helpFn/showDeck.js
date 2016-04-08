import getData from '../CRUD/getData'
import generateCards from './generateCards'
import generateScores from './generateScore'
import bindClickToCards from './bindClickToCards'

module.exports= (callback) =>{
  document.querySelector('.game').className+=' showGame'
  let result =document.querySelector('#results-container')
  result? result.className='' : console.log('new game') ;
  document.querySelector('.newGame').className='newGame hidden'; // hide the new game button
  getData('http://localhost:8000/new', (data) =>{
    typeof(data) != 'number'? generateCards(data) : console.log(data) ;
    generateScores()
    bindClickToCards()
  })
}
