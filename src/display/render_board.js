renderBoard(board){
    let display = null
    board.forEach((row, i) => {

        row.forEach((value, j) => {
            createCell(value, i, j)
        })
    })
}


function createCell(value, row, col){
    cell = c("span", value, cell);
    cell.addEventListener("click", e => {
        updateBoard(row, col)
    })
}