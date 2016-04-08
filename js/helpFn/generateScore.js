import scoreTemp from '../../views/score.jade'

module.exports= () => {
      [1,2].forEach((id) =>{
      let divid='#boutContainerP'+id;
      let scoreDiv= document.querySelector(divid);

      scoreDiv.innerHTML= scoreTemp({playerId:id,score:0})
    })
}
