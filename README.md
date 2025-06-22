# 4x4 Sliding Puzzle Game

A web-based sliding puzzle game built with HTML, CSS, and JavaScript. The goal is to arrange the numbered tiles from 1-15 in sequential order, with the empty space in the bottom right corner.

## Features

- **4x4 Game Board**: 16 slots with 15 numbered tiles and one empty space
- **Move Counter**: Tracks the number of moves made
- **Timer**: Records the time spent on each game
- **New Game Button**: Starts a new game with randomly scrambled tiles
- **Simple Game Button**: Creates a puzzle that can be solved in just one move
- **Win Detection**: Automatically detects when the puzzle is solved
- **Responsive Design**: Works on both desktop and mobile devices

## How to Play

1. **Objective**: Arrange the tiles in numerical order from 1-15, with the empty space in the bottom right corner
2. **Moving Tiles**: Click on any tile that is adjacent to the empty space to move it
3. **Valid Moves**: Only tiles directly next to the empty space (up, down, left, or right) can be moved
4. **Game Modes**:
   - **New Game**: Creates a completely random puzzle arrangement
   - **Simple Game**: Creates a puzzle that can be solved in one move (for testing)

## File Structure

- `index.html` - Main HTML structure with the game board and controls
- `styles.css` - CSS styling for the game interface and tile positioning
- `script.js` - JavaScript game logic including move handling, win detection, and timer

## How to Run

1. Download all files to a folder
2. Open `index.html` in a web browser
3. The game will automatically start with a new random puzzle

## Game Logic

- The game uses CSS background positioning to display numbered tiles
- Each tile has a unique class (tile1-tile16) that corresponds to its position in the background image
- The empty space is represented by tile16 (white background)
- Win detection checks if all tiles are in their correct positions
- The timer updates every 100ms for smooth display
- Move counting only increments for valid moves

## Technical Details

- **Browser Compatibility**: Works in all modern browsers
- **No External Dependencies**: Pure HTML, CSS, and JavaScript
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Clear visual feedback and intuitive controls

## Game Controls

- **Click on tiles**: Move tiles adjacent to the empty space
- **New Game button**: Start a new randomly scrambled puzzle
- **Simple Game button**: Start a puzzle solvable in one move

Enjoy playing the 4x4 Sliding Puzzle Game! 