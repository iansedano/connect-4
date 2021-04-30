board = buildBoard(4)
console.log(board)
boardElement = buildBoardElement(board)
root.appendChild(boardElement)

function handleBoardClick(row, col){
    board[row][col] = 1
}

