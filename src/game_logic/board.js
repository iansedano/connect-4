// ==========================
// ==== Global Variables ====
const boardSize = 15
const board = buildBoard(boardSize)
let turn = 1
// ==== Global Variables ====
// ==========================

/**
 * Create a 2D array filled with 0s representing an empty board
 * @param {number} boardSize 
 * @returns {number[][]} representing the board
 */
function buildBoard(boardSize) {
    const board = []

    for(let i=0; i!=boardSize; i++){
        board.push([])
        for (let j=0; j!=boardSize;j++){
            board[i].push(0)
        }
    }

    return board
}

/**
 * Places a stone at given coordinates
 * @param {number} row 
 * @param {number} col 
 */
function updateBoard(row, col) {
    const currentValue = board[row][col]

    if (currentValue === 0) {
        board[row][col] = turn
    } else throw "invalid move"
    
    updateTurn()
}

/**
 * Takes the global turn value and flip flops it between 1 or 2
 */
function updateTurn() {
    if (turn == 1) {
        turn = 2
    } else if (turn == 2) {
        turn = 1
    } else {
        throw "Invalid turn value"
    }
}

/**
 * Check if a given position is part of a chain of 4 of the same player
 * @param {number} row 
 * @param {number} col 
 * @returns 
 */
function isConnectFour(row, col){
    // setting up cardinal directions
    const N  = [-1, 0]
    const NE = [-1, 1]
    const E  = [ 0, 1]
    const SE = [ 1, 1]
    const S  = [ 1, 0]
    const SW = [ 1,-1]
    const W  = [ 0,-1]
    const NW = [ 1,-1]

    const axes = [[N,S], [NE, SW], [E,W], [SE, NW]]

    output = 0
    axes.forEach(axis => {
        const directionOne = howFarExtends(axis[0], [row,col])
        const directionTwo = howFarExtends(axis[1], [row,col])
        if (directionOne + directionTwo + 1 > 3) {
            console.log("winner!!")
            output = board[row][col]
        }
    })
    return output
}

/**
 * Takes a direction vector and a position and recursively determines how many
 * same pieces in that direction there are.
 * @param {number[]} direction 
 * @param {number[]} position 
 * @param {number} count 
 * @returns {number} the number of pieces of same type in that direction
 */
function howFarExtends(direction, position, count = 0) {
    const currentValue = board[position[0]][position[1]]
    const newPosition = step(direction, position)

    // Check if the 
    const isOutOfRange = newPosition[0] >= boardSize ||
                         newPosition[1] >= boardSize ||
                         newPosition[0] <  0 ||
                         newPosition[1] <  0

    if (isOutOfRange){
        return count
    }
    const newValue = board[newPosition[0]][newPosition[1]]
    if (newValue === currentValue) {
        return howFarExtends(direction, newPosition, count + 1)
    } else return count
}

/**
 * 
 * @param {number[]} direction 
 * @param {number[]} position 
 * @returns {number[]}
 */
function step(direction, position) {
    return [position[0] + direction[0], position[1] + direction[1]] 
}