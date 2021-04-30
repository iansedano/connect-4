function buildBoardElement(board){
    let boardElement = c("div", null,"board")
    board.forEach((row, i) => {
        const rowElement = c("div", null,"board-row")
        row.forEach((value, j) => {
            const cell = createCell(value, i, j)
            rowElement.appendChild(cell)
        })
        boardElement.appendChild(rowElement)
    })
    return boardElement
}


function createCell(value, row, col){
    // Top left cell may be hidden by live reload DOM
    const cell = c("span", value, "cell");
    if (value == 0) {
        cell.addEventListener("click", e => {
            handleBoardClick(row, col)
        })
    }
    return cell
}