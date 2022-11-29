class Apple {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'apple');
    this.node.setAttribute('src', 'src/assets/apple-transformed.png');

    //make the apple appear at a random location within the board
    this.node.style.left = `${Math.floor(Math.random() * (650 - 0) + 1)}px`;
    this.node.style.top = `${Math.floor(Math.random() * (650 - 0) + 1)}px`;

    el.appendChild(this.node);

  }
}
