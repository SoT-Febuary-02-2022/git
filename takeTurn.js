function takeTurn(row, column) {
    console.log("takeTurn was called with row: " + row + ", column:" + column);
    if (!isTheGameOver && !board[row][column]) {
        board[row][column] = whosGoIsIt;

        if (whosGoIsIt == "nought") {
            whosGoIsIt = player2
        } else if (whosGoIsIt == "cross") {
            whosGoIsIt = player1
        }
        checkWinner();
        turnCount++;
    } else {
        console.log("stop being naughty")
    }
    console.log("turn count" + turnCount)
    console.log(JSON.stringify(board))
    console.log("WhosGoIsIt " + whosGoIsIt)

}
