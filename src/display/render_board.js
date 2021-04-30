function renderBoard(board){
    let display = null
    board.forEach((row, i) => {
        row.forEach((value, j) => {
            const cell = createCell(value, i, j)
            root.appendChild(cell)
        })
    })
}


function createCell(value, row, col){
    const cell = c("span", value, "cell");
    if (value == 0) {
        cell.addEventListener("click", e => {
            handleBoardClick(row, col)
        })
    }
    return cell
}