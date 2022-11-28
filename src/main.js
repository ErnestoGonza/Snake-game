document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const board = document.querySelector('#board');

  const head = new Head(board);
  const curr_apple = new Apple(board);
  // console.log(curr_apple);

  body.addEventListener('keydown', (e) => {
    //add else if statement to add instruction for up, down, right key pressed
    if (e.code === 'ArrowLeft') {
      console.log('pressed left');
      head.currentDirection = 'left';
    } else if (e.code === 'ArrowRight') {
      console.log('pressed right');
      head.currentDirection = 'right';
    } else if (e.code === 'ArrowUp') {
      console.log('pressed up');
      head.currentDirection = 'up';
    } else if (e.code === 'ArrowDown') {
      console.log('pressed down');
      head.currentDirection = 'down';
    } else {
      console.log('Wrong key pressed. Please press the arrow keys on your keyboard!')
    }
  });
});

console.log(head)

