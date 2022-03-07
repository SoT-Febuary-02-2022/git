const NOUGHT = "o";
const CROSS = "x"

function takeTurn(row, column) {
    if (!isTheGameOver && !board[row][column]) {
        board[row][column] = whosGoIsIt;

        if (whosGoIsIt == NOUGHT) {
            whosGoIsIt = player2
        } else if (whosGoIsIt == CROSS) {
            whosGoIsIt = player1
        }
        checkWinner();
        turnCount++;
    }
}
