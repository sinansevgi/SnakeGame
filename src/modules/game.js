import gridGenerator from './gridGenerator';
import Snake from './snake';
import Apple from './apple';

const gameFlow = () => {
  const scoreField = document.querySelector('.score');
  let score = 0;
  const grid = document.querySelector('.grid');
  let squares = [];
  const currentSnake = new Snake();
  let direction = 1;
  let predirect = 1;
  let scoreReturn = 0;
  const snakeSpeed = 350;
  const apple = new Apple();
  squares = gridGenerator(grid);
  currentSnake.draw(squares);

  const gameOver = (interval) => {
    const over = document.createElement('div');
    const overTitle = document.createElement('h1');
    over.classList.add('game-over');
    overTitle.textContent = 'GAME OVER';
    grid.textContent = '';
    over.appendChild(overTitle);
    grid.appendChild(over);
    clearInterval(interval);
  };

  const control = (event) => {
    if (event.keyCode === 39 || event.keyCode === 68) {
      predirect = direction;
      direction = 1;
    } else if (event.keyCode === 38 || event.keyCode === 87) {
      predirect = direction;
      direction = -10;
    } else if (event.keyCode === 37 || event.keyCode === 65) {
      predirect = direction;
      direction = -1;
    } else if (event.keyCode === 40 || event.keyCode === 83) {
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
      gameOver(interval);
    }
  };

  const flow = (interval) => {
    check(interval);
    scoreReturn = currentSnake.move(squares, direction, score);
    let appleExist = false;
    squares.forEach((element) => {
      if (element.classList.contains('apple')) {
        appleExist = true;
      }
    });
    if (!appleExist) {
      score = Number(scoreReturn);
      scoreField.textContent &&= score;
      apple.create(squares);
      appleExist = true;
      clearInterval(interval);
      const timerId = setInterval(() => { flow(timerId); }, (snakeSpeed - score));
    }
  };

  const timerId = setInterval(() => { flow(timerId); }, snakeSpeed);

  document.addEventListener('keydown', (event) => {
    control(event);
  });
};
export {
  gameFlow as
  default,
};
