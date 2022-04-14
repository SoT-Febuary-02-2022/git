//const playerModule = require("./models/player.mjs");
const boardModule = require("./models/Game.js");

describe('The board class which handles game rules', () => {

    it("Should return a blank playing board", () => {
        //given
        const emptyBoard = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]

        //when
        const testBoard = new boardModule();
        const getBoard = testBoard.getEmptyBoard();
        //then
        expect(getBoard).toEqual(emptyBoard);
    });

    it("Should detect a red winner from horizontal result output", () => {
        //given
        const result = ['', '', '', '', 'RedRedRedRed']
        const winner = "Red"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.checkArrayForWinner(result);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should detect a yellow winner from horizontal result output", () => {
        //given
        const result = ['', '', '', '', 'YellowYellowYellowYellow']
        const winner = "Yellow"

        //when
        const testBoard = new boardModule();
        const findWinner = testBoard.checkArrayForWinner(result);
        //then
        expect(findWinner).toEqual(winner);
    });
});

describe('Yellow Horizontal winning conditions', () => {
    it("Should find a horizontal Yellow winner on first row left side", () => {
        //given
        const yellowWin = [
            ["Yellow", "Yellow", "Yellow", "Yellow", null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Yellow winner on first row right side", () => {
        //given
        const yellowWin = [
            [null, null, null, "Yellow", "Yellow", "Yellow", "Yellow"],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Yellow winner on 2nd row left side", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            ["Yellow", "Yellow", "Yellow", "Yellow", null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Yellow winner on 2nd row right side", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, "Yellow", "Yellow", "Yellow", "Yellow"],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Yellow winner on 3rd row left side", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            ["Yellow", "Yellow", "Yellow", "Yellow", null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Yellow winner on 3rd row right side", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, "Yellow", "Yellow", "Yellow", "Yellow"],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Yellow winner on 4th row left side", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            ["Yellow", "Yellow", "Yellow", "Yellow", null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Yellow winner on 4th row right side", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, "Yellow", "Yellow", "Yellow", "Yellow"],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Yellow winner on 5th row left side", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            ["Yellow", "Yellow", "Yellow", "Yellow", null, null, null],

            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Yellow winner on 5th row right side", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, "Yellow", "Yellow", "Yellow", "Yellow"],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Yellow winner on 6th row left side", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            ["Yellow", "Yellow", "Yellow", "Yellow", null, null, null],
        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Yellow winner on 6th row right side", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, "Yellow", "Yellow", "Yellow", "Yellow"],

        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

});

describe('Red Horizontal winning conditions', () => {
    it("Should find a horizontal Red winner on first row left side", () => {
        //given
        const RedWin = [
            ["Red", "Red", "Red", "Red", null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Red winner on first row right side", () => {
        //given
        const RedWin = [
            [null, null, null, "Red", "Red", "Red", "Red"],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Red winner on 2nd row left side", () => {
        //given
        const RedWin = [
            [null, null, null, null, null, null, null],
            ["Red", "Red", "Red", "Red", null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Red winner on 2nd row right side", () => {
        //given
        const RedWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, "Red", "Red", "Red", "Red"],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Red winner on 3rd row left side", () => {
        //given
        const RedWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            ["Red", "Red", "Red", "Red", null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Red winner on 3rd row right side", () => {
        //given
        const RedWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, "Red", "Red", "Red", "Red"],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Red winner on 4th row left side", () => {
        //given
        const RedWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            ["Red", "Red", "Red", "Red", null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Red winner on 4th row right side", () => {
        //given
        const RedWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, "Red", "Red", "Red", "Red"],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Red winner on 5th row left side", () => {
        //given
        const RedWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            ["Red", "Red", "Red", "Red", null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Red winner on 5th row right side", () => {
        //given
        const RedWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, "Red", "Red", "Red", "Red"],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Red winner on 6th row left side", () => {
        //given
        const RedWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            ["Red", "Red", "Red", "Red", null, null, null],
        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Red winner on 6th row right side", () => {
        //given
        const RedWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, "Red", "Red", "Red", "Red"],

        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

});


describe('Yellow Vertical winning conditions', () => {
    it("Should find a vertical Yellow winner on column 1", () => {
        //given
        const yellowWin = [
            ["Yellow", null, null, null, null, null, null],
            ["Yellow", null, null, null, null, null, null],
            ["Yellow", null, null, null, null, null, null],
            ["Yellow", null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"
        const testBoard = new boardModule();

        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a vertical Yellow winner on column 2", () => {
        //given
        const yellowWin = [
            [null, "Yellow", null, null, null, null, null],
            [null, "Yellow", null, null, null, null, null],
            [null, "Yellow", null, null, null, null, null],
            [null, "Yellow", null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"
        const testBoard = new boardModule();
        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a vertical Yellow winner on column 3", () => {
        //given
        const yellowWin = [
            [null, null, "Yellow", null, null, null, null],
            [null, null, "Yellow", null, null, null, null],
            [null, null, "Yellow", null, null, null, null],
            [null, null, "Yellow", null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"
        const testBoard = new boardModule();

        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a vertical Yellow winner on column 4", () => {
        //given
        const yellowWin = [
            [null, null, null, "Yellow", null, null, null],
            [null, null, null, "Yellow", null, null, null],
            [null, null, null, "Yellow", null, null, null],
            [null, null, null, "Yellow", null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"
        const testBoard = new boardModule();

        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a vertical Yellow winner on column 5", () => {
        //given
        const yellowWin = [
            [null, null, null, null, "Yellow", null, null],
            [null, null, null, null, "Yellow", null, null],
            [null, null, null, null, "Yellow", null, null],
            [null, null, null, null, "Yellow", null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"
        const testBoard = new boardModule();

        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a vertical Yellow winner on column 6", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, "Yellow", null],
            [null, null, null, null, null, "Yellow", null],
            [null, null, null, null, null, "Yellow", null],
            [null, null, null, null, null, "Yellow", null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"
        const testBoard = new boardModule();

        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a vertical Yellow winner on column 7", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, "Yellow"],
            [null, null, null, null, null, null, "Yellow"],
            [null, null, null, null, null, null, "Yellow"],
            [null, null, null, null, null, null, "Yellow"],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"
        const testBoard = new boardModule();

        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a vertical Yellow winner on column 2 middle", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, "Yellow", null, null, null, null, null],
            [null, "Yellow", null, null, null, null, null],
            [null, "Yellow", null, null, null, null, null],
            [null, "Yellow", null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"
        const testBoard = new boardModule();

        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a vertical Yellow winner on column 3 middle", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, "Yellow", null, null, null, null],
            [null, null, "Yellow", null, null, null, null],
            [null, null, "Yellow", null, null, null, null],
            [null, null, "Yellow", null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"
        const testBoard = new boardModule();

        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a vertical Yellow winner on column 4 middle", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, "Yellow", null, null, null],
            [null, null, null, "Yellow", null, null, null],
            [null, null, null, "Yellow", null, null, null],
            [null, null, null, "Yellow", null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"
        const testBoard = new boardModule();

        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a vertical Yellow winner on column 5 middle", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, "Yellow", null],
            [null, null, null, null, null, "Yellow", null],
            [null, null, null, null, null, "Yellow", null],
            [null, null, null, null, null, "Yellow", null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"
        const testBoard = new boardModule();

        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a vertical Yellow winner on column 6 middle", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, "Yellow"],
            [null, null, null, null, null, null, "Yellow"],
            [null, null, null, null, null, null, "Yellow"],
            [null, null, null, null, null, null, "Yellow"],
            [null, null, null, null, null, null, null],


        ]
        const winner = "yellow wins"
        const testBoard = new boardModule();

        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

});

describe('Yellow Horizontal winning conditions', () => {
    it("Should find a horizontal Yellow winner on first row left side", () => {
        //given
        const yellowWin = [
            ["Yellow", "Yellow", "Yellow", "Yellow", null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Yellow winner on first row right side", () => {
        //given
        const yellowWin = [
            [null, null, null, "Yellow", "Yellow", "Yellow", "Yellow"],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Yellow winner on 2nd row left side", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            ["Yellow", "Yellow", "Yellow", "Yellow", null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Yellow winner on 2nd row right side", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, "Yellow", "Yellow", "Yellow", "Yellow"],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Yellow winner on 3rd row left side", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            ["Yellow", "Yellow", "Yellow", "Yellow", null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Yellow winner on 3rd row right side", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, "Yellow", "Yellow", "Yellow", "Yellow"],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Yellow winner on 4th row left side", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            ["Yellow", "Yellow", "Yellow", "Yellow", null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Yellow winner on 4th row right side", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, "Yellow", "Yellow", "Yellow", "Yellow"],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Yellow winner on 5th row left side", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            ["Yellow", "Yellow", "Yellow", "Yellow", null, null, null],

            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Yellow winner on 5th row right side", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, "Yellow", "Yellow", "Yellow", "Yellow"],
            [null, null, null, null, null, null, null],
        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Yellow winner on 6th row left side", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            ["Yellow", "Yellow", "Yellow", "Yellow", null, null, null],
        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Yellow winner on 6th row right side", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, "Yellow", "Yellow", "Yellow", "Yellow"],

        ]
        const winner = "yellow wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(yellowWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

});

describe('Red Horizontal winning conditions', () => {
    it("Should find a horizontal Red winner on first row left side", () => {
        //given
        const RedWin = [
            ["Red", "Red", "Red", "Red", null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Red winner on first row right side", () => {
        //given
        const RedWin = [
            [null, null, null, "Red", "Red", "Red", "Red"],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Red winner on 2nd row left side", () => {
        //given
        const RedWin = [
            [null, null, null, null, null, null, null],
            ["Red", "Red", "Red", "Red", null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Red winner on 2nd row right side", () => {
        //given
        const RedWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, "Red", "Red", "Red", "Red"],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Red winner on 3rd row left side", () => {
        //given
        const RedWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            ["Red", "Red", "Red", "Red", null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Red winner on 3rd row right side", () => {
        //given
        const RedWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, "Red", "Red", "Red", "Red"],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Red winner on 4th row left side", () => {
        //given
        const RedWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            ["Red", "Red", "Red", "Red", null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Red winner on 4th row right side", () => {
        //given
        const RedWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, "Red", "Red", "Red", "Red"],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Red winner on 5th row left side", () => {
        //given
        const RedWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            ["Red", "Red", "Red", "Red", null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Red winner on 5th row right side", () => {
        //given
        const RedWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, "Red", "Red", "Red", "Red"],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Red winner on 6th row left side", () => {
        //given
        const RedWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            ["Red", "Red", "Red", "Red", null, null, null],
        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a horizontal Red winner on 6th row right side", () => {
        //given
        const RedWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, "Red", "Red", "Red", "Red"],

        ]
        const winner = "red wins"

        //when
        const testBoard = new boardModule();
        const findRedWinner = testBoard.horizontalWinner(RedWin);
        //then
        expect(findRedWinner).toEqual(winner);
    });

});


describe('Red Vertical winning conditions', () => {
    it("Should find a vertical Red winner on column 1", () => {
        //given
        const yellowWin = [
            ["Red", null, null, null, null, null, null],
            ["Red", null, null, null, null, null, null],
            ["Red", null, null, null, null, null, null],
            ["Red", null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"
        const testBoard = new boardModule();

        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a vertical Red winner on column 2", () => {
        //given
        const yellowWin = [
            [null, "Red", null, null, null, null, null],
            [null, "Red", null, null, null, null, null],
            [null, "Red", null, null, null, null, null],
            [null, "Red", null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"
        const testBoard = new boardModule();
        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a vertical Red winner on column 3", () => {
        //given
        const yellowWin = [
            [null, null, "Red", null, null, null, null],
            [null, null, "Red", null, null, null, null],
            [null, null, "Red", null, null, null, null],
            [null, null, "Red", null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"
        const testBoard = new boardModule();

        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a vertical Red winner on column 4", () => {
        //given
        const yellowWin = [
            [null, null, null, "Red", null, null, null],
            [null, null, null, "Red", null, null, null],
            [null, null, null, "Red", null, null, null],
            [null, null, null, "Red", null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"
        const testBoard = new boardModule();

        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a vertical Red winner on column 5", () => {
        //given
        const yellowWin = [
            [null, null, null, null, "Red", null, null],
            [null, null, null, null, "Red", null, null],
            [null, null, null, null, "Red", null, null],
            [null, null, null, null, "Red", null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"
        const testBoard = new boardModule();

        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a vertical Red winner on column 6", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, "Red", null],
            [null, null, null, null, null, "Red", null],
            [null, null, null, null, null, "Red", null],
            [null, null, null, null, null, "Red", null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"
        const testBoard = new boardModule();

        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a vertical Red winner on column 7", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, "Red"],
            [null, null, null, null, null, null, "Red"],
            [null, null, null, null, null, null, "Red"],
            [null, null, null, null, null, null, "Red"],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"
        const testBoard = new boardModule();

        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a vertical Red winner on column 2 middle", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, "Red", null, null, null, null, null],
            [null, "Red", null, null, null, null, null],
            [null, "Red", null, null, null, null, null],
            [null, "Red", null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"
        const testBoard = new boardModule();

        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a vertical Red winner on column 3 middle", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, "Red", null, null, null, null],
            [null, null, "Red", null, null, null, null],
            [null, null, "Red", null, null, null, null],
            [null, null, "Red", null, null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"
        const testBoard = new boardModule();

        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a vertical Red winner on column 4 middle", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, "Red", null, null, null],
            [null, null, null, "Red", null, null, null],
            [null, null, null, "Red", null, null, null],
            [null, null, null, "Red", null, null, null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"
        const testBoard = new boardModule();

        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a vertical Red winner on column 5 middle", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, "Red", null],
            [null, null, null, null, null, "Red", null],
            [null, null, null, null, null, "Red", null],
            [null, null, null, null, null, "Red", null],
            [null, null, null, null, null, null, null],
        ]
        const winner = "red wins"
        const testBoard = new boardModule();

        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

    it("Should find a vertical Red winner on column 6 middle", () => {
        //given
        const yellowWin = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, "Red"],
            [null, null, null, null, null, null, "Red"],
            [null, null, null, null, null, null, "Red"],
            [null, null, null, null, null, null, "Red"],
            [null, null, null, null, null, null, null],


        ]
        const winner = "red wins"
        const testBoard = new boardModule();

        //when
        testBoard.setTwistData90Degrees(yellowWin)
        const findRedWinner = testBoard.horizontalWinner(testBoard.getFlippedBoard());
        //then
        expect(findRedWinner).toEqual(winner);
    });

});

describe('Board rotation occurs to be able to check for a ', () => {
    it("Should rotate a board by 90 degrees with reds in middle of column 7", () => {
        //Given
        const board = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, "Red"],
            [null, null, null, null, null, null, "Red"],
            [null, null, null, null, null, null, "Red"],
            [null, null, null, null, null, null, "Red"],
            [null, null, null, null, null, null, null],


        ]

        const rotated = [
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, 'Red', 'Red', 'Red', 'Red', null]
        ]
        const winner = "red wins"
        const testBoard = new boardModule();

        //When
        testBoard.setTwistData90Degrees(board)

        // Then
        expect(testBoard.getFlippedBoard()).toEqual(rotated)
    })
})

describe('Board rotation occurs to be able to check for a ', () => {
    it("Should rotate a board by 90 degrees with reds in middle of column 7", () => {
        //Given
        const board = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, "Red", null],
            [null, null, null, null, null, "Red", null],
            [null, null, null, null, null, "Red", null],
            [null, null, null, null, null, "Red", null],
            [null, null, null, null, null, null, null],


        ]

        const rotated = [
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, 'Red', 'Red', 'Red', 'Red', null],
            [null, null, null, null, null, null]
        ]
        const winner = "red wins"
        const testBoard = new boardModule();

        //When
        testBoard.setTwistData90Degrees(board)

        // Then
        expect(testBoard.getFlippedBoard()).toEqual(rotated)
    })
})

describe('Game Rules Check a horizontal winner ', () => {
    it("should detect a diagonal winner, down right", () => {
        //Given
        const board = [
            ["Red", null, null, null, null, null, null],
            [null, "Red", null, null, null, null, null],
            [null, null, "Red", null, null, null, null],
            [null, null, null, "Red", null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],


        ]
        const testWin = ["Red", ""]
        const testBoard = new boardModule();

        //When
        const winner = testBoard.checkDiagonal(board, 4)

        // Then
        expect(winner).toEqual(testWin)
    })

    it("should detect a diagonal winner, down right + 3", () => {
        //Given
        const board = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            ["Red", null, null, null, null, null, null],
            [null, "Red", null, null, null, null, null],
            [null, null, "Red", null, null, null, null],
            [null, null, null, "Red", null, null, null],


        ]
        const testWin = ["Red", ""]
        const testBoard = new boardModule();

        //When
        const winner = testBoard.checkDiagonal(board, 4)

        // Then
        expect(winner).toEqual(testWin)
    })

    it("should detect a diagonal winner down left", () => {
        //Given
        const board = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, "Red"],
            [null, null, null, null, null, "Red", null],
            [null, null, null, null, "Red", null, null],
            [null, null, null, "Red", null, null, null],


        ]
        const testWin = ["", "Red"]
        const testBoard = new boardModule();

        //When
        const winner = testBoard.checkDiagonal(board, 4)

        // Then
        expect(winner).toEqual(testWin)
    })
})

describe('Game Rules no win detected', () => {
    it("Should not detect a winner", () => {
    })
})