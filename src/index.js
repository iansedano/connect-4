refreshBoard();

function handleBoardClick(row, col) {
	updateBoard(row, col);
	refreshBoard();

	const winner = isConnectFour(row, col);
	if (winner === 1) {
		alert("player 1 wins");
	} else if (winner === 2) {
		alert("player 2 wins");
	}
}
