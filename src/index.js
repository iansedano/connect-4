
console.log(board)

boardElement = buildBoardElement(board)
root.appendChild(boardElement)

function handleBoardClick(row, col){
    try {
        updateBoard(row, col)
        boardElement = buildBoardElement(board)
        root.innerHTML = ""
        root.appendChild(boardElement)
    } catch (e) {
        console.error(e)
    }
    
}

