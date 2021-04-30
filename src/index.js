board = buildBoard(10)
console.log(board)
renderBoard(board)

function handleBoardClick(row, col){
    board[row][col] = 1
}

