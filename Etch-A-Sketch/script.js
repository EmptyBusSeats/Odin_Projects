const arr = [];
const bodyody = document.querySelector('body');

for (let i = 0; i < 16; i++) {
    const container = document.createElement('div');
    container.classList.add('container');
    for (let j = 0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
        container.style = "width: 59px; border: 1px; border-color: black; border-style: solid; background-color: aqua; display: flex; flex-direction: column; max-height: 960px; height: 59px;"
    }
    bodyody.appendChild(container);
    arr.push(container);
}

bodyody.style = "display: flex; flex-wrap: wrap; max-width: 960px;"
