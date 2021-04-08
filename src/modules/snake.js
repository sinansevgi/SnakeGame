class Snake {
  constructor() {
    this.snake = [2, 1, 0];
  }

  move(squares, direction) {
    const tail = this.snake.pop();
    squares[tail].classList.remove('snake');
    this.snake.unshift(this.snake[0] + direction);
    squares[this.snake[0]].classList.add('snake');
  }

  draw(squares) {
    this.snake.forEach(index => squares[index].classList.add('snake'));
  }
}

export {
  Snake as
  default,
};
