const NOUGHT = "o";
const CROSS = "x"

function takeTurnNOW(row, column) {
    if (!isITMyGoNow && !board[row][column]) {
        board[row][column] = isITMyGoNow;

        if (isITMyGoNow == NOUGHT) {
            isITMyGoNow = player2
        } else if (isITMyGoNow == CROSS) {
            isITMyGoNow = player1
        }
        didIWin();
        turnCount = turnCount + 1;
    }
}
