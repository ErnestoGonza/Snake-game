document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const board = document.querySelector('#board');

  
  const head = new Head(board);
  new Apple(board);
  // const snakeBody = new Body(board)
  // console.log(board);


  body.addEventListener('keydown', (e) => {
    //add else if statement to add instruction for up, down, right key pressed
    if (e.code === 'ArrowLeft' && head.currentDirection !== 'right') {
      console.log('pressed left');
      head.currentDirection = 'left';
      //break;
    } else if (e.code === 'ArrowRight' && head.currentDirection !== 'left') {
      console.log('pressed right');
      head.currentDirection = 'right';
      //break;
    } else if (e.code === 'ArrowUp' && head.currentDirection !== 'down') {
      console.log('pressed up');
      head.currentDirection = 'up';
      //break;
    } else if (e.code === 'ArrowDown' && head.currentDirection !== 'up') {
      console.log('pressed down');
      head.currentDirection = 'down';
      //break;
    } else {
      console.log('Wrong key pressed. Please press the arrow keys on your keyboard!')
    }
  });
});
