

class Head {
  constructor(el) {
    this.count = 0;
    //this line below not sure if it's working;
    this.board = document.querySelector('#board');
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'head');
    this.node.setAttribute('src', 'src/assets/pac-man.gif')
    el.appendChild(this.node);

    this.currentDirection = 'right';
    this.SPEED = 250;

    this.node.style.top = 0;
    this.node.style.left = 0;


    //keep track of the # of body segments and save the instances of Body in an array
    this.size = 0;
    this.bodies = [];

    //keep track of the coordinates that the head node has travelled to
    this.headPositions = [];
    
    //Remember to bind 'this' to move(), so that move() can point to (via 'this') the instance of Head
    //otherwise, 'this' in move() will be the Windows object

    //we need to bind because setTimeout is a native built-in JS function
    setTimeout(this.move.bind(this), this.SPEED);
  }

  move() {

    const moveTimeoutID = setTimeout(this.move.bind(this), this.SPEED);


    const head = this.node;
    const direction = this.currentDirection;

    let topPosition = Number(head.style.top.replace('px', ''));
    let leftPosition = Number(head.style.left.replace('px', ''));
    
    //add else if condition to make the snake move toward the right direction
    if (direction === 'right') {
      head.style.transform = 'rotate(0)';
      head.style.left = `${(leftPosition += 50)}px`;
      //break;
    } else if (direction === 'left') {
      head.style.transform = 'rotate(180deg)';
      head.style.left = `${(leftPosition -= 50)}px`;
      //break;
    } else if (direction ==='down') {
      head.style.transform = 'rotate(90deg)';
      head.style.top = `${(topPosition += 50)}px`;
      //break;
    } else if (direction === 'up') {
      head.style.transform = 'rotate(270deg)';
      head.style.top = `${(topPosition -= 50)}px`;
      //break;
    }

    //use conditional to check if topPostion and leftPosition is still within range
    if (topPosition >= 700 || topPosition < 0 || leftPosition >= 700 || leftPosition < 0) {
      confirm(`Game Over! Your score is ${this.count}. Click OK to restart game.`);
      this.resetGame(moveTimeoutID);
    }
    

    // let appleTop = Number(document.getElementById('apple').style.top.replace('px',''));
    // let appleLeft = Number(document.getElementById('apple').style.left.replace('px', ''));

    // console.log(appleTop, appleLeft);
    const apple = document.querySelector('#apple');
    const applePos = {
      top: Number(apple.style.top.replace('px', '')),
      left: Number(apple.style.left.replace('px', '')),
    };
    //check if apple and head overlap

    //need to modify the condition below
    //Math.abs(appleTop - topPosition) < 40 && Math.abs(appleLeft - leftPosition) < 40
    if (leftPosition === applePos.left && topPosition === applePos.top) {
      apple.remove();
      const score = document.getElementById('score');
      this.count += 5;
      score.innerText = `SCORE: ${this.count}`;
      let newApple = new Apple(this.board);

      // while loop is going to make sure apple does not appear at the snake head position
      while (`${topPosition}` === newApple.node.style.top && newApple.node.style.left === `${leftPosition}`) {
        newApple.node.remove();
        newApple = new Apple(this.board);
      }
      //Generate new body segment
      const body = new Body(this.board);
      this.bodies.push(body);
      console.log(this.bodies);
      this.size++;
    }

    //Record head positions but keep the array just 1 el longer than this.bodies
    //new head positions go to the front of the array
    this.headPositions.unshift({top: `${topPosition}px`, left: `${leftPosition}px`});
    console.log(this.headPositions[0]);
    if (this.headPositions.length > this.size + 1) {
      this.headPositions.pop();
    }


    //periodically move bodies if segments exists
    if (this.size > 0) this.moveBodies(moveTimeoutID);



    // setTimeout(this.move.bind(this), this.SPEED);
  }

  moveBodies(timeoutID) {
    const head = this.node;

    for (let i = 0; i < this.bodies.length;i++) {
      const body = this.bodies[i];
      body.node.style.top = this.headPositions[i+1].top;
      body.node.style.left = this.headPositions[i+1].left;

      if(body.node.style.top === head.style.top && body.node.style.left === head.style.left && i !== 0 && i !== 1 && i !== 2) {
        const userInput = confirm(`Game Over! Your score is ${this.count}. Click OK to restart game.`);
        if (userInput) {
          this.resetGame(timeoutID);
        } else {
          clearTimeout(timeoutID);
          return;
        }
      }
    }
  }

  resetGame(timeoutID) {
    clearTimeout(timeoutID);

    const oldApple = document.getElementById('apple');
    oldApple.remove();
    const oldBodySegments = document.querySelectorAll('.body');
    oldBodySegments.forEach((oldBodySegment) => oldBodySegment.remove());
    
    this.currentDirection = 'right';
    this.node.style.transform = 'rotate(0)';
    this.node.style.top = 0;
    this.node.style.left = 0;
    this.size = 0;
    this.bodies = [];
    this.headPositions = [];
    this.count = 0;
    const score = document.getElementById('score');
    score.innerText = `SCORE: ${this.count}`;
    

    new Apple(board);
    setTimeout(this.move.bind(this), this.SPEED)
  }

}
