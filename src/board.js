// ==========================
// ==== Global Variables ====
const boardSize = 15;
const board = buildBoard(boardSize);
let turn = 1;
// ==== Global Variables ====
// ==========================

function buildBoard(boardSize) {
	const board = [];

	for (let i = 0; i != boardSize; i++) {
		board.push([]);
		for (let j = 0; j != boardSize; j++) {
			board[i].push(0);
		}
	}

	return board;
}

function updateTurn() {
	if (turn == 1) {
		turn = 2;
	} else if (turn == 2) {
		turn = 1;
	} else {
		throw "Invalid turn value";
	}
}

function updateBoard(row, col) {
	const currentValue = board[row][col];

	if (currentValue === 0) {
		board[row][col] = turn;
	} else {
		alert("invalid move");
		return;
	}

	updateTurn();
}

function isConnectFour() {
	for (const [i, row] of board.entries()) {
		for (const [j, cell] of row.entries()) {
			const won = checkConnectFour(i, j);
			if (won) {
				return true;
			}
		}
	}
	return false;
}

const winningTransformations = [
	[
		[1, 0],
		[2, 0],
		[3, 0],
	],
	[
		[1, 1],
		[2, 2],
		[3, 3],
	],
	[
		[0, 1],
		[0, 2],
		[0, 3],
	],
];

function checkConnectFour(row, col) {
	for (const line of winningTransformations) {
		const positions = [
			board[row][col],
			...line.map((transform) => board[row + transform[0]][col + transform[1]]),
		];
		if (positions.every(pos => pos === 1)){
			return true
		} else if (positions.every(pos => pos === 2)) {
			return true
		}
	}
	
	return false
}
