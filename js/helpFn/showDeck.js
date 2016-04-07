import cardTemp from 'card.jade'
import getData from '../CRUD/getData'

module.exports= () =>{
  getData('http://192.168.1.2:8000/new', (data) =>{
    let cards,
        player1Cards= document.querySelector('.player1Cards'),
        player2Cards= document.querySelector('.player2Cards');

    typeof(data) != 'number'? cards = data : console.log('error code'+ data);

    cards.forEach( (i,card) => {
      let cardEle = cardTemp( card )
        player1Cards.appendChild( cardEle )
        player2Cards.appendChild( cardTemp( {name: 'pc',rating:i+1, image:'/'} ) )
    })
  })
}
