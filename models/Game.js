class Game {

    board;
    rotatedBoard;
    emptyBoard = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
    ]

    getEmptyBoard() {
        return this.emptyBoard
    }
    createDeepCopy(array) {
        console.log("entering createDeepCopy with ", array)
        const returnVal = JSON.parse(JSON.stringify(array))

        console.log("leaving createDeepCopy with ", returnVal)
        return returnVal;
    }

    setTwistData90Degrees(array) {
        console.log("entering setTwistData90Degrees with ", array)
        let data = this.createDeepCopy(array);

        let reMap = data[0].map((val, index) => data.map(row => row[index]).reverse())

        console.log("setting this.setTwistData90Degrees with ", reMap)
        this.rotatedBoard = reMap;
    }

    getFlippedBoard() {
        return this.rotatedBoard;
    }

    horizontalWinner = (array) => {
        console.log("entering horizontalWinner with ", array)
        let winner = "";
        const data = JSON.parse(JSON.stringify(array))

        array.forEach((element, index) => {
            let player1win = "";
            let player2win = "";
            element.forEach((piece) => {
                if (piece == "Yellow") {
                    player1win += piece.toString()
                }
                if (piece == "Red") {
                    player2win += piece.toString()
                }
            })
            if (player1win.includes("YellowYellowYellowYellow")) {
                winner = "yellow wins";
            }

            if (player2win.includes("RedRedRedRed")) {
                winner = "red wins";
            }

        });
        console.log("leaving horizontalWinner with ", winner)
        return winner;

    }

    checkDiagonal(copyMe, matchCount) {
        var result = [];
        const array = this.createDeepCopy(copyMe)
        if (array.length >= matchCount) {
            // Search towards bottom-right.
            result = result.concat(this.getDiagonalResult(array, matchCount, 1));

            // Search towards top-right.
            result = result.concat(this.getDiagonalResult(array, matchCount, -1));
        } else {
            // No use searching if not enough rows are present.
        }

        console.log("leaving CheckDiagonal Result ", result)
        return result;
    }

    getDiagonalResult(copyMe, matchCount, direction) {
        var result = [];
        const array = this.createDeepCopy(copyMe)
        // Specific from and to points to only search in possible rows (e.g. no use searching top-right on first row).
        var yFrom, yTo;

        // Search direction (bottom-right vs top-right).
        switch (direction) {
            // Bottom-right.
            case 1:
                yFrom = 0;
                yTo = (array.length - matchCount);
                break;

            // Top-right.
            case -1:
                yFrom = (matchCount - 1);
                yTo = (array.length - 1);
                break;
        }

        // Loop through all 'rows'.
        for (var y = yFrom; y <= yTo; y++) {

            // Loop through all 'columns'.
            for (var x = 0; x <= (array[y].length - matchCount); x++) {

                // Current value to match on.
                var originalValue = array[y][x];
                var matches = [];

                // Get matches.
                for (var i = 0; i < matchCount; i++) {
                    // Search direction (row up or down).
                    var yDirection = (i * direction);

                    var value = array[y + yDirection][x + i];

                    if (value === originalValue) {
                        matches.push(value);
                    }
                }

                if (matches.length == matchCount) {
                    result.push(matches.join(""));
                }
            }

        }
        const winner = this.checkArrayForWinner(result)
        console.log("result from diagonal rsult", result)

        return winner;
    }

    checkArrayForWinner = result => {
        let winner = ""
        for (let i = 0; i < result.length; i++) {
            if (result[i] === "RedRedRedRed") {
                winner = "Red"
            }
            if (result[i] === "YellowYellowYellowYellow") {
                winner = "Yellow"
            }
        }
        console.log("output from checkArrayForWinner ", winner)
        return winner;
    }
}


module.exports = Game