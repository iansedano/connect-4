
const board = buildBoard(4)
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