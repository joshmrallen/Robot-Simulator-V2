document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  const ul = document.querySelector('#moves-container');

  // ADD CODE HERE!
  document.addEventListener("keydown", function(e){

    switch(e.key) {
      case "ArrowDown":
        renderMove("down");
        break;
      case "ArrowUp":
        renderMove("up");
        break;
      case "ArrowLeft":
        renderMove("left");
        break;
      case "ArrowRight":
        renderMove("right");
        break;
      case "Backspace":
        ul.lastChild.remove();
        break;
    }

    ul.append(li)

  });

  function renderMove(move){
    let li = document.createElement('li');
    li.innerText = move;
    ul.append(li);
  }

  const button = document.querySelector('#move-button');

  button.addEventListener("click", function(){
    let instructions = ul.children;
  
    setInterval(function(){

      for(let i=0; i<instructions.length; i++) {
        move(instructions[i].innerText);
        instructions[i].remove();
      }


    }, 500);
    // move(moveInstruction.innerText);
    // moveInstruction.remove();
  });



});
