function main() {
    const slider = document.querySelector('.slider');
    const blackButton = document.querySelector('.black')
    const rainbowButton = document.querySelector('.rainbow');
    const grayScaleButton = document.querySelector('.grayscale');
    const clearButton = document.querySelector('.clear');
    const coolButton = document.querySelector('.cool');

    let color;

    blackButton.onclick = (e) => {
        draw('black');
        color = 'black';
        blackButton.classList.add('pressed');
        rainbowButton.classList.remove('pressed');
        grayScaleButton.classList.remove('pressed');


    };
    rainbowButton.onclick = () => {
        draw('rainbow');
        color = 'rainbow';
        rainbowButton.classList.add('pressed');
        grayScaleButton.classList.remove('pressed');
        blackButton.classList.remove('pressed');

    }

    grayScaleButton.onclick = () => {
        draw('grayscale');
        color = 'grayscale';
        grayScaleButton.classList.add('pressed');
        rainbowButton.classList.remove('pressed');
        blackButton.classList.remove('pressed');
    }

    blackButton.click();


    slider.value = 16;
    createGrid(slider.value);
    draw('black');

    clearButton.onclick = () => {
        resetGrid();
        createGrid(slider.value);
        draw(color);
    }

    slider.onmousemove = (e) => changeSliderNumber(e.target.value);
    slider.addEventListener('change', function (e) {
        resetGrid();
        createGrid(slider.value);
        draw(color);
    });

}



function changeSliderNumber(value) {
    const sliderNumber = document.querySelector('.slider-number');
    sliderNumber.textContent = `${value} x ${value}`;
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

function draw(option) {
    const cells = document.querySelectorAll('.cell');

    if (option === 'rainbow') {
        cells.forEach(cell => cell.addEventListener('mouseover', function () {
            cell.style.backgroundColor = `rgb(${Math.random() * (255 - 0) + 0},${Math.random() * (255 - 0) + 0},${Math.random() * (255 - 0) + 0})`;
        }));
    }

    else if (option === 'black') {
        cells.forEach(cell => cell.addEventListener('mouseover', function () {
            cell.style.backgroundColor = `rgb(20,20,20)`;
        }));
    }

    else if (option === 'grayscale') {
        let value = 90;
        cells.forEach(cell => cell.addEventListener('mouseover', function () {
            if (value > 0) {
                value = value - 5;
            }
            else {
                value = 90;
            }
            cell.style.backgroundColor = `rgb(${value}%,${value}%,${value}%)`;
        }));
    }

}





main();



