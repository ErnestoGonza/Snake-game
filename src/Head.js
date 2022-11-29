class Head {
  constructor(el) {
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'head');
    el.appendChild(this.node);

    this.currentDirection = 'right';
    this.SPEED = 250;

    this.node.style.top = 0;
    this.node.style.left = 0;

    setTimeout(this.move.bind(this), this.SPEED);
    // return {left: this.node.style.left, right: this.node.style.top}
    return this;
  }

  move() {
    const head = this.node;
    const direction = this.currentDirection;

    let topPosition = Number(head.style.top.replace('px', ''));
    let leftPosition = Number(head.style.left.replace('px', ''));
    
    //add else if condition to make the snake move toward the right direction
    if (direction === 'right') {
      head.style.left = `${(leftPosition += 50)}px`;
    } else if (direction === 'left') {
      head.style.left = `${leftPosition -= 50}px`;
    } else if (direction ==='down') {
      head.style.top = `${topPosition += 50}px`;
    } else if (direction === 'up') {
      head.style.top = `${topPosition -= 50}px`;
    }

    //use conditional to check if topPostion and leftPosition is still within range
    if (topPosition >= 700 || topPosition < 0 || leftPosition >= 700 || leftPosition < 0) {
      alert('Game Over! Please click OK to start over!');
      window.location.reload();
    }

    setTimeout(this.move.bind(this), this.SPEED);
  }
}
