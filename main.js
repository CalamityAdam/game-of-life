const width = 50;
const height = 40; // width and height dimensions of the board

/**
 * Create a Game of Life instance
 */

const gol = new GameOfLife(width, height);


/**
 * create a table and append to the DOM
 */

// Actual table cells
const cells = [];

// <table> element
const table = document.createElement("tbody");
// build a table row <tr>
for (let h = 0; h < height; h++) {
  const tr = document.createElement("tr");
  // build a table column <td>
  for (let w = 0; w < width; w++) {
    const td = document.createElement("td");
    // We'll put the coordinates on the cell
    // Element itself (using dataset),
    // letting us fetch it in a click listener later.
    td.dataset.row = h;
    td.dataset.col = w;
    cells.push(td);
    tr.append(td);
  }
  table.append(tr);
}
document.getElementById("board").append(table);


/**
 * Draws every cell from the gol instance into an actual, visible DOM element
 */

const paint = () => {
  cells.forEach(td => {
    const cellValue = gol.getCell(td.dataset.row, td.dataset.col);
    if (cellValue === 1) {
      td.classList.add('alive');
    } else {
      td.classList.remove('alive');
    }
  });
}


/**
 * Event Listeners
 */

document
  .getElementById("board")
  .addEventListener("click", ({ target: { dataset: { row, col } } }) => {
  gol.toggleCell(row, col);
  paint();
  // Toggle clicked cell (event.target) and paint
});

document
  .getElementById("step_btn")
  .addEventListener("click", event => {
    gol.tick();
    paint();
  //Do one gol tick and paint
});

// let interval = Number(document.getElementById('interval').value) * 100
let interval = null;

document
  .getElementById("play_btn")
  .addEventListener("click", event => {
  if (!interval) {
    interval = setInterval(() => {
      gol.tick();
      paint();
    }, 100);
  } else {
    clearInterval(interval);
    interval = null;
  }
  // Start playing by calling `tick` and paint
});

document
  .getElementById("random_btn")
  .addEventListener("click", event => {
    gol.forEachCell((row, col) => {
      let value = ((Math.random() * 100) > 75) ? 1 : 0;
      gol.setCell(value, row, col);
    });
    paint();
  // Randomize the board and paint
});

document
  .getElementById("clear_btn")
  .addEventListener("click", event => {
    gol.forEachCell((row, col) => {
      gol.setCell(0, row, col);
    });
    paint();
  // Clear the board and paint
});
