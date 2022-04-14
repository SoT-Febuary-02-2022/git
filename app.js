const serverless = require("serverless-http");
const express = require('express')
const util = require('util')
const Game = require('./models/Game.js')
const app = express()
// var cors = require('cors')
app.use(express.json())
// app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.post('/game/winner/check-horizontal', (req, res) => {

    const game = new Game();

    if (!req.body) {
        res.status(400).send("400 - bad request");
        return;
    }

    game.setTwistData90Degrees(req.body.gameBoard)

    const FlippedArray = game.getFlippedBoard();
    const winner = game.horizontalWinner(FlippedArray)
    const response = {
        "message": "ok",
        "result": winner,
        "newArray": FlippedArray
    }
    res.status(200).send(response)
})

app.get('/game/new-board', (req, res) => {
    console.log("hello hit")
    const game = new Game();

    res.status(200).send([{ "type": "gameBoard" }, game.getEmptyBoard()])

})

app.post('/game/winner/check-winner', (req, res) => {
    const connect4 = new Game();
    let winner = null;
    console.log("check winner")
    console.log("body", req.body)
    if (!req.body) {
        res.status(400).send("400 - bad request");
        return;
    }
    const copyBoard = JSON.parse(JSON.stringify(req.body))
    winner = (connect4.checkDiagonal(copyBoard, 4)[0] != "") ? connect4.checkDiagonal(copyBoard, 4)[0] : connect4.checkDiagonal(copyBoard, 4)[1];
    console.log("Winner is ", winner)
    if (winner.length < 1 || !winner || winner == "") {
        winner = connect4.horizontalWinner(copyBoard)
    }
    if (winner.length < 1 || !winner || winner == "") {
        connect4.setTwistData90Degrees(copyBoard)
        const flippedBoard = connect4.getFlippedBoard();
        winner = connect4.horizontalWinner(flippedBoard)
    }

    //const FlippedArray = connect4.getFlippedBoard();
    //winner = connect4.horizontalWinner(FlippedArray)
    const response = {
        "message": "ok",
        "result": winner,
        "newArray": copyBoard
    }
    res.status(200).send(response)

})

app.listen(3000)
module.exports.handler = serverless(app);