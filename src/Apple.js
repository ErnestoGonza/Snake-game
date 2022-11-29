class Apple {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'apple');
    this.node.setAttribute('src', 'src/assets/apple.jpg');

    //make the apple appear at a random location within the board
    this.node.style.left = `${Math.floor(Math.random() * (650 - 0) + 0)}px`;
    this.node.style.top = `${Math.floor(Math.random() * (650 - 0) + 0)}px`;

    el.appendChild(this.node);

    //return the position value of the current apple
    // return {left: this.node.style.left, right: this.node.style.top};
    return this;
  }
}

