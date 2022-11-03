

function createGrid(numCells) {
    const grid = document.querySelector('.grid');
    const sizeOfCells = grid.offsetWidth/numCells;
    for (let i = 0; i < numCells; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.width = `${sizeOfCells}px`;
        grid.appendChild(row);
        for (let j = 0; j <numCells; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = `${sizeOfCells}px`;
            cell.style.height = `${sizeOfCells}px`;
            row.appendChild(cell);
        }
    }
}

const input = document.querySelector('input');
const button = document.querySelector('button');

function resetGrid() {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => row.remove());
}
button.addEventListener('click', function() {
    resetGrid();
    createGrid(parseInt(input.value));
});


