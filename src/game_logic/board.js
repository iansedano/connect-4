function buildBoard(boardSize) {
    board = []

    for(let i=0; i!=boardSize; i++){
        board.push([])
        for (let j=0; j!=boardSize;j++){
            board[i].push(0)
        }
    }

    return board
}