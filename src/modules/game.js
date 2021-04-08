import gridGenerator from './gridGenerator';
import Snake from './snake';
import Apple from './apple';

const gameFlow = () => {
  const startButton = document.querySelector('#start');
  const score = document.querySelector('.score');
  const grid = document.querySelector('.grid');
  let squares = [];
  const currentSnake = new Snake();
  let direction = 1;
  let predirect = 1;
  squares = gridGenerator(grid);
  currentSnake.draw(squares);

  const control = (event) => {
    if (event.keyCode === 39) {
      predirect = direction;
      direction = 1;
    } else if (event.keyCode === 38) {
      predirect = direction;
      direction = -10;
    } else if (event.keyCode === 37) {
      predirect = direction;
      direction = -1;
    } else if (event.keyCode === 40) {
      predirect = direction;
      direction = 10;
    }
  };

  const check = (interval) => {
    if (
      (currentSnake.snake[0] + 10 >= 100 && direction === 10)
      || (currentSnake.snake[0] % 10 === 9 && direction === 1)
      || (currentSnake.snake[0] % 10 === 0 && direction === -1)
      || (currentSnake.snake[0] - 10 < 0 && direction === -10)
      || squares[currentSnake.snake[0] + direction].classList.contains('snake')
      || direction === predirect * -1
    ) {
      return clearInterval(interval);
    }
    return 'continue';
  };

  const timerId = setInterval(() => {
    check(timerId);
    currentSnake.move(squares, direction);
  }, 300);

  const apple = new Apple(squares);

  document.addEventListener('keydown', (event) => {
    control(event);
  });
};
export {
  gameFlow as
  default,
};
