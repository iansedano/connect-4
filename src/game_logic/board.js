const boardSize = 4
const board = buildBoard(boardSize)
let turn = 1

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

function updateBoard(row, col) {
    const currentValue = board[row][col]

    if (currentValue === 0) {
        board[row][col] = turn
    } else throw "invalid move"
    
    updateTurn()
}

function updateTurn() {
    if (turn == 1) {
        turn = 2
    } else if (turn == 2) {
        turn = 1
    } else {
        throw "Invalid turn value"
    }
}

function isConnectFour(row, col){
    // setting up cardinal directions
    console.log("\n\nis connect 4?", row, col)
    const N = [-1,0]
    const NE = [-1,1]
    const E = [0,1]
    const SE = [1,1]
    const S = [1,0]
    const SW = [1,-1]
    const W = [0,-1]
    const NW = [1,-1]

    const axes = [[N,S], [NE, SW], [E,W], [SE, NW]]

    output = 0
    axes.forEach(axis => {
        console.log(axis)
        const directionOne = howFarExtends(axis[0], [row,col])
        const directionTwo = howFarExtends(axis[1], [row,col])
        if (directionOne + directionTwo + 1 > 3) {
            console.log("winner!!")
            output = board[row][col]
        }

    })
    console.log("output", output)
    return output
}

function howFarExtends(direction, position, count = 0) {
    const currentValue = board[position[0]][position[1]]
    const newPosition = step(direction, position)
    const isOutOfRange = newPosition[0] >= boardSize ||
                        newPosition[1] >= boardSize ||
                        newPosition[0] < 0 ||
                        newPosition[1] < 0
    if (isOutOfRange){
        return count
    }
    const newValue = board[newPosition[0]][newPosition[1]]
    if (newValue === currentValue) {
        return howFarExtends(direction, newPosition, count + 1)
    } else return count
}

function step(direction, position) {
    return [position[0] + direction[0], position[1] + direction[1]] 
}