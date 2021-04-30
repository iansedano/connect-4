board = buildBoard(4)
console.log(board)
boardElement = buildBoardElement(board)
root.appendChild(boardElement)

function handleBoardClick(row, col){
    console.log(row, col)
    board[row][col] = 1
    boardElement = buildBoardElement(board)
    root.innerHTML = ""
    root.appendChild(boardElement)
}

