import showDeck from './helpFn/showDeck'



document.addEventListener("DOMContentLoaded", function(event) {
  //showDeck()

  let btns=document.querySelector('.newGame')
  btns.addEventListener('click',showDeck,true)
/*  console.log(btns)
  for(let i=0;i<btns.length;i++){
    btns[i]
  }*/
});
