function buildBoardElement(board){
    let boardElement = c("table", null,"board")
    board.forEach((row, i) => {
        const rowElement = c("tr", null,"board-row")
        row.forEach((value, j) => {
            const cell = createCell(value, i, j)
            rowElement.appendChild(cell)
        })
        boardElement.appendChild(rowElement)
    })
    boardElement.addEventListener("click", handleBoardClick)
    return boardElement
}


function createCell(value, row, col){
    const cell = c("td", null, "cell");
    if (value !== 0){
        const img = c("img", null, "piece")
        if (value === 1) {
            img.src = "../../imgs/black.jpg"
        } else if (value === 2) {
            img.src = "../../imgs/red.jpg"
        }
        img.height = 40
        img.width = 40
        cell.appendChild(img)
    }       
    cell.setAttribute("row", row)
	cell.setAttribute("col", col)
    return cell
}


function handleBoardClick(e){
    if (!e.target.classList.contains("cell")) return null
    updateBoard(e.target.getAttribute('row'), e.target.getAttribute('col'))
}