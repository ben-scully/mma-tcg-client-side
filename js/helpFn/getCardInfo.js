import postData from '../CRUD/postData'

module.exports=(event) => {
  let rating= event.target.querySelector('.rateDiv')
      id= rating.innerHTML;
      postData( {rating} ,()=>{})

}
