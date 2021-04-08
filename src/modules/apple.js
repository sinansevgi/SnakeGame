class Apple {
  constructor(squares) {
    do {
      this.appleIndex = Math.floor(Math.random() * 99);
      squares[this.appleIndex].classList.add('apple');
    }
    while (squares[this.appleIndex].classList.contains('snake'));
  }
}

export {
  Apple as
  default,
};
