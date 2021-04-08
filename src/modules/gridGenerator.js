const gridGenerator = (parent) => {
  const squares = [];
  for (let i = 0; i < 100; i += 1) {
    const square = document.createElement('div');
    square.classList.add('square');
    parent.appendChild(square);
    squares.push(square);
  }
  return squares;
};
export { gridGenerator as default };
