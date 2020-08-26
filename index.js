document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  const ul = document.querySelector('#moves-container');

  // ADD CODE HERE!
  document.addEventListener("keydown", function(e){
    let li = document.createElement('li');

    switch(e.key) {
      case "ArrowDown":
        //do something
        li.innerText = "down"
        break;
      case "ArrowUp":
        //do something
        li.innerText = "up"
        break;
      case "ArrowLeft":
        //do something
        li.innerText = "left"
        break;
      case "ArrowRight":
        //do something
        li.innerText = "right"
        break;
    }

    ul.append(li)

  });

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
