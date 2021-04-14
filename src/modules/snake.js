class Snake {
  constructor() {
    this.snake = [2, 1, 0];
  }

  move(squares, direction, score) {
    const tail = this.snake.pop();
    squares[tail].classList.remove('snake');
    this.snake.unshift(this.snake[0] + direction);
    squares[this.snake[0]].classList.add('snake');
    if (squares[this.snake[0]].classList.contains('apple')) {
      squares[this.snake[0]].classList.remove('apple');
      this.eat(tail, score);
      score += 5;
      return (score);
    }
    return null;
  }

  eat(tail) {
    this.snake.push(tail);
  }

  draw(squares) {
    this.snake.forEach(index => squares[index].classList.add('snake'));
  }
}

export {
  Snake as
  default,
};
