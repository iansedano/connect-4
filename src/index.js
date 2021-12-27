refreshBoard();

function handleBoardClick(row, col) {
	updateBoard(row, col);
	refreshBoard();
	const win = isConnectFour();
	if (win) {
		if (turn == 1) {
			setTimeout(() => alert("player 2 wins"), 50);
		} else {
			setTimeout(() => alert("player 1 wins"), 50);
		}
	}
}
