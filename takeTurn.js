function takeTurn(row, column) {
    if (!isTheGameOver && !board[row][column]) {
        board[row][column] = whosGoIsIt;

        if (whosGoIsIt == "nought") {
            whosGoIsIt = player2
        } else if (whosGoIsIt == "cross") {
            whosGoIsIt = player1
        }
        checkWinner();
        turnCount++;
    }
}
