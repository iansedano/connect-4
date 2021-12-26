refreshBoard();

function handleBoardClick(row, col) {
	updateBoard(row, col);
	refreshBoard();

	const win = isConnectFour();
	if (win) {
		if (turn == 1) {
			alert("player 2 wins");
		} else {
			alert("player 1 wins")
		}
	}
}
