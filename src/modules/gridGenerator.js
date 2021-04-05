const gridGenerator = (parent) => {
    let squares = [];
    for(let i = 0; i < 100; i++ ){
        const square = document.createElement('div');
        square.classList.add('square');
        parent.appendChild(square);
        squares.push(square);
    }
    return squares;
};
export {gridGenerator as default};