function main() {
    createGrid(16);
    draw();
    const input = document.querySelector('input');
    const button = document.querySelector('button');

    button.addEventListener('click', function () {
        if (input.value > 100) {
            alert("Type in a number between 1 and 100");
        }
        else {
            resetGrid();
            createGrid(parseInt(input.value));
            draw();
        }
    });
}

function createGrid(numCells) {
    const grid = document.querySelector('.grid');
    const sizeOfCells = grid.offsetWidth / numCells;
    for (let i = 0; i < numCells; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.width = `${sizeOfCells}px`;
        grid.appendChild(row);
        for (let j = 0; j < numCells; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = `${sizeOfCells}px`;
            cell.style.height = `${sizeOfCells}px`;
            row.appendChild(cell);
        }
    }

}

function resetGrid() {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => row.remove());
}

function draw() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseover', function () {
        cell.style.backgroundColor = 'black';
    }));


}

main();



