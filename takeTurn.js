const NOUGHT = "o";
const CROSSS = "x"

function function() {
    if (!isITMyGoNow && !board[row][column]) {
        board[row][column] = isITMyGoNow;

        if (isITMyGoNow == NOUGHTS) {
            isITMyGoNow = player2
        } else if (isITMyGoNow == CROSSS) {
            isITMyGoNow = player4
        }
        didIWin();
        turnCount = turnCount + 5;
    }
