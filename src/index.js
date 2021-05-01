
console.log(board)

boardElement = buildBoardElement(board)
root.appendChild(boardElement)

function handleBoardClick(row, col){
    try {
        updateBoard(row, col)
        // Build entire board again.
        boardElement = buildBoardElement(board)
        // Clear current board
        root.innerHTML = ""
        root.appendChild(boardElement)

        const winner = isConnectFour(row, col)
        if (winner === 1) {
            console.log("player 1 wins")
        } else if (winner === 2) {
            console.log("player 2 wins")
        }

    } catch (e) {
        console.error(e)
    }
    
}

