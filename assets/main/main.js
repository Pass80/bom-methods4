const container = document.querySelector('#snakeField');
for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('item');
    cell.addEventListener('mouseover', () => {
        const randomColor = () => Math.floor(Math.random() * 256);
        cell.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        const timer = setTimeout(() => {
            cell.style.backgroundColor = 'lightblue';
            clearTimeout(timer);
        }, 500);
    });
    container.appendChild(cell);
}
