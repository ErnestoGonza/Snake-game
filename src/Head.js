let count = 0;

class Head {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'head');
    this.node.setAttribute('src', 'src/assets/pac-man.gif')
    el.appendChild(this.node);

    this.currentDirection = 'right';
    this.SPEED = 250;

    this.node.style.top = 0;
    this.node.style.left = 0;

    setTimeout(this.move.bind(this), this.SPEED);
  }

  move() {
    const head = this.node;
    const direction = this.currentDirection;

    let topPosition = Number(head.style.top.replace('px', ''));
    let leftPosition = Number(head.style.left.replace('px', ''));
    
    //add else if condition to make the snake move toward the right direction
    if (direction === 'right') {
      head.style.transform = 'rotate(0)';
      head.style.left = `${(leftPosition += 50)}px`;
    } else if (direction === 'left') {
      head.style.transform = 'rotate(180deg)';
      head.style.left = `${(leftPosition -= 50)}px`;
    } else if (direction ==='down') {
      head.style.transform = 'rotate(90deg)';
      head.style.top = `${(topPosition += 50)}px`;
    } else if (direction === 'up') {
      head.style.transform = 'rotate(270deg)';
      head.style.top = `${(topPosition -= 50)}px`;
    }

    //use conditional to check if topPostion and leftPosition is still within range
    if (topPosition >= 700 || topPosition < 0 || leftPosition >= 700 || leftPosition < 0) {
      alert('Game Over! Please click OK to start over!');
      window.location.reload();
      
    }
    

    let appleTop = Number(document.getElementById('apple').style.top.replace('px',''));
    let appleLeft = Number(document.getElementById('apple').style.left.replace('px', ''));

    // console.log(appleTop, appleLeft);

    //check if apple and head overlap
    if (Math.abs((topPosition - appleTop)) < 40 && Math.abs((leftPosition - appleLeft)) < 40) {
      document.getElementById('apple').remove();
      const score = document.getElementById('score');
      count += 5;
      score.innerText = `SCORE: ${count}`
      new Apple(board);
      // const snakeBody = new Body(board, head, direction);
      // const body = document.querySelector('body');
      // body.addEventListener('keydown', (e) => {
      //   if (e.code === 'ArrowLeft' && snakeBody.currentDirection !== 'right') {
      //     snakeBody.currentDirection = 'left';
      //   } else if (e.code === 'ArrowRight' && snakeBody.currentDirection !== 'left') {
      //     snakeBody.currentDirection = 'right';
      //   } else if (e.code === 'ArrowUp' && snakeBody.currentDirection !== 'down') {
      //     snakeBody.currentDirection = 'up';
      //   } else if (e.code === 'ArrowDown' && snakeBody.currentDirection !== 'up') {
      //     snakeBody.currentDirection = 'down';
      //   } else {
      //     console.log('wrong key pressed');
      //   }
      // });
    }
    setTimeout(this.move.bind(this), this.SPEED);
  }
}
