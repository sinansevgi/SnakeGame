import gridGenerator from './gridGenerator';
import Snake from './snake';

const control = (event) => {
  if (event.keyCode === 39) {
    console.log('right pressed');
  } else if (event.keyCode === 38) {
    console.log('up pressed');
  } else if (event.keyCode === 37) {
    console.log('left pressed');
  } else if (event.keyCode === 40) {
    console.log('down pressed');
  }
};
const gameFlow = () => {
  const startButton = document.querySelector('#start');
  const score = document.querySelector('.score');
  const grid = document.querySelector('.grid');
  let squares = [];
  const currentSnake = new Snake();

  squares = gridGenerator(grid);
  currentSnake.draw(squares);

  const timerId = setInterval(() => {
    currentSnake.move(squares, 1);
  }, 500);
  clearInterval(timerId);
  document.addEventListener('keydown', (event) => { control(event); });
};
export { gameFlow as default };