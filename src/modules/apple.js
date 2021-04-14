class Apple {
  create(squares) {
    this.appleIndex = Math.floor(Math.random() * 99);
    if (!squares[this.appleIndex].classList.contains('snake')) {
      squares[this.appleIndex].classList.add('apple');
    } else {
      this.create(squares);
    }
  }
}

export {
  Apple as
  default,
};
