class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }

  makeBoard = () => {
    let newBoard = [];
    for (let row = 0; row < this.height; ++row) {
      let tempArr = [];
      for (let col = 0; col < this.width; ++col) {
        tempArr.push(0);
      }
      newBoard.push(tempArr)
    }
    return newBoard;
  }


  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors = (row, col) => {
    return (
      this.getCell(row - 1, col - 1) + 
      this.getCell(row - 1, col) + 
      this.getCell(row - 1, col + 1) + 
      this.getCell(row, col - 1) + 
      this.getCell(row, col + 1 ) + 
      this.getCell(row + 1, col - 1) + 
      this.getCell(row + 1, col) + 
      this.getCell(row + 1, col + 1)
    );
  }

  getCell = (row, col) => {
    return this.board[row][col];
  };
  
  setCell = (value, row, col) => {
    this.board[row][col] = value;
  };
  
  toggleCell = (row, col) => {
    this.board[row][col] = this.board[row][col] ? 0 : 1;
  };
  
  cellExists = (row, col) => {
    return row >= 0 && row < this.height && col >= 0 && col < this.width;
  };
  
  forEachCell = (callback) => {
    for (let row = 0; row < this.height; ++row) {
      for (let col = 0; col < this.width; ++col) {
        callback(row, col);
      };
    };
  };
  
  /**
   * Given the present board, apply the rules to generate a new board
   */
  
  tick = () => {
    const newBoard = this.makeBoard();
    
    
    
    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board 
    // (the next iteration of the game) 
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors
    this.board = newBoard;
  }
}
