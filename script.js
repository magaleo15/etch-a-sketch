// get container div
const gridContainer = document.querySelector(".container");

function createGrid(gridSize) {
  console.log(gridSize);
  for (let i = gridSize; i > 0; i--) {
    console.log(i);
    const rowContainer = document.createElement("div");
    rowContainer.classList = "row";
    gridContainer.appendChild(rowContainer);
    for (let j = gridSize; j > 0; j--) {
      const gridSquare = document.createElement("div");
      gridSquare.classList = "test";
      rowContainer.appendChild(gridSquare);
    }
  }
}

// function should create a new div for each line (?)

createGrid(64);

// prompt user to say number of squares
// add hovering eventListener
