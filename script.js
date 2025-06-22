// Game state variables
let moveCount = 0;
let timeElapsed = 0;
let gameTimer;
let isGameActive = false;

// Initialize the game when the page loads
window.onload = function() {
    newGame();
};

// Function to start a new game with random tile arrangement
function newGame() {
    resetGame();
    scrambleBoard();
    startTimer();
    isGameActive = true;
}

// Function to create a simple game with only one tile out of position
function simpleGame() {
    resetGame();
    createSimpleGame();
    startTimer();
    isGameActive = true;
}

// Function to reset game state
function resetGame() {
    moveCount = 0;
    timeElapsed = 0;
    updateDisplay();
    stopTimer();
    isGameActive = false;
}

// Function to scramble the board randomly
function scrambleBoard() {
    // Create an array of numbers 1-15 and one empty space
    let tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    
    // Shuffle the array using Fisher-Yates algorithm
    for (let i = tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
    
    // Apply the shuffled arrangement to the board
    applyTileArrangement(tiles);
}

// Function to create a simple game with one move to solve
function createSimpleGame() {
    // Start with solved board
    let tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    
    // Make one swap to create a solvable puzzle
    // Swap tile 15 with the empty space (tile 16)
    [tiles[14], tiles[15]] = [tiles[15], tiles[14]];
    
    applyTileArrangement(tiles);
}

// Function to apply tile arrangement to the board
function applyTileArrangement(tiles) {
    for (let row = 1; row <= 4; row++) {
        for (let col = 1; col <= 4; col++) {
            const cellId = `cell${row}${col}`;
            const tileIndex = (row - 1) * 4 + (col - 1);
            const tileNumber = tiles[tileIndex];
            
            const cell = document.getElementById(cellId);
            cell.className = `tile${tileNumber}`;
        }
    }
}

// Function to handle tile clicks
function clickTile(row, column) {
    if (!isGameActive) return;
    
    const cell = document.getElementById(`cell${row}${column}`);
    const tile = cell.className;
    
    // Don't allow clicking on the empty tile
    if (tile === "tile16") return;
    
    // Check if the empty tile is adjacent and swap if possible
    if (canSwap(row, column)) {
        swapTiles(row, column);
        moveCount++;
        updateDisplay();
        
        // Check for win condition with delay
        setTimeout(() => {
            checkWin();
        }, 1000);
    }
}

// Function to check if a tile can be swapped with the empty space
function canSwap(row, column) {
    // Check all four directions: up, down, left, right
    const directions = [
        {row: row - 1, col: column}, // up
        {row: row + 1, col: column}, // down
        {row: row, col: column - 1}, // left
        {row: row, col: column + 1}  // right
    ];
    
    for (let dir of directions) {
        if (dir.row >= 1 && dir.row <= 4 && dir.col >= 1 && dir.col <= 4) {
            const adjacentCell = document.getElementById(`cell${dir.row}${dir.col}`);
            if (adjacentCell.className === "tile16") {
                return true;
            }
        }
    }
    return false;
}

// Function to swap tiles
function swapTiles(row, column) {
    // Find the empty tile position
    let emptyRow, emptyCol;
    for (let r = 1; r <= 4; r++) {
        for (let c = 1; c <= 4; c++) {
            const cell = document.getElementById(`cell${r}${c}`);
            if (cell.className === "tile16") {
                emptyRow = r;
                emptyCol = c;
                break;
            }
        }
    }
    
    // Swap the tiles
    const clickedCell = document.getElementById(`cell${row}${column}`);
    const emptyCell = document.getElementById(`cell${emptyRow}${emptyCol}`);
    
    const clickedTileClass = clickedCell.className;
    clickedCell.className = emptyCell.className;
    emptyCell.className = clickedTileClass;
}

// Function to check if the puzzle is solved
function checkWin() {
    // Check if all tiles are in the correct position
    const isWon = 
        document.getElementById("cell11").className === "tile1" &&
        document.getElementById("cell12").className === "tile2" &&
        document.getElementById("cell13").className === "tile3" &&
        document.getElementById("cell14").className === "tile4" &&
        document.getElementById("cell21").className === "tile5" &&
        document.getElementById("cell22").className === "tile6" &&
        document.getElementById("cell23").className === "tile7" &&
        document.getElementById("cell24").className === "tile8" &&
        document.getElementById("cell31").className === "tile9" &&
        document.getElementById("cell32").className === "tile10" &&
        document.getElementById("cell33").className === "tile11" &&
        document.getElementById("cell34").className === "tile12" &&
        document.getElementById("cell41").className === "tile13" &&
        document.getElementById("cell42").className === "tile14" &&
        document.getElementById("cell43").className === "tile15" &&
        document.getElementById("cell44").className === "tile16";
    
    if (isWon) {
        win();
    }
}

// Function to handle win condition
function win() {
    stopTimer();
    isGameActive = false;
    
    const timeInSeconds = Math.floor(timeElapsed / 1000);
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    const message = `Congratulations!!\nAmount spent on current game in seconds: ${timeInSeconds}\nNumber of moves so far: ${moveCount}\nWould you like to play again?`;
    
    if (window.confirm(message)) {
        window.location.reload();
    }
}

// Function to start the timer
function startTimer() {
    gameTimer = setInterval(() => {
        timeElapsed += 100;
        updateDisplay();
    }, 100);
}

// Function to stop the timer
function stopTimer() {
    if (gameTimer) {
        clearInterval(gameTimer);
        gameTimer = null;
    }
}

// Function to update the display
function updateDisplay() {
    document.getElementById("moveCount").textContent = moveCount;
    
    const timeInSeconds = Math.floor(timeElapsed / 1000);
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    document.getElementById("timeDisplay").textContent = timeString;
} 